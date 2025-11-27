"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/ProjectCard"
import { getFeaturedProjects, getAllSkills } from "@/lib/data"
import { ArrowRight, Download, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"
import { StaggerContainer } from "@/components/animations/StaggerContainer"
import { StaggerItem } from "@/components/animations/StaggerItem"

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const skills = getAllSkills()
  const topSkills = skills.filter((s) => s.proficiency >= 4).slice(0, 8)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SlideIn direction="left">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Avijit Ghosh
                  </span>
                </h1>
              </motion.div>
            </SlideIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                A Full Stack JavaScript Developer building production-grade web
                apps using React, Next.js, Node.js, and MongoDB. I design
                reliable APIs and beautiful frontends.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="gap-2 shadow-soft hover:shadow-medium transition-all">
                      <Mail className="h-5 w-5" />
                      Get in Touch
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/resume">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="gap-2 hover:shadow-soft transition-all">
                      <Download className="h-5 w-5" />
                      View Resume
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="flex flex-wrap gap-3 justify-center">
            {topSkills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                  <Badge variant="secondary" className="text-sm px-4 py-2 shadow-soft">
                    {skill.name}
                  </Badge>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <FadeIn>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground text-lg">
                  Showcasing my best work and case studies
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/projects">
                <motion.div whileHover={{ x: 4 }}>
                  <Button variant="ghost" className="gap-2 hidden sm:flex">
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background -z-10" />
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Let's Build Something Together
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                I'm available for freelance projects and full-time opportunities.
                Looking to build something amazing? Let's talk.
              </p>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="gap-2 shadow-medium hover:shadow-large transition-all">
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
