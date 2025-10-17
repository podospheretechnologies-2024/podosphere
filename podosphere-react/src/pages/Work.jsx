import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
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

        /* Content Sections - Theme Aware */
        .work-process-area,
        .work-details-area {
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

        .work-process-card {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          margin-bottom: 30px;
        }
        .work-process-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-orange);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }
        .work-process-card .number-title h3 {
          background: var(--primary-orange);
          color: var(--text-white);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 1.5rem;
        }
        .work-process-card i {
          font-size: 3rem;
          color: var(--primary-orange);
          margin-bottom: 20px;
        }
        .work-process-card h3 {
          color: var(--text-black);
          font-size: 1.4rem;
          margin-bottom: 15px;
        }
        .work-process-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        .work-details-img img {
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }
        .work-details-content h2 {
          color: var(--text-black);
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        .work-details-content p {
          color: var(--text-gray);
          font-size: 1.1rem;
          margin-bottom: 25px;
        }
        .work-details-list {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }
        .work-details-list li {
          padding: 10px 0;
          color: var(--text-gray);
          display: flex;
          align-items: center;
        }
        .work-details-list li i {
          color: var(--primary-orange);
          margin-right: 10px;
          font-size: 1.2rem;
        }
      `}</style>

      {/* Page Title Area - Portfolio Style Hero Section */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after" style={{color: 'var(--primary-orange)', fontSize: '1.1rem', fontWeight: '600'}}>
              How We Work
            </span>
            <h1 className="h2-color" style={{color: 'var(--text-black)'}}>
              Simple & Effective <span style={{color: 'var(--primary-orange)'}}>Work Process</span>
            </h1>
            <p style={{color: 'var(--text-gray)'}}>
              We follow a proven methodology to deliver successful projects on time and within budget.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> <span style={{color: 'var(--text-black)'}}>Agile Approach</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> <span style={{color: 'var(--text-black)'}}>Quality Assured</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i> <span style={{color: 'var(--text-black)'}}>Timely Delivery</span>
              </span>
            </div>
            <div>
              <Link
                to="/contact"
                className="default-btn"
                style={{ marginRight: '15px' }}
              >
                <span style={{color: 'var(--text-white)'}}>Start Your Project</span> <i className="bx bx-plus"></i>
              </Link>
              <Link
                to="/service"
                className="default-btn"
                style={{ background: 'var(--text-black)', color: 'var(--text-white)' }}
              >
                <span style={{color: 'var(--text-white)'}}>Explore Services</span> <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Work Process Area - Portfolio Style */}
      <div className="work-process-area pt-100 pb-70">
        <div className="container">
          <div className="row pt-45">
            {workProcess.map((step, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="work-process-card">
                  <div className="number-title">
                    <h3>{step.number}</h3>
                  </div>
                  <i className={step.icon}></i>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Details Area - Portfolio Style */}
      <div className="work-details-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="work-details-img">
                <img src="/assets/img/work-img.png" alt="Work Process" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-details-content">
                <div className="section-title">
                  <span className="sp-before sp-after">Why Our Process Works</span>
                  <h2>Delivering Excellence Through Proven Methods</h2>
                  <p>
                    Our systematic approach ensures that every project is executed
                    flawlessly from conception to delivery. We believe in transparency,
                    collaboration, and continuous improvement.
                  </p>
                </div>
                <ul className="work-details-list">
                  <li><i className="bx bx-check"></i> Agile Development Methodology</li>
                  <li><i className="bx bx-check"></i> Regular Progress Updates</li>
                  <li><i className="bx bx-check"></i> Quality Assurance at Every Stage</li>
                  <li><i className="bx bx-check"></i> Post-Launch Support & Maintenance</li>
                </ul>
                <Link to="/contact" className="default-btn">
                  Start Your Project
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

const workProcess = [
  {
    number: '01',
    icon: 'flaticon-consulting',
    title: 'Discovery',
    description: 'We understand your business goals and requirements through detailed consultation.'
  },
  {
    number: '02',
    icon: 'flaticon-research',
    title: 'Planning',
    description: 'Create a comprehensive project plan with timeline, milestones, and deliverables.'
  },
  {
    number: '03',
    icon: 'flaticon-software',
    title: 'Development',
    description: 'Our expert team builds your solution using best practices and modern technologies.'
  },
  {
    number: '04',
    icon: 'flaticon-solution',
    title: 'Delivery',
    description: 'Deploy and launch your project with thorough testing and quality assurance.'
  }
];

export default Work;