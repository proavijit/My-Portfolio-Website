"use client"

import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getExperiences, getEducation } from "@/lib/data"
import {
    MapPin,
    Mail,
    Phone,
    Linkedin,
    Github,
    Code2,
    Rocket,
    Target,
    Heart,
    Briefcase,
    GraduationCap,
    Calendar
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
    const experiences = getExperiences()
    const education = getEducation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <div className="relative">
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        About Me
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                        Full Stack JavaScript Developer passionate about building scalable web applications
                        and solving real-world problems with clean, maintainable code.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Who I Am Section */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Card className="glass-card border-border/50 h-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                                            <Code2 className="h-5 w-5" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold">Who I Am</h2>
                                    </div>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            I'm a <strong>Full Stack JavaScript Developer</strong> with strong expertise in React, Next.js, Node.js, Express, MongoDB, and modern frontend UI frameworks. My journey began as a <strong>Level 2 Fiverr WordPress Developer</strong>, where I delivered 60+ projects with 5-star ratings.
                                        </p>
                                        <p>
                                            Based in <strong>Jashore, Khulna, Bangladesh</strong>, I've transitioned into full-stack development, focusing on building scalable web applications, REST APIs, authentication systems, and microservice-ready backend architectures. I'm passionate about clean code, user experience, and solving real-world problems with technology.
                                        </p>
                                        <p>
                                            Currently, I'm deepening my knowledge in <strong>Data Structures & Algorithms</strong> while building production-grade projects including social media and e-commerce platforms. I'm also exploring microservices, cloud technologies, and system design to enhance my architectural skills.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Info Card */}
                        <div>
                            <Card className="glass-card border-border/50 h-full">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                                <MapPin className="h-4 w-4" />
                                                <span className="text-sm font-medium">Location</span>
                                            </div>
                                            <p className="text-sm ml-6">Jashore, Khulna, Bangladesh</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                                <Mail className="h-4 w-4" />
                                                <span className="text-sm font-medium">Email</span>
                                            </div>
                                            <a
                                                href="mailto:avijitghosh2268@gmail.com"
                                                className="text-sm ml-6 hover:text-foreground transition-colors"
                                            >
                                                avijitghosh2268@gmail.com
                                            </a>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                                <Phone className="h-4 w-4" />
                                                <span className="text-sm font-medium">Phone</span>
                                            </div>
                                            <p className="text-sm ml-6">01753400794</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium mb-2">Social Links</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <a
                                                    href="https://github.com/proavijit"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Badge variant="outline" className="gap-1 hover:bg-muted transition-colors cursor-pointer">
                                                        <Github className="h-3 w-3" />
                                                        GitHub
                                                    </Badge>
                                                </a>
                                                <a
                                                    href="https://linkedin.com/in/proavijit"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Badge variant="outline" className="gap-1 hover:bg-muted transition-colors cursor-pointer">
                                                        <Linkedin className="h-3 w-3" />
                                                        LinkedIn
                                                    </Badge>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <Link href="/contact">
                                                <Button className="w-full">Contact Me</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* What I Do Section */}
                    <motion.div variants={itemVariants}>
                        <Card className="glass-card border-border/50">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                                        <Rocket className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">What I Do</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-muted/50 mt-1">
                                                <Code2 className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">Full Stack Development</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Design and develop scalable web applications from concept to deployment using the MERN stack and Next.js
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-muted/50 mt-1">
                                                <Target className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">API Development</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Build RESTful APIs with authentication, authorization, and integrate third-party services
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-muted/50 mt-1">
                                                <Heart className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">UI/UX Implementation</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Create responsive, accessible user interfaces with modern frameworks and best practices
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-muted/50 mt-1">
                                                <Rocket className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">Performance Optimization</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Optimize application performance and implement industry best practices for scalability
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div variants={itemVariants}>
                        <Card className="glass-card border-border/50">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                                        <Briefcase className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
                                </div>
                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <div
                                            key={index}
                                            className={index !== experiences.length - 1 ? "pb-6 border-b border-border/50" : ""}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold">{exp.title}</h3>
                                                    <p className="text-muted-foreground">{exp.company}</p>
                                                </div>
                                                <div className="flex flex-col sm:items-end gap-1">
                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                        <Calendar className="h-4 w-4 mr-1" />
                                                        <span>
                                                            {exp.current ? "Present" : "2+ Years"}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                        <MapPin className="h-4 w-4 mr-1" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 mt-3">
                                                {exp.description.slice(0, 3).map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                                                        <span className="text-accent mr-2 mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div variants={itemVariants}>
                        <Card className="glass-card border-border/50">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                                        <GraduationCap className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
                                </div>
                                {education.map((edu, index) => (
                                    <div key={index}>
                                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                                        <p className="text-muted-foreground mt-1">{edu.institution}, {edu.location}</p>
                                        {edu.major && (
                                            <p className="text-sm text-muted-foreground mt-2">
                                                <strong>Major:</strong> {edu.major}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
