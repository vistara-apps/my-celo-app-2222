export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="card max-w-md mx-auto text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-border w-3/4 mx-auto"></div>
          <div className="h-24 bg-border w-full"></div>
          <div className="flex justify-center gap-4">
            <div className="w-16 h-16 bg-border"></div>
            <div className="w-16 h-16 bg-border"></div>
            <div className="w-16 h-16 bg-border"></div>
          </div>
          <div className="h-4 bg-border w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
