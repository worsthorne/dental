import { NextResponse } from "next/server";

export const revalidate = 3600;

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

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID",
      },
      { status: 500 }
    );
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
      const details = await response.text();
      return NextResponse.json(
        { error: "Failed to fetch Google reviews", details },
        { status: response.status }
      );
    }

    const data = await response.json();

    const reviews: GoogleReview[] = Array.isArray(data.reviews)
      ? data.reviews.slice(0, 6)
      : [];

    return NextResponse.json({
      name: data.displayName?.text ?? "Worsthorne Dental Clinic",
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      googleMapsUri: data.googleMapsUri ?? "",
      reviews,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unexpected error fetching Google reviews",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}