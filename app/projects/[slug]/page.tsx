import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getProjectBySlug, getAllProjects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"

interface ProjectPageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const projects = getAllProjects()
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: project.title,
        description: project.shortDescription,
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
            {/* Back Button */}
            <Link href="/projects">
                <Button variant="ghost" className="mb-8 gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Button>
            </Link>

            {/* Hero Image */}
            {project.coverImage && (
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Title and Links */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="gap-2">
                                <ExternalLink className="h-4 w-4" />
                                View Live Demo
                            </Button>
                        </a>
                    )}
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" className="gap-2">
                                <Github className="h-4 w-4" />
                                View Repository
                            </Button>
                        </a>
                    )}
                </div>

                {/* Tech Stack */}
                <div>
                    <h3 className="text-sm font-semibold mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>

            {/* Case Study Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {project.problem && (
                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Problem</h2>
                                <p className="text-muted-foreground">{project.problem}</p>
                            </CardContent>
                        </Card>
                    )}

                    {project.solution && (
                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Solution</h2>
                                <p className="text-muted-foreground">{project.solution}</p>
                            </CardContent>
                        </Card>
                    )}

                    {project.role && (
                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">My Role</h2>
                                <p className="text-muted-foreground">{project.role}</p>
                            </CardContent>
                        </Card>
                    )}

                    {project.outcome && (
                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Outcome</h2>
                                <p className="text-muted-foreground">{project.outcome}</p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Screenshots */}
                    {project.screenshots.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.screenshots.map((screenshot, index) => (
                                    <div
                                        key={index}
                                        className="relative h-48 rounded-lg overflow-hidden"
                                    >
                                        <Image
                                            src={screenshot}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div>
                    <Card>
                        <CardContent className="pt-6 space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Project Type</h3>
                                <p className="text-sm text-muted-foreground">
                                    {project.featured ? "Featured Project" : "Project"}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            {project.createdAt && (
                                <div>
                                    <h3 className="font-semibold mb-2">Completed</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(project.createdAt).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                        })}
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
