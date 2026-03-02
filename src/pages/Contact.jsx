import { useMemo, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Starfield from "../components/Starfield";
import PlanetsLayer from "../components/PlanetsLayer";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", position: "", message: "" });
  };

  const contactInfo = [
    { icon: "📍", title: "Address", text: "GISTDA Headquarters, Bangkok, Thailand" },
    { icon: "📧", title: "Email", text: "internship@gistda.or.th" },
    { icon: "📞", title: "Phone", text: "+66 2 123 4567" },
  ];

  const socialLinks = [
    { icon: "🐦", name: "Twitter" },
    { icon: "📘", name: "Facebook" },
    { icon: "📸", name: "Instagram" },
    { icon: "💼", name: "LinkedIn" },
  ];

  return (
    <div className="contact-page">
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

      <section className="contact-hero">
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

        <div className="contact-hero-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have questions about our internship program? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2 className="section-title">Send us a Message</h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className={`form-group ${focusedField === "name" ? "focused" : ""}`}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div className={`form-group ${focusedField === "email" ? "focused" : ""}`}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div className={`form-group ${focusedField === "position" ? "focused" : ""}`}>
                <label htmlFor="position">Interested Position</label>
                <select
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  onFocus={() => setFocusedField("position")}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="">Select a position</option>
                  <option value="programmer">Programmer</option>
                  <option value="software-tester">Software Tester</option>
                  <option value="researcher">Researcher</option>
                  <option value="content-creator">Content Creator</option>
                  <option value="graphic-designer">Graphic Designer</option>
                  <option value="interpreter">Interpreter</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={`form-group ${focusedField === "message" ? "focused" : ""}`}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-icon">🚀</span>
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="card-icon">{info.icon}</div>
                  <div className="card-content">
                    <h3>{info.title}</h3>
                    <p>{info.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a key={index} href="#" className="social-link">
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
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

export default Contact;
