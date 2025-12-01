"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
            className="
        relative
        transition-all duration-300
        hover:scale-120
        hover:bg-accent/60
        dark:hover:bg-accent/20
        rounded-xl
        cursor-pointer
      "
        >
            {/* Moon Icon (shows on light mode) */}
            <Moon
                className={`
          absolute h-5 w-5
          transition-all duration-500
          text-black
          ${currentTheme === "light"
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-90 scale-0"}
        `}
            />

            {/* Sun Icon (shows on dark mode) */}
            <Sun
                className={`
          absolute h-5 w-5
          transition-all duration-500
          text-yellow-500
          ${currentTheme === "dark"
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-0"}
        `}
            />
        </Button>
    );
}
