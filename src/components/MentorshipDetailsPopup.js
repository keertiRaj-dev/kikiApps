import React from 'react';
import './MentorshipDetailsPopup.css';

const plans = [
	{
		title: 'Starter Plan',
		price: '₹1,200',
		sessions: '6 SESSIONS',
		per: 'per plan',
		features: ['Weekly sessions', '30 minutes per session'],
		color: 'green',
	},
	{
		title: 'Standard Plan',
		price: '₹2,000',
		sessions: '6 SESSIONS',
		per: '',
		features: ['Weekly sessions', '1 hour per session'],
		color: 'purple',
	},
	{
		title: 'Single Session',
		price: '₹400',
		sessions: '1 SESSION',
		per: 'One-time',
		features: ['1 hour discussion', 'Personalized guidance'],
		color: 'orange',
	},
	{
		title: 'Until You Get Placed',
		price: '₹10,000',
		sessions: '',
		per: '',
		features: [
			'Weekly 1-hour sessions',
			'Continuous mentorship until placement',
			'50% refund if not placed within 6 months',
		],
		color: 'pink',
		bestValue: true,
	},
];

const MentorshipDetailsPopup = ({ open, onClose }) => {
	if (!open) return null;
	return (
		<div className="mentorship-popup-overlay">
			<div className="mentorship-popup">
				<button className="close-btn" onClick={onClose}>
					&times;
				</button>
				<h2 className="popup-title">
					Mentorship <span className="highlight">Packages</span>
				</h2>
				<p className="popup-subtitle">
					Choose the plan that fits your career goals
				</p>
				<div className="popup-plans">
					{plans.map((plan, idx) => (
						<div
							key={plan.title}
							className={`popup-plan-card ${plan.color} ${
								plan.bestValue ? 'best-value' : ''
							}`}
						>
							{plan.bestValue && (
								<div className="best-value-badge">BEST VALUE</div>
							)}
							<div className="plan-header">
								<span className={`plan-icon ${plan.color}`}></span>
								<span className="plan-title">{plan.title}</span>
								{plan.sessions && (
									<span
										className={`plan-sessions ${plan.color}`}
									>
										{plan.sessions}
									</span>
								)}
							</div>
							<div className="plan-price">
								{plan.price}{' '}
								<span className="plan-per">{plan.per}</span>
							</div>
							<ul className="plan-features">
								{plan.features.map((f, i) => (
									<li key={i}>{f}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<button className="plan-btn main-btn">BOOK NOW</button>
				<div className="popup-benefits">
					<div>
						<span className="benefit-icon flexible"></span> Flexible Scheduling
					</div>
					<div>
						<span className="benefit-icon feedback"></span> Personalized Feedback
					</div>
					<div>
						<span className="benefit-icon expert"></span> Industry Expert Guidance
					</div>
					<div>
						<span className="benefit-icon secure"></span> Secure & Confidential
					</div>
				</div>
			</div>
		</div>
	);
};

export default MentorshipDetailsPopup;
