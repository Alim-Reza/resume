import React from 'react';
import { resumeData } from '../data/resumeData';
import styles from './OneColumnResume.module.css';

export const OneColumnResume = () => {
    return (
        <div className={styles.container}>
            {/* Header Section */}
            <header className={styles.header}>
                <h1>{resumeData.headerData.name}</h1>
                <h2>{resumeData.headerData.title}</h2>
                <div className={styles.links}>
                    {resumeData.headerData.links.map((link, index) => (
                        <div key={index} className={styles.link}>
                            {link.icon && React.createElement(link.icon)} {link.value}
                        </div>
                    ))}
                </div>
            </header>

            {/* Summary Section */}
            <section className={styles.summary}>
                <p>{resumeData.summary}</p>
            </section>

            {/* Experience Section */}
            <section className={styles.section}>
                <h2>Professional Experience</h2>
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className={styles.experienceItem}>
                        <div className={styles.header}>
                            <h3>{exp.title} - {exp.company}</h3>
                            <span>{exp.date} | {exp.location}</span>
                        </div>
                        <p>{exp.description}</p>
                        <ul>
                            {exp.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Skills Section */}
            <section className={styles.section}>
                <h2>Technical Skills</h2>
                <div className={styles.skills}>
                    {resumeData.skills.map((skill, index) => (
                        <span key={index} className={styles.skill}>{skill}</span>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className={styles.section}>
                <h2>Education</h2>
                {resumeData.education.map((edu, index) => (
                    <div key={index} className={styles.educationItem}>
                        <h3>{edu.degree}</h3>
                        <p>{edu.uni}</p>
                        <span>{edu.date} | {edu.location}</span>
                    </div>
                ))}
            </section>
        </div>
    );
};