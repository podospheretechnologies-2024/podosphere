import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioDetail = ({ project }) => {
  return (
    <>
      <style>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
          66% { transform: translateY(-10px) translateX(-10px) rotate(240deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px ${project.color1}40, 0 0 40px ${project.color1}20; }
          50% { box-shadow: 0 0 40px ${project.color1}80, 0 0 80px ${project.color1}40; }
        }
        .portfolio-hero {
          background: linear-gradient(-45deg, ${project.color1}, ${project.color2}, ${project.color1}, #000);
          background-size: 400% 400%;
          animation: gradient-animation 15s ease infinite;
          padding: 120px 0;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .portfolio-hero::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: float-particle 30s linear infinite;
        }
        .portfolio-hero::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.1), transparent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: glow-pulse 4s ease-in-out infinite;
        }
        .portfolio-content {
          padding: 80px 0;
        }
        .project-info-box {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 30px;
        }
        .feature-highlight {
          background: linear-gradient(145deg, #ffffff, #f8f9fa);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 25px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          border-left: 5px solid ${project.color1};
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        .feature-highlight::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }
        .feature-highlight:hover::before {
          left: 100%;
        }
        .feature-highlight:hover {
          transform: translateX(10px) scale(1.02);
          box-shadow: 0 15px 50px rgba(0,0,0,0.15);
          border-left-width: 8px;
        }
        .feature-highlight i {
          transition: transform 0.3s ease;
        }
        .feature-highlight:hover i {
          transform: scale(1.3) rotate(360deg);
        }
        .tech-badge {
          display: inline-block;
          background: linear-gradient(145deg, ${project.color1}, ${project.color2});
          color: #fff;
          padding: 10px 22px;
          border-radius: 25px;
          margin: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          box-shadow: 0 5px 20px ${project.color1}40;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .tech-badge:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 30px ${project.color1}60;
          background: linear-gradient(145deg, ${project.color2}, ${project.color1});
        }
        .screenshot-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 40px 0;
        }
        .screenshot-item {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .screenshot-item:hover {
          transform: translateY(-5px);
        }
        .cta-banner {
          background: linear-gradient(-45deg, #f77f00, #ff6a00, #ff8c00, #ff6a00);
          background-size: 400% 400%;
          animation: gradient-animation 12s ease infinite;
          padding: 80px 40px;
          color: #fff;
          text-align: center;
          border-radius: 30px;
          margin: 60px 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(247, 127, 0, 0.3);
        }
        .cta-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: repeating-linear-gradient(
            60deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.08) 20px,
            rgba(255,255,255,0.08) 40px
          );
          animation: float-particle 20s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div className="portfolio-hero">
        {/* Floating Particles */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                background: 'rgba(255,255,255,0.6)',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className="mb-3 animate-bounce-in">
                <span 
                  className="badge px-4 py-2" 
                  style={{ 
                    fontSize: '1.1rem',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    border: '2px solid rgba(255,255,255,0.3)',
                    fontWeight: '700'
                  }}
                >
                  {project.category}
                </span>
              </div>
              <h1 
                className="animate-slide-up" 
                style={{ 
                  fontSize: '3.5rem', 
                  marginBottom: '25px', 
                  fontWeight: '900',
                  textShadow: '0 5px 30px rgba(0,0,0,0.3)',
                  lineHeight: '1.2'
                }}
              >
                {project.title}
              </h1>
              <p 
                className="animate-slide-up delay-200" 
                style={{ 
                  fontSize: '1.3rem', 
                  opacity: 0.95,
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
              >
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="portfolio-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Project Overview</h2>
              <p className="lead">{project.overview}</p>
              
              <h3 className="mt-5 mb-4">Key Features</h3>
              {project.features.map((feature, index) => (
                <div className="feature-highlight" key={index}>
                  <h4><i className={`bx ${feature.icon} me-2`} style={{ color: project.color1 }}></i>{feature.title}</h4>
                  <p className="mb-0">{feature.description}</p>
                </div>
              ))}

              <h3 className="mt-5 mb-4">Challenge & Solution</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="p-4" style={{ background: '#fff3cd', borderRadius: '12px' }}>
                    <h5><i className="bx bx-error-circle me-2"></i>Challenge</h5>
                    <p>{project.challenge}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-4" style={{ background: '#d1e7dd', borderRadius: '12px' }}>
                    <h5><i className="bx bx-check-circle me-2"></i>Solution</h5>
                    <p>{project.solution}</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5 mb-4">Results & Impact</h3>
              <div className="row">
                {project.results.map((result, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="text-center p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                      <h2 style={{ color: project.color1, fontWeight: '800' }}>{result.value}</h2>
                      <p className="mb-0">{result.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="project-info-box">
                <h4 className="mb-4">Project Info</h4>
                <div className="mb-3">
                  <strong>Client:</strong><br/>{project.client}
                </div>
                <div className="mb-3">
                  <strong>Industry:</strong><br/>{project.industry}
                </div>
                <div className="mb-3">
                  <strong>Platform:</strong><br/>{project.platform}
                </div>
                <div className="mb-3">
                  <strong>Timeline:</strong><br/>{project.timeline}
                </div>
                <div className="mb-3">
                  <strong>Team Size:</strong><br/>{project.teamSize}
                </div>
              </div>

              <div className="project-info-box" style={{ background: project.color1, color: '#fff' }}>
                <h4 className="mb-3" style={{ color: '#fff' }}>Technologies Used</h4>
                <div>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-info-box">
                <h4 className="mb-3">Interested in Similar Project?</h4>
                <Link to="/contact" className="default-btn" style={{ width: '100%', textAlign: 'center' }}>
                  Get Free Quote <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="container">
        <div className="cta-banner">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Ready to Build Your Next Project?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Let's create something amazing together
          </p>
          <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#f77f00', padding: '15px 40px' }}>
            Start Your Project <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>

      {/* Related Projects */}
      <div className="portfolio-content" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-5">More Projects</h2>
          <div className="text-center">
            <Link to="/portfolio" className="default-btn">
              View All Projects <i className="bx bx-grid-alt"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;

