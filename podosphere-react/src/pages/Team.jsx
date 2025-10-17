import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Initialize animations and plugins
    if (window.WOW) {
      new window.WOW().init();
    }

    // Navbar scroll effect logic copied from Home.js
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-area');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize Owl Carousel (for consistency and if a slider is added later)
    if (window.$ && window.$.fn.owlCarousel) {
      // General Carousel Init (can be adapted if specific sliders are added)
      window.$('.brand-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 6 }
        }
      });
    }

    // Initialize Magnific Popup (for consistency, if popups are used)
    if (window.$ && window.$.fn.magnificPopup) {
      window.$('.popup-btn').magnificPopup({
        type: 'iframe'
      });
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ---------------------------------------------------------------------- */
        /* --- GLOBAL THEME VARIABLES AND TYPOGRAPHY (COPIED FROM HOME.JS) --- */
        /* ---------------------------------------------------------------------- */
        /* Color Scheme Variables - Theme Aware */
        :root {
          --primary-orange: #f97316;
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

        /* Dark Theme Overrides */
        .theme-dark {
          --text-black: #f1f5f9;
          --text-gray: #cbd5e1;
          --text-light-gray: #94a3b8;
          --bg-light: #0f172a;
          --bg-white: #1e293b;
          --border-color: #334155;
        }

        /* Enhanced Navbar Styling - Theme Aware */
        .navbar-area {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(10px) !important;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08) !important;
          transition: all 0.3s ease !important;
          position: sticky !important;
          top: 0 !important;
          z-index: 999 !important;
          border-bottom: 1px solid rgba(26, 27, 30, 0.1) !important;
          padding: 8px 0 !important;
        }

        /* Dark Mode Navbar */
        .theme-dark .navbar-area {
          background: rgba(15, 23, 42, 0.95) !important;
          border-bottom: 1px solid rgba(51, 65, 85, 0.3) !important;
        }

        .navbar-area.scrolled {
          background: rgba(255, 255, 255, 0.98) !important;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.12) !important;
        }

        .theme-dark .navbar-area.scrolled {
          background: rgba(15, 23, 42, 0.98) !important;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3) !important;
        }
        
        /* Navbar Links */
        .navbar-nav .nav-link {
          font-family: 'Livvic', sans-serif !important;
          font-weight: 600 !important;
          font-size: 1rem !important;
          color: var(--text-black) !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          position: relative !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          padding: 12px 18px !important;
          margin: 0 3px !important;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: var(--primary-orange) !important;
          transform: translateY(-2px) !important;
        }

        /* Dark mode link colors */
        .theme-dark .navbar-nav .nav-link {
          color: #f1f5f9 !important;
        }

        .theme-dark .navbar-nav .nav-link:hover,
        .theme-dark .navbar-nav .nav-link.active {
          color: var(--primary-orange) !important;
        }

        .navbar-nav .nav-link::after {
          content: '' !important;
          position: absolute !important;
          bottom: 8px !important;
          left: 50% !important;
          width: 0 !important;
          height: 2px !important;
          background: linear-gradient(90deg, var(--primary-orange), var(--primary-blue)) !important;
          transition: all 0.3s ease !important;
          transform: translateX(-50%) !important;
        }

        .navbar-nav .nav-link:hover::after,
        .navbar-nav .nav-link.active::after {
          width: 80% !important;
        }

        .dropdown-menu {
          border: none !important;
          border-top: 3px solid var(--primary-orange) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          background: var(--bg-white) !important;
          border-radius: 8px !important;
          padding: 10px 0 !important;
          margin-top: 8px !important;
        }

        .theme-dark .dropdown-menu {
          background: var(--bg-dark) !important;
          border-top: 3px solid var(--primary-orange) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
        }
        
        /* Enhanced Typography for UI Text - Theme Aware */
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Livvic', sans-serif !important;
          font-weight: 700 !important;
          line-height: 1.2 !important;
          color: var(--text-black) !important;
          margin-bottom: 1rem !important;
        }

        h1 { font-size: 3.2rem !important; }
        h2 { font-size: 2.8rem !important; }
        h3 { font-size: 2.2rem !important; }
        h4 { font-size: 1.8rem !important; }
        h5 { font-size: 1.5rem !important; }
        h6 { font-size: 1.3rem !important; }

        p {
          font-family: 'Nunito Sans', sans-serif !important;
          font-size: 1.1rem !important;
          line-height: 1.7 !important;
          color: var(--text-gray) !important;
          font-weight: 400 !important;
        }
        
        .section-title h2 {
          font-size: 2.8rem !important;
          font-weight: 800 !important;
          background: linear-gradient(135deg, var(--text-black), var(--primary-blue)) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        .theme-dark .section-title h2 {
          background: linear-gradient(135deg, #f1f5f9, var(--primary-blue)) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        .sp-after, .sp-before {
          background: linear-gradient(135deg, var(--primary-orange), var(--primary-blue)) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          font-weight: 700 !important;
          font-size: 1.1rem !important;
        }

        .default-btn {
          background-color: var(--primary-orange) !important;
          color: var(--text-white) !important;
          padding: 12px 28px !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
          border: none !important;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
          font-family: 'Livvic', sans-serif !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
        }

        .default-btn:hover {
          background-color: var(--secondary-orange) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 16px rgba(249, 115, 22, 0.3) !important;
        }

        .container-max-2 {
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ---------------------------------------------------------------------- */
        /* --- TEAM SPECIFIC STYLES (ENHANCED) -------------------------------- */
        /* ---------------------------------------------------------------------- */

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
          background: rgba(249, 115, 22, 0.1);
          color: var(--primary-orange);
          font-size: 1em;
          border-radius: 20px;
          margin: 0 5px;
          border: 1px solid rgba(249, 115, 22, 0.3);
          transition: all 0.3s ease;
          animation: bounceIn 1s ease-out 0.8s both;
        }

        .hero-badge:nth-child(1) { animation-delay: 0.9s; }
        .hero-badge:nth-child(2) { animation-delay: 1s; }
        .hero-badge:nth-child(3) { animation-delay: 1.1s; }

        .hero-badge:hover {
          transform: translateY(-3px) scale(1.05);
          background: rgba(249, 115, 22, 0.2);
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
        }

        .page-title-content .default-btn {
          margin-top: 30px !important;
          animation: fadeInUp 0.8s ease-out 1.2s both;
        }

        /* Team Section - Enhanced */
        .team-area-two {
          padding: 80px 0;
          background-color: var(--bg-light);
        }

        .theme-dark .team-area-two {
          background-color: var(--bg-dark);
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

        .theme-dark .team-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-dark);
        }

        .team-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-orange);
          box-shadow: 0 12px 30px rgba(16, 24, 40, 0.1);
        }

        .theme-dark .team-card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
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

        /* Animation keyframes */
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

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth !important;
        }
      `}</style>

      {/* Page Title Area - Enhanced Hero Section */}
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

      {/* Team Section - Enhanced */}
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