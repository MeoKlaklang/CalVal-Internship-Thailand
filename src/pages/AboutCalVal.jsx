import { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import PlanetsLayer from "../components/PlanetsLayer";
import "./AboutCalVal.css";

const AboutCalVal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const pixels = useMemo(() => {
    const count = 18;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() < 0.3 ? 10 : 6,
      left: Math.random() * 70 + 10,
      top: Math.random() * 30 + 6,
      delay: Math.random() * 4,
      dur: 6 + Math.random() * 6,
    }));
  }, []);

  const satellites = [
    { name: "THEOS-2", year: "2024", role: "Earth Observation" },
    { name: "TSCSat-1", year: "2023", role: "Climate Monitoring" },
    { name: "AstroSat", year: "2022", role: "Astronomy" },
  ];

  const processes = [
    { title: "Pre-flight Calibration", desc: "Ground-based testing before launch", icon: "🔧" },
    { title: "In-orbit Validation", desc: "Verifying satellite performance in space", icon: "🛰️" },
    { title: "Data Quality Check", desc: "Ensuring accuracy of collected data", icon: "📊" },
    { title: "Cross-comparison", desc: "Comparing with ground truth measurements", icon: "✅" },
  ];

  return (
    <div className="about-page">
      <div className="bg-layer" aria-hidden="true">
        <Starfield density={200} maxSpeed={0.22} />
        <PlanetsLayer planetCount={3} particleCount={50} parallaxStrength={22} />
        <div className="bg-vignette" />
        <div className="bg-noise" />
      </div>

      <div className="milkyway" aria-hidden="true">
        <div className="mw mw-1" />
        <div className="mw mw-2" />
      </div>

      <Navigation />

      <section className="hero2">
        <svg className="clip-svg" aria-hidden="true">
          <defs>
            <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 1 0 L 1 0.15 C 0.92 0.22, 0.88 0.30, 0.90 0.38 C 0.93 0.52, 0.82 0.62, 0.72 0.60 C 0.58 0.58, 0.55 0.70, 0.48 0.74 C 0.38 0.80, 0.28 0.78, 0.18 0.82 C 0.08 0.86, 0.05 0.94, 0 1 L 0 0 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="hero-surface" />

        <div className="floating-pixels" aria-hidden="true">
          {pixels.map((p) => (
            <span key={p.id} className="pixel" style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
          ))}
        </div>

        <div className="hero-decor" aria-hidden="true">
          <img className="decor-star star-a" src="/star.png" alt="" />
          <img className="decor-star star-b" src="/star2.png" alt="" />
          <img className="decor-star star-c" src="/star.png" alt="" />
          <img className="decor-sat sat-top" src="/satellite.png" alt="" />
          <img className="decor-theos theos-main" src="/theos2.png" alt="" />
        </div>

        <div className="hero2-inner">
          <h1 className="hero2-title">About Cal/Val</h1>

          <div className="hero2-left">
            <h2 className="hero2-kicker">Calibration & Validation at GISTDA</h2>

            <p className="hero2-text">
              Ensuring satellite data accuracy through rigorous calibration and validation processes.
              <br />
              Learn how we guarantee reliable space-based observations.
            </p>

            <button className="hero2-btn" onClick={() => document.getElementById('process-section').scrollIntoView({ behavior: 'smooth' })}>
              Explore Process
            </button>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2 className="section-title">What is Calibration & Validation?</h2>
          <p className="intro-text">
            Calibration and Validation (Cal/Val) is the process of ensuring that satellite sensors
            produce accurate and reliable data. At GISTDA, we maintain the highest standards of
            data quality for Thailand's satellite missions.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">The people behind GISTDA's Cal/Val success</p>
        
        <div className="team-grid">
          <div className="team-card">
            <div className="team-image">
              <img src="/best.jpg" alt="P'Best" />
            </div>
            <div className="team-info">
              <h3>P'Best</h3>
              <p className="team-role">Prayot Puangjaktha</p>
              <p className="team-position">Specialist (Space Technology)</p>
            </div>
          </div>
          
          <div className="team-card">
            <div className="team-image">
              <img src="/lung.jpg" alt="Me" />
            </div>
            <div className="team-info">
              <h3>P'Lung</h3>
              <p className="team-role">Pawarin Kuha</p>
              <p className="team-position">Officer (Space Technology)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="interactive-section">
        <h2 className="section-title">Explore Our Satellites</h2>
        <p className="section-subtitle">Hover over each satellite to learn more</p>
        
        <div className="satellite-grid">
          {satellites.map((sat, index) => (
            <div 
              key={index}
              className={`satellite-card ${hoveredPlanet === index ? 'active' : ''}`}
              onMouseEnter={() => setHoveredPlanet(index)}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <div className="satellite-icon">🛰️</div>
              <h3>{sat.name}</h3>
              <div className="satellite-info">
                <span>Launch: {sat.year}</span>
                <span>Role: {sat.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tabs-section" id="process-section">
        <h2 className="section-title">The Cal/Val Process</h2>
        
        <div className="tabs-container">
          <div className="tabs-nav">
            {processes.map((proc, index) => (
              <button 
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-icon">{proc.icon}</span>
                <span className="tab-text">{proc.title}</span>
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            <div className="tab-icon-large">{processes[activeTab].icon}</div>
            <h3>{processes[activeTab].title}</h3>
            <p>{processes[activeTab].desc}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${((activeTab + 1) / processes.length) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </section>

   

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Join Our Team?</h2>
          <p>Explore our internship positions and contribute to Thailand's space program</p>
          <div className="cta-buttons">
            <Link to="/Pages/Home" className="cta-btn primary">View Positions</Link>
          </div>
        </div>
      </section>

      <div className="clouds-wrap" aria-hidden="true">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>
    </div>
  );
};

export default AboutCalVal;
