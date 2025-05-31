import React from 'react';
import styles from '../OneColumnResume.module.css';

interface SkillsProps {
    skills: string[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => (
    <section className={styles.section}>
        <h2>Technical Skills</h2>
        <div className={styles.skills}>
            {skills.map((skill, index) => (
                <span key={index} className={styles.skill}>{skill}</span>
            ))}
        </div>
    </section>
);