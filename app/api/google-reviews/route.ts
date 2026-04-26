import { NextResponse } from "next/server";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export const revalidate = 3600;

export async function GET() {
  const data = await fetchGoogleReviews();

  if (!data) {
    return NextResponse.json(
      { error: "Failed to fetch Google reviews" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}