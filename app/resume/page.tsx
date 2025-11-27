import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Resume",
    description:
        "View and download the resume of Avijit Ghosh - Full Stack JavaScript Developer with expertise in React, Next.js, Node.js, and MongoDB.",
}

export default function ResumePage() {
    return (
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
                <p className="text-lg text-muted-foreground mb-6">
                    Download my resume or view my detailed experience and qualifications
                    below.
                </p>
                <div className="flex gap-4">
                    <a href="/resume.pdf" download>
                        <Button className="gap-2">
                            <Download className="h-4 w-4" />
                            Download PDF
                        </Button>
                    </a>
                    <Link href="/contact">
                        <Button variant="outline">Contact Me</Button>
                    </Link>
                </div>
            </div>

            {/* Resume Content */}
            <div className="space-y-8">
                {/* Summary */}
                <Card>
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                        <p className="text-muted-foreground">
                            Full Stack JavaScript Developer with 3+ years of experience
                            building scalable web applications. Former Fiverr Level 2 seller
                            with 60+ completed projects. Specialized in the MERN stack
                            (MongoDB, Express, React, Node.js) and Next.js. Proven track
                            record of delivering high-quality, maintainable code and exceeding
                            client expectations.
                        </p>
                    </CardContent>
                </Card>

                {/* Experience */}
                <Card>
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-6">Experience</h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Full Stack JavaScript Developer
                                        </h3>
                                        <p className="text-muted-foreground">Freelance · Remote</p>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        Jan 2023 - Present
                                    </span>
                                </div>
                                <ul className="space-y-2 mt-3">
                                    <li className="flex items-start text-muted-foreground">
                                        <span className="text-accent mr-2">•</span>
                                        <span>
                                            Developed 20+ full-stack web applications using React,
                                            Next.js, Node.js, and MongoDB
                                        </span>
                                    </li>
                                    <li className="flex items-start text-muted-foreground">
                                        <span className="text-accent mr-2">•</span>
                                        <span>
                                            Implemented RESTful APIs and integrated third-party
                                            services (Stripe, SendGrid, AWS S3)
                                        </span>
                                    </li>
                                    <li className="flex items-start text-muted-foreground">
                                        <span className="text-accent mr-2">•</span>
                                        <span>
                                            Optimized application performance, reducing load times by
                                            40%
                                        </span>
                                    </li>
                                    <li className="flex items-start text-muted-foreground">
                                        <span className="text-accent mr-2">•</span>
                                        <span>
                                            Collaborated with clients to gather requirements and
                                            deliver solutions on time
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            WordPress Developer (Level 2)
                                        </h3>
                                        <p className="text-muted-foreground">Fiverr · Remote</p>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        Jun 2020 - Dec 2022
                                    </span>
                                </div>
                                <ul className="space-y-2 mt-3">
                                    <li className="flex items-start text-muted-foreground">
                                        <span className="text-accent mr-2">•</span>
                                        <span>
                                            Completed 60+ WordPress projects with 5-star ratings
                                        </span>
                                    </li>
                                    <li className="flex items-start text-muted-foreground">
                                        <span className="text-accent mr-2">•</span>
                                        <span>
                                            Customized themes and plugins for client-specific
                                            requirements
                                        </span>
                                    </li>
                                    <li className="flex items-start text-muted-foreground">
                                        <span className="text-accent mr-2">•</span>
                                        <span>
                                            Achieved Level 2 seller status within 18 months
                                        </span>
                                    </li>
                                    <li className="flex items-start text-muted-foreground">
                                        <span className="text-accent mr-2">•</span>
                                        <span>Maintained 98% client satisfaction rate</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-2">Frontend</h3>
                                <p className="text-sm text-muted-foreground">
                                    React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS,
                                    HTML5, CSS3
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Backend</h3>
                                <p className="text-sm text-muted-foreground">
                                    Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, GraphQL
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">DevOps & Tools</h3>
                                <p className="text-sm text-muted-foreground">
                                    Git, GitHub, Docker, Vercel, AWS (EC2, S3), VS Code
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Other</h3>
                                <p className="text-sm text-muted-foreground">
                                    Figma, Postman, Jira, Agile/Scrum
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Education */}
                <Card>
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4">Education</h2>
                        <div>
                            <h3 className="text-xl font-bold">
                                Self-Taught Developer & Online Courses
                            </h3>
                            <p className="text-muted-foreground mt-2">
                                Completed comprehensive courses in Full Stack JavaScript
                                Development, Data Structures & Algorithms, and modern web
                                technologies through platforms like Udemy, freeCodeCamp, and
                                official documentation.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <div className="space-y-2 text-muted-foreground">
                            <p>
                                <strong>Email:</strong> avijitghosh2268@gmail.com
                            </p>
                            <p>
                                <strong>Phone:</strong> +880 1753400794
                            </p>
                            <p>
                                <strong>Location:</strong> Jashore, Khulna, Bangladesh
                            </p>
                            <p>
                                <strong>GitHub:</strong>{" "}
                                <a
                                    href="https://github.com/proavijit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:underline"
                                >
                                    github.com/proavijit
                                </a>
                            </p>
                            <p>
                                <strong>LinkedIn:</strong>{" "}
                                <a
                                    href="https://linkedin.com/in/proavijit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:underline"
                                >
                                    linkedin.com/in/proavijit
                                </a>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
