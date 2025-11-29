"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skill } from "@/types"
import { motion } from "framer-motion"
import {
    Code2,
    Server,
    Database,
    Network,
    Wrench,
    Users
} from "lucide-react"

interface SkillsGridProps {
    skills: Skill[]
}

const categoryIcons = {
    "Frontend Development": Code2,
    "Backend Development": Server,
    "Databases": Database,
    "Microservices & Architecture": Network,
    "DevOps & Tools": Wrench,
    "Soft Skills": Users,
}

const proficiencyColors = {
    1: "from-gray-400 to-gray-500",
    2: "from-blue-400 to-blue-500",
    3: "from-green-400 to-green-500",
    4: "from-yellow-400 to-orange-500",
    5: "from-purple-500 to-pink-500",
}

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
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
}

const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
}

export function SkillsGrid({ skills }: SkillsGridProps) {
    const categories = Array.from(new Set(skills.map((s) => s.category)))

    return (
        <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {categories.map((category, categoryIndex) => {
                const categorySkills = skills.filter((s) => s.category === category)
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons]

                return (
                    <motion.div
                        key={category}
                        variants={itemVariants}
                        className="relative"
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm border border-border/50">
                                {IconComponent && <IconComponent className="h-6 w-6" />}
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                                    {category}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                                </p>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                            variants={containerVariants}
                        >
                            {categorySkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    variants={skillCardVariants}
                                    whileHover={{
                                        y: -4,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="group"
                                >
                                    <Card className="h-full glass-card hover:shadow-medium transition-all duration-300 border-border/50 hover:border-border">
                                        <CardContent className="p-4">
                                            <div className="flex flex-col gap-3">
                                                {/* Skill Name */}
                                                <h4 className="font-semibold text-base leading-tight group-hover:text-foreground transition-colors">
                                                    {skill.name}
                                                </h4>

                                                {/* Proficiency Indicator */}
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                                        <motion.div
                                                            className={`h-full bg-gradient-to-r ${proficiencyColors[skill.proficiency as keyof typeof proficiencyColors]}`}
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${(skill.proficiency / 5) * 100}%` }}
                                                            transition={{
                                                                duration: 0.8,
                                                                delay: categoryIndex * 0.1 + index * 0.05,
                                                                ease: "easeOut"
                                                            }}
                                                        />
                                                    </div>
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs px-2 py-0.5 font-medium"
                                                    >
                                                        {skill.proficiency}/5
                                                    </Badge>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}
