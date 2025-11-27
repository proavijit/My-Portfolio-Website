"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Card } from "./card"

interface FloatingCardProps {
    children: ReactNode
    className?: string
}

export function FloatingCard({ children, className = "" }: FloatingCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <Card className={cn("transition-smooth", className)}>{children}</Card>
        </motion.div>
    )
}
