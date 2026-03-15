import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import calculatorImg from "../Assets/calculator.png";
import laptopImg from "../Assets/laptop.jpg";
import logoImg from "../logo.svg";
import moctamaImg from "../Assets/moktama.jpg";
import knockinImg from "../Assets/knockin.jpeg";
import swipeImg from "../Assets/swipe.jpg";
import contactimg from "../Assets/contact.jpg";
import weatherimg from "../Assets/weather.jpg";
import recipeimg from "../Assets/recipe.webp"
import quizimg from "../Assets/quiz.webp"
import diceimg from "../Assets/dice.jpeg"
import drumimg from "../Assets/drum.jpeg"


const cardContents = [
	{
		title: "Moktama IT Solutions",
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
		title: "Swipe and Buy",
		desc: "eCommerce feature",
		image: swipeImg,
		highlight: "orange",
	},
	{
		title: "Calculator App",
		desc: "Basic calculator with modern UI",
		image: calculatorImg,
		highlight: "yellow",
	},
	{
		title: "Contact App",
		desc: "Store and manage contacts",
		image: contactimg,
		highlight: "yellow",
	},
	{
		title: "Weather App",
		desc: "Real-time weather information for any location",
		image: weatherimg,
		highlight: "yellow",
	},
	{
		title: "Recipe Search App",
		desc: "Find and explore recipes by ingredients or name",
		image: recipeimg,
		highlight: "yellow",
	},
	{
		title: "Quiz App",
		desc: "Interactive quizzes on various topics",
		image: quizimg,
		highlight: "yellow",
	},
	{
		title: "Dice Roll",
		desc: "Simulate rolling dice for games or fun",
		image: diceimg,
		highlight: "yellow",
	},
	{
		title: "Drum App",
		desc: "Play virtual drums with keyboard or mouse",
		image: drumimg,
		highlight: "yellow",
	},
];

const Portfolio = () => {
	const [showAll, setShowAll] = useState(false);
	const navigate = useNavigate();
	const visibleCards = showAll ? cardContents : cardContents.slice(0, 6);

	const handleOpen = (title) => {
		if (title === "calculator app") {
			navigate("/calculator");
		}
		// Add more logic for other cards if needed
	};

	return (
		<div className="portfolio-main">
			<div className="portfolio-container">
				<h2 className="portfolio-title">
					Projects{" "}
					<span className="portfolio-highlight">&amp; Applications</span>
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
								<div className="cosmic-card-content-text">
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
								<button
									className="portfolio-card-open-btn"
									onClick={() => handleOpen(card.title)}
								>
									Open
								</button>
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
