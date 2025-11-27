import { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Avijit Ghosh for web development projects, freelance opportunities, or collaboration. I respond within 48 hours.",
}

export default function ContactPage() {
    return (
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Looking to build something together? I'm available for freelance
                    projects and full-time opportunities. Send a message — I reply within
                    48 hours.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <ContactForm />
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Mail className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a
                                            href="mailto:avijitghosh2268@gmail.com"
                                            className="text-sm text-muted-foreground hover:text-accent"
                                        >
                                            avijitghosh2268@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <a
                                            href="tel:+8801753400794"
                                            className="text-sm text-muted-foreground hover:text-accent"
                                        >
                                            +880 1753400794
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                                    <div>
                                        <p className="font-medium">Location</p>
                                        <p className="text-sm text-muted-foreground">
                                            Jashore, Khulna
                                            <br />
                                            Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="font-semibold mb-4">Office Hours</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                                <p className="text-xs mt-4">
                                    * Times are in Bangladesh Standard Time (BST, GMT+6)
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="font-semibold mb-4">Response Time</h3>
                            <p className="text-sm text-muted-foreground">
                                I typically respond to all inquiries within 48 hours. For urgent
                                matters, please mention "URGENT" in your subject line.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
