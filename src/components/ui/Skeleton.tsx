// Reusable loading skeleton components for cards, sections, and pages.

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-soft">
      <div className="aspect-square animate-pulse bg-neutral-100" />
      <div className="flex flex-1 flex-col p-3">
        <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-100" />
        <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-neutral-100" />
        <div className="mt-3 h-5 w-1/3 animate-pulse rounded bg-neutral-100" />
        <div className="mt-3 h-9 w-full animate-pulse rounded-xl bg-neutral-100" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function CarouselSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="container-page grid gap-8 lg:grid-cols-2">
      <div className="aspect-square animate-pulse rounded-3xl bg-neutral-100" />
      <div className="space-y-4">
        <div className="h-6 w-3/4 animate-pulse rounded bg-neutral-100" />
        <div className="h-4 w-1/4 animate-pulse rounded bg-neutral-100" />
        <div className="h-8 w-1/3 animate-pulse rounded bg-neutral-100" />
        <div className="h-10 w-full animate-pulse rounded-full bg-neutral-100" />
        <div className="h-10 w-full animate-pulse rounded-full bg-neutral-100" />
        <div className="h-20 w-full animate-pulse rounded-xl bg-neutral-100" />
      </div>
    </div>
  );
}
