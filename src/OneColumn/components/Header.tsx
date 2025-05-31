import React from 'react';
interface HeaderData {
    // name: string;
    // website: string;
    // email: string;
    // phone: string;
    name: string;
    title: string;
    links: HeaderLink[];
}
interface HeaderLink {
    // icon: IconType;
    value: string;
}
import styles from '../OneColumnResume.module.css';

interface HeaderProps {
    headerData: HeaderData;
}

export const Header: React.FC<HeaderProps> = ({ headerData }) => (
    <header className={styles.header}>
        <div className={styles.headerTable}>
            <div className={styles.headerLeft}>
                <h1>
                    <a href={headerData.links[2].value}>{headerData.name}</a>
                </h1>
                <div>Software Engineer | Full-Stack</div>
                <div>6 yoe | FinTech | ERP</div>

            </div>
            <div className={styles.headerRight}>
                <div>
                    Email: <a href={`mailto:${headerData.links[0].value}`}>{headerData.links[0].value}</a>
                </div>
                <div>
                    Mobile: {headerData.links[1].value}
                </div>
                <a href={headerData.links[2].value}>{headerData.links[2].value}</a>
                <a href={headerData.links[3].value}>{headerData.links[3].value}</a>
            </div>
        </div>
    </header>
);