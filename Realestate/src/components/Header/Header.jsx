import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About Us",   href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (href) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <header className="kevo">
        <div className="kl">

          <a className="logo-wrap" href="/" onClick={(e) => handleNav(e, "/")}>
            <img src="/logo.png" alt="Homyz logo" className="lily" />
            <span className="logo-name">Ho<em>myz</em></span>
          </a>

          <nav className="menu">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={isActive(link.href) ? "nav-active" : ""}
                onClick={(e) => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <span className="nav-badge">Premium Listings</span>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn">Sign In</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNav(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-divider" />

        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn" style={{ width: "100%" }}>Sign In</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px" }}>
            <UserButton afterSignOutUrl="/" />
            <span style={{ fontSize: "14px", color: "#334155", fontWeight: 600 }}>My Account</span>
          </div>
        </SignedIn>

      </div>
    </>
  );
}

export default Header;