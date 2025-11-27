import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skill } from "@/types"

interface SkillsGridProps {
    skills: Skill[]
}

const proficiencyLevels = {
    1: { label: "Beginner", dots: 1 },
    2: { label: "Intermediate", dots: 2 },
    3: { label: "Proficient", dots: 3 },
    4: { label: "Advanced", dots: 4 },
    5: { label: "Expert", dots: 5 },
}

export function SkillsGrid({ skills }: SkillsGridProps) {
    const categories = Array.from(new Set(skills.map((s) => s.category)))

    return (
        <div className="space-y-8">
            {categories.map((category) => {
                const categorySkills = skills.filter((s) => s.category === category)
                return (
                    <div key={category}>
                        <h3 className="text-2xl font-bold mb-4">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {categorySkills.map((skill) => (
                                <Card key={skill.name}>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">
                                                {proficiencyLevels[skill.proficiency].label}
                                            </span>
                                            <div className="flex gap-1">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`h-2 w-2 rounded-full ${i < skill.proficiency
                                                                ? "bg-accent"
                                                                : "bg-muted"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
