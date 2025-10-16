import React from 'react';
import { Link } from 'react-router-dom';

const NDA = () => {
  return (
    <>
      <div className="inner-banner">
        <div className="container">
          <div className="inner-title text-center">
            <h3>NDA Policy</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><i className="bx bx-chevron-right"></i></li>
              <li>NDA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="privacy-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Confidentiality</span>
            <h2>Non-Disclosure Agreement</h2>
          </div>

          <div className="privacy-content">
            <div className="privacy-item">
              <h3>Our Commitment to Confidentiality</h3>
              <p>
                At Podosphere Technologies, we understand the critical importance of 
                protecting your confidential information. We are committed to maintaining 
                the highest standards of data security and confidentiality.
              </p>
            </div>

            <div className="privacy-item">
              <h3>Information Protection</h3>
              <p>
                We implement robust security measures to protect your sensitive business 
                information, intellectual property, and trade secrets. All team members 
                sign confidentiality agreements before accessing client data.
              </p>
            </div>

            <div className="privacy-item">
              <h3>Scope of NDA</h3>
              <ul>
                <li>All project-related information and documentation</li>
                <li>Business strategies and operational procedures</li>
                <li>Technical specifications and source code</li>
                <li>Customer data and business relationships</li>
                <li>Financial information and pricing structures</li>
              </ul>
            </div>

            <div className="privacy-item">
              <h3>Data Security Measures</h3>
              <p>
                We employ industry-standard security protocols including encryption, 
                secure access controls, and regular security audits to ensure your 
                information remains protected at all times.
              </p>
            </div>

            <div className="privacy-item">
              <h3>Ready to Work Together?</h3>
              <p>
                We're happy to sign your NDA before discussing your project. 
                Your trust is our priority, and we're committed to maintaining the 
                highest levels of confidentiality.
              </p>
              <div className="pt-3">
                <Link to="/contact" className="default-btn">
                  Contact Us
                  <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NDA;

