import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	return (
		<nav className="navigation">
			<div className="nav-logo">
				<img src="/logo.png" alt="GISTDA Logo" className="logo-img" />
				<span className="logo-text">GISTDA Internship</span>
			</div>

			<ul className="nav-links">
				<li>
					<Link to="/Pages/Home">Home</Link>
				</li>
				<li className="dropdown">
					<Link to="/about">Positions available</Link>

					<ul className="dropdown-menu">
						<li>
							<Link to="/Pages/Programmer">Programmer</Link>
						</li>
						<li>
							<Link to="/positions/software-tester">Software Tester</Link>
						</li>
						<li>
							<Link to="/positions/researcher">Researcher</Link>
						</li>
						<li>
							<Link to="/positions/content-creator">Content Creator</Link>
						</li>
						<li>
							<Link to="/positions/graphic-designer">Graphic Designer</Link>
						</li>
						<li>
							<Link to="/positions/interpreter">Interpreter</Link>
						</li>
					</ul>
				</li>{" "}
				<li>
					<Link to="/about-calval">About Cal/val</Link>
				</li>
				<li>
					<Link to="/contact">Contact us</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
