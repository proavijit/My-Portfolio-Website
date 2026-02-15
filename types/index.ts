export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    coverImage: string;
    screenshots: string[];
    tags: string[];
    techStack: string[];
    repoUrl?: string;
    liveUrl?: string;
    featured: boolean;
    problem?: string;
    solution?: string;
    role?: string;
    outcome?: string;
    architecture?: string;
    createdAt: string;
}

export interface Skill {
    name: string;
    category: 'Frontend Development' | 'Backend Development' | 'Databases' | 'Microservices & Architecture' | 'DevOps & Tools' | 'Soft Skills';
    proficiency: 1 | 2 | 3 | 4 | 5;
    icon?: string;
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string[];
    current?: boolean;
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    major?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}

export interface Service {
    title: string;
    description: string;
    deliveryTime: string;
    priceRange?: string;
    features: string[];
    icon?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
