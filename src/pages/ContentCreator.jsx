import { useMemo, useEffect } from "react";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import PlanetsLayer from "../components/PlanetsLayer";
import "./ContentCreator.css";

const ContentCreator = () => {
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
          <h1 className="hero2-title">Content Creator</h1>

          <div className="hero2-left">
            <h2 className="hero2-kicker">Internship Programme with GISTDA</h2>

            <p className="hero2-text">
              Create engaging content about space technology and satellite missions.
              <br />
              Inspire the next generation of scientists and engineers.
            </p>

            <p className="hero2-text muted">
              As a Content Creator intern, you will produce articles, social media content,
              videos, and multimedia materials that communicate complex space technology
              concepts to diverse audiences in an engaging way.
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
              Content Creators at GISTDA play a vital role in science communication. You will
              work on creating compelling narratives about our satellite missions, developing
              educational materials, and managing social media presence. This internship offers
              hands-on experience in digital content creation for a space agency.
            </p>

            <div className="image-collage">
              <img className="collage-img collage-main" src="/content.jpg" alt="Content creation workspace" />
              <img className="collage-img collage-top" src="/img1.jpg" alt="Content workspace" />
              <img className="collage-img collage-bottom" src="/img3.jpg" alt="Content workspace" />
            </div>
          </div>

          <div className="about-right">
            <img className="about-berg" src="/berg.png" alt="Mountain wave with satellite" />
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
            <h2 className="benefits-title">What you will <span className="benefits-accent">create and learn</span></h2>
          </div>

          <div className="benefits-grid">
            <div className="benefits-card">
              <h3>Digital Content</h3>
              <ul>
                <li><b>Articles:</b> Write engaging articles about satellite technology.</li>
                <li><b>Social Media:</b> Manage and grow our social media presence.</li>
                <li><b>Multimedia:</b> Create videos, infographics, and visual content.</li>
              </ul>
            </div>

            <div className="benefits-card">
              <h3>Science Communication</h3>
              <ul>
                <li><b>Simplify Complexity:</b> Translate technical concepts for general audiences.</li>
                <li><b>Storytelling:</b> Craft compelling narratives about space missions.</li>
                <li><b>Audience Engagement:</b> Build community around space science.</li>
              </ul>
            </div>

            <div className="benefits-card">
              <h3>Marketing Skills</h3>
              <ul>
                <li><b>Brand Voice:</b> Develop consistent brand messaging.</li>
                <li><b>Analytics:</b> Track content performance and optimize strategy.</li>
                <li><b>Campaigns:</b> Plan and execute content marketing campaigns.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="final-pixels" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (<span key={i} className="final-pixel" />))}
        </div>

        <div className="final-inner">
          <div className="final-left">
            <h2 className="final-title">Why join as a Content Creator?</h2>
            <p className="final-text">
              Join our communications team to make space science accessible to everyone.
              You'll work on real campaigns, build your portfolio with professional work,
              and develop skills in digital marketing for the space industry.
              <br /><br />
              This internship is perfect for students pursuing careers in content creation,
              marketing, journalism, or science communication.
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
                <li>Currently enrolled in Communications, Marketing, or related field</li>
                <li>Strong writing and editing skills</li>
                <li>Experience with social media platforms</li>
                <li>Basic graphic design or video editing skills</li>
                <li>Good communication skills in English and Thai</li>
              </ul>
            </div>

            <div className="final-block">
              <h3 className="final-block-title">What you'll gain</h3>
              <ul className="final-list">
                <li>Professional portfolio pieces</li>
                <li>Industry connections in communications</li>
                <li>Hands-on marketing experience</li>
                <li>Mentorship from communications professionals</li>
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

export default ContentCreator;
