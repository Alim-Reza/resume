import { IconType } from 'react-icons';

export interface HeaderLink {
    icon: IconType;
    value: string;
}

export interface HeaderData {
    name: string;
    title: string;
    links: HeaderLink[];
}

export interface Experience {
    title: string;
    company: string;
    date: string;
    location: string;
    description: string;
    points: string[];
}

export interface Education {
    degree: string;
    uni: string;
    date: string;
    location: string;
}

export interface Achievement {
    title: string;
    icon: ReactNode;
    description: string;
}

export interface Project {
    title: string;
    date: string;
    description: string;
    points: string[];
}

export interface ResumeData {
    headerData: HeaderData;
    summary: string;
    experience: Experience[];
    education: Education[];
    achievements: Achievement[];
    skills: string[];
    projects: Project[];
}