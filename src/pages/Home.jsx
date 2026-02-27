import { useMemo } from "react";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import "./Home.css";
import PlanetsLayer from "../components/PlanetsLayer";

const Home = () => {
	const pixels = useMemo(() => {
		const count = 18;
		return Array.from({ length: count }).map((_, i) => ({
			id: i,
			size: Math.random() < 0.3 ? 10 : 6,
			left: Math.random() * 70 + 10, // vooral rond titelgebied
			top: Math.random() * 30 + 6,
			delay: Math.random() * 4,
			dur: 6 + Math.random() * 6,
		}));
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

			{/* HERO */}
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

				<div className="hero2-inner">
					<h1 className="hero2-title">Every Pixel Matters</h1>

					<div className="hero2-left">
						<h2 className="hero2-kicker">Internship Programme with GISTDA</h2>

						<p className="hero2-text">
							Ready to explore calibration and validation?
							<br />
							Or driven by a passion for space and the universe?
						</p>

						<p className="hero2-text muted">At GISTDA, we empower students to develop their skills and gain experience in a global, multicultural environment, working on international missions with real-world impact.</p>

						<button className="hero2-btn">Send application</button>

						{/* placeholders (images later) */}
						<div className="hero2-placeholders">
							<div className="ph people">People image later</div>
							<div className="ph sat">Satellite icons later</div>
						</div>
					</div>
				</div>
			</section>

			{/* ABOUT */}
			<section className="section section-glass">
				<div className="container">
					<h2 className="section-title">About GISTDA</h2>
					<p className="section-text">
						The Geo-Informatics and Space Technology Development Agency (GISTDA) is Thailand's premier organization for space technology and geospatial information. Our internship program offers students the opportunity to work with cutting-edge
						satellite data, remote sensing technology, and geospatial analysis tools.
					</p>
				</div>
			</section>

			{/* FEATURES */}
			<section className="section">
				<div className="container">
					<h2 className="section-title">What You'll Explore</h2>

					<div className="features-grid">
						<div className="feature-card">
							<div className="feature-icon">🛰️</div>
							<h3>Satellite Data Analysis</h3>
							<p>Work with real satellite imagery and learn to process Earth observation data</p>
						</div>

						<div className="feature-card">
							<div className="feature-icon">🗺️</div>
							<h3>GIS Development</h3>
							<p>Build geographic information systems and spatial databases</p>
						</div>

						<div className="feature-card">
							<div className="feature-icon">🔭</div>
							<h3>Space Technology</h3>
							<p>Get hands-on experience with space technology and research</p>
						</div>

						<div className="feature-card">
							<div className="feature-icon">📡</div>
							<h3>Remote Sensing</h3>
							<p>Learn advanced remote sensing techniques and applications</p>
						</div>
					</div>
				</div>
			</section>

			{/* STATS */}
			<section className="section section-wide">
				<div className="stats-section">
					<div className="stat-item">
						<span className="stat-number">100+</span>
						<span className="stat-label">Interns Placed</span>
					</div>
					<div className="stat-item">
						<span className="stat-number">50+</span>
						<span className="stat-label">Research Projects</span>
					</div>
					<div className="stat-item">
						<span className="stat-number">12</span>
						<span className="stat-label">Weeks Program</span>
					</div>
				</div>
			</section>

			<footer className="home-footer">
				<p>© 2026 GISTDA Internship Program | Reaching for the Stars</p>
			</footer>
		</div>
	);
};

export default Home;
