import React from 'react';
import './WebinarDetailsPopup.css';

const WebinarDetailsPopup = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="webinar-popup-overlay">
      <div className="webinar-popup-container">
        <button className="webinar-popup-close" onClick={onClose}>&times;</button>
        <div className="webinar-popup-header">
          <div className="webinar-popup-icon"></div>
          <h2><span className="webinar-popup-title-bold">Group Webinar </span><span className="webinar-popup-title-accent">Access</span></h2>
          <p className="webinar-popup-subtitle">Join the next live session on <span className="webinar-popup-highlight">Strategic Job Hunting.</span></p>
        </div>
        <div className="webinar-popup-price-section">
          <span className="webinar-popup-standard">Standard Price</span>
          <div className="webinar-popup-price">₹100</div>
          <div className="webinar-popup-onetime">One-time access</div>
        </div>
        <div className="webinar-popup-features">
          <div className="webinar-popup-feature">Strategic Job Hunting Framework</div>
          <div className="webinar-popup-feature">Efficient Job Applications Method</div>
          <div className="webinar-popup-feature">Current Job Market Insights</div>
          <div className="webinar-popup-feature">Interview Preparation Tips</div>
          <div className="webinar-popup-feature">Confidence & Communication</div>
        </div>
        <button className="webinar-popup-cta" onClick={() => window.open('https://forms.gle/pwC5KFJmf8KkUwbP6', '_blank')}>Join Webinar Now</button>
        <div className="webinar-popup-footer">
          <span>Secure Payment</span>
          <span className="webinar-popup-dot">•</span>
          <span>Instant Access to Recording</span>
        </div>
      </div>
    </div>
  );
};

export default WebinarDetailsPopup;
