import React from 'react';
interface ExperienceType {
    company: string;
    title: string;
    location: string;
    date: string;
    description: string;
    points: string[];
}
import styles from '../OneColumnResume.module.css';

interface ExperienceProps {
    experience: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => (
    <section className={styles.section}>
        <h2>Experience</h2>
        <div className={styles.sectionContent}>
            {experience.map((exp, index) => (
                <div key={index} className={styles.subheading}>
                    <div className={styles.subheadingTable}>
                        <div className={styles.subheadingLeft}>
                            <div className={styles.bold}>{exp.company}</div>
                            <div className={styles.italic}>{exp.title}</div>
                        </div>
                        <div className={styles.subheadingRight}>
                            <div className={styles.italic}>{exp.location}</div>
                            <div className={styles.italic}>{exp.date}</div>
                        </div>
                    </div>
                    <p>{exp.description}</p>
                    <ul className={styles.itemList}>
                        {exp.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);