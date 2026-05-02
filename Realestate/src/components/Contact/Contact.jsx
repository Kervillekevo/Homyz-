import "./Contact.css";

const cards = [
  { icon: "📞", label: "Call",    value: "0742 800 420",        action: "Call now"     },
  { icon: "💬", label: "Chat",    value: "0704 049 454",        action: "Text now"     },
  { icon: "✉️", label: "Email",   value: "kelvinngui00@gmail.com", action: "Email now" },
  { icon: "📨", label: "Message", value: "0742 800 420",        action: "Send message" },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

      
        <div className="contact-top">

          <div className="contact-img-outer">
            <div className="contact-img-glow" />

            <div className="contact-image">
              <img src="toto.png" alt="Contact" />
            </div>

            <div className="contact-float-badge">
              <div className="float-badge-icon">⚡</div>
              <div className="float-badge-text">
                <strong>Fast Response</strong>
                <span>Within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="contact-heading">
            <span className="contact-eyebrow">Get In Touch</span>
            <h2 className="contact-title">
              Contact <em>Us</em>
            </h2>
            <p className="contact-subtitle">
              Reach out to us anytime — we're happy to help you find your perfect property.
            </p>
          </div>

        </div>

      
        <div className="contact-cards">
          {cards.map((card, index) => (
            <div className="contact-card" key={index}>
              <div className="card-icon-wrap">{card.icon}</div>
              <strong>{card.label}</strong>
              <span>{card.value}</span>
              <small>{card.action}</small>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;