"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { slideInLeft, slideInRight } from "@/lib/animations"

interface SlideInProps {
    children: ReactNode
    direction?: "left" | "right"
    delay?: number
    className?: string
}

export function SlideIn({
    children,
    direction = "left",
    delay = 0,
    className = "",
}: SlideInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const variants = direction === "left" ? slideInLeft : slideInRight

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
