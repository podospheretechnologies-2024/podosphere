import React from 'react';
import { Link } from 'react-router-dom';

const SoftwareDevelopmentService = () => {
  return (
    <>
      <style>{`
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-28px) rotate(3deg); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.5); } 50% { box-shadow: 0 0 80px rgba(139, 92, 246, 0.9); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(45px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .service-detail-hero {
          background: linear-gradient(-45deg, #8b5cf6, #6366f1, #a78bfa, #7c3aed);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
          padding: 130px 0;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .service-detail-hero::before {
          content: '';
          position: absolute;
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: spin-slow 80s linear infinite;
        }
        .service-icon-large { font-size: 7.5rem; margin-bottom: 30px; animation: float 4.5s ease-in-out infinite; filter: drop-shadow(0 25px 60px rgba(0,0,0,0.5)); }
        .feature-box {
          background: linear-gradient(145deg, #ffffff, #faf5ff);
          border-radius: 24px;
          padding: 40px;
          margin-bottom: 32px;
          box-shadow: 0 15px 50px rgba(139, 92, 246, 0.2);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border-left: 6px solid #8b5cf6;
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
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent);
          transition: left 0.8s;
        }
        .feature-box:hover::before { left: 100%; }
        .feature-box:hover {
          transform: translateY(-18px) scale(1.05);
          box-shadow: 0 35px 90px rgba(139, 92, 246, 0.4);
        }
        .feature-box:hover i { transform: scale(1.5) rotate(360deg); animation: pulse-glow 1.5s infinite; }
        .tech-badge {
          background: linear-gradient(145deg, #8b5cf6, #6366f1);
          color: #fff;
          padding: 16px 32px;
          border-radius: 40px;
          margin: 12px;
          box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
          font-weight: 800;
          font-size: 1.05rem;
          transition: all 0.4s ease;
          cursor: pointer;
          display: inline-block;
        }
        .tech-badge:hover {
          transform: translateY(-12px) rotate(-4deg) scale(1.25);
          box-shadow: 0 22px 60px rgba(139, 92, 246, 0.7);
        }
        .process-number {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.2rem;
          font-weight: 900;
          margin: 0 auto 30px;
          box-shadow: 0 25px 70px rgba(139, 92, 246, 0.6);
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .cta-section {
          background: linear-gradient(-45deg, #f77f00, #ff6a00, #ff8c00, #ff6a00);
          background-size: 400% 400%;
          animation: gradient-shift 12s ease infinite;
          padding: 110px 0;
          color: #fff;
          text-align: center;
        }
      `}</style>

      <div className="service-detail-hero">
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} style={{ position: 'absolute', width: `${Math.random() * 12 + 6}px`, height: `${Math.random() * 12 + 6}px`, background: 'rgba(255,255,255,0.7)', borderRadius: '50%', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${Math.random() * 7 + 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 3}s`, boxShadow: '0 0 15px rgba(255,255,255,0.6)' }} />
          ))}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="col-lg-8 mx-auto text-center">
            <div className="service-icon-large">💻</div>
            <h1 className="animate-slide-up" style={{ fontSize: '3.8rem', marginBottom: '28px', fontWeight: '900', textShadow: '0 12px 45px rgba(0,0,0,0.4)' }}>
              Custom Software Development
            </h1>
            <p className="animate-slide-up delay-200" style={{ fontSize: '1.35rem', opacity: 0.96, maxWidth: '750px', margin: '0 auto' }}>
              Build bespoke software solutions tailored to your unique business needs with enterprise-grade architecture and cutting-edge technology.
            </p>
            <div className="animate-slide-up delay-400" style={{ marginTop: '40px' }}>
              <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#8b5cf6', padding: '20px 50px', fontSize: '1.15rem', fontWeight: '800', boxShadow: '0 15px 50px rgba(255,255,255,0.4)' }}>
                Discuss Your Project <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <h2 className="mb-5 text-center" style={{ fontSize: '2.8rem', fontWeight: '800' }}>Enterprise-Grade Custom Software</h2>
          <div className="row">
            {[
              { icon: 'bx-chip', title: 'Microservices Architecture', desc: 'Scalable, modular software with independent services for flexibility and maintainability.' },
              { icon: 'bx-server', title: 'Legacy Modernization', desc: 'Upgrade outdated systems to modern technologies without disrupting operations.' },
              { icon: 'bx-git-branch', title: 'API Development', desc: 'RESTful and GraphQL APIs for seamless integration and data exchange.' },
              { icon: 'bx-cog', title: 'Automation Solutions', desc: 'Automate repetitive tasks and workflows to increase efficiency and reduce costs.' }
            ].map((f, i) => (
              <div className="col-md-6" key={i}>
                <div className={`feature-box animate-slide-up delay-${(i + 1) * 150}`}>
                  <i className={f.icon} style={{ fontSize: '3.8rem', color: '#8b5cf6' }}></i>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tech-stack" style={{ background: 'linear-gradient(180deg, #faf5ff 0%, #f3e8ff 100%)' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontSize: '2.8rem', fontWeight: '800' }}>Our Technology Stack</h2>
          <div className="text-center">
            {['Java', 'Python', '.NET', 'Node.js', 'Microservices', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'RabbitMQ'].map((tech, i) => (
              <span key={i} className={`tech-badge animate-bounce-in delay-${i * 100}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontSize: '2.8rem', fontWeight: '800' }}>Development Methodology</h2>
          <div className="row">
            {[
              { title: 'Analysis', desc: 'Understand requirements, workflows, and system architecture' },
              { title: 'Architecture', desc: 'Design scalable, secure software architecture and database' },
              { title: 'Development', desc: 'Agile development with iterative releases and testing' },
              { title: 'Deployment', desc: 'Deploy, train team, and provide ongoing support & updates' }
            ].map((step, i) => (
              <div className="col-md-3" key={i}>
                <div className="process-step">
                  <div className="process-number">{i + 1}</div>
                  <h4 style={{ fontWeight: '700', fontSize: '1.4rem' }}>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2 style={{ fontSize: '3.2rem', marginBottom: '22px', fontWeight: '900', textShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
            Ready for Custom Software Development?
          </h2>
          <p style={{ fontSize: '1.35rem', marginBottom: '40px' }}>Let's build software that transforms your business operations</p>
          <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#f77f00', padding: '20px 55px', fontSize: '1.2rem', fontWeight: '800' }}>
            Schedule Discovery Call <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SoftwareDevelopmentService;
