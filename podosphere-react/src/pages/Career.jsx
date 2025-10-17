import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
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

        /* Career Area - Theme Aware */
        .career-area {
          padding: 80px 0;
          background-color: var(--bg-light);
        }

        .section-title h2 {
          color: var(--text-black);
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .section-title p {
          color: var(--text-gray);
          font-size: 1.1rem;
        }

        .career-content {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border-color);
          margin-bottom: 40px;
        }

        .career-item {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid var(--border-color);
        }
        .career-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .career-item h3 {
          color: var(--text-black);
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        .career-item p {
          color: var(--text-gray);
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        .career-item ul {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .career-item li {
          padding: 8px 0;
          color: var(--text-gray);
          position: relative;
          padding-left: 25px;
        }
        .career-item li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-orange);
          font-weight: bold;
        }
        .career-benefits {
          background: linear-gradient(135deg, var(--primary-orange) 0%, var(--secondary-orange) 100%);
          color: var(--text-white);
          padding: 30px;
          border-radius: 12px;
          margin-top: 30px;
        }
        .career-benefits h4 {
          color: var(--text-white);
          font-size: 1.3rem;
          margin-bottom: 20px;
        }
        .career-benefits ul {
          list-style: none;
          padding: 0;
        }
        .career-benefits li {
          padding: 8px 0;
          position: relative;
          padding-left: 25px;
        }
        .career-benefits li:before {
          content: '★';
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: bold;
        }
      `}</style>

      {/* Page Title Area - Portfolio Style Hero Section */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after" style={{color: 'var(--primary-orange)', fontSize: '1.1rem', fontWeight: '600'}}>
              Career Opportunities
            </span>
            <h1 className="h2-color" style={{color: 'var(--text-black)'}}>
              Join Our <span style={{color: 'var(--primary-orange)'}}>Dynamic Team</span>
            </h1>
            <p style={{color: 'var(--text-gray)'}}>
              Be part of a innovative team that values creativity, excellence, and continuous learning. Grow your career with us.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> <span style={{color: 'var(--text-black)'}}>Growth Opportunities</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> <span style={{color: 'var(--text-black)'}}>Team Collaboration</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i> <span style={{color: 'var(--text-black)'}}>Innovation Culture</span>
              </span>
            </div>
            <div>
              <Link
                to="/contact"
                className="default-btn"
                style={{ marginRight: '15px' }}
              >
                <span style={{color: 'var(--text-white)'}}>Apply Now</span> <i className="bx bx-plus"></i>
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

      {/* Career Area - Portfolio Style */}
      <div className="career-area pt-100 pb-70">
        <div className="container">
          <div className="career-content">
            <div className="career-item">
              <h3>Why Work With Us?</h3>
              <p>
                At Podosphere Technologies, we believe that our people are our greatest asset.
                We foster a culture of innovation, collaboration, and continuous learning where
                every team member can thrive and grow both personally and professionally.
              </p>
            </div>

            <div className="career-item">
              <h3>Our Culture</h3>
              <p>
                We maintain a supportive and inclusive work environment that encourages creativity
                and innovation. Our team members are empowered to take ownership of their work
                and contribute to meaningful projects that make a real difference.
              </p>
              <ul>
                <li>Flexible work arrangements and remote options</li>
                <li>Continuous learning and professional development</li>
                <li>Collaborative team environment</li>
                <li>Recognition and reward programs</li>
                <li>Work-life balance initiatives</li>
              </ul>
            </div>

            <div className="career-item">
              <h3>Current Openings</h3>
              <p>
                We're always looking for talented individuals to join our growing team.
                If you're passionate about technology and innovation, we'd love to hear from you.
              </p>
              <div className="career-benefits">
                <h4>Employee Benefits</h4>
                <ul>
                  <li>Competitive salary and performance bonuses</li>
                  <li>Health insurance and wellness programs</li>
                  <li>Professional development opportunities</li>
                  <li>Flexible working hours</li>
                  <li>Team building activities and events</li>
                </ul>
              </div>
            </div>

            <div className="career-item">
              <h3>How to Apply</h3>
              <p>
                Send your resume and cover letter to our HR team. We'll review your application
                and get back to you within 2-3 business days. We look forward to potentially
                welcoming you to our team!
              </p>
              <div className="pt-3">
                <Link to="/contact" className="default-btn">
                  Send Your Application
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

export default Career;