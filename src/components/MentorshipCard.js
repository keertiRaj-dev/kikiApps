import React from 'react';
import './MentorshipCard.css';
import Button from './Button';

const MentorshipCard = ({ title, items, buttonText, onButtonClick }) => (
  <div className="mentorship-card">
    <h4>{title}</h4>
    <ul>
      {items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
    <Button onClick={onButtonClick}>{buttonText}</Button>
  </div>
);

export default MentorshipCard;
