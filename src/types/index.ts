export type AcademicYear = "2024-2025" | "2025-2026" | "2026-2027";
export type EventCategory = "Eğitim" | "Teknik" | "Panel" | "Gezi" | "Yarışma" | "Sosyal" | "Topluluk buluşması" | "Datathon";

export interface SiteConfig {
    contact: {
        email: string;
        addressDetail: string;
        shortAddress: string;
    };
    social: {
        instagram: string;
        linkedin: string;
        github: string;
        whatsapp: string;
    };
}

export interface CommunityEvent {
    id: number;
    slug: string;
    date: string;
    isoDate?: string;
    academicYear: AcademicYear;
    category: EventCategory;
    location: string;
    title: string;
    summary: string;
    description: string;
    image: string;
    gallery?: string[];
    href?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    unit: string;
    isFeatured: boolean;
    github?: string;
    linkedin?: string;
    email?: string;
    instagram?: string;
    photo?: string;
}

export interface Sponsor {
    name: string;
    logo: string;
}

export interface UnitDetail {
    shortDesc: string;
    description: string;
    question: string;
}