import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  { name: 'Ajay Jain', position: 'Team Lead, Website Developer', image: '/assets/img/team/team1.jpg' },
  { name: 'Rahul Jangid', position: 'Fullstack Developer', image: '/assets/img/team/team2.jpg' },
  { name: 'Priya Sharma', position: 'UI/UX Designer', image: '/assets/img/team/team3.jpg' },
  { name: 'Vikram Singh', position: 'Mobile App Developer', image: '/assets/img/team/team4.jpg' },
  { name: 'Anjali Verma', position: 'Project Manager', image: '/assets/img/team/team5.jpg' },
  { name: 'Rohan Kumar', position: 'DevOps Engineer', image: '/assets/img/team/team6.jpg' },
  { name: 'Sneha Gupta', position: 'QA Lead', image: '/assets/img/team/team7.jpg' },
  { name: 'Amit Patel', position: 'Backend Developer', image: '/assets/img/team/team8.jpg' },
  { name: 'Neha Kapoor', position: 'Frontend Developer', image: '/assets/img/team/team9.jpg' }
];

const Team = () => {
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
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
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

        /* Color Scheme Variables - Theme Aware (Same as About/Portfolio) */
        :root {
          --primary-orange: #f77f00;
          --secondary-orange: #ff6a00;
          --primary-blue: #2563eb;
          --secondary-blue: #1d4ed8;
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

        /* Dark Theme Overrides (Same as About/Portfolio) */
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
        .default-btn[style*="background: #111"] {
          background: var(--text-black) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .default-btn[style*="background: #111"]:hover {
          background: #333 !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
        }

        /* Page Title Area - Theme Aware (Same as About/Portfolio) */
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

        /* Team Section - Theme Aware (Same as About/Portfolio) */
        .team-area-two {
          padding: 80px 0;
          background-color: var(--bg-light);
        }
        .section-title h2 {
          color: var(--text-black);
          font-size: 2.5rem;
          margin-bottom: 20px;
          animation: fadeInUp 0.8s ease-out;
        }

        .team-card {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(16, 24, 40, 0.04);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          animation: zoomIn 0.8s ease-out;
          margin-bottom: 30px;
        }
        .team-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-orange);
          box-shadow: 0 12px 30px rgba(16, 24, 40, 0.1);
        }
        .team-card img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
          border: 3px solid var(--primary-orange);
          transition: all 0.3s ease;
        }
        .team-card:hover img {
          border-color: var(--secondary-orange);
          transform: scale(1.05);
        }
        .team-card h3 {
          color: var(--text-black);
          font-size: 1.4rem;
          margin-bottom: 10px;
        }
        .team-card h3 a {
          color: var(--text-black);
          text-decoration: none;
        }
        .team-card h3 a:hover {
          color: var(--primary-orange);
        }
        .team-card span {
          color: var(--text-gray);
          font-size: 1rem;
          display: block;
          margin-bottom: 15px;
        }
        .social-link {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        .social-link li {
          margin: 0;
        }
        .social-link li a {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: var(--primary-orange);
          color: var(--text-white);
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          transition: all 0.3s ease;
        }
        .social-link li a:hover {
          background: var(--secondary-orange);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Page Title Area - Exact Same as About/Portfolio */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after" style={{color: 'var(--primary-orange)', fontSize: '1.1rem', fontWeight: '600'}}>
              Our Team
            </span>
            <h1 className="h2-color" style={{color: 'var(--text-black)'}}>
              Meet Our Experts to <span style={{color: 'var(--primary-orange)'}}>Grow Your Business</span>
            </h1>
            <p style={{color: 'var(--text-gray)'}}>
              Our talented team of professionals brings together expertise, creativity, and dedication to deliver exceptional results for every project.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> <span style={{color: 'var(--text-black)'}}>Expert Team</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> <span style={{color: 'var(--text-black)'}}>Quality Focus</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i> <span style={{color: 'var(--text-black)'}}>Innovation Driven</span>
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

      {/* Team Section - Exact Same as About/Portfolio */}
      <div className="team-area-two pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Expert Team</span>
            <h2 className="h2-color2">
              Meet Our Dedicated Team to Grow Your Business
            </h2>
          </div>

          <div className="row pt-45">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`team-card ${index === 0 ? 'active' : ''} ${index % 2 !== 0 ? 'team-rotated-2' : ''}`}>
                  <a href="#">
                    <img src={member.image} alt={member.name} />
                  </a>
                  <div className="content">
                    <h3><Link to="/team">{member.name}</Link></h3>
                    <span>{member.position}</span>
                    <ul className="social-link">
                      <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;