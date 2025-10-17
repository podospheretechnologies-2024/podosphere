import React from 'react';
import { Link } from 'react-router-dom';

const Solution = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
            visibility: visible;
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes bounceIn {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -30px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
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
        .page-title-content {
          animation: fadeInUp 0.8s ease-out;
        }
        .page-title-content h1 {
          font-size: 3.2rem;
          margin-bottom: 15px;
          color: var(--text-black) !important;
          animation: slideInDown 1s ease-out 0.2s both;
        }
        .page-title-content p {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.15rem;
          color: var(--text-gray);
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        .hero-badges {
          margin-top: 25px;
          margin-bottom: 25px;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
        .hero-badge {
          padding: 7px 18px;
          background: rgba(247, 127, 0, 0.1);
          color: var(--primary-orange);
          font-size: 1em;
          border-radius: 20px;
          margin: 0 5px;
          border: 1px solid rgba(247, 127, 0, 0.3);
          transition: all 0.3s ease;
          animation: bounceIn 1s ease-out 0.8s both;
        }
        .hero-badge:nth-child(1) {
          animation-delay: 0.9s;
        }
        .hero-badge:nth-child(2) {
          animation-delay: 1s;
        }
        .hero-badge:nth-child(3) {
          animation-delay: 1.1s;
        }
        .hero-badge:hover {
          transform: translateY(-3px) scale(1.05);
          background: rgba(247, 127, 0, 0.2);
          box-shadow: 0 8px 20px rgba(247, 127, 0, 0.3);
        }
        .page-title-content .default-btn {
          margin-top: 30px !important;
          animation: fadeInUp 0.8s ease-out 1.2s both;
        }

        /* Solution Area - Theme Aware */
        .solution-area {
          padding: 80px 0;
          background-color: var(--bg-light);
        }
        .section-title h2 {
          color: var(--text-black);
          font-size: 2.5rem;
          margin-bottom: 20px;
          animation: fadeInUp 0.8s ease-out;
        }
        .section-title p {
          color: var(--text-gray);
          font-size: 1.1rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .solution-card {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          animation: zoomIn 0.8s ease-out;
          position: relative;
          overflow: hidden;
        }
        .solution-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(247, 127, 0, 0.1), transparent);
          transition: left 0.6s;
        }
        .solution-card:hover::before {
          left: 100%;
        }
        .solution-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: var(--primary-orange);
          box-shadow: 0 15px 40px rgba(247, 127, 0, 0.15);
        }
        .solution-icon {
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .solution-icon img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          transition: all 0.3s ease;
        }
        .solution-card:hover .solution-icon img {
          transform: scale(1.1) rotate(5deg);
        }
        .solution-card h3 {
          color: var(--text-black);
          font-size: 1.4rem;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .solution-card p {
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .solution-card .default-btn {
          transition: all 0.3s ease;
        }
        .solution-card:hover .default-btn {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(247, 127, 0, 0.3);
        }
      `}</style>

      {/* Page Title Area - Portfolio Style Hero Section */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after" style={{color: 'var(--primary-orange)', fontSize: '1.1rem', fontWeight: '600'}}>
              Our Solutions
            </span>
            <h1 className="h2-color" style={{color: 'var(--text-black)'}}>
              Tailored Solutions for <span style={{color: 'var(--primary-orange)'}}>Every Industry</span>
            </h1>
            <p style={{color: 'var(--text-gray)'}}>
              We provide industry-specific solutions that address unique challenges and drive innovation across various sectors.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> <span style={{color: 'var(--text-black)'}}>Innovation Driven</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> <span style={{color: 'var(--text-black)'}}>Quality Assured</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i> <span style={{color: 'var(--text-black)'}}>Performance Focused</span>
              </span>
            </div>
            <div>
              <Link
                to="/contact"
                className="default-btn"
                style={{ marginRight: '15px' }}
              >
                <span style={{color: 'var(--text-white)'}}>Get In Touch</span> <i className="bx bx-plus"></i>
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

      {/* Solution Area - Portfolio Style with Theme Support */}
      <div className="solution-area">
        <div className="container">
          <div className="row pt-45">
            {solutions.map((solution, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="solution-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="solution-icon">
                    <img src={solution.icon} alt={solution.title} />
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <Link to="/contact" className="default-btn">
                    Learn More
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const solutions = [
  {
    icon: '/assets/img/icons/ecommerce.svg',
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.'
  },
  {
    icon: '/assets/img/icons/education.svg',
    title: 'Education & E-Learning',
    description: 'Learning management systems and educational platforms for modern teaching.'
  },
  {
    icon: '/assets/img/icons/fitness.svg',
    title: 'Healthcare & Fitness',
    description: 'Digital health solutions including telemedicine, fitness tracking, and patient management.'
  },
  {
    icon: '/assets/img/icons/on-demand.svg',
    title: 'On-Demand Services',
    description: 'Build on-demand service platforms like ride-sharing, food delivery, and home services.'
  },
  {
    icon: '/assets/img/icons/retail.svg',
    title: 'Retail Solutions',
    description: 'POS systems, inventory management, and customer relationship management for retail.'
  },
  {
    icon: '/assets/img/icons/consulting.svg',
    title: 'Business Consulting',
    description: 'Strategic consulting services to optimize operations and drive digital transformation.'
  }
];

export default Solution;