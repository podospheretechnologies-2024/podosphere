import React from 'react';
import { Link } from 'react-router-dom';

const WebDevelopmentService = () => {
  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.5); }
          50% { box-shadow: 0 0 80px rgba(6, 182, 212, 0.9); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .service-detail-hero {
          background: linear-gradient(-45deg, #06b6d4, #3b82f6, #0ea5e9, #2563eb);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
          padding: 120px 0;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .service-detail-hero::before {
          content: '';
          position: absolute;
          width: 300%;
          height: 300%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px);
          background-size: 40px 40px;
          animation: rotate-slow 60s linear infinite;
        }
        .service-icon-large {
          font-size: 7rem;
          margin-bottom: 25px;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 15px 40px rgba(0,0,0,0.4));
        }
        .service-detail-content {
          padding: 80px 0;
        }
        .feature-box {
          background: linear-gradient(145deg, #ffffff, #f0f9ff);
          border-radius: 20px;
          padding: 35px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(6, 182, 212, 0.15);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 2px solid rgba(6, 182, 212, 0.1);
          position: relative;
          overflow: hidden;
        }
        .feature-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent);
          transition: left 0.6s;
        }
        .feature-box:hover::before {
          left: 100%;
        }
        .feature-box:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 25px 70px rgba(6, 182, 212, 0.35);
          border-color: #06b6d4;
        }
        .feature-box i {
          transition: all 0.4s ease;
        }
        .feature-box:hover i {
          animation: pulse-glow 1.5s ease-in-out infinite;
          transform: scale(1.3) rotate(15deg);
        }
        .feature-box h3 {
          color: #06b6d4;
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 800;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tech-stack {
          background: linear-gradient(180deg, #f8f9fa 0%, #e0f2fe 100%);
          padding: 60px 0;
          position: relative;
        }
        .tech-badge {
          display: inline-block;
          background: linear-gradient(145deg, #06b6d4, #3b82f6);
          color: #fff;
          padding: 14px 28px;
          border-radius: 30px;
          margin: 10px;
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.3);
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid rgba(255,255,255,0.2);
        }
        .tech-badge:hover {
          transform: translateY(-8px) rotate(-3deg) scale(1.15);
          box-shadow: 0 15px 40px rgba(6, 182, 212, 0.5);
          background: linear-gradient(145deg, #3b82f6, #06b6d4);
        }
        .process-step {
          text-align: center;
          padding: 40px;
          transition: all 0.4s ease;
        }
        .process-step:hover {
          transform: scale(1.08);
        }
        .process-number {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.8rem;
          font-weight: 900;
          margin: 0 auto 25px;
          box-shadow: 0 15px 50px rgba(6, 182, 212, 0.5);
          animation: pulse-glow 3s ease-in-out infinite;
          position: relative;
        }
        .process-number::after {
          content: '';
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border: 4px solid rgba(6, 182, 212, 0.3);
          border-radius: 50%;
          animation: pulse-glow 3s ease-in-out infinite reverse;
        }
        .cta-section {
          background: linear-gradient(-45deg, #f77f00, #ff6a00, #ff8c00, #ff6a00);
          background-size: 400% 400%;
          animation: gradient-shift 12s ease infinite;
          padding: 100px 0;
          color: #fff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 15px,
            rgba(255,255,255,0.08) 15px,
            rgba(255,255,255,0.08) 30px
          );
          animation: rotate-slow 40s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div className="service-detail-hero">
        {/* Animated Grid Background */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: '0 0 20px rgba(255,255,255,0.5)'
              }}
            />
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className="service-icon-large">🌐</div>
              <h1 
                className="animate-slide-up"
                style={{ 
                  fontSize: '3.5rem', 
                  marginBottom: '25px', 
                  fontWeight: '900',
                  textShadow: '0 8px 30px rgba(0,0,0,0.3)',
                  letterSpacing: '-1px'
                }}
              >
                Web Development Services
              </h1>
              <p 
                className="animate-slide-up delay-200"
                style={{ 
                  fontSize: '1.3rem', 
                  opacity: 0.95,
                  maxWidth: '700px',
                  margin: '0 auto',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
              >
                Build fast, scalable, and beautiful web applications with modern technologies
                and best practices that deliver exceptional user experiences.
              </p>
              <div className="animate-slide-up delay-400" style={{ marginTop: '35px' }}>
                <Link 
                  to="/contact" 
                  className="default-btn" 
                  style={{ 
                    background: '#fff', 
                    color: '#06b6d4',
                    padding: '18px 45px',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    boxShadow: '0 10px 40px rgba(255,255,255,0.3)',
                    border: '3px solid rgba(255,255,255,0.5)'
                  }}
                >
                  Start Your Project <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Same structure but with staggered animations */}
      <div className="service-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4 animate-slide-up" style={{ fontSize: '2.5rem', fontWeight: '800' }}>
                Modern Web Solutions That Drive Results
              </h2>
              <p className="lead animate-slide-up delay-100">
                We create high-performance web applications using cutting-edge technologies
                that are scalable, secure, and optimized for conversion.
              </p>

              <div className="row mt-5">
                {features.map((feature, index) => (
                  <div className="col-md-6" key={index}>
                    <div className={`feature-box animate-slide-up delay-${(index + 2) * 100}`}>
                      <i className={feature.icon} style={{ fontSize: '3.5rem', color: '#06b6d4' }}></i>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-5 mb-4" style={{ fontSize: '2rem', fontWeight: '700' }}>What We Build</h3>
              <ul className="list-unstyled">
                {buildList.map((item, index) => (
                  <li className="mb-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
                    <i className="bx bx-check-circle text-success" style={{ fontSize: '1.5rem' }}></i> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget animate-slide-up delay-300" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '20px', marginBottom: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ fontWeight: '800' }}>Quick Facts</h4>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-3"><strong>⏱️ Timeline:</strong> 4-16 weeks</li>
                    <li className="mb-3"><strong>💰 Starting at:</strong> Contact us</li>
                    <li className="mb-3"><strong>🎯 Best for:</strong> All Business Sizes</li>
                    <li className="mb-3"><strong>🔧 Support:</strong> Lifetime Support</li>
                  </ul>
                </div>

                <div className="widget animate-bounce-in delay-400" style={{ background: 'linear-gradient(145deg, #06b6d4, #3b82f6)', color: '#fff', padding: '35px', borderRadius: '20px', boxShadow: '0 15px 50px rgba(6, 182, 212, 0.4)' }}>
                  <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '15px' }}>Ready to Build?</h4>
                  <p style={{ opacity: 0.95 }}>Let's create an amazing web experience together.</p>
                  <Link 
                    to="/contact" 
                    className="default-btn hover-lift" 
                    style={{ 
                      background: '#fff', 
                      color: '#06b6d4', 
                      width: '100%', 
                      textAlign: 'center',
                      fontWeight: '700',
                      marginTop: '20px',
                      padding: '15px',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    Get Free Quote
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
          <h2 className="text-center mb-5 animate-slide-up" style={{ fontSize: '2.5rem', fontWeight: '800' }}>
            Our Technology Stack
          </h2>
          <div className="text-center">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className={`tech-badge animate-bounce-in delay-${index * 100}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="service-detail-content">
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontWeight: '800' }}>
            Our Development Process
          </h2>
          <div className="row">
            {processSteps.map((step, index) => (
              <div className="col-md-3" key={index}>
                <div className="process-step">
                  <div className="process-number">{index + 1}</div>
                  <h4 style={{ fontWeight: '700', fontSize: '1.3rem' }}>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '900', textShadow: '0 5px 20px rgba(0,0,0,0.3)' }}>
            Let's Build Something Amazing Together
          </h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '35px', opacity: 0.95 }}>
            Transform your ideas into powerful web applications
          </p>
          <Link 
            to="/contact" 
            className="default-btn hover-lift" 
            style={{ 
              background: '#fff', 
              color: '#f77f00', 
              padding: '18px 50px', 
              fontSize: '1.15rem',
              fontWeight: '800',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              border: '3px solid rgba(255,255,255,0.5)'
            }}
          >
            Start Your Web Project <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

const features = [
  { icon: 'bx-code-alt', title: 'Full-Stack Development', description: 'End-to-end web development from frontend to backend with modern frameworks and best practices.' },
  { icon: 'bx-mobile-alt', title: 'Responsive Design', description: 'Mobile-first responsive websites that work perfectly on all devices and screen sizes.' },
  { icon: 'bx-rocket', title: 'Performance Optimization', description: 'Lightning-fast load times with optimized code, caching, and CDN integration.' },
  { icon: 'bx-lock-alt', title: 'Security First', description: 'Enterprise-grade security with SSL, encryption, and vulnerability protection.' }
];

const buildList = [
  'Custom Web Applications',
  'E-Commerce Platforms',
  'Progressive Web Apps (PWA)',
  'Content Management Systems',
  'API Development & Integration',
  'Single Page Applications (SPA)',
  'Real-time Web Applications',
  'Dashboard & Admin Panels'
];

const techStack = ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Docker'];

const processSteps = [
  { title: 'Planning', description: 'Define requirements, architecture, and technical specifications' },
  { title: 'Design', description: 'Create wireframes, mockups, and user experience flows' },
  { title: 'Development', description: 'Build frontend, backend, and integrate all components' },
  { title: 'Launch', description: 'Deploy, test, and provide ongoing maintenance support' }
];

export default WebDevelopmentService;
