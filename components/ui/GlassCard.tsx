"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass-card rounded-lg p-6",
                hover && "hover-lift cursor-pointer",
                className
            )}
            whileHover={hover ? { y: -4 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
