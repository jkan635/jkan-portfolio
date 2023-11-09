export type Resume = {
    name: string;
    location: string;
    email: string;
    linkedInURL: string;
    experiences: WorkExperience[];
    education: Education;
    skills: Skills[];
}

export type WorkExperience = {
    name: string;
    imageURL: string;
    title: string;
    location: string;
    startDate: Date;
    endDate: Date;
    points: string[];
    skills: string[];
}

export type Education = {
    name: string;
    imageURL: string;
    degree: string;
    startDate: Date;
    endDate: Date;
}

export type Skills = {
    type: string;
    skills: string[];
}