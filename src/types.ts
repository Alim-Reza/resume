export interface HeaderData {
    name: string;
    website: string;
    email: string;
    phone: string;
}

export interface Education {
    uni: string;
    degree: string;
    location: string;
    date: string;
}

export interface Experience {
    company: string;
    title: string;
    location: string;
    date: string;
    description: string;
    points: string[];
}