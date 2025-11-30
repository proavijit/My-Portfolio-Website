import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
                secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
                destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
                muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
                accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
                popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
                card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            maxWidth: { content: "1100px" },
            boxShadow: {
                soft: "0 2px 8px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)",
                medium: "0 4px 16px rgba(0,0,0,0.08),0 2px 4px rgba(0,0,0,0.06)",
                large: "0 8px 32px rgba(0,0,0,0.12),0 4px 8px rgba(0,0,0,0.08)",
                glass: "0 8px 32px 0 rgba(0,0,0,0.1)",
            },
            keyframes: {
                "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
                "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
                "fade-down": { "0%": { opacity: "0", transform: "translateY(-20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
                "slide-in-left": { "0%": { opacity: "0", transform: "translateX(-20px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
                "slide-in-right": { "0%": { opacity: "0", transform: "translateX(20px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
                "scale-in": { "0%": { opacity: "0", transform: "scale(0.95)" }, "100%": { opacity: "1", transform: "scale(1)" } },
                float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
                "text-gradient": { "0%,100%": { "background-position": "0% 50%" }, "50%": { "background-position": "100% 50%" } },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "fade-up": "fade-up 0.5s ease-out",
                "fade-down": "fade-down 0.5s ease-out",
                "slide-in-left": "slide-in-left 0.5s ease-out",
                "slide-in-right": "slide-in-right 0.5s ease-out",
                "scale-in": "scale-in 0.3s ease-out",
                float: "float 3s ease-in-out infinite",
                "text-gradient": "text-gradient 5s ease infinite",


            },
            backdropBlur: { xs: "2px" },
        },
    },
    plugins: [],
};

export default config;
