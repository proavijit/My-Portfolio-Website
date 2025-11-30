"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/ProjectCard"
import { getFeaturedProjects, getAllSkills } from "@/lib/data"
import { ArrowRight, Download, Mail, Code2, Briefcase, Users, Award } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"
import { StaggerContainer } from "@/components/animations/StaggerContainer"
import { StaggerItem } from "@/components/animations/StaggerItem"
import my_image from "@/public/my_pic.png"

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const skills = getAllSkills()
  const topSkills = skills.filter((s) => s.proficiency >= 4).slice(0, 12)

  const stats = [
    { label: "Years Experience", value: "2+", icon: Briefcase },
    { label: "Projects Completed", value: "60+", icon: Code2 },
    { label: "Technologies", value: "54+", icon: Award },
    { label: "Client Satisfaction", value: "98%", icon: Users },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Patterns */}
        <motion.div className="absolute inset-0 -z-10">
          {/* Dot Matrix */}
          <motion.div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          {/* Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          {/* Gradient Mesh */}
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </motion.div>

        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl">
              {/* SlideIn with Role Badges */}
              <SlideIn direction="left">
                <div className="flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">Full Stack Developer</Badge>
                    <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">MERN Stack</Badge>
                    <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">Microservices</Badge>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                    Hi, I'm{' '}
                    <span
                      className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent animate-text-gradient"
                      style={{ backgroundSize: '200% 200%' }}
                    >
                      Avijit Ghosh
                    </span>

                  </h1>


                </div>
              </SlideIn>

              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed max-w-3xl">
                  Full Stack JavaScript Developer building <strong>production-grade web applications</strong> with React, Next.js, Node.js, and MongoDB.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                  Specialized in scalable architectures, REST APIs, authentication systems, and microservice-ready backends. Currently mastering <strong>Data Structures & Algorithms</strong> and exploring cloud technologies.
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
                  <Link href="/projects">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="ghost" className="gap-2">
                        View Projects
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Hero Image */}
            <SlideIn delay={0.3} direction="right">
              <div className="relative w-full max-w-md mx-auto lg:max-w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
                <motion.div
                  className="relative w-full h-full flex items-center justify-center z-10"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={my_image}
                    alt="Avijit Ghosh"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
                {/* Decorative elements behind image */}
                <motion.div
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] radial-gradient-glow rounded-full blur-[100px]"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 20%, transparent 70%)"
                  }}
                  animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div whileHover={{ y: -4 }}>
                  <Card className="glass-card border-border/50 text-center">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Tech Stack</h2>
              <p className="text-muted-foreground text-lg">Technologies I work with daily</p>
            </div>
          </FadeIn>

          <StaggerContainer className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {topSkills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                  <Badge variant="secondary" className="text-sm px-4 py-2 shadow-soft">{skill.name}</Badge>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div className="text-center mt-8">
              <Link href="/skills">
                <Button variant="ghost" className="gap-2">
                  View All Skills
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <FadeIn>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Featured Projects</h2>
                <p className="text-muted-foreground text-lg">Showcasing my best work and case studies</p>
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

          <FadeIn delay={0.4}>
            <div className="text-center mt-12 sm:hidden">
              <Link href="/projects">
                <Button variant="outline" className="gap-2">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background -z-10" />
        <div
          className="absolute inset-0 opacity-[0.02] -z-10"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="glass-card border-border/50 max-w-4xl mx-auto">
              <CardContent className="pt-12 pb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Build Something Amazing</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                  I'm available for freelance projects and full-time opportunities.
                  Whether you need a full-stack application, REST API, or microservice architecture,
                  let's discuss how I can help bring your ideas to life.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="gap-2 shadow-medium hover:shadow-large transition-all">
                        Start a Conversation
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/services">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="gap-2">View Services</Button>
                    </motion.div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
