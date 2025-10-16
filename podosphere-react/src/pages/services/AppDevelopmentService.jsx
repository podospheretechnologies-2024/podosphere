import React from 'react';
import { Link } from 'react-router-dom';

const AppDevelopmentService = () => {
  return (
    <>
      <style>{`
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes float { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-25px) scale(1.05); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 25px rgba(16, 185, 129, 0.4); } 50% { box-shadow: 0 0 70px rgba(16, 185, 129, 0.8); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .service-detail-hero {
          background: linear-gradient(-45deg, #10b981, #059669, #34d399, #047857);
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
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.05) 1px, transparent 2px, transparent 40px);
          animation: rotate-slow 40s linear infinite;
        }
        .service-icon-large { font-size: 7rem; margin-bottom: 25px; animation: float 5s ease-in-out infinite; filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5)); }
        .feature-box {
          background: linear-gradient(145deg, #ffffff, #f0fdf4);
          border-radius: 22px;
          padding: 38px;
          margin-bottom: 30px;
          box-shadow: 0 12px 45px rgba(16, 185, 129, 0.18);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 2px solid rgba(16, 185, 129, 0.15);
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
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.25), transparent);
          transition: left 0.7s;
        }
        .feature-box:hover::before { left: 100%; }
        .feature-box:hover {
          transform: translateY(-15px) scale(1.04);
          box-shadow: 0 30px 80px rgba(16, 185, 129, 0.35);
          border-color: #10b981;
        }
        .feature-box:hover i { animation: pulse-glow 1.5s ease-in-out infinite; transform: scale(1.4) rotate(20deg); }
        .feature-box h3 {
          background: linear-gradient(135deg, #10b981, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
          font-size: 1.6rem;
        }
        .tech-badge {
          background: linear-gradient(145deg, #10b981, #059669);
          color: #fff;
          padding: 15px 30px;
          border-radius: 35px;
          margin: 10px;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.35);
          font-weight: 800;
          transition: all 0.35s ease;
          cursor: pointer;
          display: inline-block;
        }
        .tech-badge:hover {
          transform: translateY(-10px) rotate(-5deg) scale(1.2);
          box-shadow: 0 18px 50px rgba(16, 185, 129, 0.6);
        }
        .process-number {
          width: 110px;
          height: 110px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 900;
          margin: 0 auto 25px;
          box-shadow: 0 20px 60px rgba(16, 185, 129, 0.5);
          animation: pulse-glow 3s ease-in-out infinite;
          position: relative;
        }
        .process-number::after {
          content: '';
          position: absolute;
          top: -18px;
          left: -18px;
          right: -18px;
          bottom: -18px;
          border: 5px solid rgba(16, 185, 129, 0.3);
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
      `}</style>

      <div className="service-detail-hero">
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
          {[...Array(18)].map((_, i) => (
            <div key={i} style={{ position: 'absolute', width: `${Math.random() * 10 + 5}px`, height: `${Math.random() * 10 + 5}px`, background: 'rgba(255,255,255,0.8)', borderRadius: '50%', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 3}s` }} />
          ))}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="col-lg-8 mx-auto text-center">
            <div className="service-icon-large">📱</div>
            <h1 className="animate-slide-up" style={{ fontSize: '3.5rem', marginBottom: '25px', fontWeight: '900', textShadow: '0 10px 40px rgba(0,0,0,0.4)' }}>Mobile App Development</h1>
            <p className="animate-slide-up delay-200" style={{ fontSize: '1.3rem', opacity: 0.95 }}>
              Create powerful, intuitive mobile apps for iOS and Android that users love with native performance and seamless user experience.
            </p>
            <div className="animate-slide-up delay-400" style={{ marginTop: '35px' }}>
              <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#10b981', padding: '18px 45px', fontSize: '1.1rem', fontWeight: '700' }}>
                Build Your App <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: '800' }}>Native & Cross-Platform Mobile Solutions</h2>
              <p className="lead text-center mb-5">High-performance mobile applications with exceptional user experiences.</p>
              <div className="row">
                {[
                  { icon: 'bx-mobile-alt', title: 'Native Apps', desc: 'iOS and Android native apps with platform-specific features and optimal performance.' },
                  { icon: 'bx-devices', title: 'Cross-Platform', desc: 'React Native and Flutter apps that work seamlessly across multiple platforms.' },
                  { icon: 'bx-cloud', title: 'Cloud Integration', desc: 'Seamless backend integration with cloud services and real-time synchronization.' },
                  { icon: 'bx-shield-alt-2', title: 'Secure & Scalable', desc: 'Enterprise-grade security and scalability to grow with your user base.' }
                ].map((f, i) => (
                  <div className="col-md-6" key={i}>
                    <div className={`feature-box animate-slide-up delay-${(i + 1) * 100}`}>
                      <i className={f.icon} style={{ fontSize: '3.5rem', color: '#10b981' }}></i>
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontWeight: '800' }}>Mobile Technologies</h2>
          <div className="text-center">
            {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'Redux', 'Push Notifications'].map((tech, i) => (
              <span key={i} className={`tech-badge animate-bounce-in delay-${i * 100}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontWeight: '800' }}>App Development Process</h2>
          <div className="row">
            {[
              { title: 'Strategy', desc: 'Define app features, target audience, and platform selection' },
              { title: 'Design', desc: 'Create stunning UI/UX designs with prototype and user flows' },
              { title: 'Development', desc: 'Build app with clean code, testing, and optimization' },
              { title: 'Launch', desc: 'Deploy to app stores with ASO and marketing support' }
            ].map((step, i) => (
              <div className="col-md-3" key={i}>
                <div className="process-step">
                  <div className="process-number">{i + 1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '900' }}>Turn Your App Idea Into Reality</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '35px' }}>Build a mobile app that stands out in the app store</p>
          <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#f77f00', padding: '18px 50px', fontSize: '1.15rem', fontWeight: '800' }}>
            Start App Development <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppDevelopmentService;
