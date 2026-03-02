import { useMemo, useEffect } from "react";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import PlanetsLayer from "../components/PlanetsLayer";
import "./Interpreter.css";

const Interpreter = () => {
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
          <h1 className="hero2-title">Interpreter</h1>

          <div className="hero2-left">
            <h2 className="hero2-kicker">Internship Programme with GISTDA</h2>

            <p className="hero2-text">
              Bridge language barriers in international space missions.
              <br />
              Facilitate communication between international teams and stakeholders.
            </p>

            <p className="hero2-text muted">
              As an Interpreter intern, you will provide language support for international
              meetings, conferences, and documentation. You will work with scientists and
              engineers to ensure clear communication across languages in our global projects.
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
              Interpreters at GISTDA are essential for our international collaborations.
              You will provide simultaneous and consecutive interpretation during meetings
              with international partners, translate technical documents, and help bridge
              communication gaps in multicultural teams working on satellite missions.
            </p>

            <div className="image-collage">
              <img className="collage-img collage-main" src="/interpreter.jpg" alt="International meeting" />
              <img className="collage-img collage-top" src="/img1.jpg" alt="Interpreter workspace" />
              <img className="collage-img collage-bottom" src="/img3.jpg" alt="Interpreter workspace" />
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
            <h2 className="benefits-title">What you will <span className="benefits-accent">do and learn</span></h2>
          </div>

          <div className="benefits-grid">
            <div className="benefits-card">
              <h3>Interpretation</h3>
              <ul>
                <li><b>Simultaneous:</b> Provide real-time interpretation during meetings.</li>
                <li><b>Consecutive:</b> Support formal presentations and discussions.</li>
                <li><b>Whispered:</b> Assist small groups with interpretation as needed.</li>
              </ul>
            </div>

            <div className="benefits-card">
              <h3>Translation</h3>
              <ul>
                <li><b>Technical Docs:</b> Translate scientific and technical documents.</li>
                <li><b>Presentations:</b> Localize presentations for international audiences.</li>
                <li><b>Correspondence:</b> Help with multilingual communication.</li>
              </ul>
            </div>

            <div className="benefits-card">
              <h3>Industry Skills</h3>
              <ul>
                <li><b>Space Terminology:</b> Learn specialized space and satellite vocabulary.</li>
                <li><b>Networking:</b> Connect with international space professionals.</li>
                <li><b>Career Growth:</b> Gain experience in a specialized interpreting field.</li>
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
            <h2 className="final-title">Why join as an Interpreter?</h2>
            <p className="final-text">
              Join our international relations team to facilitate communication in cutting-edge
              space projects. You'll gain unique experience interpreting for scientists and
              engineers, develop specialized vocabulary, and build a network in the international
              space community.
              <br /><br />
              This internship is ideal for students pursuing careers in interpretation,
              translation, or international relations within the space industry.
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
                <li>Currently enrolled in Interpretation, Translation, or related field</li>
                <li>Native-level proficiency in Thai and English</li>
                <li>Strong listening and speaking skills</li>
                <li>Interest in technical and scientific topics</li>
                <li>Good cultural awareness and communication skills</li>
              </ul>
            </div>

            <div className="final-block">
              <h3 className="final-block-title">What you'll gain</h3>
              <ul className="final-list">
                <li>Professional interpreting experience</li>
                <li>Technical vocabulary in space science</li>
                <li>International networking opportunities</li>
                <li>Mentorship from experienced interpreters</li>
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

export default Interpreter;
