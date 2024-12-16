import { GrDocumentPerformance } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";




export const ResumeDataV2 = {

    headerData : {
        name: "Alim Ahmed Reza",
        title: "Software Engineer",
        links: [
            {
                icon: <IoIosMailOpen />,
                value: "reza.alimahmed@gmail.com"
            },
            {
                icon: <FaPhoneAlt />,
                value: "+8801778746494"
            },
            {
                icon: <FaGithub />,
                value: "github.com/Alim-Reza"
            },
            {
                icon: <FaLinkedin />,
                value: "linkedin.com/in/alim-ahmed-reza-asif"
            },
            {
                icon: <FaLink />,
                value: "hackerrank.com/aarasif2"
            }
        ]
    },

    summary: "Experienced software engineer with 5+ years in frontend and backend web development. Proven track record in delivering innovative solutions, enhancing system performance, and improving security across high-profile projects",
    experience: [
        {
            title: "Sr. Software Engineer",
            company: "Kona Software Lab Ltd",
            date: "04/2022 - Ongoing",
            location: "Dhaka, Bangladesh",
            description: "A software development company focused on creating fintech solutions.",
            points: [
            "Redesigned the UI for the user-facing site and product management portal of the cryptocurrency trading platform, improving client satisfaction by 70%, while developing a Flutter app to enhance cross-platform engagement.",
            "Redesigned and developed a notification service for the fintech client and admin sites, boosting user engagement by 80% and reducing support tickets by 15%.",
            "Refactored and developed Spring Boot services using JUnit, achieving 75% unit test coverage overall and enhancing code reliability and maintainability.",
            "Conducted proactive code reviews and introduced SonarQube to enhance code quality and streamline the review, process."
            ]
        },
        {
            title: "Software Engineer",
            company: "RedDot Digital Ltd",
            date: "07/2021 - 04/2022",
            location: "Dhaka, Bangladesh",
            description: "A digital solutions provider focusing on telecom services.",
            points: [
            "Maintained development and deployment processes for telecom solutions, achieving a 95% on-time deployment rate and reducing post-release issues by 25%.",
            "Enabled integration of payment services into client websites."
            ]
        },
        {
            title: "Software Engineer",
            company: "CoKreates Ltd",
            date: "05/2019 - 07/2021",
            location: "Dhaka, Bangladesh",
            description: "A company specializing in governmental software solutions.",
            points: [
            "Contributed to full-stack development of a microservice-based ERP solution, supporting requirement analysis and participating in stakeholder meetings, resulting in a 25% reduction in bottlenecks and a 15% improvement in system scalability and performance.",
            "Authored bash scripts and automated deployment pipelines to improve developer experience within the team."
            ]
        }
        
    ],

    education: {
        degree: "Bachelor of Science in Computer Science & Engineering",
        uni: "American International University - Bangladesh",
        date: "01/2016 - 01/2020",
        location: "Dhaka, Bangladesh"
    },

achievements: [
    {
        title: "Performance Improvement",
        icon: <FaBoltLightning />,
        description: "Enhanced data fetching, reducing load times by 30% and improving UI experience."
    },
    {
        title: "Deployment Automation",
        icon: <FaStar />,
        description: "Automated deployment pipeline with Jenkins."
    },
    {
        title: "Security Enhancement",
        icon: <MdOutlineSecurity />,
        description: "Prevented XSS vulnerabilities through strict content security policies and sanitization."
    }    
],

skills: [
    "Spring-Boot",
    "ReactJs",
    "NextJs",
    "Angular",
    "Microservice",
    "Redis",
    "Kafka",
    "RabbitMQ",
    "Git",
    "Bash",
    "Jenkins",
    "Optimization",
    "Security",
    "Unit Testing",
    "E2E Testing",
    "JUnit",
    "Protractor",
    "Docker"
],



projects: [
    {
        title: "Kona Token Trade and Integrated Platform",
        date: "04/2022 - 01/1970",
        description: "Development of cryptocurrency trading platform and business configuration portal.",
        points: [
            "Kona Token Trade, a cryptocurrency trading platform with the ability to buy and sell NFTs.",
            "Kona Integrated Platform - Portal, a portal site to maintain business configuration."
        ]
    },
    {
        title: "eGRP",
        date: "05/2019 - 07/2021",
        description: "ERP solution contributing to various modules in a government project.",
        points: [
            "eGRP, an ERP solution developed for the government of Bangladesh with focus on Asset, Budget, and Audit modules."
        ]
    }
]





};