import { GrDocumentPerformance } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { VscMention } from "react-icons/vsc";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";




export const ResumeDataV2 = {

    headerData: {
        name: "Alim Ahmed Reza",
        title: "Software Engineer",
        links: [
            {
                icon: <VscMention style={{ marginTop: '3px', marginRight: '3px', color: '#098bff' }} />,
                value: "reza.alimahmed@gmail.com"
            },
            {
                icon: <FaPhoneAlt style={{ marginTop: '1px', marginRight: '3px', color: '#098bff' }} />,
                value: "+8801778746494"
            },
            {
                // icon: <FaLinkedin />,
                icon: <FaLink style={{ marginTop: '3px', marginRight: '3px', color: '#098bff' }} />,
                value: "linkedin.com/in/alim-ahmed-reza-asif"
            },
            {
                // icon: <FaGithub />,
                icon: <FaLink style={{ marginTop: '3px', marginRight: '3px', color: '#098bff' }} />,
                value: "github.com/Alim-Reza"
            },
            {
                icon: <FaLink style={{ marginTop: '3px', marginRight: '3px', color: '#098bff' }} />,
                value: "hackerrank.com/aarasif2"
            }
        ]
    },

    summary: "Experienced software engineer with 6+ years in frontend and backend web development. Proven track record in delivering innovative solutions, enhancing system performance, and improving security across high-profile projects",
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

    education: [
        {
            degree: "Master of Science in Computer Science & Engineering",
            uni: "North South University",
            date: "01/2025 - Ongoing",
            location: "Dhaka, Bangladesh"
        },
        {
            degree: "Bachelor of Science in Computer Science & Engineering",
            uni: "American International University - Bangladesh",
            date: "01/2016 - 01/2020",
            location: "Dhaka, Bangladesh"
        },
    ],

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
        // "RabbitMQ",
        "Git",
        "Bash",
        "Jenkins",
        // "Optimization",
        // "Security",
        "Unit Testing",
        "E2E Testing",
        "JUnit",
        "Protractor",
        "Docker"
    ],



    projects: [
        {
            title: "CMS",
            date: "(backend)",
            points: [
                "card management system for banking application integration. ",
                "substantially improved data fetching policies in read heavy apis."
            ]
        },
        {
            title: "Kona Integrated Portal",
            date: "(backend)",
            points: [
                "Multi tenant portal to onboard and manage clients of fintech industry",
                "Improved notification system (backend) by increasing speed."
            ]
        },
        {
            title: "Kona Plate",
            date: "(frontend)",
            points: [
                "Open api platform for selling and sandbox testing api.",
                "developed complex tree style viewing component."
            ]
        },
        {
            title: "Kona Token Trade",
            date: "(frontend + App)",
            points: [
                "cryptocurrency trading platform.",
                "developed features for multilateral trading view and buy-sell.",
                "Participated in Converting project from js based React to ts based NextJs",
                "implemented security features to prevent XSS."
            ]
        },
        {
            title: "GRP",
            date: "(frontend + backend)",
            points: [
                "Government scale ERP Solution, pilotted on Planning division.",
                "Full Stack Development.",
                "created robust reporting module in django.",
                "created bash script to automate task for the whole team to increase efficiency.",
                "Created automated deployment pipeline.",
                "Conducted and participated in Stakeholder meetings to remove bottleneck of understanding and implement client needs and demands."
            ]
        }
    ]





};