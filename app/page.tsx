import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/ProjectCard"
import { getFeaturedProjects, getAllSkills } from "@/lib/data"
import { ArrowRight, Download, Mail } from "lucide-react"

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const skills = getAllSkills()
  const topSkills = skills.filter((s) => s.proficiency >= 4).slice(0, 8)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="text-accent">Avijit Ghosh</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A Full Stack JavaScript Developer building production-grade web
              apps using React, Next.js, Node.js, and MongoDB. I design
              reliable APIs and beautiful frontends.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="/resume">
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-5 w-5" />
                  View Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="py-8 border-y bg-muted/30">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {topSkills.map((skill) => (
              <Badge key={skill.name} variant="secondary" className="text-sm">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Showcasing my best work and case studies
              </p>
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm available for freelance projects and full-time opportunities.
              Looking to build something amazing? Let's talk.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
