import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Resume Layout Options</h1>
            <div className={styles.buttons}>
                <Link to="/single-column" className={styles.button}>
                    Single Column Layout
                </Link>
                <Link to="/double-column" className={styles.button}>
                    Double Column Layout
                </Link>
            </div>
        </div>
    );
};