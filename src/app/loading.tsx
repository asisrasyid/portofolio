export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-6 w-full max-w-4xl px-6">
        {/* Hero skeleton */}
        <div className="flex flex-col items-center gap-4 py-24">
          <div className="h-4 w-32 rounded-full bg-[#1e293b] animate-pulse" />
          <div className="h-12 w-96 rounded-xl bg-[#1e293b] animate-pulse" />
          <div className="h-6 w-72 rounded-lg bg-[#1e293b] animate-pulse" />
          <div className="flex gap-4 mt-4">
            <div className="h-11 w-32 rounded-xl bg-[#1e293b] animate-pulse" />
            <div className="h-11 w-32 rounded-xl bg-[#1e293b] animate-pulse" />
          </div>
        </div>
        {/* Card skeletons */}
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-52 rounded-2xl bg-[#1e293b] animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
