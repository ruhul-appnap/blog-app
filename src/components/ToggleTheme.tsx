"use client";

import { useTheme } from "next-themes";

function ToggleTheme() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme("light")} className="bg-white text-black">
        Light
      </button>
      <button onClick={() => setTheme("dark")} className="bg-black text-white">
        Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className="bg-white text-black"
      >
        System
      </button>
    </div>
  );
}

export default ToggleTheme;
