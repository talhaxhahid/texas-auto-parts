import React, { useState } from "react";
import "./styles/layout.css";
import "./styles/animatedbtn.css";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import call from "./assets/call.png";
import timeline from "./assets/timeline.png";
import AnimatedButton from "./Components/AnimatedButton";
import phone from "./assets/phone.png";
import addressIcon from "./assets/addressIcon.png";
import emailIcon from "./assets/emailIcon.png";
import postboxIcon from "./assets/postboxIcon.png";
import facebookIcon from "./assets/facebookIcon.png";
import instagramIcon from "./assets/instagramIcon.png";
import linkedinIcon from "./assets/linkedinIcon.png";
import twitterIcon from "./assets/twitterIcon.png";
import arrow from "./assets/arrow.png";
import { useLocation, useNavigate } from "react-router-dom";


const WebsiteLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu when clicking a link
    navigate(link);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="layout">
      <div className="top-bar" style={{zIndex:'5',position:'relative'}}>
        <div className="contact-info">
          <span>
            <img src={call} alt="Phone" /> +1 281-302-6820
          </span>
          <span className="opening-hrs">
            <img src={timeline} alt="Clock" /> Opening hours: 8am - 5pm
          </span>
        </div>
        <div className="social-icons">
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>

      <nav className="navbar" style={{zIndex:'5',position:'relative'}}>
        <div className="navbar-logo">
          <img
            src={logo}
            width="120rem"
            alt="Logo"
            onClick={() => handleLinkClick("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a
                href="/"
                className={activeLink === "/" ? "active" : ""}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/AboutUs"
                className={activeLink === "/AboutUs" ? "active" : ""}
                onClick={() => handleLinkClick("/AboutUs")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/OrderNow"
                className={activeLink === "/OrderNow" ? "active" : ""}
                onClick={() => handleLinkClick("/OrderNow")}
              >
                Order Now
              </a>
            </li>
            <li>
              <a
                href="/YourStatements"
                className={activeLink === "/YourStatements" ? "active" : ""}
                onClick={() => handleLinkClick("/YourStatements")}
              >
                View Your Statement and Invoices
              </a>
            </li>
            <li className="hide-on-desktop">
              <a
                href="/Contact"
                className={activeLink === "/Contact" ? "active" : ""}
                onClick={() => handleLinkClick("/Contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <a className="hide-on-mobile" onClick={() => handleLinkClick("/Contact")}>
            <AnimatedButton text="Contact Us" link="" />
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </nav>

      <main className="content">
        {children}
        
      </main>

      <footer className="footer">
        {/* Top Section */}
        <div className="footer-top">
          <h2 className="footer-title">
            Ready to <span className="highlight">Order</span> Your Auto Parts?
          </h2>
          <button className="order-now-btn" onClick={() => navigate('/OrderNow')}>
            Order Now
            <img src={arrow} alt="Order Arrow" className="arrow-icon" />
          </button>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="logo-section">
            <a href="/">
            <img

              src={logo}
              alt="Texas Auto Parts Logo"
              className="footer-logo"
            /></a>
          </div>
          <div className="menu-section">
            <ul className="footer-menu">
              <a href="/" style={{textDecoration:'none',color:'white'}}><li>HOME</li></a>
              <a href="/AboutUs" style={{textDecoration:'none',color:'white'}}><li >ABOUT US</li></a>
              <a href="/OrderNow" style={{textDecoration:'none',color:'white'}}><li>ORDER NOW</li></a>
              <a href="/YourStatements" style={{textDecoration:'none',color:'white'}}><li>VIEW STATEMENT</li></a>
              <a href="/Contact" style={{textDecoration:'none',color:'white'}}><li>CONTACT US</li></a>
            </ul>
          </div>
        </div>

        <div className="footer-left">
          <div className="subscribe-section">
            <h3 className="subscribe-title">Subscribe</h3>
            <p className="subscribe-text">
              Stay up to date with our latest news and articles.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button>Submit</button>
            </div>
          </div>

          <div className="footer-right">
            <h4 className="social-title">FOLLOW US:</h4>
            <div className="social-icons-footer">
              <a href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="contact-info-footer">
            <p>
              <img src={phone} alt="Phone" /> +1 281-302-6820
            </p>
            <p>
              <img src={addressIcon} alt="Address" /> 12505 Reed Rd Suit 145
              Sugar Land TX 77478
            </p>
            <p>
              <img src={emailIcon} alt="Email" /> kash@txautoparts.net
            </p>
            
          </div>

          <p className="footer-copyright">
            © 2025 - Texas Auto Parts, All rights are reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
