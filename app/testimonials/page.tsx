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
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    const res = await fetch(`${baseUrl}/api/google-reviews`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}

function Stars({ rating = 0 }: { rating?: number }) {
  const rounded = Math.round(rating);

  return (
    <div className="flex gap-1 text-yellow-500">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-lg">
          {star <= rounded ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default async function ReviewsPage() {
  const data = await getReviews();

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="border-b border-neutral-200 bg-gradient-to-b from-rose-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
            Reviews
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Trusted by patients who value calm, premium dental care
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Read genuine feedback from patients who have visited Worsthorne Dental
            Clinic. Comfort, communication and quality of care matter, and our
            reviews reflect that.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {data ? (
          <>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                    Google Rating
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    {data.name || "Worsthorne Dental Clinic"}
                  </h2>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <span className="text-5xl font-bold tracking-tight">
                      {Number(data.rating || 0).toFixed(1)}
                    </span>
                    <div>
                      <Stars rating={data.rating} />
                      <p className="mt-1 text-sm text-neutral-600">
                        Based on {data.userRatingCount} Google reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {data.googleMapsUri ? (
                    <>
                      <a
                        href={data.googleMapsUri}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        See all reviews on Google
                      </a>

                      <a
                        href={data.googleMapsUri}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white"
                      >
                        Leave a Google review
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.reviews?.length ? (
                data.reviews.map((review, index) => {
                  const reviewText =
                    review.originalText?.text || review.text?.text || "";

                  return (
                    <article
                      key={index}
                      className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        {review.authorAttribution?.photoUri ? (
                          <img
                            src={review.authorAttribution.photoUri}
                            alt={review.authorAttribution?.displayName || "Reviewer"}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
                            {(review.authorAttribution?.displayName || "G")
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                        )}

                        <div>
                          <p className="font-semibold text-neutral-900">
                            {review.authorAttribution?.displayName || "Google User"}
                          </p>
                          <p className="text-sm text-neutral-500">
                            {review.relativePublishTimeDescription || ""}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Stars rating={review.rating} />
                      </div>

                      <p className="mt-4 text-sm leading-7 text-neutral-700">
                        {reviewText}
                      </p>
                    </article>
                  );
                })
              ) : (
                <div className="rounded-3xl border border-neutral-200 bg-white p-6">
                  <p className="text-neutral-600">No reviews available right now.</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="text-2xl font-semibold">Reviews coming soon</h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              We could not load Google reviews yet. Please try again shortly.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}