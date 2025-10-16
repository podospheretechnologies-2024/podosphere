import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-area footer-bg pt-100 pb-70">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6"></div>

            <div className="col-lg-6 col-sm-6">
              <div className="footer-social-icon">
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-midal pt-45 pb-70">
          <div className="row">
            <div className="col-lg-3 col-sm-5">
              <div className="footer-widget">
                <h3>Services</h3>
                <ul className="footer-list">
                  <li><Link to="/services/ai-ml">AI & ML</Link></li>
                  <li><Link to="/services/web-development">Web Development</Link></li>
                  <li><Link to="/services/app-development">App Development</Link></li>
                  <li><Link to="/services/software-development">Software Development</Link></li>
                  <li><Link to="/services/crm-erp">CRM & ERP</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-7">
              <div className="footer-widget">
                <h3>Company</h3>
                <ul className="footer-list">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/work">How We Work</Link></li>
                  <li><Link to="/nda">NDA</Link></li>
                  <li><Link to="/career">Career</Link></li>
                  <li><Link to="/team">Our Team</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-5">
              <div className="footer-widget ps-5">
                <h3>Contact</h3>
                <ul className="footer-list">
                  <li><a href="tel:+918595611983">+91 8595611983</a></li>
                  <li>
                    <a href="mailto:info@podospheretechnologies.com">
                      info@podospheretechnologies.com
                    </a>
                  </li>
                  <li>
                    <a href="#">1st Floor, Amrapali Circle, Vaishali, Jaipur</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-7">
              <div className="footer-widget">
                <h3>Quick Links</h3>
                <ul className="footer-list">
                  <li><Link to="/service">Services</Link></li>
                  <li><Link to="/solution">Solutions</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-right-area">
          <div className="copy-right-text text-center">
            <p>
              Copyright ©2025 Podosphere Technologies – Powers you in IT World.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

