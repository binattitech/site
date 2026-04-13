"use client";

import { useEffect } from "react";

export default function ThemeProvider() {
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const theme = stored ?? "light";
    document.documentElement.setAttribute("data-theme", theme);

  }, []);

  return null;
}
