import { Education, Experience, Project, Service, Skill } from "@/types"

export const projects: Project[] = [
      {
        slug: "Babyshop-ecommerce ",
        title: "BabyShop eCommerce",
        shortDescription: "A full-featured baby products eCommerce web application with product management, cart system, and secure checkout functionality.",
        coverImage: "/images/projects/portfolio-gen-1.png",
        screenshots: [
            "/images/projects/babyshop-1.png",
            "/images/projects/babyshop-2.png",
            "/images/projects/babyshop-3.png"
        ],
        tags: ["eCommerce", "Full Stack", "Authentication"],
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe"],
        liveUrl: "https://github.com/proavijit/BabyShop-eCommerce",
        featured: true,
        createdAt: "2024-02-15",
    },
    {
        slug: "ecommerce-platform",
        title: "Full Stack Microservice E-Commerce Platform",
        shortDescription: "A modern e-commerce platform microservices architecture with admin dashboard, payment integration, and real-time inventory management",
        coverImage: "/images/projects/ecommerce-1.png",
        screenshots: ["/images/projects/ecommerce-1.png"],
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        techStack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
        repoUrl: "https://github.com/proavijit/microservices-ecommerce-application",
        liveUrl: "https://github.com/proavijit/microservices-ecommerce-application",
        featured: true,
        problem: "Small businesses need an affordable, scalable e-commerce solution with modern features",
        solution: "Built a full-stack platform with product management, shopping cart, checkout, and admin dashboard",
        role: "Full Stack Developer - designed architecture, implemented frontend and backend",
        outcome: "Successfully deployed for 3 clients, handling 1000+ daily transactions",
        createdAt: "2024-01-15",
    },
  {
        slug: "WebCraft Pro Lead tool",
        title: "WebCraft Pro Lead tool",
        shortDescription: "A website revival tool / project for restoring or redesigning websites (details TBD).",
        coverImage: "/images/projects/taskapp-1.png",
        screenshots: ["/images/projects/website-revive-pro.png"],
        tags: ["Web", "Revival", "Tool"],
        techStack: ["TBD"],
        repoUrl: "https://github.com/proavijit/website-revive-pro",
        liveUrl: "https://webcraftpro-studio.vercel.app/",
        featured: true,
        createdAt: "2024-01-01",
    }

]

export const skills: Skill[] = [
    // Frontend Development
    // { name: "React.js", category: "Frontend Development", proficiency: 5 },
    // { name: "Next.js (App Router)", category: "Frontend Development", proficiency: 5 },
    // { name: "Context API", category: "Frontend Development", proficiency: 5 },
    // { name: "Redux Toolkit", category: "Frontend Development", proficiency: 4 },
    // { name: "SSG, SSR, ISR", category: "Frontend Development", proficiency: 5 },
    // { name: "Tailwind CSS", category: "Frontend Development", proficiency: 5 },
    // { name: "Chakra UI", category: "Frontend Development", proficiency: 4 },
    // { name: "Material UI", category: "Frontend Development", proficiency: 2 },
    // { name: "Shadcn UI", category: "Frontend Development", proficiency: 5 },
    // { name: "Bootstrap", category: "Frontend Development", proficiency: 4 },
    // { name: "React Hook Form", category: "Frontend Development", proficiency: 5 },
    // { name: "Formik", category: "Frontend Development", proficiency: 4 },
    // { name: "TanStack Query", category: "Frontend Development", proficiency: 5 },
    // { name: "Responsive UI", category: "Frontend Development", proficiency: 5 },
    // { name: "Component Architecture", category: "Frontend Development", proficiency: 5 },
    // { name: "Component Architecture", category: "Frontend Development", proficiency: 5 },



    { name: "JavaScript (ES6+)", category: "Frontend Development", proficiency: 5 },
    { name: "TypeScript", category: "Frontend Development", proficiency: 4 },
    { name: "React.js", category: "Frontend Development", proficiency: 5 },
    { name: "Next.js", category: "Frontend Development", proficiency: 5 },
    { name: "SSG, SSR, ISR, CSR", category: "Frontend Development", proficiency: 5 },
    { name: "Redux ", category: "Frontend Development", proficiency: 4 },
    { name: "Easy Peasy", category: "Frontend Development", proficiency: 4 },
    { name: "Tailwind CSS", category: "Frontend Development", proficiency: 5 },
    { name: "Headless CMS Integration", category: "Frontend Development", proficiency: 4 },
    { name: "Figma", category: "Frontend Development", proficiency: 4 },
    { name: "Adobe Photoshop", category: "Frontend Development", proficiency: 5 },



    // Backend Development
    // { name: "Node.js", category: "Backend Development", proficiency: 5 },
    // { name: "Express.js", category: "Backend Development", proficiency: 5 },
    // { name: "JWT Authentication", category: "Backend Development", proficiency: 5 },
    // { name: "OAuth", category: "Backend Development", proficiency: 4 },
    // { name: "CORS", category: "Backend Development", proficiency: 5 },
    // { name: "Rate Limiting", category: "Backend Development", proficiency: 5 },
    // { name: "Caching", category: "Backend Development", proficiency: 5 },
    // { name: "Session Management", category: "Backend Development", proficiency: 5 },
    // { name: "Web Sockets", category: "Backend Development", proficiency: 5 },

    { name: "Node.js", category: "Backend Development", proficiency: 5 },
    { name: "Express.js", category: "Backend Development", proficiency: 5 },
    { name: "REST API Design", category: "Backend Development", proficiency: 5 },
    { name: "Rate Limiting", category: "Backend Development", proficiency: 5 },
    { name: "Caching", category: "Backend Development", proficiency: 5 },
    { name: "WebSockets", category: "Backend Development", proficiency: 5 },
    { name: "Security Best Practices", category: "Backend Development", proficiency: 4 },



    // Databases
    { name: "MongoDB", category: "Databases", proficiency: 3 },
    { name: "Mongoose", category: "Databases", proficiency: 4 },
    { name: "Prisma ORM", category: "Databases", proficiency: 4 },
    { name: "MySQL", category: "Databases", proficiency: 4 },
    { name: "PostgreSQL", category: "Databases", proficiency: 4 },
    { name: "Firebase", category: "Databases", proficiency: 4 },




    // Microservices & Architecture
    // { name: "REST API Design", category: "Microservices & Architecture", proficiency: 5 },
    // { name: "API Versioning", category: "Microservices & Architecture", proficiency: 5 },
    // { name: "RabbitMQ", category: "Microservices & Architecture", proficiency: 3 },
    // { name: "Docker", category: "Microservices & Architecture", proficiency: 4 },
    // { name: "Docker Compose", category: "Microservices & Architecture", proficiency: 4 },
    // { name: "Redis", category: "Microservices & Architecture", proficiency: 4 },
    // { name: "API Gateway", category: "Microservices & Architecture", proficiency: 3 },
    // { name: "Load Balancing", category: "Microservices & Architecture", proficiency: 3 },
    // { name: "CQRS", category: "Microservices & Architecture", proficiency: 3 },
    // { name: "Event Sourcing", category: "Microservices & Architecture", proficiency: 3 },

    // API Design & Architecture
    { name: "REST API Design", category: "Microservices & Architecture", proficiency: 5 },
    { name: "API Versioning", category: "Microservices & Architecture", proficiency: 5 },
    { name: "API Gateway", category: "Microservices & Architecture", proficiency: 3 },
    { name: "Load Balancing", category: "Microservices & Architecture", proficiency: 3 },

    // Messaging & Event-Driven Systems
    { name: "RabbitMQ", category: "Microservices & Architecture", proficiency: 3 },
    { name: "Kong (API Gateway)", category: "Microservices & Architecture", proficiency: 3 },

    // Containerization & Deployment
    { name: "Docker", category: "Microservices & Architecture", proficiency: 4 },
    { name: "Docker Compose", category: "Microservices & Architecture", proficiency: 4 },

    // Caching & Optimization
    { name: "Redis", category: "Microservices & Architecture", proficiency: 4 },



    // DevOps & Tools

    { name: "CI/CD with GitHub Actions", category: "DevOps & Tools", proficiency: 4 },
    { name: "Docker", category: "DevOps & Tools", proficiency: 4 },
    { name: "Docker Compose", category: "DevOps & Tools", proficiency: 4 },
    { name: "Netlify", category: "DevOps & Tools", proficiency: 5 },
    { name: "Vercel", category: "DevOps & Tools", proficiency: 5 },



    // Soft Skills
    { name: "Communication", category: "Soft Skills", proficiency: 5 },
    { name: "Teamwork", category: "Soft Skills", proficiency: 5 },
    { name: "Fast Learning", category: "Soft Skills", proficiency: 5 },
    { name: "Adaptability", category: "Soft Skills", proficiency: 5 },
    { name: "Problem Solving", category: "Soft Skills", proficiency: 5 },
    { name: "Time Management", category: "Soft Skills", proficiency: 5 },

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
        title: "WordPress Developer – CMS Customization",
        company: "Freelancer, Remote (Level 2 Seller on Fiverr)",
        location: "Remote",
        startDate: "2020-06",
        endDate: "2022-12",
        description: [
            "Designed & customized WordPress websites using Elementor, WP Bakery, and custom themes",
            "Delivered 60+ client projects with 5-star ratings",
            "Built landing pages, blogs, business sites, WooCommerce & optimized speed/SEO",
            "Created graphic design assets using Photoshop and Illustrator",
            "Worked directly with international clients and managed the full project lifecycle",
        ],
    },
]

export const services: Service[] = [
    {
        title: "Full Stack Web Development",
        description: "End-to-end web application development using modern JavaScript stack",
        deliveryTime: "2-6 weeks",
        // priceRange: "$2000 - $8000",
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
        // priceRange: "$1000 - $4000",
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
        // priceRange: "$1500 - $5000",
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
        // priceRange: "$500 - $2000",
        features: [
            "Performance audit and optimization",
            "SEO improvements",
            "Security assessment",
            "Code review and refactoring",
            "Best practices implementation",
        ],
    },
]

export const education: Education[] = [
    {
        degree: "Bachelor of Business Administration (BBA)",
        institution: "National University",
        location: "Bangladesh",
        major: "Marketing",
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

export function getEducation(): Education[] {
    return education
}

export function getServices(): Service[] {
    return services
}
