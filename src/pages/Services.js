import React, { useEffect, useRef } from 'react';
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

const Services = () => {
  const cardsListRef = useRef(null);
  const stepsRef = useRef(null);

  // Staggered scroll-reveal for business cards
  useEffect(() => {
    const list = cardsListRef.current;
    if (!list) return;
    const cards = Array.from(list.querySelectorAll('.business-card'));

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('card-visible');
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Scroll-reveal for process timeline — re-triggers on every scroll
  useEffect(() => {
    const container = stepsRef.current;
    if (!container) return;
    const steps = Array.from(container.querySelectorAll('.process-tl-step'));
    const line = container.querySelector('.process-timeline-line');

    const isMobile = () => window.innerWidth <= 860;

    const updateLine = () => {
      if (!line) return;
      const visibleSteps = steps.filter(s => s.classList.contains('tl-step-visible'));
      if (visibleSteps.length === 0) {
        line.style.width = '0%';
        line.style.height = '0px';
        return;
      }
      if (isMobile()) {
        // On mobile: line grows top-to-bottom
        // Measure from first node center to last visible node center
        const track = container.querySelector('.process-timeline-track');
        if (!track) return;
        const trackTop = track.getBoundingClientRect().top;
        const lastVisible = visibleSteps[visibleSteps.length - 1];
        const lastNode = lastVisible.querySelector('.process-tl-node');
        if (!lastNode) return;
        const nodeRect = lastNode.getBoundingClientRect();
        const nodeCenterY = nodeRect.top + nodeRect.height / 2;
        const trackRect = track.getBoundingClientRect();
        const height = Math.max(0, nodeCenterY - trackRect.top);
        line.style.width = '3px';
        line.style.height = height + 'px';
      } else {
        // On desktop: line grows left-to-right as percentage
        const pct = Math.round((visibleSteps.length / steps.length) * 100);
        line.style.width = `${pct}%`;
        line.style.height = '100%';
      }
    };

    const stepObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('tl-step-visible');
            void entry.target.offsetWidth;
            entry.target.classList.add('tl-step-visible');
          } else {
            entry.target.classList.remove('tl-step-visible');
          }
        });
        updateLine();
      },
      { threshold: 0.4 }
    );

    steps.forEach((step) => stepObserver.observe(step));
    window.addEventListener('resize', updateLine);
    return () => {
      stepObserver.disconnect();
      window.removeEventListener('resize', updateLine);
    };
  }, []);

  return (
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
        <div className="businesses-cards-list" ref={cardsListRef}>
          {businesses.map((b, i) => (
            <div className="business-card" key={i}>
              <span className="business-icon">{b.icon}</span>
              <span className="business-label">{b.label}</span>
            </div>
          ))}
        </div>
        <h2 className="process-title">My Website Development Process</h2>
        <div className="process-desc">A simple and structured process to deliver fast, scalable and reliable websites.</div>

        <div className="process-timeline" ref={stepsRef}>
          <div className="process-timeline-track">
            <div className="process-timeline-line" />
          </div>
          {processSteps.map((step, i) => (
            <div className={`process-tl-step ${i % 2 === 0 ? 'tl-above' : 'tl-below'}`} key={i}>
              <div className="process-tl-card">
                <div className="process-tl-icon">{step.icon}</div>
                <div className="process-tl-title">{step.title}</div>
                <div className="process-tl-desc">{step.desc}</div>
              </div>
              <div className="process-tl-node">
                <span className="process-tl-num">{step.num}</span>
                <div className="process-tl-node-ring" />
              </div>
              <div className="process-tl-stem" />
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
};

export default Services;
