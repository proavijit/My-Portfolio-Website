"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getEducation, getExperiences } from "@/lib/data"
import { motion } from "framer-motion"
import { Briefcase, Download, Github, GraduationCap, Lightbulb, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
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
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                                Avijit Ghosh
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                                Full Stack JavaScript Developer
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>Jashore, Khulna, Bangladesh</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    <span>01753400794</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    <a href="mailto:avijitghosh2268@gmail.com" className="hover:text-foreground transition-colors">
                                        avijitghosh2268@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mt-4">
                                <a
                                    href="https://linkedin.com/in/proavijit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/proavijit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Github className="h-4 w-4" />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <motion.div 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                                animate={{ 
                                    boxShadow: ["0px 0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px 2px rgba(0, 255, 0, 0.6)", "0px 0px 0px 0px rgba(0,0,0,0)"]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="rounded-md"
                            >
                                <a href="/AVIJIT GHOSH CV.pdf" download="AVIJIT GHOSH CV.pdf" target="_blank" rel="noopener noreferrer">
                                    <Button className="gap-2 w-full sm:w-auto cursor-pointer ">
                                        <Download className="h-4 w-4" />
                                        Download PDF
                                    </Button>
                                </a>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/contact">
                                    <Button variant="outline" className="w-full sm:w-auto">
                                        Contact Me
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Resume Content */}
                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Professional Summary */}
                    <motion.div variants={itemVariants}>
                        <Card className="glass-card border-border/50">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                                        <Briefcase className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">Professional Summary</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Results-driven <strong>Full Stack JavaScript Developer</strong> with strong expertise in React, Next.js, Node.js, Express, MongoDB, and modern frontend UI frameworks. Skilled in building scalable web applications, REST APIs, authentication systems, and microservice-ready backend architectures. Previously worked as a <strong>Level 2 Fiverr WordPress Developer</strong>, now focused on full-stack development, DSA improvement, and production-grade projects including social media and e-commerce platforms. Fast learner with strong problem-solving abilities and ability to collaborate efficiently in team environments.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Experience */}
                    <motion.div variants={itemVariants}>
                        <Card className="glass-card border-border/50">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                                        <Briefcase className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
                                </div>
                                <div className="space-y-8">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className={index !== experiences.length - 1 ? "pb-8 border-b border-border/50" : ""}>
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold">{exp.title}</h3>
                                                    <p className="text-muted-foreground">{exp.company}</p>
                                                </div>
                                                <Badge variant="secondary" className="w-fit">
                                                    {exp.current ? "Present" : "2+ Years"}
                                                </Badge>
                                            </div>
                                            <ul className="space-y-2 mt-4">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start text-muted-foreground">
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

                    {/* Education */}
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

                    {/* Soft Skills */}
                    <motion.div variants={itemVariants}>
                        <Card className="glass-card border-border/50">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                                        <Briefcase className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">Soft Skills</h2>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Communication", "Teamwork", "Fast Learning", "Adaptability"].map((skill) => (
                                        <Badge key={skill} variant="secondary" className="px-4 py-2">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Additional Information */}
                    <motion.div variants={itemVariants}>
                        <Card className="glass-card border-border/50">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                                        <Lightbulb className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">Additional Information</h2>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 mt-1">•</span>
                                        <span>Currently learning Data Structures & Algorithms (DSA) and solving problems</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 mt-1">•</span>
                                        <span>Building multiple full-stack projects to improve architecture & best practices</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 mt-1">•</span>
                                        <span>Strong interest in microservices, cloud, and system design</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
