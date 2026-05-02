import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="contact-page">

        
        <div className="contact-hero">
          <div className="contact-hero-inner">
            <p className="contact-eyebrow">Get In Touch</p>
            <h1>Contact <em>Us</em></h1>
            <p>Have questions about a property? Ready to list your home? We're here to help, every step of the way.</p>
          </div>
        </div>

        <div className="contact-body">
          <div className="contact-inner">

            
            <div className="contact-info">
              <h2>We'd Love to <em>Hear From You</em></h2>
              <p>Reach out through any channel below or fill in the form and we'll get back to you within 24 hours.</p>

              <div className="contact-info-cards">
                {[
                  { icon: "📍", title: "Visit Us",    value: "145 Kilimani Road, Nairobi, Kenya" },
                  { icon: "📞", title: "Call Us",     value: "0742 800 420" },
                  { icon: "✉️", title: "Email Us",    value: "kelvinngui00@gmail.com" },
                  { icon: "⏰", title: "Working Hours", value: "Mon–Sat: 8AM – 6PM" },
                ].map((item, i) => (
                  <div className="contact-info-card" key={i}>
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="contact-form-wrap">
              <h3>Send a Message</h3>
              {sent ? (
                <div className="contact-success">
                   Message sent! We'll get back to you within 24 hours.
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        placeholder="0712 345 678"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="I'm interested in a property..."
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us more about what you're looking for..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="contact-submit">
                    Send Message →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Contact;