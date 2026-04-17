"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center  text-white px-4">
      <div className="text-center max-w-md">


        <h1 className="text-8xl font-extrabold tracking-widest text-red-500 animate-pulse">
          404
        </h1>


        <h2 className="mt-6 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-green-700 transition-all shadow-lg"
          >
            Go Back Home
          </Link>
        </div>

        <div className="mt-10 w-full h-px bg-linear-to-r from-transparent via-red-500 to-transparent opacity-40" />
      </div>
    </div>
  );
}