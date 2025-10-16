import React from 'react';
import { Link } from 'react-router-dom';

const CRMERPService = () => {
  return (
    <>
      <style>{`
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-32px); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 35px rgba(245, 158, 11, 0.5); } 50% { box-shadow: 0 0 90px rgba(245, 158, 11, 0.9); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rotate-3d { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); } }
        
        .service-detail-hero {
          background: linear-gradient(-45deg, #f59e0b, #ea580c, #fb923c, #d97706);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
          padding: 135px 0;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .service-detail-hero::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background: repeating-conic-gradient(from 0deg, transparent 0deg, transparent 30deg, rgba(255,255,255,0.06) 30deg, rgba(255,255,255,0.06) 60deg);
          animation: rotate-3d 50s linear infinite;
        }
        .service-icon-large { font-size: 8rem; margin-bottom: 30px; animation: float 5s ease-in-out infinite; filter: drop-shadow(0 30px 70px rgba(0,0,0,0.5)); }
        .feature-box {
          background: linear-gradient(145deg, #ffffff, #fffbeb);
          border-radius: 25px;
          padding: 42px;
          margin-bottom: 35px;
          box-shadow: 0 18px 55px rgba(245, 158, 11, 0.22);
          transition: all 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 3px solid rgba(245, 158, 11, 0.15);
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
          background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3), transparent);
          transition: left 0.9s;
        }
        .feature-box:hover::before { left: 100%; }
        .feature-box:hover {
          transform: translateY(-20px) scale(1.06);
          box-shadow: 0 40px 100px rgba(245, 158, 11, 0.45);
          border-color: #f59e0b;
        }
        .feature-box:hover i { transform: scale(1.6) rotate(25deg); animation: pulse-glow 1.5s infinite; }
        .feature-box h3 {
          background: linear-gradient(135deg, #f59e0b, #ea580c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
          font-size: 1.7rem;
          margin-top: 20px;
        }
        .tech-badge {
          background: linear-gradient(145deg, #f59e0b, #ea580c);
          color: #fff;
          padding: 17px 35px;
          border-radius: 42px;
          margin: 12px;
          box-shadow: 0 14px 40px rgba(245, 158, 11, 0.4);
          font-weight: 900;
          font-size: 1.08rem;
          transition: all 0.4s ease;
          cursor: pointer;
          display: inline-block;
        }
        .tech-badge:hover {
          transform: translateY(-14px) rotate(-6deg) scale(1.3);
          box-shadow: 0 25px 70px rgba(245, 158, 11, 0.75);
        }
        .process-number {
          width: 130px;
          height: 130px;
          background: linear-gradient(135deg, #f59e0b, #ea580c);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          font-weight: 900;
          margin: 0 auto 35px;
          box-shadow: 0 30px 80px rgba(245, 158, 11, 0.65);
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .cta-section {
          background: linear-gradient(-45deg, #f77f00, #ff6a00, #ff8c00, #ff6a00);
          background-size: 400% 400%;
          animation: gradient-shift 12s ease infinite;
          padding: 120px 0;
          color: #fff;
          text-align: center;
        }
      `}</style>

      <div className="service-detail-hero">
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
          {[...Array(22)].map((_, i) => (
            <div key={i} style={{ position: 'absolute', width: `${Math.random() * 14 + 7}px`, height: `${Math.random() * 14 + 7}px`, background: 'rgba(255,255,255,0.75)', borderRadius: '50%', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${Math.random() * 8 + 5}s ease-in-out infinite`, animationDelay: `${Math.random() * 4}s`, boxShadow: '0 0 20px rgba(255,255,255,0.7)' }} />
          ))}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="col-lg-8 mx-auto text-center">
            <div className="service-icon-large">📊</div>
            <h1 className="animate-slide-up" style={{ fontSize: '4rem', marginBottom: '30px', fontWeight: '900', textShadow: '0 15px 50px rgba(0,0,0,0.5)' }}>
              CRM & ERP Solutions
            </h1>
            <p className="animate-slide-up delay-200" style={{ fontSize: '1.4rem', opacity: 0.97, maxWidth: '800px', margin: '0 auto' }}>
              Streamline your business operations with integrated CRM and ERP systems that unify data, automate workflows, and drive growth.
            </p>
            <div className="animate-slide-up delay-400" style={{ marginTop: '45px' }}>
              <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#f59e0b', padding: '22px 55px', fontSize: '1.2rem', fontWeight: '900', boxShadow: '0 18px 60px rgba(255,255,255,0.45)' }}>
                Transform Your Business <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <h2 className="mb-5 text-center" style={{ fontSize: '3rem', fontWeight: '800' }}>Unified Business Management Systems</h2>
          <div className="row">
            {[
              { icon: 'bx-user-circle', title: 'Customer Relationship Management', desc: 'Manage leads, contacts, sales pipeline, and customer interactions in one place.' },
              { icon: 'bx-line-chart-down', title: 'Enterprise Resource Planning', desc: 'Streamline operations across finance, inventory, HR, and supply chain management.' },
              { icon: 'bx-analytics', title: 'Business Intelligence', desc: 'Real-time dashboards and reports for data-driven decision making.' },
              { icon: 'bx-sync', title: 'Process Automation', desc: 'Automate repetitive tasks and workflows to boost productivity.' }
            ].map((f, i) => (
              <div className="col-md-6" key={i}>
                <div className={`feature-box animate-slide-up delay-${(i + 1) * 150}`}>
                  <i className={f.icon} style={{ fontSize: '4rem', color: '#f59e0b' }}></i>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tech-stack" style={{ background: 'linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%)' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontSize: '3rem', fontWeight: '800' }}>Platform & Technologies</h2>
          <div className="text-center">
            {['Salesforce', 'Microsoft Dynamics', 'SAP', 'Oracle', 'Odoo', 'Custom Solutions', 'Cloud-Based', 'API Integrations', 'Mobile Apps', 'Analytics'].map((tech, i) => (
              <span key={i} className={`tech-badge animate-bounce-in delay-${i * 100}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontSize: '3rem', fontWeight: '800' }}>Implementation Process</h2>
          <div className="row">
            {[
              { title: 'Assessment', desc: 'Analyze current processes and identify requirements' },
              { title: 'Configuration', desc: 'Customize CRM/ERP modules for your business needs' },
              { title: 'Migration', desc: 'Migrate data and integrate with existing systems' },
              { title: 'Training', desc: 'Train team and provide ongoing support & optimization' }
            ].map((step, i) => (
              <div className="col-md-3" key={i}>
                <div className="process-step">
                  <div className="process-number">{i + 1}</div>
                  <h4 style={{ fontWeight: '800', fontSize: '1.5rem' }}>{step.title}</h4>
                  <p style={{ fontSize: '1.05rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{ position: 'absolute', width: '8px', height: '8px', background: 'rgba(255,255,255,0.85)', borderRadius: '50%', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 3}s` }} />
          ))}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3.3rem', marginBottom: '25px', fontWeight: '900', textShadow: '0 10px 35px rgba(0,0,0,0.35)' }}>
            Transform Your Business with CRM & ERP
          </h2>
          <p style={{ fontSize: '1.4rem', marginBottom: '45px' }}>Unify your operations and accelerate growth with integrated systems</p>
          <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#f77f00', padding: '22px 60px', fontSize: '1.25rem', fontWeight: '900' }}>
            Start Your Digital Transformation <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CRMERPService;
