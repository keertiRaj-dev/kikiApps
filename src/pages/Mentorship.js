import React from 'react';
import './Mentorship.css';

const Mentorship = () => (
  <div className="mentorship-bg">
    <div className="mentorship-container">
      <h1 className="mentorship-title">Frontend Career Mentorship</h1>
      <p className="mentorship-subtitle">Helping developers land frontend jobs<br />and grow in their career</p>
      <div className="mentorship-cards">
        <div className="mentorship-card">
          <div className="mentorship-card-header">1:1 Mentorship</div>
          <div className="mentorship-card-img mentorship-img-1" />
          <ul className="mentorship-list">
            <li>Resume Review</li>
            <li>LinkedIn Optimization</li>
            <li>Mock Interviews</li>
            <li>Career Guidance</li>
          </ul>
          <button className="mentorship-btn">Book 1:1 Session</button>
        </div>
        <div className="mentorship-card">
          <div className="mentorship-card-header">Group Webinars</div>
          <div className="mentorship-card-img mentorship-img-2" />
          <ul className="mentorship-list">
            <li>Frontend Roadmap</li>
            <li>React Interview Questions</li>
            <li>Job Hunt Strategy</li>
            <li>Real Interview Experiences</li>
          </ul>
          <button className="mentorship-btn">Join Next Webinar</button>
        </div>
      </div>
      <h2 className="mentorship-impact-title">My Mentorship Impact</h2>
      <div className="mentorship-impact-cards">
        <div className="impact-card">
          <div className="impact-value">1 120+ <span className="impact-icon">👥</span></div>
          <div className="impact-label">Developers Mentored</div>
        </div>
        <div className="impact-card">
          <div className="impact-value">2 300+ <span className="impact-icon">💼</span></div>
          <div className="impact-label">Build scalable solution</div>
        </div>
        <div className="impact-card">
          <div className="impact-value">5+ Years <span className="impact-icon">📅</span></div>
          <div className="impact-label">Deployment and support</div>
        </div>
      </div>
      <div className="mentorship-cta">
        <h3>Ready to Land Your Frontend Job?</h3>
        <button className="mentorship-getstarted-btn">Get Started</button>
      </div>
    </div>
  </div>
);

export default Mentorship;
