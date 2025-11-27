"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/proavijit",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/proavijit",
        icon: Linkedin,
    },
    {
        name: "Email",
        href: "mailto:avijitghosh2268@gmail.com",
        icon: Mail,
    },
]

const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
]

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg font-bold mb-3 tracking-tight">Avijit Ghosh</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                            Full Stack JavaScript Developer
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Jashore, Khulna, Bangladesh
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-sm font-semibold mb-4">Connect</h4>
                        <motion.div
                            className="flex space-x-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {socialLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label={link.name}
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </motion.a>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 pt-8 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Avijit Ghosh. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
