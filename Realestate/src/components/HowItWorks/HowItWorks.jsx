import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Search a Property",
    desc: "Browse through hundreds of verified listings. Filter by location, price, type and more to narrow down your options.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Check the Details",
    desc: "View full property details — photos, amenities, agent info, and neighbourhood insights all in one place.",
  },
  {
    number: "03",
    icon: "📞",
    title: "Contact the Agent",
    desc: "Send a direct inquiry to the property agent. Get a response within 24 hours and schedule a viewing.",
  },
  {
    number: "04",
    icon: "🔑",
    title: "Close the Deal",
    desc: "Finalize the paperwork with full transparency. No hidden charges, no surprises — just your new home.",
  },
];

function HowItWorks() {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="hiw-inner">
        <div className="hiw-header">
          <span className="hiw-eyebrow">Simple Process</span>
          <h2>How It <em>Works</em></h2>
          <p>Four simple steps to finding your perfect property through Homyz.</p>
        </div>
        <div className="hiw-steps">
          {steps.map((step, i) => (
            <div className="hiw-step" key={i}>
              <div className="hiw-step-top">
                <span className="hiw-number">{step.number}</span>
                <div className="hiw-icon-wrap">{step.icon}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < steps.length - 1 && <div className="hiw-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;