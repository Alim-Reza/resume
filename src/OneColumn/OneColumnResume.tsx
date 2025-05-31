import React from 'react';
import { resumeData } from '../data/resumeData';
import styles from './OneColumnResume.module.css';
import { Header } from './components/Header';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';

export const OneColumnResume = () => {
    return (
        <div className={styles.container}>
            <Header 
                headerData={{
                    ...resumeData.headerData
                }} 
            />
            <Experience experience={resumeData.experience} />
            <Skills skills={resumeData.skills} />
            <Education education={resumeData.education} />
        </div>
    );
};