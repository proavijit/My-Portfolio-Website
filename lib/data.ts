import { Project, Skill, Experience, Service } from "@/types"

export const projects: Project[] = [
    {
        slug: "ecommerce-platform",
        title: "Full Stack E-Commerce Platform",
        shortDescription: "A modern e-commerce platform with admin dashboard, payment integration, and real-time inventory management",
        coverImage: "/images/projects/ecommerce.jpg",
        screenshots: ["/images/projects/ecommerce-1.jpg", "/images/projects/ecommerce-2.jpg"],
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        techStack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
        repoUrl: "https://github.com/proavijit/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.vercel.app",
        featured: true,
        problem: "Small businesses need an affordable, scalable e-commerce solution with modern features",
        solution: "Built a full-stack platform with product management, shopping cart, checkout, and admin dashboard",
        role: "Full Stack Developer - designed architecture, implemented frontend and backend",
        outcome: "Successfully deployed for 3 clients, handling 1000+ daily transactions",
        createdAt: "2024-01-15",
    },
    {
        slug: "task-management-app",
        title: "Real-Time Task Management App",
        shortDescription: "Collaborative task management with real-time updates, team workspaces, and analytics",
        coverImage: "/images/projects/taskapp.jpg",
        screenshots: [],
        tags: ["React", "Socket.io", "PostgreSQL"],
        techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
        repoUrl: "https://github.com/proavijit/task-manager",
        featured: true,
        problem: "Teams need real-time collaboration tools for project management",
        solution: "Developed a real-time task management system with WebSocket integration",
        role: "Lead Developer",
        outcome: "Used by 50+ teams, 99.9% uptime",
        createdAt: "2023-11-20",
    },
    {
        slug: "portfolio-generator",
        title: "AI-Powered Portfolio Generator",
        shortDescription: "Generate beautiful portfolio websites using AI and customizable templates",
        coverImage: "/images/projects/portfolio-gen.jpg",
        screenshots: [],
        tags: ["Next.js", "AI", "OpenAI"],
        techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
        liveUrl: "https://portfolio-gen.vercel.app",
        featured: false,
        createdAt: "2024-03-10",
    },
]

export const skills: Skill[] = [
    // Frontend
    { name: "React", category: "Frontend", proficiency: 5 },
    { name: "Next.js", category: "Frontend", proficiency: 5 },
    { name: "TypeScript", category: "Frontend", proficiency: 4 },
    { name: "JavaScript (ES6+)", category: "Frontend", proficiency: 5 },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 5 },
    { name: "HTML5 & CSS3", category: "Frontend", proficiency: 5 },

    // Backend
    { name: "Node.js", category: "Backend", proficiency: 5 },
    { name: "Express.js", category: "Backend", proficiency: 5 },
    { name: "MongoDB", category: "Backend", proficiency: 4 },
    { name: "PostgreSQL", category: "Backend", proficiency: 3 },
    { name: "REST APIs", category: "Backend", proficiency: 5 },
    { name: "GraphQL", category: "Backend", proficiency: 3 },

    // DevOps
    { name: "Git & GitHub", category: "DevOps", proficiency: 5 },
    { name: "Docker", category: "DevOps", proficiency: 3 },
    { name: "Vercel", category: "DevOps", proficiency: 5 },
    { name: "AWS (EC2, S3)", category: "DevOps", proficiency: 3 },

    // Tools
    { name: "VS Code", category: "Tools", proficiency: 5 },
    { name: "Figma", category: "Tools", proficiency: 4 },
    { name: "Postman", category: "Tools", proficiency: 5 },
    { name: "Jira", category: "Tools", proficiency: 4 },
]

export const experiences: Experience[] = [
    {
        title: "Full Stack JavaScript Developer",
        company: "Freelance",
        location: "Remote",
        startDate: "2023-01",
        current: true,
        description: [
            "Developed 20+ full-stack web applications using React, Next.js, Node.js, and MongoDB",
            "Implemented RESTful APIs and integrated third-party services (Stripe, SendGrid, AWS S3)",
            "Optimized application performance, reducing load times by 40%",
            "Collaborated with clients to gather requirements and deliver solutions on time",
        ],
    },
    {
        title: "WordPress Developer (Fiverr Level 2)",
        company: "Fiverr",
        location: "Remote",
        startDate: "2020-06",
        endDate: "2022-12",
        description: [
            "Completed 60+ WordPress projects with 5-star ratings",
            "Customized themes and plugins for client-specific requirements",
            "Achieved Level 2 seller status within 18 months",
            "Maintained 98% client satisfaction rate",
        ],
    },
]

export const services: Service[] = [
    {
        title: "Full Stack Web Development",
        description: "End-to-end web application development using modern JavaScript stack",
        deliveryTime: "2-6 weeks",
        priceRange: "$2000 - $8000",
        features: [
            "Custom web application development",
            "RESTful API design and implementation",
            "Database design and optimization",
            "Responsive UI/UX implementation",
            "Deployment and hosting setup",
        ],
    },
    {
        title: "Frontend Development",
        description: "Modern, responsive, and performant user interfaces",
        deliveryTime: "1-3 weeks",
        priceRange: "$1000 - $4000",
        features: [
            "React/Next.js application development",
            "Component library creation",
            "Performance optimization",
            "Cross-browser compatibility",
            "Accessibility (WCAG AA)",
        ],
    },
    {
        title: "Backend API Development",
        description: "Scalable and secure backend services and APIs",
        deliveryTime: "1-4 weeks",
        priceRange: "$1500 - $5000",
        features: [
            "RESTful/GraphQL API development",
            "Database design and integration",
            "Authentication and authorization",
            "Third-party API integration",
            "API documentation",
        ],
    },
    {
        title: "Website Consultation & Optimization",
        description: "Improve existing websites for better performance and user experience",
        deliveryTime: "1-2 weeks",
        priceRange: "$500 - $2000",
        features: [
            "Performance audit and optimization",
            "SEO improvements",
            "Security assessment",
            "Code review and refactoring",
            "Best practices implementation",
        ],
    },
]

export function getAllProjects(): Project[] {
    return projects
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}

export function getAllTags(): string[] {
    const tags = new Set<string>()
    projects.forEach((project) => {
        project.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
}

export function getAllSkills(): Skill[] {
    return skills
}

export function getExperiences(): Experience[] {
    return experiences
}

export function getServices(): Service[] {
    return services
}
