import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CRMERPService = () => {
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

        .sp-after {
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

        /* Service specific styles */
        .page-title-area {
          background: var(--bg-white) !important;
          padding: 60px 0 140px !important;
          margin-top: 70px !important;
          margin-bottom: 0 !important;
        }

        .service-detail-content {
          padding: 80px 0;
        }

        .feature-box {
          background: var(--bg-white) !important;
          border-radius: 12px !important;
          padding: 30px !important;
          margin-bottom: 30px !important;
          box-shadow: 0 4px 16px rgba(16, 24, 40, 0.04) !important;
          transition: all 0.3s ease !important;
          border: 1px solid var(--border-color) !important;
        }

        .feature-box:hover {
          transform: translateY(-4px) !important;
          border-color: var(--primary-orange) !important;
          box-shadow: 0 12px 30px rgba(16, 24, 40, 0.1) !important;
        }

        .tech-stack {
          background-color: var(--bg-light);
          padding: 80px 0;
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

        html {
          scroll-behavior: smooth !important;
        }
      `}</style>

      {/* Page Title Area */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after">
              CRM & ERP Solutions
            </span>
            <h1 className="h2-color" style={{ color: "var(--text-black)" }}>
              Integrated Business{' '}
              <span style={{ color: "var(--primary-orange)" }}>
                Management Systems
              </span>
            </h1>
            <p style={{ color: "var(--text-gray)" }}>
              Streamline your business operations with custom CRM and ERP solutions that unify data,
              automate workflows, and provide actionable insights for better decision-making.
            </p>
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

      {/* Main Content */}
      <div className="service-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Why Choose Our CRM & ERP Solutions?</h2>
              <p className="lead" style={{ color: "var(--text-gray)", fontSize: "1.2rem" }}>
                Our integrated business management systems help organizations streamline operations,
                improve customer relationships, and make data-driven decisions for sustainable growth.
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

              <h3 className="mt-5 mb-4">What We Deliver</h3>
              <ul className="list-unstyled" style={{ color: "var(--text-gray)" }}>
                {deliverables.map((item, index) => (
                  <li key={index} className="mb-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <i className="bx bx-check-circle" style={{ 
                      color: "var(--primary-orange)", 
                      marginRight: "10px" 
                    }}></i> 
                    {item}
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
                    <li className="mb-2"><strong>⏱️ Timeline:</strong> 12-24 weeks</li>
                    <li className="mb-2"><strong>💰 Starting at:</strong> Contact us</li>
                    <li className="mb-2"><strong>🎯 Best for:</strong> Medium to Large Businesses</li>
                    <li className="mb-2"><strong>🔧 Support:</strong> 24/7 Technical Support</li>
                  </ul>
                </div>

                <div className="widget animate-fade-in" style={{ 
                  padding: '30px', 
                  borderRadius: '12px',
                  background: 'var(--primary-orange)',
                  color: 'var(--text-white)',
                  boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)'
                }}>
                  <h4 style={{ color: "var(--text-white)" }}>Ready to Transform?</h4>
                  <p style={{ opacity: 0.9 }}>Let's build systems that scale with your business.</p>
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

      {/* Tech Stack */}
      <div className="tech-stack">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-after">Technologies</span>
            <h2>Our CRM & ERP Tech Stack</h2>
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

      {/* Process Section */}
      <div className="service-detail-content">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-after">Process</span>
            <h2>Our Implementation Process</h2>
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

      {/* CTA Section */}
      <div style={{
        background: "linear-gradient(135deg, var(--primary-orange), var(--primary-blue))",
        padding: "100px 0",
        color: "var(--text-white)",
        textAlign: "center"
      }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "900" }}>
            Ready to Streamline Your Operations?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
            Transform your business processes with intelligent CRM and ERP solutions.
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
            Start Your CRM/ERP Project <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};


// Data Arrays
const features = [
  { 
    icon: 'bx-data', 
    title: 'Unified Data Management', 
    description: 'Centralize customer data, sales information, and operational metrics in a single, accessible platform.' 
  },
  { 
    icon: 'bx-automation', 
    title: 'Process Automation', 
    description: 'Automate repetitive tasks, workflows, and business processes to improve efficiency and reduce errors.' 
  },
  { 
    icon: 'bx-line-chart', 
    title: 'Advanced Analytics', 
    description: 'Gain actionable insights with comprehensive reporting, dashboards, and predictive analytics.' 
  },
  { 
    icon: 'bx-integration', 
    title: 'Seamless Integration', 
    description: 'Connect with existing tools, databases, and third-party applications for unified operations.' 
  }
];

const deliverables = [
  'Custom CRM Systems',
  'Enterprise Resource Planning (ERP)',
  'Customer Portal Development',
  'Sales Force Automation',
  'Inventory Management Systems',
  'Financial Management Tools',
  'Business Intelligence Dashboards',
  'API Development & Integration'
];

const techStack = ['Salesforce', 'Microsoft Dynamics', 'SAP', 'Oracle', 'Zoho', 'HubSpot', 'Pipedrive', 'Freshworks'];

const processSteps = [
  { title: 'Business Analysis', description: 'Assess current processes, identify pain points, and define requirements' },
  { title: 'System Design', description: 'Design scalable architecture and create detailed technical specifications' },
  { title: 'Development & Integration', description: 'Build custom solutions and integrate with existing systems' },
  { title: 'Training & Deployment', description: 'Provide comprehensive training and ensure smooth system deployment' }
];

export default CRMERPService;