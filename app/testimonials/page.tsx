export const dynamic = "force-dynamic";

type Review = {
  rating?: number;
  relativePublishTimeDescription?: string;
  originalText?: {
    text?: string;
  };
  text?: {
    text?: string;
  };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type ReviewsResponse = {
  name: string;
  rating: number;
  userRatingCount: number;
  googleMapsUri: string;
  reviews: Review[];
};

async function getReviews(): Promise<ReviewsResponse | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    const res = await fetch(`${baseUrl}/api/google-reviews`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}