"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold">Avijit Ghosh</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant={pathname === item.href ? "secondary" : "ghost"}
                                    className={cn(
                                        "text-sm font-medium transition-colors",
                                        pathname === item.href && "bg-secondary"
                                    )}
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </nav>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Button
                                    variant={pathname === item.href ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}
