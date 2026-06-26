export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">

      <span className="loading loading-spinner loading-lg text-primary"></span>

      <p className="mt-4 text-lg font-medium text-gray-600">
        Loading...
      </p>

    </div>
  );
}