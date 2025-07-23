import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
}

const toastColors: Record<ToastType, string> = {
  success: "bg-green-500 border-green-700 text-white",
  error: "bg-red-500 border-red-700 text-white",
  warning: "bg-yellow-400 border-yellow-700 text-black",
  info: "bg-blue-500 border-blue-700 text-white",
};

export default function Toast({ message, type = "info" }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, [message]);

  if (!message || !visible) return null;

  return (
    <div
      className={`fixed top-6 right-6 z-50 px-4 py-2 rounded-lg shadow-lg border flex items-center gap-2 ${toastColors[type]} transition-all`}
      role="alert"
    >
      <span className="flex-1">{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 p-1 rounded hover:bg-black/10"
        aria-label="Close"
      >
        <X size={18} />
      </button>
    </div> )
};