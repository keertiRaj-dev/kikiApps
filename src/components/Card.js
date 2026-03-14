import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, children, ...props }) => (
  <div className="custom-card" {...props}>
    {icon && <div className="card-icon">{icon}</div>}
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  </div>
);

export default Card;
