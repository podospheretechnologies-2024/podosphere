import React from 'react';
import { Link } from 'react-router-dom';

const AIMLService = () => {
  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.4); }
          50% { box-shadow: 0 0 60px rgba(102, 126, 234, 0.8); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotate-scale {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .service-detail-hero {
          background: linear-gradient(-45deg, #667eea, #764ba2, #667eea, #5a67d8);
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
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.05) 10px,
            rgba(255,255,255,0.05) 20px
          );
          animation: rotate-scale 60s linear infinite;
        }
        .service-icon-large {
          font-size: 6rem;
          margin-bottom: 20px;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.3));
        }
        .service-detail-content {
          padding: 80px 0;
        }
        .feature-box {
          background: linear-gradient(145deg, #ffffff, #f8f9ff);
          border-radius: 20px;
          padding: 35px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.15);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 2px solid rgba(102, 126, 234, 0.1);
          position: relative;
          overflow: hidden;
          animation: slide-up 0.6s ease-out forwards;
        }
        .feature-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
          transition: left 0.5s;
        }
        .feature-box:hover::before {
          left: 100%;
        }
        .feature-box:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
          border-color: #667eea;
        }
        .feature-box i {
          animation: rotate-scale 10s ease-in-out infinite;
        }
        .feature-box:hover i {
          animation: pulse-glow 2s ease-in-out infinite;
          transform: scale(1.2);
        }
        .feature-box h3 {
          color: #667eea;
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tech-stack {
          background: #f8f9fa;
          padding: 50px 0;
        }
        .tech-badge {
          display: inline-block;
          background: linear-gradient(145deg, #ffffff, #f0f0ff);
          padding: 14px 28px;
          border-radius: 30px;
          margin: 8px;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
          font-weight: 700;
          color: #667eea;
          transition: all 0.3s ease;
          border: 2px solid rgba(102, 126, 234, 0.2);
          cursor: pointer;
        }
        .tech-badge:hover {
          transform: translateY(-5px) rotate(2deg);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: #fff;
          border-color: #667eea;
        }
        .process-step {
          text-align: center;
          padding: 40px;
          transition: transform 0.3s ease;
        }
        .process-step:hover {
          transform: scale(1.05);
        }
        .process-number {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 auto 20px;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
          animation: pulse-glow 3s ease-in-out infinite;
          position: relative;
        }
        .process-number::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 3px solid rgba(102, 126, 234, 0.3);
          border-radius: 50%;
          animation: pulse-glow 3s ease-in-out infinite reverse;
        }
        .cta-section {
          background: linear-gradient(-45deg, #f77f00, #ff6a00, #ff8c00, #ff6a00);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
          padding: 100px 0;
          color: #fff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent);
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div className="service-detail-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center" style={{ position: 'relative', zIndex: 1 }}>
              <div className="service-icon-large">🤖</div>
              <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '800' }}>
                AI & Machine Learning Solutions
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>
                Harness the power of artificial intelligence to transform your business operations,
                automate decision-making, and unlock unprecedented insights from your data.
              </p>
              <div style={{ marginTop: '30px' }}>
                <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#667eea' }}>
                  Start Your AI Project <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="service-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Transform Your Business with AI</h2>
              <p className="lead">
                Our AI and Machine Learning services help businesses leverage cutting-edge technology
                to gain competitive advantages, improve efficiency, and drive innovation.
              </p>

              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="feature-box">
                    <i className="bx bx-brain" style={{ fontSize: '3rem', color: '#667eea' }}></i>
                    <h3>Custom AI Models</h3>
                    <p>Develop tailored machine learning models that solve your specific business challenges with precision and accuracy.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box">
                    <i className="bx bx-bot" style={{ fontSize: '3rem', color: '#667eea' }}></i>
                    <h3>Intelligent Automation</h3>
                    <p>Automate complex processes with AI-powered systems that learn and improve over time.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box">
                    <i className="bx bx-line-chart" style={{ fontSize: '3rem', color: '#667eea' }}></i>
                    <h3>Predictive Analytics</h3>
                    <p>Forecast trends and make data-driven decisions with advanced predictive modeling.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box">
                    <i className="bx bx-conversation" style={{ fontSize: '3rem', color: '#667eea' }}></i>
                    <h3>NLP & Chatbots</h3>
                    <p>Build intelligent conversational AI and natural language processing solutions.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5 mb-4">Our AI Capabilities</h3>
              <ul className="list-unstyled">
                <li className="mb-3"><i className="bx bx-check-circle text-success"></i> Computer Vision & Image Recognition</li>
                <li className="mb-3"><i className="bx bx-check-circle text-success"></i> Natural Language Processing (NLP)</li>
                <li className="mb-3"><i className="bx bx-check-circle text-success"></i> Recommendation Systems</li>
                <li className="mb-3"><i className="bx bx-check-circle text-success"></i> Fraud Detection & Anomaly Detection</li>
                <li className="mb-3"><i className="bx bx-check-circle text-success"></i> Time Series Forecasting</li>
                <li className="mb-3"><i className="bx bx-check-circle text-success"></i> Deep Learning & Neural Networks</li>
                <li className="mb-3"><i className="bx bx-check-circle text-success"></i> Reinforcement Learning</li>
                <li className="mb-3"><i className="bx bx-check-circle text-success"></i> MLOps & Model Deployment</li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
                  <h4>Quick Facts</h4>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2"><strong>⏱️ Timeline:</strong> 4-12 weeks</li>
                    <li className="mb-2"><strong>💰 Starting at:</strong> Contact us</li>
                    <li className="mb-2"><strong>🎯 Best for:</strong> Enterprise & Startups</li>
                    <li className="mb-2"><strong>🔧 Support:</strong> 24/7 Available</li>
                  </ul>
                </div>

                <div className="widget" style={{ background: '#667eea', color: '#fff', padding: '30px', borderRadius: '12px' }}>
                  <h4 style={{ color: '#fff' }}>Ready to Get Started?</h4>
                  <p>Let's discuss how AI can transform your business.</p>
                  <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#667eea', width: '100%', textAlign: 'center' }}>
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
          <h2 className="text-center mb-5">Technologies We Use</h2>
          <div className="text-center">
            <span className="tech-badge">TensorFlow</span>
            <span className="tech-badge">PyTorch</span>
            <span className="tech-badge">Scikit-learn</span>
            <span className="tech-badge">Keras</span>
            <span className="tech-badge">OpenCV</span>
            <span className="tech-badge">Hugging Face</span>
            <span className="tech-badge">GPT Models</span>
            <span className="tech-badge">AWS SageMaker</span>
            <span className="tech-badge">Google AI</span>
            <span className="tech-badge">Azure ML</span>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="service-detail-content">
        <div className="container">
          <h2 className="text-center mb-5">Our AI Development Process</h2>
          <div className="row">
            {processSteps.map((step, index) => (
              <div className="col-md-3" key={index}>
                <div className="process-step">
                  <div className="process-number">{index + 1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Ready to Leverage AI for Your Business?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Let's build intelligent solutions that drive real results
          </p>
          <Link to="/contact" className="default-btn" style={{ background: '#fff', color: '#f77f00', padding: '15px 40px', fontSize: '1.1rem' }}>
            Get Started Today <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

const processSteps = [
  { title: 'Discovery', description: 'Understand your business challenges and define AI objectives' },
  { title: 'Data Preparation', description: 'Collect, clean, and prepare data for model training' },
  { title: 'Model Development', description: 'Build and train custom AI models for your needs' },
  { title: 'Deployment & Support', description: 'Deploy models and provide ongoing optimization' }
];

export default AIMLService;

