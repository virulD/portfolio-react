
import { Github, Linkedin, Globe, Code2, Server, Layout, Database, Smartphone, Layers, Flame, Palette, GitBranch } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Virul De Silva",
        role: "Full-Stack Web Developer",
        tagline: "Building digital experiences that matter.",
        description: "I'm a Full-Stack Developer from Sri Lanka with years of experience in building scalable web/mobile applications. I turn complex problems into beautiful, functional interfaces.",
        socials: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/virul-akbo-de-silva-64a693255",
                icon: Linkedin
            },
            {
                name: "GitHub",
                url: "https://github.com/virulD",
                icon: Github
            },
            {
                name: "Fiverr",
                url: "https://www.fiverr.com/virul_ad",
                icon: Globe // Using generic globe for Fiverr if specific icon isn't available
            }
        ]
    },
    skills: [
        { name: "React", icon: Code2, level: "Expert" },
        { name: "React Native", icon: Smartphone, level: "Advanced" },
        { name: "NextJS", icon: Layers, level: "Expert" },
        { name: "NodeJS", icon: Server, level: "Advanced" },
        { name: "MongoDB", icon: Database, level: "Advanced" },
        { name: "MySQL", icon: Database, level: "Advanced" },
        { name: "Firebase", icon: Flame, level: "Advanced" },
        { name: "Tailwind CSS", icon: Palette, level: "Advanced" },
        { name: "Git", icon: GitBranch, level: "Advanced" },
        { name: "GitHub", icon: Github, level: "Advanced" },
    ],
    navLinks: [
        { name: "Home", path: "/" },
        { name: "About Me", path: "/about-me" },
        { name: "Services", path: "/services" }
    ],
    about: {
        title: "About Me",
        description: [
            "Hi, I'm Virul Akbo De Silva, an enthusiastic undergraduate student and passionate full-stack web developer. I specialize in designing and building dynamic, user-friendly websites and web applications using modern technologies.",
            "I have experience working with both front-end and back-end frameworks, including React, Node.js, and MongoDB, and I enjoy creating seamless experiences that bridge the gap between design and functionality. My projects reflect my commitment to writing clean, efficient code and my constant drive to learn and improve.",
            "I'm excited to collaborate on innovative projects, tackle challenging problems, and contribute to creating meaningful digital solutions."
        ]
    },
    services: [
        {
            title: "Frontend Development",
            description: "Crafting responsive, intuitive, and visually appealing user interfaces using modern frameworks like React. Ensuring seamless user experiences with clean, efficient, and maintainable code.",
            icon: Layout
        },
        {
            title: "Backend Development",
            description: "Building robust, scalable, and secure server-side applications using Node.js and Java Spring Boot. Integrating APIs and managing databases like MongoDB and MySQL for efficient data handling.",
            icon: Server
        },
        {
            title: "Full-Stack Web Development",
            description: "Developing complete end-to-end solutions, from interactive frontends to powerful backends. Ensuring secure and efficient data exchange for enhanced functionality.",
            icon: Code2
        }
    ]
};
