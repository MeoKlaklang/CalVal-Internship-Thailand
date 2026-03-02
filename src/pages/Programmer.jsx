import { useMemo, useEffect } from "react";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import PlanetsLayer from "../components/PlanetsLayer";
import "./Programmer.css";

const Programmer = () => {
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
      L 1 0.78
      C 0.85 0.90, 0.65 0.90, 0.50 0.83
      C 0.35 0.76, 0.20 0.86, 0 0.78
      Z
    "
							/>
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
				</div>

				<div className="hero2-inner">
					<h1 className="hero2-title">Programmer</h1>

					<div className="hero2-left">
						<h2 className="hero2-kicker">Internship Programme with GISTDA</h2>

						<p className="hero2-text">
							Build the software that powers satellite missions and space technology.
							<br />
							Develop code that processes real satellite data and enables breakthrough discoveries.
						</p>

						<p className="hero2-text muted">
							As a Programmer intern, you will work on developing and maintaining software systems for satellite data processing, mission control, and data analysis. You'll collaborate with scientists and engineers to create tools that make a real
							impact on space exploration.
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
							Programmers at GISTDA are at the heart of our satellite operations. You will develop software for data processing pipelines, create visualization tools, build automation scripts, and contribute to mission-critical systems that process
							real satellite data from space missions.
						</p>
					</div>

					<div className="about-images">
						<div className="image-collage">
							<img className="collage-img collage-main" src="/programmer.jpg" alt="Programming workspace" />
							<img className="collage-img collage-top" src="/img1.jpg" alt="Programming workspace" />
							<img className="collage-img collage-bottom" src="/img3.jpg" alt="Programming workspace" />
						</div>
					</div>

					<div className="about-right">
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
							What you will <span className="benefits-accent">code and create</span>
						</h2>
					</div>

					<div className="benefits-grid">
						<div className="benefits-card">
							<h3>Software Development</h3>
							<ul>
								<li>
									<b>Data Processing:</b> Build pipelines to process satellite imagery and data.
								</li>
								<li>
									<b>Automation:</b> Create scripts to automate repetitive tasks and workflows.
								</li>
								<li>
									<b>Tools & Utilities:</b> Develop internal tools to improve team productivity.
								</li>
							</ul>
						</div>

						<div className="benefits-card">
							<h3>Technical Skills</h3>
							<ul>
								<li>
									<b>Programming Languages:</b> Work with Python, JavaScript, C++, and more.
								</li>
								<li>
									<b>Version Control:</b> Learn professional git workflows and collaboration.
								</li>
								<li>
									<b>Software Design:</b> Apply best practices in code architecture.
								</li>
							</ul>
						</div>

						<div className="benefits-card">
							<h3>Space Applications</h3>
							<ul>
								<li>
									<b>Satellite Data:</b> Process real data from satellite missions.
								</li>
								<li>
									<b>Mission Software:</b> Contribute to software that controls satellite operations.
								</li>
								<li>
									<b>Research Support:</b> Build tools for scientific research and analysis.
								</li>
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
						<h2 className="final-title">Why join as a Programmer?</h2>
						<p className="final-text">
							Join our development team to work on software that actually processes satellite data from space. You'll gain hands-on experience with real-world data, learn from experienced developers, and build a portfolio of work that makes a
							tangible impact.
							<br />
							<br />
							This internship is perfect for students pursuing careers in software development, data engineering, or aerospace technology.
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
								<li>Currently enrolled in Computer Science or related field</li>
								<li>Proficiency in at least one programming language (Python preferred)</li>
								<li>Basic understanding of data structures and algorithms</li>
								<li>Familiarity with version control (Git)</li>
								<li>Good problem-solving skills and teamwork ability</li>
							</ul>
						</div>

						<div className="final-block">
							<h3 className="final-block-title">What you'll gain</h3>
							<ul className="final-list">
								<li>Real satellite data processing experience</li>
								<li>Professional software development skills</li>
								<li>Mentorship from experienced developers</li>
								<li>Portfolio pieces for your career</li>
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

export default Programmer;
