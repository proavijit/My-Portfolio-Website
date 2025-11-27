"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface ProjectFiltersProps {
    allTags: string[]
    selectedTags: string[]
    onTagsChange: (tags: string[]) => void
    searchQuery: string
    onSearchChange: (query: string) => void
    showFeaturedOnly: boolean
    onFeaturedToggle: () => void
}

export function ProjectFilters({
    allTags,
    selectedTags,
    onTagsChange,
    searchQuery,
    onSearchChange,
    showFeaturedOnly,
    onFeaturedToggle,
}: ProjectFiltersProps) {
    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            onTagsChange(selectedTags.filter((t) => t !== tag))
        } else {
            onTagsChange([...selectedTags, tag])
        }
    }

    const clearFilters = () => {
        onTagsChange([])
        onSearchChange("")
    }

    const hasActiveFilters = selectedTags.length > 0 || searchQuery.length > 0

    return (
        <div className="space-y-4 mb-8">
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10"
                />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-2">
                <Button
                    variant={showFeaturedOnly ? "default" : "outline"}
                    size="sm"
                    onClick={onFeaturedToggle}
                >
                    Featured Only
                </Button>

                {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                        <X className="h-4 w-4 mr-1" />
                        Clear Filters
                    </Button>
                )}
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                    <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-accent transition-colors"
                        onClick={() => toggleTag(tag)}
                    >
                        {tag}
                    </Badge>
                ))}
            </div>
        </div>
    )
}
