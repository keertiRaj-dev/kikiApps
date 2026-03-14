import React from "react";
import "./About.css";
import publicisLogo from "../components/Card.js"; // Placeholder, replace with actual logo if available
import victoriaLogo from "../components/Card.js"; // Placeholder, replace with actual logo if available
import harmanLogo from "../components/Card.js"; // Placeholder, replace with actual logo if available

const About = () => {
  return (
    <div className="about-cosmic-bg">
      <div className="about-main-container">
        <div className="about-profile-section">
         
          <div className="about-profile-info">
            <h1>About Me</h1>
            <h2>Frontend Developer<br />with 5+ Years Experience</h2>
            <p className="about-profile-desc">
              I build scalable frontend applications using modern technologies like React, JavaScript, GraphQL and microfrontend architecture.<br /><br />
              I have worked with international teams on high-scale projects and helped build production ecommerce platforms.
            </p>
            <button className="about-contact-btn">Contact Me</button>
          </div>
        </div>
        <h2 className="about-section-title">Work Experience</h2>
        <div className="about-work-grid">
          <div className="about-work-card">
            <div className="about-work-logo publicis">Publicis<br />sapient</div>
            <div className="about-work-role">Frontend Developer</div>
            <div className="about-work-tech">React + Developer</div>
            <div className="about-work-duration">2021 - Present</div>
          </div>
          <div className="about-work-card">
            <div className="about-work-logo victoria">Victoria's Secret</div>
            <div className="about-work-role">Frontend Developer</div>
            <div className="about-work-tech">Frontend Developer</div>
            <div className="about-work-duration">2020 - 2021</div>
          </div>
          <div className="about-work-card">
            <div className="about-work-logo harman">HARMAN</div>
            <div className="about-work-role">Frontend Engineer</div>
            <div className="about-work-tech">React + Next.js</div>
            <div className="about-work-duration">2018 - 2020</div>
          </div>
        </div>
        </div>
        </div>
  );
};

export default About;
