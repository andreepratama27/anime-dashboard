export default function Shimmer({ length = 3 }: { length?: number }) {
  return (
    <div className="grid grid-cols-3 gap-4 anime-grid">
      {Array(length)
        .fill("")
        .map(() => (
          <div className="grid w-full">
            <div className="w-full h-64 bg-gray-100 animate-pulse fallback-image"></div>
            <div className="w-full h-6 mt-2 bg-gray-100 animate-pulse fallback-image"></div>
          </div>
        ))}
    </div>
  );
}
