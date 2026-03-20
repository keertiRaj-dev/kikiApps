import React, { useState } from 'react';
import './Mentorship.css';
import MentorshipDetailsPopup from '../components/MentorshipDetailsPopup';
import WebinarDetailsPopup from '../components/WebinarDetailsPopup';

const Mentorship = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showWebinarPopup, setShowWebinarPopup] = useState(false);
  return (
    <div className="mentorship-bg">
      <div className="mentorship-main-container">
        <h1 className="mentorship-title">
          Land Your Next Job <span className="mentorship-title-accent">Faster</span>
        </h1>
        <p className="mentorship-subtitle">
          Personal mentorship and real interview preparation to help you get hired.
        </p>
        <div className="mentorship-cards-row">
          {/* 1:1 Mentorship Card */}
          <div className="mentorship-card neon-card">
            <div className="mentorship-most-popular">Most Popular</div>
            <div className="mentorship-card-header mentorship-card-header-star">
              1:1 Mentorship <span className="mentorship-star">⭐</span>
            </div>
            <ul className="mentorship-list mentorship-list-left">
              <li><span className="mentorship-list-icon">📄</span> ATS Optimized Resume Review</li>
              <li><span className="mentorship-list-icon">🔗</span> LinkedIn & Portfolio Improvement</li>
              <li><span className="mentorship-list-icon">🗣️</span> Mock Interviews with Feedback</li>
              <li><span className="mentorship-list-icon">❓</span> Previously Asked Interview Questions</li>
              <li><span className="mentorship-list-icon">💡</span> Confidence Building & Career Guidance</li>
            </ul>
            <button className="mentorship-btn mentorship-btn-primary" onClick={() => window.open('https://forms.gle/fVAVqyxepMTDXcS5A', '_blank')}>Book 1:1 Session</button>
            <button className="mentorship-btn mentorship-btn-secondary" onClick={() => setShowPopup(true)}>View Details</button>
          </div>
          {/* Group Webinar Card */}
          <div className="mentorship-card neon-card">
            <div className="mentorship-cheapest-badge">Cheapest</div>
            <div className="mentorship-card-header">Group Webinar <span role="img" aria-label="group" className="mentorship-group-emoji">👥</span></div>
            <ul className="mentorship-list mentorship-list-right">
              <li><span className="mentorship-list-icon">🎯</span> Strategic Job Hunting</li>
              <li><span className="mentorship-list-icon">⚡</span> Efficient Job Applications</li>
              <li><span className="mentorship-list-icon">🌐</span> Current Job Market Insights</li>
              <li><span className="mentorship-list-icon">📝</span> Interview Preparation</li>
              <li><span className="mentorship-list-icon">🗣️</span> Confidence & Communication</li>
            </ul>
            <button className="mentorship-btn mentorship-btn-primary" onClick={() => window.open('https://forms.gle/pwC5KFJmf8KkUwbP6', '_blank')}>Join Next Webinar</button>
            <button className="mentorship-btn mentorship-btn-secondary" onClick={() => setShowWebinarPopup(true)}>View Details</button>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mentorship-bottom-section">
          <h2 className="mentorship-bottom-title">
            Ready to Get Your First Frontend <span className="mentorship-title-accent">Job?</span>
          </h2>
          <p className="mentorship-bottom-subtitle">
            Join mentorship and start preparing like a real developer.
          </p>
          <div className="mentorship-impact-row">
            <div className="mentorship-impact-item">
              <span className="mentorship-impact-icon">👨‍💻</span>
              <span className="mentorship-impact-value">40+</span>
              <span className="mentorship-impact-label">Developers Mentored</span>
            </div>
            <div className="mentorship-impact-item">
              <span className="mentorship-impact-icon">🗣️</span>
              <span className="mentorship-impact-value">150+</span>
              <span className="mentorship-impact-label">Interviews Given</span>
            </div>
            <div className="mentorship-impact-item">
              <span className="mentorship-impact-icon">⏳</span>
              <span className="mentorship-impact-value">5+</span>
              <span className="mentorship-impact-label">Years in Frontend</span>
            </div>
          </div>
        </div>
      </div>
      <MentorshipDetailsPopup open={showPopup} onClose={() => setShowPopup(false)} />
      <WebinarDetailsPopup open={showWebinarPopup} onClose={() => setShowWebinarPopup(false)} />
    </div>
  );
};

export default Mentorship;
