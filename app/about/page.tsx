import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getExperiences } from "@/lib/data"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Avijit Ghosh - Full Stack JavaScript Developer with expertise in React, Next.js, Node.js, and MongoDB. Former Fiverr Level 2 seller with 60+ completed projects.",
}

export default function AboutPage() {
    const experiences = getExperiences()

    return (
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

            {/* Bio Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                            <p>
                                I'm a former Fiverr Level 2 WordPress developer turned Full
                                Stack JavaScript engineer. I've delivered 60+ projects, and now
                                focus on scalable, maintainable full-stack applications.
                            </p>
                            <p>
                                Based in Jashore, Khulna, Bangladesh, I specialize in building
                                modern web applications using the MERN stack (MongoDB, Express,
                                React, Node.js) and Next.js. I'm passionate about clean code,
                                user experience, and solving real-world problems with
                                technology.
                            </p>
                            <p>
                                Currently, I'm deepening my knowledge in Data Structures and
                                Algorithms while continuing to deliver high-quality projects
                                for clients worldwide.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-3">What I Do</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                                <span className="text-accent mr-2">▸</span>
                                <span>
                                    Design and develop full-stack web applications from concept
                                    to deployment
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">▸</span>
                                <span>
                                    Build RESTful APIs and integrate third-party services
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">▸</span>
                                <span>
                                    Create responsive, accessible user interfaces with modern
                                    frameworks
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">▸</span>
                                <span>
                                    Optimize application performance and implement best practices
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Location</h3>
                                    <div className="flex items-center text-muted-foreground">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span>Jashore, Khulna, Bangladesh</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Contact</h3>
                                    <div className="space-y-1 text-sm text-muted-foreground">
                                        <p>avijitghosh2268@gmail.com</p>
                                        <p>+880 1753400794</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Links</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <a
                                            href="https://github.com/proavijit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Badge variant="outline">GitHub</Badge>
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/proavijit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Badge variant="outline">LinkedIn</Badge>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Experience Timeline */}
            <div>
                <h2 className="text-3xl font-bold mb-8">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.title}</h3>
                                        <p className="text-lg text-muted-foreground">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            <span>
                                                {exp.startDate} -{" "}
                                                {exp.current ? "Present" : exp.endDate}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground">
                                            <span className="text-accent mr-2 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
