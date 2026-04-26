type GoogleReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  originalText?: {
    text?: string;
    languageCode?: string;
  };
  text?: {
    text?: string;
    languageCode?: string;
  };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

export type GoogleReviewsResponse = {
  name: string;
  rating: number;
  userRatingCount: number;
  googleMapsUri: string;
  reviews: GoogleReview[];
};

export async function fetchGoogleReviews(): Promise<GoogleReviewsResponse | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews,googleMapsUri",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const reviews: GoogleReview[] = Array.isArray(data.reviews)
      ? data.reviews.slice(0, 6)
      : [];

    return {
      name: data.displayName?.text ?? "Worsthorne Dental Clinic",
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      googleMapsUri: data.googleMapsUri ?? "",
      reviews,
    };
  } catch {
    return null;
  }
}