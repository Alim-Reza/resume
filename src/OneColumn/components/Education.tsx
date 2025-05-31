import React from 'react';
interface Education {
    uni: string;
    degree: string;
    location: string;
    date: string;
}
import styles from '../OneColumnResume.module.css';

interface EducationProps {
    education: Education[];
}

export const Education: React.FC<EducationProps> = ({ education }) => (
    <section className={styles.section}>
        <h2>Education</h2>
        <div className={styles.sectionContent}>
            {education.map((edu, index) => (
                <div key={index} className={styles.subheading}>
                    <div className={styles.subheadingTable}>
                        <div className={styles.subheadingLeft}>
                            <div className={styles.bold}>{edu.uni}</div>
                            <div className={styles.italic}>{edu.degree}</div>
                        </div>
                        <div className={styles.subheadingRight}>
                            <div className={styles.italic}>{edu.location}</div>
                            <div className={styles.italic}>{edu.date}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);