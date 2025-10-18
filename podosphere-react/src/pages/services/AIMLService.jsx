import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AIMLService = () => {
  useEffect(() => {
    // Initialize animations and plugins
    if (window.WOW) {
      new window.WOW().init();
    }

    // Navbar scroll effect logic copied from Portfolio.jsx
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-area");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize Magnific Popup for image gallery (if needed)
    if (window.$ && window.$.fn.magnificPopup) {
      window.$(".popup-link").magnificPopup({
        type: "image",
        gallery: { enabled: true },
      });
    }

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ---------------------------------------------------------------------- */
        /* --- GLOBAL THEME VARIABLES AND TYPOGRAPHY (FROM PORTFOLIO.JSX) --- */
        /* ---------------------------------------------------------------------- */
        /* Color Scheme Variables - Theme Aware */
        :root {
          --primary-orange: #f97316;
          --secondary-orange: #ff6a00;
          --primary-blue: #2563eb;
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
          padding: 0 !important;
          margin: 0 !important;
          min-height: auto !important;
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
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2) !important;
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
        /* --- PORTFOLIO SPECIFIC STYLES (ENHANCED FOR SERVICE PAGES) --------- */
        /* ---------------------------------------------------------------------- */
        .page-title-area {
          background: var(--bg-white) !important;
          padding: 60px 0 140px !important;
          margin-top: 70px !important;
          margin-bottom: 0 !important;
        }

        .page-title-content h1 {
          font-size: 3.2rem;
          margin-bottom: 15px;
          animation: fadeInUp 0.8s ease-out;
        }

        .page-title-content p {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.15rem;
          color: var(--text-gray);
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-badges {
          margin-top: 25px;
          margin-bottom: 25px;
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
          animation: bounceIn 1s ease-out;
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

        .portfolio-grid {
          padding: 80px 0;
          background-color: var(--bg-light);
        }

        .portfolio-grid .card {
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(16, 24, 40, 0.04);
          transition: all 0.3s ease;
          background: var(--bg-white);
        }

        .theme-dark .portfolio-grid .card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-dark);
        }

        .portfolio-grid .card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-orange);
          box-shadow: 0 12px 30px rgba(16, 24, 40, 0.1);
        }

        .theme-dark .portfolio-grid .card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }

        .portfolio-grid .card img {
          height: 250px;
          object-fit: cover;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        .portfolio-grid .card-body {
          padding: 30px 25px;
        }

        .portfolio-grid .card-title {
          font-size: 1.4rem;
          margin-bottom: 10px;
          color: var(--text-black);
        }

        .portfolio-meta {
          font-size: 1rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Service specific enhancements */
        .service-detail-content {
          padding: 80px 0;
        }

        .service-card, .about-card, .value-card, .why-us-card, .feature-box {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          transform-origin: center !important;
          background: var(--bg-white) !important;
          border: 1px solid var(--border-color) !important;
          border-radius: 12px !important;
          padding: 30px !important;
        }

        .theme-dark .service-card, .theme-dark .about-card, .theme-dark .value-card, .theme-dark .why-us-card, .theme-dark .feature-box {
          background: var(--bg-dark-card) !important;
          border: 1px solid var(--border-dark) !important;
        }

        .service-card:hover, .about-card:hover, .value-card:hover, .why-us-card:hover, .feature-box:hover {
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
          border-color: var(--primary-orange) !important;
        }

        .theme-dark .service-card:hover, .theme-dark .about-card:hover, .theme-dark .value-card:hover, .theme-dark .why-us-card:hover, .theme-dark .feature-box:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
        }

        .tech-stack {
          background-color: var(--bg-light);
          padding: 80px 0;
        }

        .tech-stack .section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .tech-badge {
          display: inline-block;
          background: var(--bg-white);
          color: var(--text-black);
          padding: 10px 20px;
          margin: 8px;
          border-radius: 25px;
          font-weight: 600;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tech-badge:hover {
          transform: translateY(-3px) scale(1.05);
          background: var(--primary-orange);
          color: var(--text-white);
          border-color: var(--primary-orange);
        }

        .process-step {
          text-align: center;
          padding: 30px;
          background: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }

        .process-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .process-number {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-orange), var(--primary-blue));
          color: var(--text-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          margin: 0 auto 20px;
          box-shadow: 0 5px 15px rgba(249, 115, 22, 0.3);
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
            <span
              className="sp-after"
              style={{
                color: "var(--primary-orange)",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              AI & Machine Learning
            </span>
            <h1 className="h2-color" style={{ color: "var(--text-black)" }}>
              Transform Your Business with{" "}
              <span style={{ color: "var(--primary-orange)" }}>
                AI Excellence
              </span>
            </h1>
            <p style={{ color: "var(--text-gray)" }}>
              Harness the power of artificial intelligence to transform your business operations,
              automate decision-making, and unlock unprecedented insights from your data.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> Innovation Driven
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> Quality Assured
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i> Performance Focused
              </span>
            </div>
            <div>
              <Link to="/contact" className="default-btn" style={{ marginRight: "15px" }}>
                Get In Touch <i className="bx bx-plus"></i>
              </Link>
              <Link
                to="/portfolio"
                className="default-btn"
                style={{
                  background: "var(--text-black)",
                  color: "var(--text-white)",
                }}
              >
                View Portfolio <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Enhanced Service Details */}
      <div className="service-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Why Invest in AI/ML Solutions?</h2>
              <p className="lead" style={{ color: "var(--text-gray)", fontSize: "1.2rem" }}>
                Our AI and Machine Learning services help businesses leverage cutting-edge technology
                to gain competitive advantages, improve efficiency, and drive innovation across all departments.
              </p>

              <div className="row mt-5">
                {features.map((feature, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="feature-box animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <i className={`${feature.icon}`} style={{ 
                        fontSize: '3rem', 
                        color: 'var(--primary-orange)',
                        marginBottom: '20px'
                      }}></i>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-5 mb-4">Core AI Capabilities</h3>
              <ul className="list-unstyled" style={{ color: "var(--text-gray)" }}>
                {capabilities.map((capability, index) => (
                  <li key={index} className="mb-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <i className="bx bx-check-circle" style={{ 
                      color: "var(--primary-orange)", 
                      marginRight: "10px" 
                    }}></i> 
                    {capability}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget animate-fade-in" style={{ 
                  padding: '30px', 
                  borderRadius: '12px', 
                  marginBottom: '30px',
                  background: 'var(--bg-light)',
                  border: `1px solid var(--border-color)`
                }}>
                  <h4 style={{ color: "var(--text-black)" }}>Quick Facts</h4>
                  <ul className="list-unstyled mt-3" style={{ color: "var(--text-gray)" }}>
                    <li className="mb-2"><strong>⏱️ Timeline:</strong> 4-12 weeks</li>
                    <li className="mb-2"><strong>💰 Starting at:</strong> Contact us</li>
                    <li className="mb-2"><strong>🎯 Best for:</strong> Enterprise & Startups</li>
                    <li className="mb-2"><strong>🔧 Support:</strong> 24/7 Available</li>
                  </ul>
                </div>

                <div className="widget animate-fade-in" style={{ 
                  padding: '30px', 
                  borderRadius: '12px',
                  background: 'var(--primary-orange)',
                  color: 'var(--text-white)',
                  boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)'
                }}>
                  <h4 style={{ color: "var(--text-white)" }}>Ready to Get Started?</h4>
                  <p style={{ opacity: 0.9 }}>Let's discuss how AI can transform your business.</p>
                  <Link 
                    to="/contact" 
                    className="default-btn" 
                    style={{ 
                      background: "var(--text-white)", 
                      color: "var(--primary-orange)",
                      width: "100%",
                      textAlign: "center",
                      marginTop: "15px"
                    }}
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack - Enhanced Technologies Section */}
      <div className="tech-stack">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-after">Technologies</span>
            <h2>Technologies We Master</h2>
          </div>
          <div className="text-center" style={{ marginTop: "40px" }}>
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="tech-badge animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section - Enhanced Development Process */}
      <div className="service-detail-content">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-after">Process</span>
            <h2>Our Proven AI Development Process</h2>
          </div>
          <div className="row" style={{ marginTop: "50px" }}>
            {processSteps.map((step, index) => (
              <div className="col-md-3" key={index}>
                <div className="process-step animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="process-number">
                    {index + 1}
                  </div>
                  <h4 style={{ color: "var(--text-black)", marginBottom: "15px" }}>{step.title}</h4>
                  <p style={{ color: "var(--text-gray)" }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced Call to Action */}
      <div style={{
        background: "linear-gradient(135deg, var(--primary-orange), var(--primary-blue))",
        padding: "100px 0",
        color: "var(--text-white)",
        textAlign: "center"
      }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "900" }}>
            Ready to Leverage AI for Your Business?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
            Let's build intelligent solutions that drive real results.
          </p>
          <Link 
            to="/contact" 
            className="default-btn" 
            style={{ 
              background: "var(--text-white)", 
              color: "var(--primary-orange)",
              padding: "15px 40px",
              fontSize: "1.1rem",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            Get Started Today <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};



// Data Arrays
const features = [
  { 
    icon: 'bx-brain', 
    title: 'Custom AI Models', 
    description: 'Develop tailored machine learning models that solve your specific business challenges with precision and accuracy.' 
  },
  { 
    icon: 'bx-bot', 
    title: 'Intelligent Automation', 
    description: 'Automate complex, repetitive processes with AI-powered systems that learn and improve over time.' 
  },
  { 
    icon: 'bx-line-chart', 
    title: 'Predictive Analytics', 
    description: 'Forecast future trends, optimize inventory, and make data-driven decisions with advanced modeling.' 
  },
  { 
    icon: 'bx-conversation', 
    title: 'NLP & Chatbots', 
    description: 'Build intelligent conversational AI and natural language processing solutions to enhance customer service.' 
  }
];

const capabilities = [
  'Computer Vision & Image Recognition',
  'Natural Language Processing (NLP) & Generation',
  'Recommendation Systems & Personalization Engines',
  'Fraud Detection & Anomaly Detection in Real-Time',
  'MLOps for Seamless Model Deployment and Management'
];

const techStack = ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Hugging Face (LLMs)', 'AWS SageMaker', 'Google AI Platform', 'Azure ML', 'Python/R'];

const processSteps = [
  { title: 'Discovery', description: 'Understand your business challenges and define AI objectives' },
  { title: 'Data Preparation', description: 'Collect, clean, and prepare data for model training' },
  { title: 'Model Development', description: 'Build and train custom AI models for your needs' },
  { title: 'Deployment & Support', description: 'Deploy models and provide ongoing optimization' }
];

export default AIMLService;