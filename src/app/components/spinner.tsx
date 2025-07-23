import React from "react";

interface SpinnerProps {
  loading: boolean;
}

export default function Spinner({ loading }: SpinnerProps) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 bg-opacity-40 backdrop-blur-lg z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-400 border-blue-400"></div>
    </div>
  );
}