import React, { useState } from "react";
import "./Portfolio.css";

const cardContents = [
  { title: "Moktama IT solutions", desc: "A IT Solutions company in USA" },
  { title: "KnockIn Enterprises", desc: "A Real Estate Agency In Bangalore" },
  { title: "Swipe and buy", desc: "eCommerce feature" },
  { title: "calculator app", desc: "" },
  { title: "contact app", desc: "" },
  { title: "weather app", desc: "" },
  { title: "recipe search app", desc: "" },
  { title: "quiz app", desc: "" },
  { title: "dice roll", desc: "" },
  { title: "drum app", desc: "" },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? cardContents : cardContents.slice(0, 6);

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Projects & Case Studies</h2>
      <p className="portfolio-subtitle">Real production work and UI implementations</p>
      <div className="portfolio-grid">
        {visibleCards.map((card, idx) => (
          <div className="portfolio-card" key={idx} style={{display: 'flex', flexDirection: 'column', height: '260px', padding: 0}}>
            <div className="portfolio-card-image" style={{flex: '0 0 70%', height: '70%', background: 'rgba(255,255,255,0.10)', borderRadius: '10px 10px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {/* Image goes here */}
            </div>
            <div style={{flex: '1 1 30%', height: '30%', padding: '1rem'}}>
              <h4 style={{ marginBottom: "0.5rem" }}>{card.title}</h4>
              {card.desc && (
                <p style={{ color: "#ccc", fontSize: "1rem" }}>{card.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          className="portfolio-loadmore"
          onClick={() => setShowAll(true)}
        >
          Load More
        </button>
      )}
      <div className="portfolio-idea-section">
        <h3>Have a project idea?</h3>
        <button className="portfolio-startproject">Start a Project</button>
      </div>
    </div>
  );
};

export default Portfolio;
