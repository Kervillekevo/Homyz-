import "./Testimonials.css";

const reviews = [
  {
    name: "Amara Osei",
    location: "Nairobi, Kenya",
    avatar: "AO",
    rating: 5,
    text: "Found my apartment in Westlands within a week. The listings are accurate and the agent was very responsive. Homyz made the whole process stress-free.",
  },
  {
    name: "Brian Kamau",
    location: "Kiambu, Kenya",
    avatar: "BK",
    rating: 5,
    text: "I was skeptical at first but Homyz is genuinely different. No hidden charges, transparent pricing and the property photos match what you actually see.",
  },
  {
    name: "Seline Mutua",
    location: "Mombasa, Kenya",
    avatar: "SM",
    rating: 5,
    text: "The filter system is brilliant — I found exactly what I needed by filtering by bedrooms and price range. Closed my deal in under two weeks.",
  },
];

function Testimonials() {
  return (
    <section className="testi-section">
      <div className="testi-inner">
        <div className="testi-header">
          <span className="testi-eyebrow">Reviews</span>
          <h2>What Our Clients <em>Say</em></h2>
          <p>Real experiences from people who found their homes through Homyz.</p>
        </div>
        <div className="testi-grid">
          {reviews.map((r, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-stars">
                {"★".repeat(r.rating)}
              </div>
              <p className="testi-text">"{r.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{r.avatar}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;