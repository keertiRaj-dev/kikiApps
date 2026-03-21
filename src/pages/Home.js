import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import MentorshipCard from '../components/MentorshipCard';
import '../pages/Home.css';
import laptopImg from '../Assets/laptop.jpg';

const reviews = [
  {
    stars: 5,
    text: 'Kiki built our website exactly how we imagined it. The design is modern, fast and responsive. Highly recommended for any business website.',
    name: 'Amit Sharma',
    role: 'Startup Founder',
  },
  {
    stars: 5,
    text: 'The mentorship sessions helped me understand React concepts clearly and prepare for interviews confidently.',
    name: 'Priya Verma',
    role: 'Frontend Developer',
  },
  {
    stars: 5,
    text: 'Very smooth experience working together. The website was delivered quickly and works perfectly on all devices.',
    name: 'Rohit Jain',
    role: 'Business Owner',
  },
   {
    stars: 5,
    text: 'Kiki built our website exactly how we imagined it. The design is modern, fast and responsive. Highly recommended for any business website.',
    name: 'Amit Sharma',
    role: 'Startup Founder',
  },
  {
    stars: 5,
    text: 'The mentorship sessions helped me understand React concepts clearly and prepare for interviews confidently.',
    name: 'Priya Verma',
    role: 'Frontend Developer',
  },
  {
    stars: 5,
    text: 'Very smooth experience working together. The website was delivered quickly and works perfectly on all devices.',
    name: 'Rohit Jain',
    role: 'Business Owner',
  },
   {
    stars: 5,
    text: 'Kiki built our website exactly how we imagined it. The design is modern, fast and responsive. Highly recommended for any business website.',
    name: 'Amit Sharma',
    role: 'Startup Founder',
  },
  {
    stars: 5,
    text: 'The mentorship sessions helped me understand React concepts clearly and prepare for interviews confidently.',
    name: 'Priya Verma',
    role: 'Frontend Developer',
  },
  {
    stars: 5,
    text: 'Very smooth experience working together. The website was delivered quickly and works perfectly on all devices.',
    name: 'Rohit Jain',
    role: 'Business Owner',
  },
  // Add more reviews if needed
];

function StarRow() {
  return <div style={{color:'#FFD600', fontSize:'2rem', marginBottom:'1rem'}}>{'★★★★★'}</div>;
}

function ReviewCard({review}) {
  return (
    <div className="review-card">
      <StarRow />
      <div className="review-text">{review.text}</div>
      <div className="review-name"><b>{review.name}</b></div>
      <div className="review-role">{review.role}</div>
    </div>
  );
}

function ReviewCarousel() {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(() => {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  });

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 900) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / cardsPerPage);
  const start = page * cardsPerPage;
  const visible = reviews.slice(start, start + cardsPerPage);
  return (
    <div className="carousel-bg">
      <h2 className="carousel-title">Client & Student Reviews</h2>
      <div className="carousel-row">
        <button className="carousel-arrow" onClick={()=>setPage(p=>p>0?p-1:totalPages-1)}>&lt;</button>
        <div className="carousel-cards">
          {visible.map((r,i)=>(<ReviewCard review={r} key={i}/>))}
        </div>
        <button className="carousel-arrow" onClick={()=>setPage(p=>(p+1)%totalPages)}>&gt;</button>
      </div>
      <div className="carousel-dots">
        {Array.from({length: totalPages}).map((_,i)=>(
          <span key={i} className={i===page?"carousel-dot active":"carousel-dot"} onClick={()=>setPage(i)}></span>
        ))}
      </div>
    </div>
  );
}

const techStack = [
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'GraphQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'REST API', img: 'https://img.icons8.com/ios-filled/100/ff6600/api-settings.png' },
  { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'MUI', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'Redux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
];

function TechStackSection({navigate}) {
  // Duplicate the techStack array to create a seamless loop
  const techs = [...techStack, ...techStack];
  return (
    <section className="tech-section">
      <h2 className="tech-title">Technologies I Work With</h2>
      <div className="tech-grid">
        <div className="tech-slider">
          {techs.map((tech, i) => (
            <div className="tech-card" key={i}>
              <img src={tech.img} alt={tech.name} className="tech-icon" />
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="tech-cta">
        <h2 className="tech-cta-title">Let’s Build Something Together</h2>
        <div className="tech-cta-desc">Need a website for your business or guidance for your developer journey?</div>
        <div className="tech-cta-buttons">
          <Button onClick={() => navigate('/services')}>Get a Website</Button>
          <Button onClick={() => navigate('/mentorship')}>Get Mentorship</Button>
        </div>
      </div>
    </section>
  );
}

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-bg">
      <section className="home-black">
        <div className="hero-title-row">
          <h2 className="hero-welcome">Welcome to Kiki apps</h2>
        </div>
        <div className="hero-section">
          <div className="hero-left">
            <div className="hero-content">
              <h1>Building Websites and Developers</h1>
              <p>Code - Create - Mentor</p>
              <div className="hero-buttons">
                <Button onClick={() => navigate('/services')}>Get a Website</Button>
                <Button variant="secondary" onClick={() => navigate('/mentorship')}>Get Mentorship</Button>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={require('../Assets/laptop.jpg')} alt="Laptop" className="laptop-image" />
          </div>
        </div>
      </section>
      <section className="carousel-section">
        <ReviewCarousel />
      </section>
      <TechStackSection navigate={navigate} />
    </div>
  );
};

export default Home;
