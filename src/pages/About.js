import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import profileImg from "../Assets/contact.jpg";
import publicisLogo from "../Assets/sapient.png";
import victoriaLogo from "../Assets/vsco.png";
import harmanLogo from "../Assets/harman.svg";
import keertiImg from "../Assets/keerti.png";

const SKILLS = [
  // Row 1 (top)
  { label: "HTML5", color: "orange", direction: "from-top" },
  { label: "CSS3", color: "orange", direction: "from-top" },
  { label: "JavaScript (ES6+)", color: "orange", direction: "from-top" },
  { label: "TypeScript", color: "pink", direction: "from-top" },
  { label: "React.js", color: "blue", direction: "from-top" },

  // Row 2 (left)
  { label: "Redux", color: "purple", direction: "from-left" },
  { label: "Tailwind CSS", color: "blue", direction: "from-left" },
  { label: "Next JS", color: "blue", direction: "from-left" },
  { label: "Bootstrap", color: "orange", direction: "from-left" },
  { label: "Material UI", color: "blue", direction: "from-left" },

  // Row 3 (right)
  { label: "Figma", color: "blue", direction: "from-right" },
  { label: "WCAG compliance", color: "purple", direction: "from-right" },
  { label: "Responsive Design", color: "orange", direction: "from-right" },
  { label: "Localization", color: "blue", direction: "from-right" },

  // Row 4 (left)
  { label: "Node.js", color: "green", direction: "from-left" },
  { label: "Axios", color: "blue", direction: "from-left" },
  { label: "REST API", color: "orange", direction: "from-left" },
  { label: "GraphQL", color: "pink", direction: "from-left" },

  // Row 5 (right)
  { label: "Jest (Unit Testing)", color: "orange", direction: "from-right" },
  { label: "Code Reviews", color: "blue", direction: "from-right" },
  { label: "Web Analytics", color: "purple", direction: "from-right" },
  { label: "Chrome Dev Tools", color: "blue", direction: "from-right" },
  { label: "Lighthouse", color: "green", direction: "from-right" },

  // Row 6 (left)
  { label: "Git", color: "orange", direction: "from-left" },
  { label: "GitHub", color: "blue", direction: "from-left" },
  { label: "Bitbucket", color: "purple", direction: "from-left" },
  { label: "VS Code", color: "blue", direction: "from-left" },
  { label: "Webpack", color: "purple", direction: "from-left" },
  { label: "Babel", color: "orange", direction: "from-left" },
  { label: "npm", color: "green", direction: "from-left" },

  // Row 7 (right)
  { label: "Jira", color: "orange", direction: "from-right" },
  { label: "Confluence", color: "blue", direction: "from-right" },
  { label: "Agile/Scrum practices", color: "purple", direction: "from-right" },

  // Row 8 (bottom)
  { label: "Data Structures & Algorithms", color: "orange", direction: "from-bottom" },
  { label: "Problem Solving", color: "blue", direction: "from-bottom" },
  { label: "Analytical Thinking", color: "purple", direction: "from-bottom" },
  { label: "Leadership", color: "orange", direction: "from-bottom" },
  { label: "Adaptability", color: "green", direction: "from-bottom" },
];

const About = () => {
  const skillsRef = useRef();
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateKey((k) => k + 1); // retrigger animation
        }
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-cosmic-bg">
      <div className="about-main-container">
        <div className="about-profile-section responsive-profile-section">
          {/* In mobile view, About info comes first */}
          <div className="about-profile-info" style={{ flex: '1 1 80%', textAlign: 'center' }}>
            <h1 className="about-title" style={{ textAlign: 'center' }}>About Me</h1>
            <h2 className="about-subtitle" style={{ textAlign: 'center' }}>Frontend Engineer with <span className="about-highlight">5+ Years of Experience</span></h2>
            <p className="about-profile-desc" style={{ textAlign: 'justify' }}>
              I build scalable, high-performance frontend applications using React, JavaScript, GraphQL, and micro-frontend architecture. I’ve collaborated with global teams across the US and Europe on large-scale eCommerce and enterprise platforms, focusing on clean UI architecture, reusable components, and performant user experiences.

              I enjoy solving complex UI challenges and turning product ideas into seamless, intuitive user experiences. I’m always learning and exploring new technologies to build faster, more reliable, and scalable frontend systems.

            </p>
            <div className="about-contact-links">
              <a href="https://wa.me/918660321419?text=hi%20Kiki%20apps,%20I%20wanted%20to%20contact%20you." className="about-contact-icon whatsapp" target="_blank" rel="noopener noreferrer" title="WhatsApp Call">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339-19.6 197.5-35.6 112.1 49.7c-84.5 85.3-68.5 226.8 48.2 268.7l-12.7 46.5c-2.2 8.1 5.3 15.6 13.4 13.4l46.5-12.7c41.9 116.7 183.4 132.7 268.7 48.2 85.3-84.5 69.3-226-48.2-268.7zM224 400c-97.2 0-176-78.8-176-176S126.8 48 224 48s176 78.8 176 176-78.8 176-176 176zm-32-176c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-16 0c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm-16 0c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64z" /></svg>
              </a>
              <a href="tel:+918660321419" className="about-contact-icon call" title="Call">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512" fill="currentColor"><path d="M511.7 387.1c-1.1-4.2-4.5-7.6-8.7-8.7l-112-32c-4.2-1.2-8.7-.1-11.8 2.9l-48 48c-70.7-36.6-128.1-94-164.7-164.7l48-48c3-3 4.1-7.6 2.9-11.8l-32-112c-1.1-4.2-4.5-7.6-8.7-8.7l-112-32c-4.2-1.2-8.7-.1-11.8 2.9l-48 48C3.1 60.7 0 65.2 0 70.1c0 246.9 200.1 447 447 447 4.9 0 9.4-3.1 11.2-7.7l32-112c1.2-4.2.1-8.7-2.9-11.8l-48-48c-3-3-7.6-4.1-11.8-2.9z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/keerti-raj-49369818b/" className="about-contact-icon linkedin" target="_blank" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.12 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.1 53.6 53.6 0 29.6-24 53.7-53.6 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.3V448h-92.4s1.2-242.7 0-267.9h92.4v38c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z" /></svg>
              </a>
              <a href="https://github.com/keertiRaj-dev" className="about-contact-icon github" target="_blank" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-2.9 0-5.2-1.7-5.2-3.7 0-2 2.3-3.7 5.2-3.7 2.9 0 5.2 1.7 5.2 3.7zm-30.4-3.2c-.7 2.1 1.6 4.3 4.6 4.9 3 .6 6.2-.5 6.9-2.6.7-2.1-1.6-4.3-4.6-4.9-3-.6-6.2.5-6.9 2.6zm44.2-1.7c-2.9.8-4.8 2.9-4.3 5.1.5 2.2 3.2 3.3 6.1 2.5 2.9-.8 4.8-2.9 4.3-5.1-.5-2.1-3.2-3.2-6.1-2.5zm44.2-1.7c-2.9.8-4.8 2.9-4.3 5.1.5 2.2 3.2 3.3 6.1 2.5 2.9-.8 4.8-2.9 4.3-5.1-.5-2.1-3.2-3.2-6.1-2.5zm44.2-1.7c-2.9.8-4.8 2.9-4.3 5.1.5 2.2 3.2 3.3 6.1 2.5 2.9-.8 4.8-2.9 4.3-5.1-.5-2.1-3.2-3.2-6.1-2.5zm44.2-1.7c-2.9.8-4.8 2.9-4.3 5.1.5 2.2 3.2 3.3 6.1 2.5 2.9-.8 4.8-2.9 4.3-5.1-.5-2.1-3.2-3.2-6.1-2.5zm44.2-1.7c-2.9.8-4.8 2.9-4.3 5.1.5 2.2 3.2 3.3 6.1 2.5 2.9-.8 4.8-2.9 4.3-5.1-.5-2.1-3.2-3.2-6.1-2.5zm44.2-1.7c-2.9.8-4.8 2.9-4.3 5.1.5 2.2 3.2 3.3 6.1 2.5 2.9-.8 4.8-2.9 4.3-5.1-.5-2.1-3.2-3.2-6.1-2.5zm44.2-1.7c-2.9.8-4.8 2.9-4.3 5.1.5 2.2 3.2 3.3 6.1 2.5 2.9-.8 4.8-2.9 4.3-5.1-.5-2.1-3.2-3.2-6.1-2.5zM248 8C111 8 0 119 0 256c0 110.3 71.5 203.9 170.7 237.2 12.5 2.3 17.1-5.4 17.1-12v-44.1c-69.5 15.1-84.1-33.7-84.1-33.7-11.4-29-27.9-36.7-27.9-36.7-22.8-15.6 1.7-15.3 1.7-15.3 25.2 1.8 38.5 25.9 38.5 25.9 22.4 38.4 58.7 27.3 73 20.9 2.3-16.2 8.8-27.3 16-33.6-55.5-6.3-113.9-27.7-113.9-123.2 0-27.2 9.7-49.4 25.6-66.8-2.6-6.3-11.1-31.8 2.4-66.3 0 0 21-6.7 68.8 25.5 20-5.6 41.5-8.4 62.9-8.5 21.4.1 42.9 2.9 62.9 8.5 47.8-32.2 68.8-25.5 68.8-25.5 13.5 34.5 5 60 2.4 66.3 15.9 17.4 25.6 39.6 25.6 66.8 0 95.7-58.5 116.8-114.2 123 9 7.7 17 22.9 17 46.1v68.3c0 6.7 4.6 14.4 17.1 12C424.5 459.9 496 366.3 496 256 496 119 385 8 248 8z" /></svg>
              </a>
              <a href="mailto:kikiappsofficial@gmail.com" className="about-contact-icon email" target="_blank" rel="noopener noreferrer" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512" fill="currentColor"><path d="M502.3 190.8L327.4 338.3c-15.9 13.2-39.8 13.2-55.7 0L9.7 190.8C3.9 186.2 0 178.7 0 170.6V48c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v122.6c0 8.1-3.9 15.6-9.7 20.2zM464 64H48C39.2 64 32 71.2 32 80v16.4l224 185.6 224-185.6V80c0-8.8-7.2-16-16-16zm48 106.6V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V170.6l218.7 181.1c27.6 22.8 68.9 22.8 96.5 0L512 170.6z" /></svg>
              </a>
            </div>
          </div>
          <div className="about-profile-img-container" style={{ flex: '0 0 40%', maxWidth: '40%' }}>
            <img src={keertiImg} alt="Keerthi" className="about-profile-img" />
          </div>
        </div>
        <h2 className="about-section-title">Work Experience</h2>
        <div className="about-work-grid">
          <div className="about-work-card card-2row">
            <div className="about-work-row about-work-row-top">
              <div className="about-work-logo-col">
                <img src={publicisLogo} alt="Publicis Sapient" className="about-company-logo split-logo" />
              </div>
              <div className="about-work-info-col">
                <div className="about-work-role">Senior Experience Engineer</div>
              </div>
            </div>
            <div className="about-work-row about-work-row-bottom">
              <div className="about-work-badges">
                <span className="about-badge nextjs">Next.js</span>
                <span className="about-badge graphql">GraphQL</span>
                <span className="about-badge microfrontend">Microfrontend</span>
                <span className="about-badge healthcare">Healthcare</span>
                <span className="about-badge reduxthunk">Redux Thunk</span>
                <span className="about-badge figma">Figma</span>
              </div>
              <div className="about-work-duration">Oct 2025 - Present</div>
              <div className="about-work-desc">
                Working on large-scale enterprise frontend systems and building scalable UI architectures for Optum.
              </div>
            </div>
          </div>
          <div className="about-work-card card-2row">
            <div className="about-work-row about-work-row-top">
              <div className="about-work-logo-col">
                <img src={victoriaLogo} alt="Victoria's Secret" className="about-company-logo split-logo" />
              </div>
              <div className="about-work-info-col">
                <div className="about-work-role">Front End Web Developer</div>
              </div>
            </div>
            <div className="about-work-row about-work-row-bottom">
              <div className="about-work-badges">
                <span className="about-badge react">React</span>
                <span className="about-badge js">JavaScript</span>
                <span className="about-badge ts">TypeScript</span>
                <span className="about-badge ecommerce">eCommerce</span>
                <span className="about-badge redux">Redux</span>
                <span className="about-badge contextapi">Context API</span>
              </div>
              <div className="about-work-duration">Aug 2023 - Oct 2025</div>
              <div className="about-work-desc">
                Developed high-traffic ecommerce features and improved performance and scalability of the frontend platform.
              </div>
            </div>
          </div>
          <div className="about-work-card card-2row">
            <div className="about-work-row about-work-row-top">
              <div className="about-work-logo-col">
                <img src={harmanLogo} alt="Harman" className="about-company-logo split-logo" />
              </div>
              <div className="about-work-info-col">
                <div className="about-work-role">Software Engineer</div>
              </div>
            </div>
            <div className="about-work-row about-work-row-bottom">
              <div className="about-work-badges">
                <span className="about-badge react">React</span>
                <span className="about-badge js">JavaScript</span>
                <span className="about-badge java">Java</span>
                <span className="about-badge automotive">Automotive</span>
                <span className="about-badge figma">Figma</span>
                <span className="about-badge redux">Redux</span>
              </div>
              <div className="about-work-duration">Oct 2020 - Aug 2023</div>
              <div className="about-work-desc">
                Built modern frontend applications and collaborated with international teams including BMW Germany engineers.
              </div>
            </div>
          </div>
        </div>
        {/* SKILLS SECTION */}
        <div className="skills-flyin-section" ref={skillsRef}>
          <h2 className="about-section-title">Skills</h2>
          <div className="skills-flyin-grid">
            {SKILLS.map((skill, i) => (
              <span
                key={skill.label + i + animateKey}
                className={`skill-flyin skill-flyin-${skill.direction} skill-flyin-${skill.color}`}
                style={{ animationDelay: `${0.08 * i}s` }}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
