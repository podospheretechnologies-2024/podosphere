import React from 'react';
import { Link } from 'react-router-dom';

const NDA = () => {
  return (
    <>
      <style>{`
        body {
          font-size: 16px;
          line-height: 1.7;
        }
        .container-max-2 {
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }
        h1, h2, h3, h4, h5, h6 {
          font-weight: 700 !important;
        }

        /* Color Scheme Variables - Theme Aware */
        :root {
          --primary-orange: #f77f00;
          --secondary-orange: #ff6a00;
          --text-black: #1a1b1e;
          --text-white: #ffffff;
          --text-gray: #4a5568;
          --text-light-gray: #718096;
          --bg-light: #f9fafb;
          --bg-white: #ffffff;
          --bg-dark: #0f172a;
          --bg-dark-card: #1e293b;
          --border-color: #e6e9ef;
          --border-dark: #334155;
        }

        /* Dark Theme Overrides */
        .theme-dark {
          --text-black: #f1f5f9;
          --text-gray: #cbd5e1;
          --text-light-gray: #94a3b8;
          --bg-light: #0f172a;
          --bg-white: #1e293b;
          --border-color: #334155;
        }

        .default-btn {
          background-color: var(--primary-orange) !important;
          color: var(--text-white) !important;
          padding: 12px 28px !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease;
          border: none !important;
          box-shadow: 0 4px 12px rgba(247, 127, 0, 0.2);
        }
        .default-btn:hover {
          background-color: var(--secondary-orange) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(247, 127, 0, 0.3);
        }

        /* Page Title Area - Theme Aware Hero Section */
        .page-title-area {
          background: var(--bg-white);
          padding: 100px 0 80px;
        }
        .page-title-content h1 {
          font-size: 3.2rem;
          margin-bottom: 15px;
          color: var(--text-black) !important;
        }
        .page-title-content p {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.15rem;
          color: var(--text-gray);
        }
        .hero-badges {
          margin-top: 25px;
          margin-bottom: 25px;
        }
        .hero-badge {
          padding: 7px 18px;
          background: rgba(247, 127, 0, 0.1);
          color: var(--primary-orange);
          font-size: 1em;
          border-radius: 20px;
          margin: 0 5px;
          border: 1px solid rgba(247, 127, 0, 0.3);
        }
        .hero-badge:hover {
          transform: translateY(-3px) scale(1.05);
          background: rgba(247, 127, 0, 0.2);
        }
        .page-title-content .default-btn {
          margin-top: 30px !important;
        }

        /* Privacy Area - Theme Aware */
        .privacy-area {
          padding: 80px 0;
          background-color: var(--bg-light);
        }

        .section-title h2 {
          color: var(--text-black);
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .privacy-content {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border-color);
        }

        .privacy-item {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid var(--border-color);
        }
        .privacy-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .privacy-item h3 {
          color: var(--text-black);
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        .privacy-item p {
          color: var(--text-gray);
          line-height: 1.8;
          font-size: 1.1rem;
        }
        .privacy-item ul {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .privacy-item li {
          padding: 8px 0;
          color: var(--text-gray);
          position: relative;
          padding-left: 25px;
        }
        .privacy-item li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-orange);
          font-weight: bold;
        }
      `}</style>

      {/* Page Title Area - Portfolio Style Hero Section */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after" style={{color: 'var(--primary-orange)', fontSize: '1.1rem', fontWeight: '600'}}>
              NDA Policy
            </span>
            <h1 className="h2-color" style={{color: 'var(--text-black)'}}>
              Non-Disclosure <span style={{color: 'var(--primary-orange)'}}>Agreement</span>
            </h1>
            <p style={{color: 'var(--text-gray)'}}>
              Your confidentiality is our priority. We ensure complete protection of your sensitive business information and intellectual property.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> <span style={{color: 'var(--text-black)'}}>Secure & Confidential</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> <span style={{color: 'var(--text-black)'}}>Data Protection</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i> <span style={{color: 'var(--text-black)'}}>Trusted Partnership</span>
              </span>
            </div>
            <div>
              <Link
                to="/contact"
                className="default-btn"
                style={{ marginRight: '15px' }}
              >
                <span style={{color: 'var(--text-white)'}}>Contact Us</span> <i className="bx bx-plus"></i>
              </Link>
              <Link
                to="/about"
                className="default-btn"
                style={{ background: 'var(--text-black)', color: 'var(--text-white)' }}
              >
                <span style={{color: 'var(--text-white)'}}>Learn More</span> <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Area - Portfolio Style */}
      <div className="privacy-area pt-100 pb-70">
        <div className="container">
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