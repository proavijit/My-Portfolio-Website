import { Metadata } from "next"
import { SkillsGrid } from "@/components/SkillsGrid"
import { getAllSkills } from "@/lib/data"

export const metadata: Metadata = {
    title: "Skills",
    description:
        "Technical skills and expertise of Avijit Ghosh - Frontend, Backend, DevOps, and Tools proficiency in modern web development technologies.",
}

export default function SkillsPage() {
    const skills = getAllSkills()

    return (
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    A comprehensive overview of my technical skills across frontend,
                    backend, DevOps, and development tools. Proficiency levels range from
                    beginner to expert.
                </p>
            </div>

            <SkillsGrid skills={skills} />
        </div>
    )
}
