"use client"

import { useState, useMemo } from "react"
import { Metadata } from "next"
import { ProjectCard } from "@/components/ProjectCard"
import { ProjectFilters } from "@/components/ProjectFilters"
import { getAllProjects, getAllTags } from "@/lib/data"

export default function ProjectsPage() {
    const projects = getAllProjects()
    const allTags = getAllTags()

    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            // Search filter
            const matchesSearch =
                searchQuery === "" ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.shortDescription
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())

            // Tag filter
            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.some((tag) => project.tags.includes(tag))

            // Featured filter
            const matchesFeatured = !showFeaturedOnly || project.featured

            return matchesSearch && matchesTags && matchesFeatured
        })
    }, [projects, searchQuery, selectedTags, showFeaturedOnly])

    return (
        <div className="container mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    A collection of my work including full-stack applications, APIs, and
                    frontend projects. Filter by technology or search for specific
                    projects.
                </p>
            </div>

            <ProjectFilters
                allTags={allTags}
                selectedTags={selectedTags}
                onTagsChange={setSelectedTags}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                showFeaturedOnly={showFeaturedOnly}
                onFeaturedToggle={() => setShowFeaturedOnly(!showFeaturedOnly)}
            />

            {filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                        No projects found matching your filters.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            )}

            <div className="mt-8 text-center text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
            </div>
        </div>
    )
}
