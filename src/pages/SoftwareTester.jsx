import { useMemo, useEffect } from "react";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import PlanetsLayer from "../components/PlanetsLayer";
import "./SoftwareTester.css";

const SoftwareTester = () => {
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
					<h1 className="hero2-title">Software Tester</h1>

					<div className="hero2-left">
						<h2 className="hero2-kicker">Internship Programme with GISTDA</h2>

						<p className="hero2-text">
							Ensure the quality and reliability of our satellite data processing software.
							<br />
							Join our team to test, validate, and improve cutting-edge space technology.
						</p>

						<p className="hero2-text muted">As a Software Tester intern, you will work on verifying the accuracy of calibration and validation software, identifying bugs, and ensuring our systems meet the highest standards of reliability.</p>

						<button className="hero2-btn">Send application</button>
					</div>
				</div>
			</section>

			<section className="about-split">
				<div className="about-inner">
					<div className="about-left">
						<h2 className="about-title">About the Role</h2>
						<p className="about-text">
							Software Testers at GISTDA play a crucial role in our Cal/Val team. You will be responsible for creating and executing test plans, identifying defects, and ensuring that our satellite data processing systems function correctly. This
							internship offers hands-on experience with real satellite data and advanced testing methodologies.
						</p>

						<div className="image-collage">
							<img className="collage-img collage-main" src="/software.jpg" alt="Software testing dashboard" />
							<img className="collage-img collage-top" src="/img1.jpg" alt="Testing workspace" />
							<img className="collage-img collage-bottom" src="/img3.jpg" alt="Testing workspace" />
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
						<clipPath id="heroWaveClip" clipPathUnits="objectBoundingBox">
							<path
								d="
      M 0 0.92
      C 0.12 0.98, 0.28 0.98, 0.40 0.92
      C 0.55 0.84, 0.62 0.90, 0.72 0.93
      C 0.86 0.97, 0.94 0.95, 1 0.90
      L 1 0.08
      C 0.92 0.02, 0.78 0.02, 0.66 0.07
      C 0.54 0.12, 0.44 0.10, 0.34 0.06
      C 0.20 0.01, 0.08 0.02, 0 0.08
      Z
    "
							/>
						</clipPath>
					</defs>
				</svg>

				<div className="benefits-wave" aria-hidden="true" />

				<div className="benefits-content">
					<div className="benefits-header">
						<h2 className="benefits-title">
							What you will <span className="benefits-accent">learn and do</span>
						</h2>
					</div>

					<div className="benefits-grid">
						<div className="benefits-card">
							<h3>Test Automation</h3>
							<ul>
								<li>
									<b>Automated Testing:</b> Learn to create and maintain automated test scripts for satellite data processing pipelines.
								</li>
								<li>
									<b>Test Frameworks:</b> Gain experience with industry-standard testing frameworks and tools.
								</li>
								<li>
									<b>CI/CD Integration:</b> Understand how testing fits into continuous integration workflows.
								</li>
							</ul>
						</div>

						<div className="benefits-card">
							<h3>Quality Assurance</h3>
							<ul>
								<li>
									<b>Test Planning:</b> Develop comprehensive test plans and test cases.
								</li>
								<li>
									<b>Bug Tracking:</b> Use professional tools to track and manage defects.
								</li>
								<li>
									<b>Quality Metrics:</b> Learn to measure and report on software quality.
								</li>
							</ul>
						</div>

						<div className="benefits-card">
							<h3>Satellite Data</h3>
							<ul>
								<li>
									<b>Data Validation:</b> Understand how to validate satellite data accuracy.
								</li>
								<li>
									<b>Calibration Testing:</b> Test algorithms used in satellite calibration processes.
								</li>
								<li>
									<b>Real-World Impact:</b> Work on software that affects actual satellite missions.
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
						<h2 className="final-title">Why join as a Software Tester?</h2>
						<p className="final-text">
							Join our team to contribute to critical satellite missions while developing your testing skills. You'll work with experienced professionals, learn industry best practices, and gain valuable experience in quality assurance for space
							technology.
							<br />
							<br />
							This internship is perfect for students pursuing careers in software quality, testing, or satellite data processing.
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
								<li>Currently enrolled in Computer Science, Software Engineering, or related field</li>
								<li>Basic understanding of software testing concepts</li>
								<li>Familiarity with programming languages (Python, Java, or similar)</li>
								<li>Strong attention to detail and analytical skills</li>
								<li>Good communication skills in English</li>
							</ul>
						</div>

						<div className="final-block">
							<h3 className="final-block-title">What you'll gain</h3>
							<ul className="final-list">
								<li>Hands-on experience with satellite data</li>
								<li>Professional testing certifications preparation</li>
								<li>Mentorship from industry experts</li>
								<li>Network in the space technology sector</li>
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

export default SoftwareTester;
