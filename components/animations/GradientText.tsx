"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientTextProps {
    children: React.ReactNode
    className?: string
    colors?: string[]
    animationSpeed?: number
    showBorder?: boolean
}

export function GradientText({
    children,
    className,
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
}: GradientTextProps) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        backgroundSize: "200% auto",
    }

    return (
        <div className={cn("relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium transition-shadow duration-500 overflow-hidden cursor-pointer", className)}>
            {showBorder && (
                <div
                    className="absolute inset-0 block h-full w-full animate-gradient"
                    style={{
                        ...gradientStyle,
                        backgroundSize: "300% 100%",
                    }}
                />
            )}

            <div className="relative z-10 flex items-center justify-center">
                <motion.span
                    className={cn(
                        "inline-block bg-clip-text text-transparent",
                        !showBorder && "animate-gradient"
                    )}
                    style={{
                        ...gradientStyle,
                    }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: animationSpeed,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {children}
                </motion.span>
            </div>
        </div>
    )
}
