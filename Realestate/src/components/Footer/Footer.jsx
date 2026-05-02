import "./Footer.css";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <footer className="footer-section">

      <div className="footer-top">
        <div className="footer-container">

          <div className="footer-brand">
            <div className="footer-logo-wrap" onClick={() => go("/")}>
              <img src="/logo.png" alt="logo" className="footer-logo" />
              <span className="footer-logo-name">Ho<em>myz</em></span>
            </div>
            <p>Our vision is to help everyone find the best place to live — beautifully and effortlessly.</p>
            <div className="footer-socials-row">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><FaFacebookF /></a>
              <a href="https://twitter.com"  target="_blank" rel="noreferrer" className="social-icon"><FaXTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <div className="footer-links-list">
              <span onClick={() => go("/about")}>About Us</span>
              <span onClick={() => go("/about")}>Our Values</span>
              <span onClick={() => go("/contact")}>Contact Us</span>
              <span onClick={() => go("/")}>Careers</span>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Properties</div>
            <div className="footer-links-list">
              <span onClick={() => go("/properties?type=sale")}>For Sale</span>
              <span onClick={() => go("/properties?type=rent")}>For Rent</span>
              <span onClick={() => go("/properties")}>New Listings</span>
              <span onClick={() => go("/properties?featured=true")}>Featured</span>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">145 Kilimani Road, Nairobi, Kenya</div>
              <div className="footer-contact-item">
                <a href="tel:0742800420">0742 800 420</a>
              </div>
              <div className="footer-contact-item">
                <a href="mailto:kelvinngui00@gmail.com">kelvinngui00@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span>© 2026 Homyz. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <span>·</span>
          <a href="#">Privacy</a>
          <span>·</span>
          <a href="#">Cookies</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;