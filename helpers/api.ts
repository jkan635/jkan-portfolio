// "api" manager, just store the changing data here

import { Education, Resume, Skills, WorkExperience } from "../models/Resume";

const experiences: WorkExperience[] = [
    {
        name: "Verdict MMA",
        imageURL: "",
        title: "Senior Full Stack Engineer",
        location: "Remote",
        startDate: new Date(2021,  9),
        endDate: new Date(2023, 10),
        points: [
            "Worked on the teams backend Node.js server, React front-end web app, and iOS mobile client using Swift to develop new features, increasing MAU by 100,000, maintaining a 4.9 rating on the Apple App Store, and elevating unit test coverage by 20% to ensure robust and reliable software quality.",
            "Launched a real-money betting platform for MMA, integrating third-party user payment and verification systems to ensure secure transactions and compliance.",
            "Implemented a BFF architecture for the web app and mobile clients, improving performance, security, and ease of development.",
            "Added Storybook to the CI/CD pipeline using GitHub Actions to help streamline front-end testing and development, and to solidify a mobile-first design system within the web app."
        ],
        skills: ["Swift", "React", "Node.js", "Express", "Typescript", "Javascript", "HTML/CSS", "SQL", "Tailwind", "Git", "Storybook", "Strapi", "XCode", "GitHub Actions", ]
    },
    {
        name: "Deloitte",
        imageURL: "",
        title: "Consultant",
        location: "Fredericton, NB",
        startDate: new Date(2020,  0),
        endDate: new Date(2021, 9),
        points: [
            "Was the primary Android developer for a public health app with over 100,000 downloads on Google Play.",
            "Implemented back-end features for various projects using AWS Lambda serverless functions.",
            "Implemented features on React and Vue.js front ends.",
            "Created real-time chat functionality using AWS AppSync."
        ],        
        skills: ["Kotlin", "Python", "Java", "React", "Node.js", "Express", "Javascript", "AWS", "HTML/CSS", "Material-UI", "SQL", "Android SDK", "Git"]
    },
    {
        name: "Government of Canada",
        imageURL: "",
        title: "Software Developer",
        location: "Ottawa, ON",
        startDate: new Date(2018,  0),
        endDate: new Date(2018, 7),
        points: [
            "Led the UI/UX design for a proof of concept project.",
            "Used Grafana and D3 to create dashboards to visualize large data sets, sent to and from industry partners.",
            "Helped migrate several large projects to Microsoft Azure.",
        ],        
        skills: ["Python", "Java", "Vue.js", "Javascript", "Microsoft Azure", "HTML/CSS", "Bootstrap", "SQL", "Git"]
    },
    {
        name: "Skillsoft",
        imageURL: "",
        title: "Technical Content Review",
        location: "Fredericton, NB",
        startDate: new Date(2017,  4),
        endDate: new Date(2017, 10),
        points: [
            "Researched and developed course materials for e-learning courses, such as videos, testing materials, and coding samples.",
            "Flagged and fixed errors for pre-existing course materials.",
        ],        
        skills: ["Python", "Java", "Javascript", "HTML/CSS", "SQL"]
    },
    {
        name: "UNB",
        imageURL: "",
        title: "Desktop Management Group",
        location: "Fredericton, NB,",
        startDate: new Date(2016,  0),
        endDate: new Date(2016, 8),
        points: [
            "Applied and maintained the standard UNB image on all purchased systems.",
            "Provided level 2 tech support for various faculties around the campus.",
        ],        
        skills: []
    },
]

const education: Education = {
    name: "University of New Brunswick",
    imageURL: "",
    degree: "Bachelors of Computer Science",
    startDate: new Date(2014, 8),
    endDate: new Date(2019, 9)
}

const skills: Skills[] = [
    {
        type: "Programming Languages",
        skills: ["Swift", "Kotlin", "Python", "Java", "Typescript", "Javascript", "HTML/CSS", "SQL"]
    },
    {
        type: "Technologies",
        skills: ["AWS", "Microsoft Azure", "Git", "Android SDK", "Xcode", "Strapi", "GitHub Actions"]
    },
    {
        type: "Frameworks",
        skills: ["Node.js", "Express", "React", "Next.js", "Tailwind", "Storybook", "Vue.JS", "Material-UI", "Bootstrap"]
    },
]

export const resume: Resume = {
    name: "Jonathan Kan",
    location: "Fredericton, New Brunswick, Canada",
    email: "Jonathan.K.Kan@gmail.com",
    linkedInURL: "https://www.linkedin.com/in/jonathan-k-kan/",
    experiences,
    education,
    skills
};
