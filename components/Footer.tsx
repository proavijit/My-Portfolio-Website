import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

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
            <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Avijit Ghosh</h3>
                        <p className="text-sm text-muted-foreground">
                            Full Stack JavaScript Developer
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Jashore, Khulna, Bangladesh
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label={link.name}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Avijit Ghosh. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
