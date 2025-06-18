
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Alex Chen - Full Stack Developer</title>
//     <style>
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         body {
//             font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//             background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
//             color: #ffffff;
//             overflow-x: hidden;
//         }

//         .cursor-glow {
//             position: fixed;
//             width: 300px;
//             height: 300px;
//             background: radial-gradient(circle, rgba(88, 147, 255, 0.15) 0%, transparent 70%);
//             border-radius: 50%;
//             pointer-events: none;
//             z-index: 1;
//             transition: transform 0.1s ease;
//         }

//         nav {
//             position: fixed;
//             top: 0;
//             width: 100%;
//             padding: 20px 5%;
//             backdrop-filter: blur(20px);
//             background: rgba(10, 10, 10, 0.8);
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//             z-index: 1000;
//             transition: all 0.3s ease;
//         }

//         nav.scrolled {
//             padding: 15px 5%;
//             background: rgba(10, 10, 10, 0.95);
//         }

//         .nav-container {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             max-width: 1400px;
//             margin: 0 auto;
//         }

//         .logo {
//             font-size: 24px;
//             font-weight: 700;
//             background: linear-gradient(45deg, #5893ff, #00d4ff);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//         }

//         .nav-links {
//             display: flex;
//             gap: 40px;
//             list-style: none;
//         }

//         .nav-links a {
//             color: rgba(255, 255, 255, 0.8);
//             text-decoration: none;
//             font-weight: 500;
//             transition: all 0.3s ease;
//             position: relative;
//         }

//         .nav-links a:hover {
//             color: #5893ff;
//             transform: translateY(-2px);
//         }

//         .nav-links a::after {
//             content: '';
//             position: absolute;
//             bottom: -5px;
//             left: 0;
//             width: 0;
//             height: 2px;
//             background: linear-gradient(45deg, #5893ff, #00d4ff);
//             transition: width 0.3s ease;
//         }

//         .nav-links a:hover::after {
//             width: 100%;
//         }

//         .hero {
//             height: 100vh;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             position: relative;
//             overflow: hidden;
//         }

//         .hero-bg {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="g" cx="50%" cy="50%"><stop offset="0%" stop-color="%235893ff" stop-opacity="0.1"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23g)"/><circle cx="800" cy="300" r="150" fill="url(%23g)"/><circle cx="400" cy="700" r="120" fill="url(%23g)"/></svg>') no-repeat center;
//             background-size: cover;
//             animation: float 20s ease-in-out infinite;
//         }

//         @keyframes float {
//             0%, 100% { transform: translateY(0px) rotate(0deg); }
//             50% { transform: translateY(-20px) rotate(5deg); }
//         }

//         .hero-content {
//             text-align: center;
//             z-index: 2;
//             max-width: 800px;
//             padding: 0 20px;
//         }

//         .hero-title {
//             font-size: clamp(3rem, 8vw, 6rem);
//             font-weight: 900;
//             margin-bottom: 20px;
//             background: linear-gradient(135deg, #ffffff 0%, #5893ff 50%, #00d4ff 100%);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//             animation: slideInUp 1s ease-out;
//         }

//         .hero-subtitle {
//             font-size: clamp(1.2rem, 3vw, 1.8rem);
//             color: rgba(255, 255, 255, 0.8);
//             margin-bottom: 40px;
//             animation: slideInUp 1s ease-out 0.2s both;
//         }

//         .cta-container {
//             display: flex;
//             gap: 20px;
//             justify-content: center;
//             flex-wrap: wrap;
//             animation: slideInUp 1s ease-out 0.4s both;
//         }

//         .btn {
//             padding: 16px 32px;
//             border: none;
//             border-radius: 50px;
//             font-size: 16px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.3s ease;
//             text-decoration: none;
//             display: inline-block;
//             position: relative;
//             overflow: hidden;
//         }

//         .btn-primary {
//             background: linear-gradient(45deg, #5893ff, #00d4ff);
//             color: white;
//             box-shadow: 0 10px 30px rgba(88, 147, 255, 0.3);
//         }

//         .btn-primary:hover {
//             transform: translateY(-3px);
//             box-shadow: 0 15px 40px rgba(88, 147, 255, 0.4);
//         }

//         .btn-secondary {
//             background: rgba(255, 255, 255, 0.1);
//             color: white;
//             border: 2px solid rgba(255, 255, 255, 0.2);
//             backdrop-filter: blur(10px);
//         }

//         .btn-secondary:hover {
//             background: rgba(255, 255, 255, 0.2);
//             transform: translateY(-3px);
//         }

//         .section {
//             padding: 100px 5%;
//             max-width: 1400px;
//             margin: 0 auto;
//         }

//         .section-title {
//             font-size: clamp(2.5rem, 5vw, 4rem);
//             font-weight: 800;
//             text-align: center;
//             margin-bottom: 60px;
//             background: linear-gradient(45deg, #ffffff, #5893ff);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//         }

//         .skills-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//             gap: 30px;
//             margin-bottom: 80px;
//         }

//         .skill-card {
//             background: rgba(255, 255, 255, 0.05);
//             backdrop-filter: blur(20px);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 20px;
//             padding: 40px;
//             transition: all 0.3s ease;
//             cursor: pointer;
//         }

//         .skill-card:hover {
//             transform: translateY(-10px);
//             background: rgba(255, 255, 255, 0.08);
//             border-color: rgba(88, 147, 255, 0.3);
//             box-shadow: 0 20px 40px rgba(88, 147, 255, 0.2);
//         }

//         .skill-icon {
//             width: 60px;
//             height: 60px;
//             background: linear-gradient(45deg, #5893ff, #00d4ff);
//             border-radius: 15px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin-bottom: 20px;
//             font-size: 24px;
//         }

//         .skill-title {
//             font-size: 24px;
//             font-weight: 700;
//             margin-bottom: 15px;
//             color: #ffffff;
//         }

//         .skill-desc {
//             color: rgba(255, 255, 255, 0.7);
//             line-height: 1.6;
//         }

//         .projects-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
//             gap: 40px;
//         }

//         .project-card {
//             background: rgba(255, 255, 255, 0.05);
//             backdrop-filter: blur(20px);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 20px;
//             overflow: hidden;
//             transition: all 0.3s ease;
//             cursor: pointer;
//         }

//         .project-card:hover {
//             transform: translateY(-10px) scale(1.02);
//             box-shadow: 0 25px 50px rgba(88, 147, 255, 0.2);
//         }

//         .project-image {
//             height: 200px;
//             background: linear-gradient(135deg, #5893ff, #00d4ff);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-size: 48px;
//             color: white;
//         }

//         .project-content {
//             padding: 30px;
//         }

//         .project-title {
//             font-size: 24px;
//             font-weight: 700;
//             margin-bottom: 15px;
//             color: #ffffff;
//         }

//         .project-desc {
//             color: rgba(255, 255, 255, 0.7);
//             line-height: 1.6;
//             margin-bottom: 20px;
//         }

//         .project-tech {
//             display: flex;
//             gap: 10px;
//             flex-wrap: wrap;
//         }

//         .tech-tag {
//             background: rgba(88, 147, 255, 0.2);
//             color: #5893ff;
//             padding: 5px 12px;
//             border-radius: 20px;
//             font-size: 12px;
//             font-weight: 600;
//         }

//         .experience-timeline {
//             position: relative;
//             max-width: 1000px;
//             margin: 0 auto;
//         }

//         .experience-timeline::before {
//             content: '';
//             position: absolute;
//             left: 50%;
//             top: 0;
//             bottom: 0;
//             width: 3px;
//             background: linear-gradient(180deg, #5893ff, #00d4ff);
//             transform: translateX(-50%);
//         }

//         .experience-item {
//             display: flex;
//             align-items: center;
//             margin-bottom: 60px;
//             position: relative;
//         }

//         .experience-item:nth-child(odd) {
//             flex-direction: row;
//         }

//         .experience-item:nth-child(even) {
//             flex-direction: row-reverse;
//         }

//         .experience-date {
//             width: 120px;
//             text-align: center;
//             font-weight: 700;
//             font-size: 14px;
//             color: #5893ff;
//             background: rgba(88, 147, 255, 0.1);
//             padding: 10px 15px;
//             border-radius: 25px;
//             border: 2px solid rgba(88, 147, 255, 0.3);
//             position: relative;
//             z-index: 2;
//         }

//         .experience-content {
//             flex: 1;
//             background: rgba(255, 255, 255, 0.05);
//             backdrop-filter: blur(20px);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 20px;
//             padding: 30px;
//             margin: 0 40px;
//             transition: all 0.3s ease;
//         }

//         .experience-content:hover {
//             transform: translateY(-5px);
//             background: rgba(255, 255, 255, 0.08);
//             box-shadow: 0 20px 40px rgba(88, 147, 255, 0.15);
//         }

//         .experience-header {
//             margin-bottom: 15px;
//         }

//         .experience-title {
//             font-size: 22px;
//             font-weight: 700;
//             color: #ffffff;
//             margin-bottom: 5px;
//         }

//         .experience-company {
//             font-size: 16px;
//             color: #5893ff;
//             font-weight: 600;
//         }

//         .experience-desc {
//             color: rgba(255, 255, 255, 0.8);
//             line-height: 1.6;
//             margin-bottom: 20px;
//         }

//         .experience-achievements {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//             gap: 15px;
//         }

//         .achievement-item {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//         }

//         .achievement-number {
//             font-size: 24px;
//             font-weight: 900;
//             color: #00d4ff;
//             min-width: 50px;
//         }

//         .achievement-text {
//             font-size: 14px;
//             color: rgba(255, 255, 255, 0.7);
//             line-height: 1.4;
//         }

//         .skills-categories {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//             gap: 30px;
//             margin-bottom: 60px;
//         }

//         .skill-category {
//             background: rgba(255, 255, 255, 0.05);
//             backdrop-filter: blur(20px);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 15px;
//             padding: 25px;
//             transition: all 0.3s ease;
//         }

//         .skill-category:hover {
//             transform: translateY(-5px);
//             background: rgba(255, 255, 255, 0.08);
//             border-color: rgba(88, 147, 255, 0.3);
//         }

//         .category-title {
//             font-size: 18px;
//             font-weight: 700;
//             color: #5893ff;
//             margin-bottom: 15px;
//             text-align: center;
//         }

//         .skills-tags {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 8px;
//             justify-content: center;
//         }

//         .skill-tag {
//             background: rgba(88, 147, 255, 0.15);
//             color: #ffffff;
//             padding: 8px 16px;
//             border-radius: 20px;
//             font-size: 14px;
//             font-weight: 600;
//             border: 1px solid rgba(88, 147, 255, 0.3);
//             transition: all 0.3s ease;
//         }

//         .skill-tag:hover {
//             background: rgba(88, 147, 255, 0.3);
//             transform: translateY(-2px);
//         }
//             background: rgba(255, 255, 255, 0.02);
//             border-top: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .contact-content {
//             text-align: center;
//             max-width: 600px;
//             margin: 0 auto;
//         }

//         .contact-title {
//             font-size: clamp(2rem, 4vw, 3rem);
//             font-weight: 800;
//             margin-bottom: 20px;
//             background: linear-gradient(45deg, #ffffff, #5893ff);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//         }

//         .contact-desc {
//             color: rgba(255, 255, 255, 0.7);
//             font-size: 18px;
//             line-height: 1.6;
//             margin-bottom: 40px;
//         }

//         .social-links {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//         }

//         .social-link {
//             width: 60px;
//             height: 60px;
//             background: rgba(255, 255, 255, 0.1);
//             border-radius: 15px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             color: white;
//             text-decoration: none;
//             font-size: 24px;
//             transition: all 0.3s ease;
//         }

//         .social-link:hover {
//             background: linear-gradient(45deg, #5893ff, #00d4ff);
//             transform: translateY(-5px);
//         }

//         @keyframes slideInUp {
//             from {
//                 opacity: 0;
//                 transform: translateY(50px);
//             }
//             to {
//                 opacity: 1;
//                 transform: translateY(0);
//             }
//         }

//         .scroll-indicator {
//             position: absolute;
//             bottom: 30px;
//             left: 50%;
//             transform: translateX(-50%);
//             animation: bounce 2s infinite;
//         }

//         @keyframes bounce {
//             0%, 20%, 50%, 80%, 100% {
//                 transform: translateX(-50%) translateY(0);
//             }
//             40% {
//                 transform: translateX(-50%) translateY(-10px);
//             }
//             60% {
//                 transform: translateX(-50%) translateY(-5px);
//             }
//         }

//         @media (max-width: 768px) {
//             .nav-links {
//                 display: none;
//             }
            
//             .cta-container {
//                 flex-direction: column;
//                 align-items: center;
//             }
            
//             .projects-grid {
//                 grid-template-columns: 1fr;
//             }
            
//             .skills-grid {
//                 grid-template-columns: 1fr;
//             }
//         }
//     </style>
// </head>
// <body>
//     <div class="cursor-glow" id="cursorGlow"></div>
    
//     <nav id="navbar">
//         <div class="nav-container">
//             <div class="logo">Alim Ahmed Reza</div>
//             <ul class="nav-links">
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#experience">Experience</a></li>
//                 <li><a href="#skills">Skills</a></li>
//                 <li><a href="#projects">Projects</a></li>
//                 <li><a href="#contact">Contact</a></li>
//             </ul>
//         </div>
//     </nav>

//     <section id="home" class="hero">
//         <div class="hero-bg"></div>
//         <div class="hero-content">
//             <h1 class="hero-title">Crafting Digital Excellence</h1>
//             <p class="hero-subtitle">Senior Software Engineer with 6+ years of experience delivering innovative fintech solutions and scalable web applications</p>
//             <div class="cta-container">
//                 <a href="#projects" class="btn btn-primary">View My Work</a>
//                 <a href="#contact" class="btn btn-secondary">Let's Connect</a>
//             </div>
//         </div>
//         <div class="scroll-indicator">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                 <path d="M12 5v14M5 12l7 7 7-7"/>
//             </svg>
//         </div>
//     </section>

//     <section id="experience" class="section">
//         <h2 class="section-title">Professional Journey</h2>
//         <div class="experience-timeline">
//             <div class="experience-item">
//                 <div class="experience-date">2022 - Present</div>
//                 <div class="experience-content">
//                     <div class="experience-header">
//                         <h3 class="experience-title">Sr. Software Engineer</h3>
//                         <div class="experience-company">Kona Software Lab Ltd</div>
//                     </div>
//                     <p class="experience-desc">Leading fintech solutions development with focus on cryptocurrency trading platforms.</p>
//                     <div class="experience-achievements">
//                         <div class="achievement-item">
//                             <span class="achievement-number">70%</span>
//                             <span class="achievement-text">Client satisfaction improvement through UI redesign</span>
//                         </div>
//                         <div class="achievement-item">
//                             <span class="achievement-number">80%</span>
//                             <span class="achievement-text">User engagement boost via notification service</span>
//                         </div>
//                         <div class="achievement-item">
//                             <span class="achievement-number">75%</span>
//                             <span class="achievement-text">Unit test coverage achieved</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="experience-item">
//                 <div class="experience-date">2021 - 2022</div>
//                 <div class="experience-content">
//                     <div class="experience-header">
//                         <h3 class="experience-title">Software Engineer</h3>
//                         <div class="experience-company">RedDot Digital Ltd</div>
//                     </div>
//                     <p class="experience-desc">Maintained telecom solutions with 95% on-time deployment rate and 25% reduction in post-release issues.</p>
//                 </div>
//             </div>
//             <div class="experience-item">
//                 <div class="experience-date">2019 - 2021</div>
//                 <div class="experience-content">
//                     <div class="experience-header">
//                         <h3 class="experience-title">Software Engineer</h3>
//                         <div class="experience-company">CoKreates Ltd</div>
//                     </div>
//                     <p class="experience-desc">Full-stack development of microservice-based ERP solutions for government sector, achieving 25% bottleneck reduction.</p>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="skills" class="section">
//         <h2 class="section-title">Technical Expertise</h2>
//         <div class="skills-categories">
//             <div class="skill-category">
//                 <h3 class="category-title">Frontend</h3>
//                 <div class="skills-tags">
//                     <span class="skill-tag">ReactJS</span>
//                     <span class="skill-tag">NextJS</span>
//                     <span class="skill-tag">Angular</span>
//                 </div>
//             </div>
//             <div class="skill-category">
//                 <h3 class="category-title">Backend</h3>
//                 <div class="skills-tags">
//                     <span class="skill-tag">Spring Boot</span>
//                     <span class="skill-tag">Microservices</span>
//                     <span class="skill-tag">Redis</span>
//                     <span class="skill-tag">Kafka</span>
//                 </div>
//             </div>
//             <div class="skill-category">
//                 <h3 class="category-title">DevOps & Tools</h3>
//                 <div class="skills-tags">
//                     <span class="skill-tag">Docker</span>
//                     <span class="skill-tag">Jenkins</span>
//                     <span class="skill-tag">Git</span>
//                     <span class="skill-tag">Bash</span>
//                 </div>
//             </div>
//             <div class="skill-category">
//                 <h3 class="category-title">Testing</h3>
//                 <div class="skills-tags">
//                     <span class="skill-tag">JUnit</span>
//                     <span class="skill-tag">Unit Testing</span>
//                     <span class="skill-tag">E2E Testing</span>
//                     <span class="skill-tag">Protractor</span>
//                 </div>
//             </div>
//         </div>
//         <div class="skills-grid">
//             <div class="skill-card">
//                 <div class="skill-icon">⚛️</div>
//                 <h3 class="skill-title">Frontend Development</h3>
//                 <p class="skill-desc">Creating dynamic user interfaces with React.js, Next.js, and Angular. Specialized in cryptocurrency trading platforms and fintech solutions with enhanced UX.</p>
//             </div>
//             <div class="skill-card">
//                 <div class="skill-icon">🚀</div>
//                 <h3 class="skill-title">Backend Architecture</h3>
//                 <p class="skill-desc">Building robust microservices with Spring Boot, implementing Redis caching, and Kafka messaging. Expert in ERP systems and government-scale applications.</p>
//             </div>
//             <div class="skill-card">
//                 <div class="skill-icon">☁️</div>
//                 <h3 class="skill-title">DevOps & Testing</h3>
//                 <p class="skill-desc">Automated deployment pipelines with Jenkins and Docker. Achieving 75% unit test coverage with JUnit and implementing comprehensive E2E testing strategies.</p>
//             </div>
//         </div>
//     </section>

//     <section id="projects" class="section">
//         <h2 class="section-title">Featured Projects</h2>
//         <div class="projects-grid">
//             <div class="project-card">
//                 <div class="project-image">₿</div>
//                 <div class="project-content">
//                     <h3 class="project-title">Kona Token Trade Platform</h3>
//                     <p class="project-desc">Comprehensive cryptocurrency trading platform with NFT marketplace capabilities and business configuration portal. Improved client satisfaction by 70% through UI redesign.</p>
//                     <div class="project-tech">
//                         <span class="tech-tag">React.js</span>
//                         <span class="tech-tag">Spring Boot</span>
//                         <span class="tech-tag">Flutter</span>
//                         <span class="tech-tag">Microservices</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="project-card">
//                 <div class="project-image">🏛️</div>
//                 <div class="project-content">
//                     <h3 class="project-title">eGRP - Government ERP</h3>
//                     <p class="project-desc">Large-scale ERP solution for the Government of Bangladesh focusing on Asset, Budget, and Audit modules. Achieved 25% reduction in bottlenecks and 15% performance improvement.</p>
//                     <div class="project-tech">
//                         <span class="tech-tag">Microservices</span>
//                         <span class="tech-tag">Spring Boot</span>
//                         <span class="tech-tag">Angular</span>
//                         <span class="tech-tag">Redis</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="project-card">
//                 <div class="project-image">🔔</div>
//                 <div class="project-content">
//                     <h3 class="project-title">Notification Service</h3>
//                     <p class="project-desc">Redesigned notification system for fintech platforms boosting user engagement by 80% and reducing support tickets by 15%. Cross-platform compatibility ensured.</p>
//                     <div class="project-tech">
//                         <span class="tech-tag">Spring Boot</span>
//                         <span class="tech-tag">Kafka</span>
//                         <span class="tech-tag">Redis</span>
//                         <span class="tech-tag">JUnit</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="contact" class="section contact">
//         <div class="contact-content">
//             <h2 class="contact-title">Let's Build Something Amazing</h2>
//             <p class="contact-desc">Experienced in fintech solutions, government-scale ERP systems, and high-performance web applications. Ready to tackle your next challenging project.</p>
//             <div class="cta-container">
//                 <a href="mailto:reza.alimahmed@gmail.com" class="btn btn-primary">Get In Touch</a>
//             </div>
//             <div class="social-links" style="margin-top: 40px;">
//                 <a href="mailto:reza.alimahmed@gmail.com" class="social-link" title="Email">📧</a>
//                 <a href="https://linkedin.com/in/alim-ahmed-reza-asif" class="social-link" title="LinkedIn">💼</a>
//                 <a href="https://github.com/Alim-Reza" class="social-link" title="GitHub">🐙</a>
//                 <a href="https://hackerrank.com/aarasif2" class="social-link" title="HackerRank">🏆</a>
//             </div>
//         </div>
//     </section>

//     <script>
//         // Cursor glow effect
//         const cursorGlow = document.getElementById('cursorGlow');
//         document.addEventListener('mousemove', (e) => {
//             cursorGlow.style.left = (e.clientX - 150) + 'px';
//             cursorGlow.style.top = (e.clientY - 150) + 'px';
//         });

//         // Navbar scroll effect
//         const navbar = document.getElementById('navbar');
//         window.addEventListener('scroll', () => {
//             if (window.scrollY > 50) {
//                 navbar.classList.add('scrolled');
//             } else {
//                 navbar.classList.remove('scrolled');
//             }
//         });

//         // Smooth scrolling for navigation links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const target = document.querySelector(this.getAttribute('href'));
//                 if (target) {
//                     target.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 }
//             });
//         });

//         // Intersection Observer for animations
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: '0px 0px -50px 0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.opacity = '1';
//                     entry.target.style.transform = 'translateY(0)';
//                 }
//             });
//         }, observerOptions);

//         // Observe skill cards and project cards
//         document.querySelectorAll('.skill-card, .project-card').forEach(card => {
//             card.style.opacity = '0';
//             card.style.transform = 'translateY(30px)';
//             card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//             observer.observe(card);
//         });

//         // Add parallax effect to hero background
//         window.addEventListener('scroll', () => {
//             const scrolled = window.pageYOffset;
//             const heroBackground = document.querySelector('.hero-bg');
//             if (heroBackground) {
//                 heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
//             }
//         });

//         // Add hover effect to buttons
//         document.querySelectorAll('.btn').forEach(btn => {
//             btn.addEventListener('mouseenter', function() {
//                 this.style.transform = 'translateY(-3px) scale(1.05)';
//             });
            
//             btn.addEventListener('mouseleave', function() {
//                 this.style.transform = 'translateY(0) scale(1)';
//             });
//         });
//     </script>
// </body>
// </html>





// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Enhanced Projects Section</title>
//     <style>
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         body {
//             font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//             background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
//             color: #ffffff;
//             min-height: 100vh;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }

//         .section {
//             padding: 100px 5%;
//             max-width: 1600px;
//             margin: 0 auto;
//             width: 100%;
//         }

//         .section-title {
//             font-size: clamp(2.5rem, 5vw, 4rem);
//             font-weight: 800;
//             text-align: center;
//             margin-bottom: 80px;
//             background: linear-gradient(135deg, #ffffff 0%, #5893ff 50%, #00d4ff 100%);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//             position: relative;
//         }

//         .section-title::after {
//             content: '';
//             position: absolute;
//             bottom: -20px;
//             left: 50%;
//             transform: translateX(-50%);
//             width: 100px;
//             height: 4px;
//             background: linear-gradient(45deg, #5893ff, #00d4ff);
//             border-radius: 2px;
//         }

//         .projects-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
//             gap: 50px;
//             perspective: 1000px;
//         }

//         .project-card {
//             background: rgba(255, 255, 255, 0.03);
//             backdrop-filter: blur(25px);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             border-radius: 25px;
//             overflow: hidden;
//             transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//             cursor: pointer;
//             transform-style: preserve-3d;
//             position: relative;
//             height: 480px;
//         }

//         .project-card::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: linear-gradient(135deg, rgba(88, 147, 255, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%);
//             opacity: 0;
//             transition: opacity 0.3s ease;
//             border-radius: 25px;
//             z-index: 1;
//         }

//         .project-card:hover::before {
//             opacity: 1;
//         }

//         .project-card:hover {
//             transform: translateY(-15px) rotateX(5deg) rotateY(5deg);
//             box-shadow: 
//                 0 30px 60px rgba(88, 147, 255, 0.15),
//                 0 0 100px rgba(0, 212, 255, 0.1),
//                 inset 0 1px 0 rgba(255, 255, 255, 0.1);
//             border-color: rgba(88, 147, 255, 0.3);
//         }

//         .project-image {
//             height: 220px;
//             background: linear-gradient(135deg, #5893ff 0%, #00d4ff 100%);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-size: 64px;
//             color: white;
//             position: relative;
//             overflow: hidden;
//         }

//         .project-image::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: 
//                 radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
//                 radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
//                 radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
//             animation: shimmer 3s ease-in-out infinite;
//         }

//         @keyframes shimmer {
//             0%, 100% { opacity: 0.3; }
//             50% { opacity: 0.7; }
//         }

//         .project-card:nth-child(1) .project-image {
//             background: linear-gradient(135deg, #f7931e 0%, #ffb800 100%);
//         }

//         .project-card:nth-child(2) .project-image {
//             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//         }

//         .project-card:nth-child(3) .project-image {
//             background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
//         }

//         .project-content {
//             padding: 35px;
//             position: relative;
//             z-index: 2;
//             height: 260px;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//         }

//         .project-header {
//             margin-bottom: 20px;
//         }

//         .project-title {
//             font-size: 26px;
//             font-weight: 700;
//             margin-bottom: 12px;
//             color: #ffffff;
//             text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//         }

//         .project-desc {
//             color: rgba(255, 255, 255, 0.8);
//             line-height: 1.7;
//             margin-bottom: 25px;
//             font-size: 15px;
//         }

//         .project-metrics {
//             display: flex;
//             gap: 20px;
//             margin-bottom: 25px;
//         }

//         .metric {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             padding: 12px;
//             background: rgba(88, 147, 255, 0.1);
//             border-radius: 12px;
//             border: 1px solid rgba(88, 147, 255, 0.2);
//             flex: 1;
//             backdrop-filter: blur(10px);
//         }

//         .metric-value {
//             font-size: 20px;
//             font-weight: 900;
//             color: #00d4ff;
//             text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
//         }

//         .metric-label {
//             font-size: 11px;
//             color: rgba(255, 255, 255, 0.6);
//             text-align: center;
//             margin-top: 4px;
//         }

//         .project-tech {
//             display: flex;
//             gap: 8px;
//             flex-wrap: wrap;
//         }

//         .tech-tag {
//             background: linear-gradient(135deg, rgba(88, 147, 255, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%);
//             color: #ffffff;
//             padding: 8px 14px;
//             border-radius: 20px;
//             font-size: 12px;
//             font-weight: 600;
//             border: 1px solid rgba(88, 147, 255, 0.3);
//             transition: all 0.3s ease;
//             backdrop-filter: blur(10px);
//         }

//         .tech-tag:hover {
//             background: linear-gradient(135deg, rgba(88, 147, 255, 0.4) 0%, rgba(0, 212, 255, 0.4) 100%);
//             transform: translateY(-2px);
//             box-shadow: 0 4px 12px rgba(88, 147, 255, 0.2);
//         }

//         .project-link {
//             position: absolute;
//             top: 15px;
//             right: 15px;
//             width: 40px;
//             height: 40px;
//             background: rgba(255, 255, 255, 0.1);
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             color: white;
//             text-decoration: none;
//             font-size: 18px;
//             transition: all 0.3s ease;
//             backdrop-filter: blur(10px);
//             z-index: 3;
//         }

//         .project-link:hover {
//             background: rgba(255, 255, 255, 0.2);
//             transform: scale(1.1);
//         }

//         .floating-elements {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             pointer-events: none;
//             overflow: hidden;
//         }

//         .floating-element {
//             position: absolute;
//             width: 6px;
//             height: 6px;
//             background: rgba(88, 147, 255, 0.3);
//             border-radius: 50%;
//             animation: float 6s ease-in-out infinite;
//         }

//         .floating-element:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
//         .floating-element:nth-child(2) { top: 60%; left: 80%; animation-delay: 2s; }
//         .floating-element:nth-child(3) { top: 80%; left: 20%; animation-delay: 4s; }

//         @keyframes float {
//             0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
//             50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
//         }

//         @media (max-width: 768px) {
//             .projects-grid {
//                 grid-template-columns: 1fr;
//                 gap: 30px;
//             }
            
//             .project-card {
//                 height: auto;
//                 min-height: 420px;
//             }
            
//             .project-metrics {
//                 flex-direction: column;
//                 gap: 10px;
//             }
//         }
//     </style>
// </head>
// <body>
//     <section id="projects" class="section">
//         <div class="floating-elements">
//             <div class="floating-element"></div>
//             <div class="floating-element"></div>
//             <div class="floating-element"></div>
//         </div>
        
//         <h2 class="section-title">Featured Projects</h2>
//         <div class="projects-grid">
//             <div class="project-card">
//                 <div class="project-image">₿</div>
//                 <div class="project-content">
//                     <div class="project-header">
//                         <h3 class="project-title">Kona Token Trade Platform</h3>
//                         <p class="project-desc">Comprehensive cryptocurrency trading platform with NFT marketplace capabilities and business configuration portal.</p>
//                     </div>
                    
//                     <div class="project-metrics">
//                         <div class="metric">
//                             <span class="metric-value">70%</span>
//                             <span class="metric-label">Client Satisfaction</span>
//                         </div>
//                         <div class="metric">
//                             <span class="metric-value">15K+</span>
//                             <span class="metric-label">Active Users</span>
//                         </div>
//                     </div>
                    
//                     <div class="project-tech">
//                         <span class="tech-tag">React.js</span>
//                         <span class="tech-tag">Spring Boot</span>
//                         <span class="tech-tag">Flutter</span>
//                         <span class="tech-tag">Microservices</span>
//                     </div>
//                 </div>
//                 <a href="#" class="project-link">↗</a>
//             </div>
            
//             <div class="project-card">
//                 <div class="project-image">🏛️</div>
//                 <div class="project-content">
//                     <div class="project-header">
//                         <h3 class="project-title">eGRP - Government ERP</h3>
//                         <p class="project-desc">Large-scale ERP solution for the Government of Bangladesh focusing on Asset, Budget, and Audit modules.</p>
//                     </div>
                    
//                     <div class="project-metrics">
//                         <div class="metric">
//                             <span class="metric-value">25%</span>
//                             <span class="metric-label">Bottleneck Reduction</span>
//                         </div>
//                         <div class="metric">
//                             <span class="metric-value">500K+</span>
//                             <span class="metric-label">Government Users</span>
//                         </div>
//                     </div>
                    
//                     <div class="project-tech">
//                         <span class="tech-tag">Microservices</span>
//                         <span class="tech-tag">Spring Boot</span>
//                         <span class="tech-tag">Angular</span>
//                         <span class="tech-tag">Redis</span>
//                     </div>
//                 </div>
//                 <a href="#" class="project-link">↗</a>
//             </div>
            
//             <div class="project-card">
//                 <div class="project-image">🔔</div>
//                 <div class="project-content">
//                     <div class="project-header">
//                         <h3 class="project-title">Notification Service</h3>
//                         <p class="project-desc">Redesigned notification system for fintech platforms with cross-platform compatibility and real-time delivery.</p>
//                     </div>
                    
//                     <div class="project-metrics">
//                         <div class="metric">
//                             <span class="metric-value">80%</span>
//                             <span class="metric-label">User Engagement</span>
//                         </div>
//                         <div class="metric">
//                             <span class="metric-value">99.9%</span>
//                             <span class="metric-label">Uptime</span>
//                         </div>
//                     </div>
                    
//                     <div class="project-tech">
//                         <span class="tech-tag">Spring Boot</span>
//                         <span class="tech-tag">Kafka</span>
//                         <span class="tech-tag">Redis</span>
//                         <span class="tech-tag">JUnit</span>
//                     </div>
//                 </div>
//                 <a href="#" class="project-link">↗</a>
//             </div>
//         </div>
//     </section>

//     <script>
//         // Enhanced hover effects
//         document.querySelectorAll('.project-card').forEach(card => {
//             card.addEventListener('mouseenter', function() {
//                 this.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(5deg) scale(1.02)';
//             });
            
//             card.addEventListener('mouseleave', function() {
//                 this.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
//             });
//         });

//         // Intersection Observer for scroll animations
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: '0px 0px -100px 0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.opacity = '1';
//                     entry.target.style.transform = 'translateY(0) scale(1)';
//                 }
//             });
//         }, observerOptions);

//         // Observe project cards
//         document.querySelectorAll('.project-card').forEach((card, index) => {
//             card.style.opacity = '0';
//             card.style.transform = 'translateY(50px) scale(0.9)';
//             card.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
//             observer.observe(card);
//         });

//         // Add dynamic glow effect
//         document.querySelectorAll('.project-card').forEach(card => {
//             card.addEventListener('mousemove', (e) => {
//                 const rect = card.getBoundingClientRect();
//                 const x = e.clientX - rect.left;
//                 const y = e.clientY - rect.top;
                
//                 card.style.background = `
//                     radial-gradient(circle at ${x}px ${y}px, rgba(88, 147, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 50%),
//                     rgba(255, 255, 255, 0.03)
//                 `;
//             });
            
//             card.addEventListener('mouseleave', () => {
//                 card.style.background = 'rgba(255, 255, 255, 0.03)';
//             });
//         });
//     </script>
// </body>
// </html>