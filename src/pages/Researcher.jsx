import { useMemo, useEffect } from "react";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import PlanetsLayer from "../components/PlanetsLayer";
import "./Researcher.css";

const Researcher = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="home">
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
              <path
                d="
                  M 0 0
                  L 1 0
                  L 1 0.15
                  C 0.92 0.22, 0.88 0.30, 0.90 0.38
                  C 0.93 0.52, 0.82 0.62, 0.72 0.60
                  C 0.58 0.58, 0.55 0.70, 0.48 0.74
                  C 0.38 0.80, 0.28 0.78, 0.18 0.82
                  C 0.08 0.86, 0.05 0.94, 0 1
                  L 0 0
                  Z"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="hero-surface" />

        <div className="floating-pixels" aria-hidden="true">
          {pixels.map((p) => (
            <span
              key={p.id}
              className="pixel"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.dur}s`,
              }}
            />
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
          <h1 className="hero2-title">Researcher</h1>

          <div className="hero2-left">
            <h2 className="hero2-kicker">Internship Programme with GISTDA</h2>

            <p className="hero2-text">
              Dive into cutting-edge research in satellite calibration and validation.
              <br />
              Contribute to scientific discoveries and advance space technology.
            </p>

            <p className="hero2-text muted">
              As a Researcher intern, you will work alongside experienced scientists on
              real satellite data analysis, develop new algorithms, and contribute to
              publications that shape the future of space exploration.
            </p>

            <button className="hero2-btn">Send application</button>
          </div>
        </div>
      </section>

      <section className="about-split">
        <div className="about-inner">
          <div className="about-left">
            <h2 className="about-title">About the Role</h2>
            <p className="about-text">
              Researchers at GISTDA are at the forefront of satellite technology innovation.
              You will conduct research on calibration methodologies, validate satellite data
              accuracy, and develop novel approaches to space-borne measurements. This internship
              provides invaluable experience in scientific research and data analysis.
            </p>

            <div className="image-collage">
              <img className="collage-img collage-main" src="/Researcher.jpg" alt="Research lab" />
              <img className="collage-img collage-top" src="/img1.jpg" alt="Research workspace" />
              <img className="collage-img collage-bottom" src="/img3.jpg" alt="Research workspace" />
            </div>
          </div>

          <div className="about-right">
            <img
              className="about-berg"
              src="/berg.png"
              alt="Mountain wave with satellite"
            />
            <img className="about-star a1" src="/star.png" alt="" aria-hidden="true" />
            <img className="about-star a2" src="/star2.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="benefits-wave-section">
        <svg className="clip-svg" aria-hidden="true">
          <defs>
            <clipPath id="benefitsWaveClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0.08 C 0.12 0.02, 0.28 0.02, 0.40 0.08 C 0.55 0.16, 0.62 0.10, 0.72 0.07 C 0.86 0.03, 0.94 0.05, 1 0.10 L 1 0.92 C 0.92 0.98, 0.78 0.98, 0.66 0.93 C 0.54 0.88, 0.44 0.90, 0.34 0.94 C 0.20 0.99, 0.08 0.98, 0 0.92 L 0 0.08 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="benefits-wave" aria-hidden="true" />

        <div className="benefits-content">
          <div className="benefits-header">
            <h2 className="benefits-title">
              What you will <span className="benefits-accent">research and discover</span>
            </h2>
          </div>

          <div className="benefits-grid">
            <div className="benefits-card">
              <h3>Data Analysis</h3>
              <ul>
                <li><b>Satellite Data:</b> Analyze large datasets from various satellite missions.</li>
                <li><b>Statistical Methods:</b> Apply advanced statistical techniques to validate data.</li>
                <li><b>Machine Learning:</b> Use ML algorithms for pattern recognition in satellite imagery.</li>
              </ul>
            </div>

            <div className="benefits-card">
              <h3>Scientific Writing</h3>
              <ul>
                <li><b>Research Papers:</b> Contribute to peer-reviewed publications.</li>
                <li><b>Technical Reports:</b> Document findings and methodologies.</li>
                <li><b>Presentations:</b> Present research at conferences and team meetings.</li>
              </ul>
            </div>

            <div className="benefits-card">
              <h3>Innovation</h3>
              <ul>
                <li><b>Algorithm Development:</b> Create new calibration algorithms.</li>
                <li><b>Methodology:</b> Develop innovative validation approaches.</li>
                <li><b>Collaboration:</b> Work with international research teams.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="final-pixels" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="final-pixel" />
          ))}
        </div>

        <div className="final-inner">
          <div className="final-left">
            <h2 className="final-title">Why join as a Researcher?</h2>
            <p className="final-text">
              Join our research team to contribute to meaningful scientific discoveries that
              impact global satellite operations. You'll work with world-class scientists,
              access unique datasets, and develop skills that prepare you for advanced
              research careers in academia or industry.
              <br /><br />
              This internship is ideal for students pursuing graduate studies or careers
              in remote sensing, geospatial science, or space technology.
            </p>
            <button className="final-btn">Send application</button>
          </div>

          <div className="final-doodle" aria-hidden="true">
            <img src="/theos2.png" alt="" />
          </div>

          <div className="final-right">
            <div className="final-block">
              <h3 className="final-block-title">Qualifications</h3>
              <ul className="final-list">
                <li>Currently enrolled in Physics, Engineering, or related science field</li>
                <li>Strong analytical and problem-solving skills</li>
                <li>Experience with data analysis tools (Python, MATLAB, or similar)</li>
                <li>Basic understanding of remote sensing concepts</li>
                <li>Good communication skills in English</li>
              </ul>
            </div>

            <div className="final-block">
              <h3 className="final-block-title">What you'll gain</h3>
              <ul className="final-list">
                <li>Publication opportunities in scientific journals</li>
                <li>Mentorship from leading scientists</li>
                <li>Hands-on satellite data experience</li>
                <li>Network in international space research</li>
              </ul>
            </div>

            <button className="final-btn secondary">View all positions</button>
          </div>
        </div>

        <div className="clouds-wrap" aria-hidden="true">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />
        </div>
      </section>
    </div>
  );
};

export default Researcher;
