import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faLayerGroup,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTwitter,
  faYoutube,
  faTwitch,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo">
              <img
                src="https://omnicweb.s3.amazonaws.com/assets/img/logos/inverted_logo.svg"
                alt="Omnic Forge Logo"
              />
            </div>
            <span className="brand-text">Omnic.AI</span>
          </div>
          <p className="footer-description">
            Omnic.AI is a global leader in esports player performance data and
            analytics. We use artificial intelligence and machine learning to
            help players improve through our flagship platform Omnic Forge.
          </p>
        </div>

        <div className="footer-links">
          {[
            {
              title: "Company",
              links: ["About Us", "News"],
            },
            {
              title: "Resources",
              links: ["Blog", "Merchandise Store", "Affiliate Program"],
            },
            {
              title: "Help & Support",
              links: ["Contact Us", "FAQs"],
            },
            {
              title: "Legal",
              links: ["Terms of Service", "Privacy Policy"],
            },
          ].map((section) => (
            <div className="footer-section" key={section.title}>
              <h4 className="footer-section-title">{section.title}</h4>
              <ul className="footer-section-links">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay ahead of the competition</h3>
            <p className="newsletter-description">
              Get weekly insights, pro tips, and early access to new features.
            </p>
          </div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              <span>Subscribe</span>
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <div className="social-container">
          <div className="social-icons">
            {[faDiscord, faTwitter, faYoutube, faTwitch, faReddit].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="social-icon"
                  aria-label={platform}
                >
                  <FontAwesomeIcon icon={platform} />
                </a>
              )
            )}
          </div>
          <div className="footer-actions">
            <a href="#" className="footer-action-link">
              Download Mobile App
            </a>
            <a href="#" className="footer-action-link">
              Join Beta Program
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-container">
          <div className="footer-legal">
            <p className="copyright">
              © 2024 Omnic Forge. All rights reserved.
            </p>
            <div className="legal-links">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "DMCA",
              ].map((text) => (
                <a key={text} href="#" className="legal-link">
                  {text}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-badges">
            <div className="badge-item">
              <FontAwesomeIcon icon={faLayerGroup} />
              <span>Trusted Platform</span>
            </div>
            <div className="badge-item">
              <FontAwesomeIcon icon={faShield} />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
