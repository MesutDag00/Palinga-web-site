import { Container } from "@/components/Container";

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-lg bg-soft-line ${className}`} />;
}

export default function Loading() {
  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-2/3" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-12 w-44" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
        <div className="card p-6">
          <Skeleton className="h-[360px] w-full" />
        </div>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="card p-5">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="mt-3 h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-5/6" />
        </div>
        <div className="card p-5">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="mt-3 h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-5/6" />
        </div>
        <div className="card p-5">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="mt-3 h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-5/6" />
        </div>
      </div>
    </Container>
  );
}


