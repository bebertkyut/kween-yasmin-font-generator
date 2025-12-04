'use client';

import React from "react";
import BitMap from "../components/BitMap";

export default function Home() {
  const [value, setValue] = React.useState("");
  const [renderText, setRenderText] = React.useState("");

  const handleRender = () => {
    setRenderText(value);
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-start bg-white sm:items-start space-y-2">
      <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row mt-24">
        <input
          className="w-64 sm:w-80 rounded border border-zinc-300 bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-zinc-500"
          placeholder="Enter text to yasminify"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="rounded-full bg-[#FF77B1] hover:bg-[#ff5fa4] px-5 py-2.5 text-[#FFFFFF] hover:text-white font-sans font-bold shadow-md transition-colors"
          onClick={handleRender}
        >
          Yasminify
        </button>
      </div>
      <div className="mt-3 w-full overflow-x-hidden">
        <BitMap text={renderText} size={120} letterGap={4} spaceGap={24} lineGap={24} />
      </div>
    </main>
  );
}