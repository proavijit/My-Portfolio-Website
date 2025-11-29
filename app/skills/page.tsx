import { Metadata } from "next"
import { SkillsGrid } from "@/components/SkillsGrid"
import { getAllSkills } from "@/lib/data"

export const metadata: Metadata = {
    title: "Skills & Expertise",
    description:
        "Comprehensive technical skills of Avijit Ghosh - Full Stack JavaScript Developer specializing in React, Next.js, Node.js, MongoDB, and modern web development technologies across Frontend, Backend, Databases, Microservices, DevOps, and Soft Skills.",
}

export default function SkillsPage() {
    const skills = getAllSkills()

    return (
        <div className="relative">
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                {/* Hero Section */}
                <div className="mb-16 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Skills & Expertise
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        A comprehensive showcase of my technical proficiency across the full stack—from building
                        responsive frontends with React and Next.js to architecting scalable backends with Node.js,
                        managing databases, implementing microservices, and leveraging modern DevOps tools.
                    </p>
                </div>

                {/* Skills Grid */}
                <SkillsGrid skills={skills} />
            </div>
        </div>
    )
}
