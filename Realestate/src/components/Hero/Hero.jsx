import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="about">
      <img src="/y2.jpg" alt="Homyz Hero" className="hero-bg-image" />
      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="hero-container">
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Premium Real Estate
          </div>

          <h1 className="hero-title">
            Find Your <br />
            <em>Dream</em> Home <br />
            In Kenya
          </h1>

          <p className="hero-desc">
            Browse thousands of verified properties across Kenya.
            From cozy apartments to luxury villas — your perfect home is here.
          </p>

          <div className="hero-actions">
            <button className="hero-btn-primary" onClick={() => navigate('/properties')}>
              Browse Properties
            </button>
            <button className="hero-btn-ghost" onClick={() => {
              document.getElementById('getstarted')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Learn More
            </button>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              Verified Listings
            </div>
            <div className="hero-trust-sep" />
            <div className="hero-trust-item">
                No Hidden Fees
            </div>
            <div className="hero-trust-sep" />
            <div className="hero-trust-item">
                Trusted Agents
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;