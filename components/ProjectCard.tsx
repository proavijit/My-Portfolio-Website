"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Project } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <Card className="overflow-hidden h-full flex flex-col shadow-soft hover:shadow-large transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {project.coverImage ? (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="h-full w-full"
                        >
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                            No image
                        </div>
                    )}
                    {project.featured && (
                        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground shadow-medium">
                            Featured
                        </Badge>
                    )}
                </div>

                <CardHeader className="flex-1">
                    <h3 className="text-xl font-bold line-clamp-1 tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, index) => (
                            <motion.div
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Badge variant="secondary" className="text-xs">
                                    {tag}
                                </Badge>
                            </motion.div>
                        ))}
                        {project.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                                +{project.tags.length - 3}
                            </Badge>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                    <Link href={`/projects/${project.slug}`} className="flex-1">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button variant="default" className="w-full shadow-soft">
                                View Case Study
                            </Button>
                        </motion.div>
                    </Link>
                    {project.liveUrl && (
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live demo"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button variant="outline" size="icon">
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </motion.a>
                    )}
                    {project.repoUrl && (
                        <motion.a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View repository"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button variant="outline" size="icon">
                                <Github className="h-4 w-4" />
                            </Button>
                        </motion.a>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    )
}
