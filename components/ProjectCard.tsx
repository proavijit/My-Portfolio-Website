import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Project } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-muted">
                {project.coverImage ? (
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        No image
                    </div>
                )}
                {project.featured && (
                    <Badge className="absolute top-2 right-2 bg-accent">Featured</Badge>
                )}
            </div>

            <CardHeader>
                <h3 className="text-xl font-bold line-clamp-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                </p>
            </CardHeader>

            <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                    {project.tags.length > 3 && (
                        <Badge variant="outline">+{project.tags.length - 3}</Badge>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex gap-2">
                <Link href={`/projects/${project.slug}`} className="flex-1">
                    <Button variant="default" className="w-full">
                        View Case Study
                    </Button>
                </Link>
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                    >
                        <Button variant="outline" size="icon">
                            <ExternalLink className="h-4 w-4" />
                        </Button>
                    </a>
                )}
                {project.repoUrl && (
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View repository"
                    >
                        <Button variant="outline" size="icon">
                            <Github className="h-4 w-4" />
                        </Button>
                    </a>
                )}
            </CardFooter>
        </Card>
    )
}
