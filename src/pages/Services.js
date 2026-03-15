import React from 'react';
import './Services.css';

const businesses = [
  { icon: '🚀', label: 'Startups' },
  { icon: '🏪', label: 'Local Businesses' },
  { icon: '🛒', label: 'E-commerce Stores' },
  { icon: '🍽️', label: 'Restaurants & Cafes' },
  { icon: '🎨', label: 'Portfolio' },
  { icon: '🏢', label: 'Real Estate' },
  { icon: '👨‍⚕️', label: 'Healthcare Clinics' },
  { icon: '🎓', label: 'Coaches & Educators' },
  { icon: '💪', label: 'Gyms & Fitness' },
  { icon: '💄', label: 'Beauty & Salons' },
  { icon: '📷', label: 'Photographers' },
  { icon: '🏨', label: 'Hotels & Travel' },
  { icon: '⚖️', label: 'Law Firms' },
];

const solutions = [
  {
    icon: '💼',
    title: 'Business Website',
    desc: 'Modern websites designed for businesses to showcase services, attract customers, and build credibility online.',
  },
  {
    icon: '🧑‍💻',
    title: 'Portfolio Website',
    desc: 'Clean and professional portfolio websites for freelancers, developers, and creators.',
  },
  {
    icon: '📣',
    title: 'Landing Page',
    desc: 'High-converting landing pages, designed to promote products, services or campaigns.',
  },
];

const processSteps = [
  {
    num: 1,
    icon: '🔍',
    title: 'Discovery',
    desc: 'Understanding the business goals, users and doing requirement analysis to decide website features.'
  },
  {
    num: 2,
    icon: '🎨',
    title: 'UI / Screen Design',
    desc: 'Designing the layout and structure of the website to ensure a clean and modern user experience.'
  },
  {
    num: 3,
    icon: '💻',
    title: 'Development',
    desc: 'Building the website using modern technologies with focus on performance and scalability.'
  },
  {
    num: 4,
    icon: '🚀',
    title: 'Deployment & Hosting',
    desc: 'Deploying the website to a secure server and making it live on the internet.'
  },
  {
    num: 5,
    icon: '🛠️',
    title: 'Maintenance & Bug Fixes',
    desc: 'Providing ongoing support, fixing issues and updating the website whenever required.'
  }
];

const features = [
  { icon: '✅', label: 'Fast Loading Pages' },
  { icon: '✅', label: 'Modern UI Design' },
  { icon: '✅', label: 'SEO Friendly Structure' },
  { icon: '✅', label: 'Easy Navigation' },
];

const Services = () => (
  <div className="services-bg">
    <div className="services-container">
      <h1 className="services-title">Businesses I Work With</h1>
      <p className="services-subtitle">I build websites for a wide range of businesses. Here are some of the types of businesses I help:</p>
       <a
        href="https://forms.gle/gq2oG6YWgP7FsCGw7"
        className="startproject-btn btn-purple"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block', margin: '0 auto', width: 'fit-content' }}
      >
        Start Your Project
      </a>
      <div className="businesses-cards-list">
        {businesses.map((b, i) => (
          <div className="business-card" key={i}>
            <span className="business-icon">{b.icon}</span>
            <span className="business-label">{b.label}</span>
          </div>
        ))}
      </div>
      <h2 className="process-title">My Website Development Process</h2>
      <div className="process-desc">A simple and structured process to deliver fast, scalable and reliable websites.</div>
      
      <div className="process-bigcard">
        {processSteps.map((step, i) => (
          <div className="process-bigstep" key={i}>
            <div className="process-stepnum">{step.num}</div>
            <div className="process-stepicon">{step.icon}</div>
            <div className="process-stepcontent">
              <div className="process-steptitle">{step.title}</div>
              <div className="process-stepdesc">{step.desc}</div>
            </div>
            {i !== processSteps.length - 1 && <div className="process-connector" />}
          </div>
        ))}
      </div>

      {/* WHY CHOOSE MY SERVICES SECTION */}
      <div className="whychoose-section">
        <h2 className="whychoose-title">Why Choose My Services?</h2>
        <p className="whychoose-subtitle">I deliver websites that are fast, user-friendly, and optimized for success.</p>
        <div className="whychoose-features-grid">
          <div className="whychoose-feature">
            <span className="whychoose-icon">🏎️</span>
            <span className="whychoose-label">Fast Loading Pages</span>
          </div>
          <div className="whychoose-feature">
            <span className="whychoose-icon">🖥️</span>
            <span className="whychoose-label">Modern UI Design</span>
          </div>
          <div className="whychoose-feature">
            <span className="whychoose-icon">📈</span>
            <span className="whychoose-label">SEO Friendly</span>
          </div>
          <div className="whychoose-feature">
            <span className="whychoose-icon">🧭</span>
            <span className="whychoose-label">Easy Navigation</span>
          </div>
          <div className="whychoose-feature">
            <span className="whychoose-icon">💻</span>
            <span className="whychoose-label">Responsive Design</span>
          </div>
          <div className="whychoose-feature">
            <span className="whychoose-icon">📱</span>
            <span className="whychoose-label">Mobile Optimized</span>
          </div>
          <div className="whychoose-feature">
            <span className="whychoose-icon">📊</span>
            <span className="whychoose-label">Scalable for Growth</span>
          </div>
          <div className="whychoose-feature">
            <span className="whychoose-icon">🛡️</span>
            <span className="whychoose-label">Secure & Reliable</span>
          </div>
        </div>
      </div>
      </div>
      <div className="project-cta">
        <h2>Let's Build Your Website</h2>
        <p>Whether you are a startup, local business, or growing brand, I can help you create a website that stands out.</p>
        <a
          href="https://forms.gle/gq2oG6YWgP7FsCGw7"
          className="startproject-btn btn-orange"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', display: 'block', margin: '0 auto', width: 'fit-content' }}
        >
          Start Your Project
        </a>
      </div>
    
  </div>
);

export default Services;
