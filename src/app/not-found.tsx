import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-light text-gray-300 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Page not found
      </h2>
      <p className="text-gray-500 mb-6">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
