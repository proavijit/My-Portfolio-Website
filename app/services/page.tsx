import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getServices } from "@/lib/data"
import Link from "next/link"
import { Clock, DollarSign } from "lucide-react"

export const metadata: Metadata = {
    title: "Services",
    description:
        "Professional web development services offered by Avijit Ghosh - Full Stack Development, Frontend Development, Backend APIs, and Website Optimization.",
}

export default function ServicesPage() {
    const services = getServices()

    return (
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    I offer professional web development services for businesses and
                    individuals. From full-stack applications to API development and
                    optimization, I deliver high-quality solutions tailored to your needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                            <CardDescription className="text-base">
                                {service.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <div className="flex items-center gap-4 mb-4 text-sm">
                                <div className="flex items-center text-muted-foreground">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>{service.deliveryTime}</span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                    <DollarSign className="h-4 w-4 mr-1" />
                                    <span>{service.priceRange}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="font-semibold mb-2">What's Included:</h4>
                                <ul className="space-y-1">
                                    {service.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start text-sm text-muted-foreground"
                                        >
                                            <span className="text-accent mr-2">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA */}
            <Card className="bg-muted/50">
                <CardContent className="pt-6">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Let's discuss your requirements and create a custom solution for
                            your business. I respond to all inquiries within 48 hours.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Get in Touch</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
