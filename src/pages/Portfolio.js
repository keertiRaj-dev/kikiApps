import React, { useState } from "react";
import "./Portfolio.css";
import calculatorImg from "../Assets/calculator.png";
import laptopImg from "../Assets/laptop.jpg";
import logoImg from "../logo.svg";
import moctamaImg from "../Assets/moktama.jpg";
import knockinImg from "../Assets/knockin.jpeg";
import swipeImg from "../Assets/swipe.jpg";

const cardContents = [
	{
		title: "Moktama IT solutions",
		desc: "A IT Solutions company in USA",
		image: moctamaImg,
		highlight: "orange",
	},
	{
		title: "KnockIn Enterprises",
		desc: "A Real Estate Agency In Bangalore",
		image: knockinImg,
		highlight: "orange",
	},
	{
		title: "Swipe and buy",
		desc: "eCommerce feature",
		image: swipeImg,
		highlight: "orange",
	},
	{
		title: "calculator app",
		desc: "",
		image: calculatorImg,
		highlight: "yellow",
	},
	{
		title: "contact app",
		desc: "",
		image: logoImg,
		highlight: "yellow",
	},
	{
		title: "weather app",
		desc: "",
		image: logoImg,
		highlight: "yellow",
	},
];

const Portfolio = () => {
	const [showAll, setShowAll] = useState(false);
	const visibleCards = showAll ? cardContents : cardContents.slice(0, 6);

	return (
		<div className="portfolio-main">
			<div className="portfolio-container">
				<h2 className="portfolio-title">
					Projects{" "}
					<span className="portfolio-highlight">&amp; Case Studies</span>
				</h2>
				<div className="portfolio-divider" />
				<p className="portfolio-subtitle">
					Real production work and UI implementations
				</p>
				<div className="portfolio-grid cosmic-grid">
					{visibleCards.map((card, idx) => (
						<div
							className={`portfolio-card cosmic-card cosmic-card-${card.highlight}`}
							key={idx}
						>
							<div className="portfolio-card-image">
								<img
									src={card.image}
									alt={card.title}
						
									
								/>
							</div>
							<div className="cosmic-card-content">
								<h4
									className={`cosmic-card-title cosmic-title-${card.highlight}`}
									style={{ marginBottom: "0.5rem" }}
								>
									{card.title}
								</h4>
								{card.desc && (
									<p className="cosmic-card-desc">{card.desc}</p>
								)}
							</div>
						</div>
					))}
				</div>
				{!showAll && (
					<button
						className="portfolio-loadmore cosmic-loadmore"
						onClick={() => setShowAll(true)}
					>
						Load More
					</button>
				)}
				<div className="portfolio-idea-section cosmic-idea-section">
					<h3>Have a project idea?</h3>
					<button className="portfolio-startproject cosmic-startproject">
						Start a Project
					</button>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
