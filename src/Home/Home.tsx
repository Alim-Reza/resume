import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => {
    return (
        <>
            <div className={styles.cursorGlow} id={styles.cursorGlow}></div>

            <nav id={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.logo}>Alim Ahmed Reza</div>
                    <ul className={styles.navLinks}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <section id={styles.home} className={styles.hero}>
                <div className={styles.heroBg}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Crafting Digital Excellence</h1>
                    <p className={styles.heroSubtitle}>
                        Senior Software Engineer with 6+ years of experience delivering innovative fintech solutions and scalable web applications
                    </p>
                    <div className={styles.ctaContainer}>
                        <a href="#projects" className={styles.btnPrimary}>View My Work</a>
                        <a href="#contact" className={styles.btnSecondary}>Let's Connect</a>
                    </div>
                </div>
                <div className={styles.scrollIndicator}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </section>

            <section id={styles.experience} className={styles.section}>
                <h2 className={styles.sectionTitle}>Professional Journey</h2>
                <div className={styles.experienceTimeline}>
                    {/* First Experience */}
                    <div className={styles.experienceItem}>
                        <div className={styles.experienceDate}>2022 - Present</div>
                        <div className={styles.experienceContent}>
                            <div className={styles.experienceHeader}>
                                <h3 className={styles.experienceTitle}>Sr. Software Engineer</h3>
                                <div className={styles.experienceCompany}>Kona Software Lab Ltd</div>
                            </div>
                            <p className={styles.experienceDesc}>
                                Leading fintech solutions development with focus on cryptocurrency trading platforms.
                            </p>
                            <div className={styles.experienceAchievements}>
                                <div className={styles.achievementItem}>
                                    <span className={styles.achievementNumber}>70%</span>
                                    <span className={styles.achievementText}>Client satisfaction improvement through UI redesign</span>
                                </div>
                                <div className={styles.achievementItem}>
                                    <span className={styles.achievementNumber}>80%</span>
                                    <span className={styles.achievementText}>User engagement boost via notification service</span>
                                </div>
                                <div className={styles.achievementItem}>
                                    <span className={styles.achievementNumber}>75%</span>
                                    <span className={styles.achievementText}>Unit test coverage achieved</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Experience */}
                    <div className={styles.experienceItem}>
                        <div className={styles.experienceDate}>2021 - 2022</div>
                        <div className={styles.experienceContent}>
                            <div className={styles.experienceHeader}>
                                <h3 className={styles.experienceTitle}>Software Engineer</h3>
                                <div className={styles.experienceCompany}>RedDot Digital Ltd</div>
                            </div>
                            <p className={styles.experienceDesc}>
                                Maintained telecom solutions with 95% on-time deployment rate and 25% reduction in post-release issues.
                            </p>
                        </div>
                    </div>

                    {/* Third Experience */}
                    <div className={styles.experienceItem}>
                        <div className={styles.experienceDate}>2019 - 2021</div>
                        <div className={styles.experienceContent}>
                            <div className={styles.experienceHeader}>
                                <h3 className={styles.experienceTitle}>Software Engineer</h3>
                                <div className={styles.experienceCompany}>CoKreates Ltd</div>
                            </div>
                            <p className={styles.experienceDesc}>
                                Full-stack development of microservice-based ERP solutions for government sector, achieving 25% bottleneck reduction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.skills} className={styles.section}>
                <h2 className={styles.sectionTitle}>Technical Expertise</h2>
                <div className={styles.skillsCategories}>
                    <div className={styles.skillCategory}>
                        <h3 className={styles.categoryTitle}>Frontend</h3>
                        <div className={styles.skillsTags}>
                            <span className={styles.skillTag}>ReactJS</span>
                            <span className={styles.skillTag}>NextJS</span>
                            <span className={styles.skillTag}>Angular</span>
                        </div>
                    </div>
                    <div className={styles.skillCategory}>
                        <h3 className={styles.categoryTitle}>Backend</h3>
                        <div className={styles.skillsTags}>
                            <span className={styles.skillTag}>Spring Boot</span>
                            <span className={styles.skillTag}>Microservices</span>
                            <span className={styles.skillTag}>Redis</span>
                            <span className={styles.skillTag}>Kafka</span>
                        </div>
                    </div>
                    <div className={styles.skillCategory}>
                        <h3 className={styles.categoryTitle}>DevOps & Tools</h3>
                        <div className={styles.skillsTags}>
                            <span className={styles.skillTag}>Docker</span>
                            <span className={styles.skillTag}>Jenkins</span>
                            <span className={styles.skillTag}>Git</span>
                            <span className={styles.skillTag}>Bash</span>
                        </div>
                    </div>
                    <div className={styles.skillCategory}>
                        <h3 className={styles.categoryTitle}>Testing</h3>
                        <div className={styles.skillsTags}>
                            <span className={styles.skillTag}>JUnit</span>
                            <span className={styles.skillTag}>Unit Testing</span>
                            <span className={styles.skillTag}>E2E Testing</span>
                            <span className={styles.skillTag}>Protractor</span>
                        </div>
                    </div>
                </div>

                <div className={styles.skillsGrid}>
                    <div className={styles.skillCard}>
                        <div className={styles.skillIcon}>⚛️</div>
                        <h3 className={styles.skillTitle}>Frontend Development</h3>
                        <p className={styles.skillDesc}>
                            Creating dynamic user interfaces with React.js, Next.js, and Angular. Specialized in cryptocurrency trading platforms and fintech solutions with enhanced UX.
                        </p>
                    </div>
                    <div className={styles.skillCard}>
                        <div className={styles.skillIcon}>🚀</div>
                        <h3 className={styles.skillTitle}>Backend Architecture</h3>
                        <p className={styles.skillDesc}>
                            Building robust microservices with Spring Boot, implementing Redis caching, and Kafka messaging. Expert in ERP systems and government-scale applications.
                        </p>
                    </div>
                    <div className={styles.skillCard}>
                        <div className={styles.skillIcon}>☁️</div>
                        <h3 className={styles.skillTitle}>DevOps & Testing</h3>
                        <p className={styles.skillDesc}>
                            Automated deployment pipelines with Jenkins and Docker. Achieving 75% unit test coverage with JUnit and implementing comprehensive E2E testing strategies.
                        </p>
                    </div>
                </div>
            </section>

            <section id={styles.projects} className={styles.section}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.projectsGrid}>
                    <div className={styles.projectCard}>
                        <div className={styles.projectImage}>₿</div>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>Kona Token Trade Platform</h3>
                            <p className={styles.projectDesc}>
                                Comprehensive cryptocurrency trading platform with NFT marketplace capabilities and business configuration portal. Improved client satisfaction by 70% through UI redesign.
                            </p>
                            <div className={styles.projectTech}>
                                <span className={styles.techTag}>React.js</span>
                                <span className={styles.techTag}>Spring Boot</span>
                                <span className={styles.techTag}>Flutter</span>
                                <span className={styles.techTag}>Microservices</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.projectCard}>
                        <div className={styles.projectImage}>🏛️</div>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>eGRP - Government ERP</h3>
                            <p className={styles.projectDesc}>
                                Large-scale ERP solution for the Government of Bangladesh focusing on Asset, Budget, and Audit modules. Achieved 25% reduction in bottlenecks and 15% performance improvement.
                            </p>
                            <div className={styles.projectTech}>
                                <span className={styles.techTag}>Microservices</span>
                                <span className={styles.techTag}>Spring Boot</span>
                                <span className={styles.techTag}>Angular</span>
                                <span className={styles.techTag}>Redis</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.projectCard}>
                        <div className={styles.projectImage}>🔔</div>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>Notification Service</h3>
                            <p className={styles.projectDesc}>
                                Redesigned notification system for fintech platforms boosting user engagement by 80% and reducing support tickets by 15%. Cross-platform compatibility ensured.
                            </p>
                            <div className={styles.projectTech}>
                                <span className={styles.techTag}>Spring Boot</span>
                                <span className={styles.techTag}>Kafka</span>
                                <span className={styles.techTag}>Redis</span>
                                <span className={styles.techTag}>JUnit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.contact} className={`${styles.section} ${styles.contact}`}>
                <div className={styles.contactContent}>
                    <h2 className={styles.contactTitle}>Let's Build Something Amazing</h2>
                    <p className={styles.contactDesc}>
                        Experienced in fintech solutions, government-scale ERP systems, and high-performance web applications. Ready to tackle your next challenging project.
                    </p>
                    <div className={styles.ctaContainer}>
                        <a href="mailto:reza.alimahmed@gmail.com" className={styles.btnPrimary}>Get In Touch</a>
                    </div>
                    <div className={styles.socialLinks} style={{ marginTop: '40px' }}>
                        <a href="mailto:reza.alimahmed@gmail.com" className={styles.socialLink} title="Email">📧</a>
                        <a href="https://linkedin.com/in/alim-ahmed-reza-asif" className={styles.socialLink} title="LinkedIn">💼</a>
                        <a href="https://github.com/Alim-Reza" className={styles.socialLink} title="GitHub">🐙</a>
                        <a href="https://hackerrank.com/aarasif2" className={styles.socialLink} title="HackerRank">🏆</a>
                    </div>
                </div>
            </section>
        </>
    );
};
