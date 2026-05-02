import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <section className="getstarted-section" id="getstarted">
      <div className="gs-orb gs-orb-1" />
      <div className="gs-orb gs-orb-2" />
      <div className="gs-orb gs-orb-3" />

      <div className="getstarted-container">
        <div className="gs-eyebrow">Start Today</div>
        <h2 className="getstarted-title">
          Get Started with <em>Homyz</em>
        </h2>
        <p className="getstarted-text">
          Subscribe and find super attractive price quotes from us.
          Find your dream residence — sooner than you think.
        </p>
        <div className="gs-actions">
          <button className="getstarted-btn" onClick={() => navigate("/properties")}>
            Get Started
          </button>
          <button className="gs-secondary-btn" onClick={() => navigate("/properties")}>
            Browse Properties
          </button>
        </div>
        <div className="gs-trust-row">
          <div className="gs-trust-item"><span>No hidden fees</span></div>
          <div className="gs-trust-item"><span>Secure platform</span></div>
          <div className="gs-trust-item"><span>Instant listings</span></div>
          <div className="gs-trust-item"><span>Award winning</span></div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;