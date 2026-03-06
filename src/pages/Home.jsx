import { useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import PlanetsLayer from "../components/PlanetsLayer";
import "./Home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // HERO floating pixels (jouw bestaande)
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

  // ABOUT image pixel overlay ref
  const scrollPixelRef = useRef(null);

  // Scroll-based pixel reveal (enter => pixels weg, exit => pixels terug)
  useEffect(() => {
    if (!scrollPixelRef.current) return;

    const wrap = scrollPixelRef.current;
    const px = wrap.querySelectorAll(".scroll-pixel");

    // start: pixels aan (bedekken)
    gsap.set(px, { opacity: 1 });

    // scrub: tijdens scroll verdwijnen pixels
    const tween = gsap.to(px, {
      opacity: 0,
      stagger: { amount: 1.1, from: "random" },
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrap,
        start: "top 75%",
        end: "bottom 25%",
        scrub: true,
        // markers: true, // <- zet aan als je wil debuggen
      },
    });

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <div className="home">
      {/* GLOBAL galaxy background for whole page */}
      <div className="bg-layer" aria-hidden="true">
        <Starfield density={200} maxSpeed={0.22} />
        <PlanetsLayer planetCount={3} particleCount={50} parallaxStrength={22} />
        <div className="bg-vignette" />
        <div className="bg-noise" />
      </div>

      {/* Milky Way overlay (white flowing areas across the whole page) */}
      <div className="milkyway" aria-hidden="true">
        <div className="mw mw-1" />
        <div className="mw mw-2" />
      </div>

      <Navigation />

      {/* HERO (ongewijzigd) */}
      <section className="hero2">
        {/* clipPath voor wave */}
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

        {/* witte wave overlay */}
        <div className="hero-surface" />

        {/* floating pixels */}
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

        {/* DECOR IMAGES (stars + satellites) */}
        <div className="hero-decor" aria-hidden="true">
          {/* stars */}
          <img className="decor-star star-a" src="/star.png" alt="" />
          <img className="decor-star star-b" src="/star2.png" alt="" />
          <img className="decor-star star-c" src="/star.png" alt="" />

          {/* satellites */}
          <img className="decor-sat sat-top" src="/satellite.png" alt="" />
          <img className="decor-theos theos-main" src="/theos2.png" alt="" />
        </div>

        <div className="hero2-inner">
          <h1 className="hero2-title">Every Pixel Matters</h1>

          <div className="hero2-left">
            <h2 className="hero2-kicker">Internship Programme with GISTDA</h2>

            <p className="hero2-text">
              Ready to explore calibration and validation?
              <br />
              Or driven by a passion for space and the universe?
            </p>

            <p className="hero2-text muted">
              At GISTDA, we empower students to develop their skills and gain
              experience in a global, multicultural environment, working on
              international missions with real-world impact.
            </p>

            <button className="hero2-btn">Send application</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-split">
        <div className="about-inner">
          {/* LEFT */}
          <div className="about-left">
            <h2 className="about-title">What is Calibration/Validation</h2>
            <p className="about-text">
              The Geo-Informatics and Space Technology Development Agency (GISTDA)
              is Thailand's premier organization for space technology and geospatial
              information. Our internship program offers students the opportunity
              to work with cutting-edge satellite data, remote sensing technology,
              and geospatial analysis tools.
            </p>

            {/* SCROLL PIXEL REVEAL IMAGE */}
            <div className="scroll-pixel-wrap" ref={scrollPixelRef}>
              <img
                className="ice-img"
                src="/ice.png"
                alt="Satellite orbiting Earth"
              />

              <div className="scroll-pixels" aria-hidden="true">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="scroll-pixel" />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BENEFITS (inside a horizontal wave) */}
<section className="benefits-wave-section">
  {/* clipPath voor benefits wave */}
  <svg className="clip-svg" aria-hidden="true">
    <defs>
      <clipPath id="benefitsWaveClip" clipPathUnits="objectBoundingBox">
        <path
          d="
            M 0 0.08
            C 0.12 0.02, 0.28 0.02, 0.40 0.08
            C 0.55 0.16, 0.62 0.10, 0.72 0.07
            C 0.86 0.03, 0.94 0.05, 1 0.10
            L 1 0.92
            C 0.92 0.98, 0.78 0.98, 0.66 0.93
            C 0.54 0.88, 0.44 0.90, 0.34 0.94
            C 0.20 0.99, 0.08 0.98, 0 0.92
            L 0 0.08
            Z
          "
        />
      </clipPath>
    </defs>
  </svg>

  {/* witte golf */}
  <div className="benefits-wave" aria-hidden="true" />

  <div className="benefits-content">
    <div className="benefits-header">
      <h2 className="benefits-title">
        The benefits working with <span className="benefits-accent">Cal/Val team</span>
      </h2>

      {/* pixels naast titel */}
      <div className="benefits-title-pixels" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="benefits-mini-pixel" />
        ))}
      </div>

      {/* doodle placeholders (later images) */}
      <div className="benefits-doodle doodle-top-right" aria-hidden="true" />
      <div className="benefits-doodle doodle-bottom-left" aria-hidden="true" />
    </div>

    <div className="benefits-grid">
      <div className="benefits-card">
        <h3>Hands on experience</h3>
        <ul>
          <li><b>Calibration and Validation:</b> Master techniques to ensure satellite data accuracy and reliability.</li>
          <li><b>Image Processing:</b> Dive into advanced processing methods for satellite imagery.</li>
          <li><b>Real-World Applications:</b> Learn to use satellite data effectively for research and decision-making.</li>
        </ul>
      </div>

      <div className="benefits-card">
        <h3>What you will gain</h3>
        <ul>
          <li><b>Master New Skills:</b> Develop cutting-edge technical expertise and sharpen problem-solving abilities.</li>
          <li><b>Think Bigger:</b> Adopt a forward-thinking mindset and unlock your potential for growth.</li>
          <li><b>Unleash Creativity:</b> Innovate and explore groundbreaking ideas while collaborating on impactful projects.</li>
          <li><b>Find Your Inspiration:</b> Work with passionate professionals who will guide your journey.</li>
        </ul>
      </div>

      <div className="benefits-card">
        <h3>What you will receive</h3>
        <ul>
          <li><b>Calibration and Validation:</b> Master techniques to ensure satellite data accuracy and reliability.</li>
          <li><b>Image Processing:</b> Dive into advanced processing methods for satellite imagery.</li>
          <li><b>Real-World Applications:</b> Learn to use satellite data effectively for research and decision-making.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* WORKSHOP SECTION (like screenshot) */}
<section className="workshop-section">
  <div className="workshop-inner">
    {/* LEFT COLLAGE */}
    <div className="workshop-collage">
      <img className="ws-img ws-img--tall" src="/img1.jpg" alt="Workshop 1" />
      <img className="ws-img ws-img--mid" src="/img3.jpg" alt="Workshop 2" />
      <img className="ws-img ws-img--bottom" src="/img4.jpg" alt="Workshop 3" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="workshop-content">
      <div className="workshop-title-row">
        <h2 className="workshop-title">Workshop from Cal/Val team</h2>

        {/* mini pixels near title */}
        <div className="workshop-title-pixels" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="workshop-mini-pixel" />
          ))}
        </div>
      </div>

      <h3 className="workshop-subtitle">Say Hi To THEOS 2 from The Earth.</h3>

      <p className="workshop-text">
        We offer hands-on experience that allows you to engage directly with professional
        projects, providing a real-world understanding of what it's like to work at the
        forefront of the space industry.
        <br /><br />
        Our internships accelerate your career development, equipping you with the skills
        and knowledge needed for future success.
        <br /><br />
        As a student intern, you'll have the opportunity to apply what you've learned in
        your studies to meaningful projects, gaining valuable insights that will shape
        your professional journey.
      </p>

      <button className="workshop-btn">View more projects</button>

      {/* DOODLES */}
      <div className="workshop-doodles" aria-hidden="true">
        <img className="ws-doodle ws-doodle--star1" src="/star.png" alt="" />
        <img className="ws-doodle ws-doodle--star2" src="/star2.png" alt="" />
        <img className="ws-doodle ws-doodle--theos" src="/theos2.png" alt="" />
      </div>
    </div>
  </div>
</section>

 {/* FINAL CTA SECTION */}
<section className="final-section">
  {/* kleine pixels linksboven */}
  <div className="final-pixels" aria-hidden="true">
    {Array.from({ length: 7 }).map((_, i) => (
      <span key={i} className="final-pixel" />
    ))}
  </div>

  <div className="final-inner">
    {/* LEFT */}
    <div className="final-left">
      <h2 className="final-title">Why you should join us?</h2>

      <p className="final-text">
        At GISTDA, we have the opportunity to contribute to groundbreaking projects that shape
        the future of space and satellite technologies, enhancing Thailand&apos;s role in the global
        space industry.
        <br /><br />
        You&apos;ll gain hands-on experience, advance your career, and build a strong professional
        network within the space technology sector. We empower you to think creatively, challenge
        yourself, and achieve your professional goals while working on meaningful projects that
        bring the benefits of space to people.
        <br /><br />
        Join our Cal/Val team and be part of the exciting world of space exploration, where you&apos;ll
        grow, innovate, and help drive the advancement of space technology for the greater good.
      </p>

      <button className="final-btn">Send application</button>
    </div>

  
    <div className="final-doodle" aria-hidden="true">
  
      <img src="/theos2.png" alt="" />
    </div>

    {/* RIGHT */}
    <div className="final-right">
      <div className="final-block">
        <h3 className="final-block-title">Qualifications</h3>
        <ul className="final-list">
          <li>Must be 18 years of older at the time of application</li>
          <li>Currently enrolled as a full-time university student, at least in the 3rd year or higher</li>
          <li>Able to commit to a minimum internship duration of 3 months (more than 60 working days)</li>
          <li>Must have a minimum 3.00 GPA</li>
          <li>Strong proficiency in English communication</li>
        </ul>
      </div>

      <div className="final-block">
        <h3 className="final-block-title">Position available</h3>
        <div className="final-tags">
          <Link to="/Pages/Programmer" className="final-tag">Programmer</Link>
          <Link to="/positions/software-tester" className="final-tag">Software Tester</Link>
          <Link to="/positions/researcher" className="final-tag">Researcher</Link>
          <Link to="/positions/content-creator" className="final-tag">Content Creator</Link>
          <Link to="/positions/graphic-designer" className="final-tag">Graphic Designer</Link>
          <Link to="/positions/interpreter" className="final-tag">Interpreter</Link>
        </div>
      </div>

      <button className="final-btn secondary">More About Position</button>
    </div>
  </div>

  {/* clouds bottom */}
  <div className="clouds-wrap" aria-hidden="true">
    <div className="cloud cloud-1" />
    <div className="cloud cloud-2" />
    <div className="cloud cloud-3" />
  </div>
</section>
  
    </div>
  );
};

export default Home;