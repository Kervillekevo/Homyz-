import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Values from "../components/Values/Values";
import "./About.css";

const team = [
  { name: "Kelvin Ngui",    role: "Founder & CEO",      avatar: "KN", bio: "10+ years in Kenyan real estate. Passionate about connecting families to their dream homes." },
  { name: "Amina Oduya",   role: "Head of Properties",  avatar: "AO", bio: "Expert in residential and commercial listings across Nairobi and the Coast region." },
  { name: "Brian Mutua",   role: "Client Relations",    avatar: "BM", bio: "Dedicated to making every buyer and seller journey smooth, transparent, and stress-free." },
  { name: "Fatuma Waweru", role: "Legal & Compliance",  avatar: "FW", bio: "Ensures every transaction is legally sound and fully protected for all parties involved." },
];

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="about-page">

        <div className="about-hero">
          <div className="about-hero-inner">
            <p className="about-eyebrow">Our Story</p>
            <h1>About <em>Homyz</em></h1>
            <p>Kenya's most trusted real estate platform — built to make finding your perfect home simple, transparent, and joyful.</p>
          </div>
        </div>

        <section className="about-mission">
          <div className="about-inner">
            <div className="mission-text">
              <p className="about-eyebrow-dark">Our Mission</p>
              <h2>We Believe Everyone Deserves a <em>Home They Love</em></h2>
              <p>Homyz was founded in Nairobi with one goal — to remove the friction, confusion, and mistrust that plagues real estate in Africa. We connect genuine buyers, renters, and sellers on a platform built on transparency and care.</p>
              <p>From a studio apartment in Mombasa to a luxury villa in Karen, every property on Homyz is verified, every agent is vetted, and every transaction is protected.</p>
              <button className="about-btn" onClick={() => { navigate("/properties"); window.scrollTo(0, 0); }}>
                Browse Properties
              </button>
            </div>
            <div className="mission-img">
              <img src="/kev.png" alt="About Homyz" />
            </div>
          </div>
        </section>

        <Values />

        <section className="about-team">
          <div className="about-inner-narrow">
            <div className="about-section-head">
              <p className="about-eyebrow-dark">The People Behind Homyz</p>
              <h2>Meet Our <em>Team</em></h2>
            </div>
            <div className="team-grid">
              {team.map((member, i) => (
                <div className="team-card" key={i}>
                  <div className="team-avatar">{member.avatar}</div>
                  <strong>{member.name}</strong>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default About;