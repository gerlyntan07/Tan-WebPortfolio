import React from "react";

function Loading() {
  return (
    <div className="absolute inset-0 z-100 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white py-6 px-10 shadow-xl">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-darkgray/20 border-t-[#F4991A]"></div>
        <p className="font-mono text-sm text-darkgray/80">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;