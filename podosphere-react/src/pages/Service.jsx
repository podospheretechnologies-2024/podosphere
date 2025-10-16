import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredServices, setFilteredServices] = useState(serviceData);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredServices(serviceData);
    } else {
      setFilteredServices(serviceData.filter(service => service.category === activeFilter));
    }
  }, [activeFilter]);

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
          0%, 100% { box-shadow: 0 0 25px rgba(247, 127, 0, 0.4); }
          50% { box-shadow: 0 0 60px rgba(247, 127, 0, 0.8); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .page-title-area {
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #667eea);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        .page-title-area::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px);
          background-size: 50px 50px;
          animation: rotate-slow 60s linear infinite;
        }
        .page-title-content {
          position: relative;
          z-index: 2;
          color: #fff;
        }
        .page-title-content h1 {
          color: #fff !important;
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 25px;
          text-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .page-title-content p {
          font-size: 1.3rem;
          opacity: 0.95;
          max-width: 800px;
          margin: 0 auto 30px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .hero-badges {
          margin-top: 30px;
          margin-bottom: 30px;
        }
        .hero-badge {
          padding: 12px 28px;
          background: rgba(255,255,255,0.25);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 1.1rem;
          border-radius: 30px;
          display: inline-block;
          margin: 0 10px;
          border: 2px solid rgba(255,255,255,0.3);
          font-weight: 700;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .hero-badge:hover {
          transform: translateY(-5px) scale(1.1);
          background: rgba(255,255,255,0.35);
        }
        .service-filters {
          margin: 50px 0;
          position: relative;
          z-index: 1;
        }
        .service-filters button {
          background: linear-gradient(145deg, #ffffff, #f8f9fa);
          border: 3px solid #e5e7eb;
          padding: 15px 32px;
          margin: 10px;
          border-radius: 35px;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }
        .service-filters button:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 40px rgba(247, 127, 0, 0.3);
          border-color: #f77f00;
        }
        .service-filters button.active {
          background: linear-gradient(145deg, #f77f00, #ff6a00);
          color: #fff;
          border-color: #f77f00;
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(247, 127, 0, 0.4);
        }
        .services-container {
          padding: 60px 0;
          background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
          padding: 50px 0;
        }
        .service-card {
          background: linear-gradient(145deg, #ffffff, #fafafa);
          border-radius: 25px;
          padding: 45px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 3px solid #f0f0f0;
          position: relative;
          overflow: hidden;
          animation: slide-up 0.6s ease-out forwards;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(247, 127, 0, 0.15), transparent);
          transition: left 0.6s;
        }
        .service-card:hover::before {
          left: 100%;
        }
        .service-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 25px 70px rgba(247, 127, 0, 0.25);
          border-color: #f77f00;
        }
        .service-icon {
          font-size: 5rem;
          margin-bottom: 25px;
          display: inline-block;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.2));
        }
        .service-card:hover .service-icon {
          animation: pulse-glow 2s ease-in-out infinite;
          transform: scale(1.2) rotate(10deg);
        }
        .service-card h3 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .service-card p {
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 25px;
          font-size: 1.05rem;
        }
        .service-features {
          list-style: none;
          padding: 0;
          margin: 25px 0;
        }
        .service-features li {
          padding: 12px 0;
          display: flex;
          align-items: center;
          color: #374151;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .service-features li:hover {
          transform: translateX(10px);
          color: #10b981;
        }
        .service-features li i {
          color: #10b981;
          font-size: 1.4rem;
          margin-right: 12px;
          transition: transform 0.3s ease;
        }
        .service-features li:hover i {
          transform: scale(1.3) rotate(360deg);
        }
        .service-detail-link {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 30px;
          background: linear-gradient(145deg, #f77f00, #ff6a00);
          color: #fff;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(247, 127, 0, 0.3);
        }
        .service-detail-link:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 35px rgba(247, 127, 0, 0.5);
          color: #fff;
        }
        .service-cta {
          background: linear-gradient(-45deg, #f77f00, #ff6a00, #ff8c00, #ff6a00);
          background-size: 400% 400%;
          animation: gradient-shift 12s ease infinite;
          border-radius: 30px;
          padding: 80px 50px;
          text-align: center;
          margin: 80px 0;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .service-cta::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.08) 20px,
            rgba(255,255,255,0.08) 40px
          );
          animation: rotate-slow 30s linear infinite;
        }
        .service-cta h2 {
          color: #ffffff !important;
          font-weight: 900 !important;
          font-size: 3rem !important;
          margin-bottom: 25px !important;
          text-shadow: 0 8px 30px rgba(0,0,0,0.3);
          position: relative;
          z-index: 1;
        }
        .service-cta p {
          color: #ffffff !important;
          font-size: 1.3rem !important;
          opacity: 1 !important;
          margin-bottom: 40px !important;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }
        .cta-btn {
          background: #fff;
          color: #ff6a00;
          padding: 20px 45px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          transition: all 0.4s ease;
          font-size: 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 1;
          border: 3px solid rgba(255,255,255,0.5);
        }
        .cta-btn:hover {
          transform: translateY(-8px) scale(1.08);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          color: #ff6a00;
        }
      `}</style>

      {/* Page Title Area - Enhanced */}
      <div className="page-title-area">
        {/* Floating Particles */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: '0 0 15px rgba(255,255,255,0.5)'
              }}
            />
          ))}
        </div>

        <div className="container">
          <div className="page-title-content text-center">
            <h1 className="animate-slide-up">Expert Services for Digital Excellence</h1>
            <p className="animate-slide-up delay-200">
              From web development to AI integration, we deliver cutting-edge solutions that drive business growth and technological innovation.
            </p>
            <div className="hero-badges animate-slide-up delay-400">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> Innovation Driven
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> Security First
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i> Performance Focused
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Container */}
      <div className="services-container">
        <div className="container-fluid">
          {/* Service Filters */}
          <div className="service-filters text-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={activeFilter === filter.value ? 'active' : ''}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Service Grid */}
          <div className="container">
            <div className="service-grid">
              {filteredServices.map((service, index) => (
                <div 
                  key={index} 
                  id={service.id} 
                  className="service-card" 
                  data-category={service.category}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className='bx bxs-check-circle'></i> {feature}
                      </li>
                    ))}
                  </ul>
                  {service.detailLink && (
                    <Link to={service.detailLink} className="service-detail-link">
                      Learn More <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service CTA */}
      <div className="container">
        <div className="service-cta">
          {/* Animated Particles in CTA */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
            {[...Array(15)].map((_, i) => (
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
          
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss your project requirements and explore how our expertise can drive your digital success.
          </p>
          <Link to="/contact" className="cta-btn">
            Start Your Project <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

// Filter Options
const filters = [
  { value: 'all', label: 'All Services' },
  { value: 'web', label: 'Web Development' },
  { value: 'design', label: 'Design & UX' },
  { value: 'software', label: 'Custom Software' },
  { value: 'cloud', label: 'Cloud & DevOps' },
  { value: 'ai', label: 'AI & Data' },
  { value: 'security', label: 'IT & Security' },
  { value: 'consulting', label: 'Consulting' }
];

// Service Data with detail page links
const serviceData = [
  {
    id: 'web-engineering',
    category: 'web',
    icon: '🌐',
    title: 'Full-Stack Web Engineering',
    description: 'Ultra-fast, scalable web platforms using modern headless architectures (JAMstack/MACH) with zero-latency performance and SEO optimization.',
    features: [
      'Headless CMS & API-Driven Development',
      'Next.js/React & Modern Frameworks',
      'Serverless & Auto-Scaling Backends',
      'WCAG Accessibility Standards'
    ],
    detailLink: '/services/web-development'
  },
  {
    id: 'product-design',
    category: 'design',
    icon: '🎨',
    title: 'Digital Product Design & UX',
    description: 'Intuitive, high-converting interfaces with data-led design systems and user research for optimal user experience.',
    features: [
      'Figma-Based UI/UX & Prototypes',
      'User Journey Mapping & Research',
      'Conversion Rate Optimization (CRO)',
      'Atomic Design System Implementation'
    ]
  },
  {
    id: 'custom-software',
    category: 'software',
    icon: '⚙️',
    title: 'Bespoke Software Development',
    description: 'Custom, enterprise-grade applications with microservices architecture and cloud-native solutions for complex challenges.',
    features: [
      'Microservices Architecture',
      'Advanced Application Security Audits',
      'Legacy System Migration & Modernization',
      'Automated QA & Testing Pipelines'
    ],
    detailLink: '/services/software-development'
  },
  {
    id: 'cloud-devops',
    category: 'cloud',
    icon: '☁️',
    title: 'Cloud & DevOps Automation',
    description: 'Infrastructure as Code (IaC) and automated CI/CD pipelines for high availability and cost efficiency across cloud platforms.',
    features: [
      'AWS, Azure, GCP Cloud Management',
      'Infrastructure as Code (Terraform/Ansible)',
      'CI/CD Pipeline Implementation',
      'Container Orchestration (Kubernetes/Docker)'
    ]
  },
  {
    id: 'data-ai',
    category: 'ai',
    icon: '🤖',
    title: 'Data Analytics & AI Integration',
    description: 'Robust data pipelines and custom AI/ML models for automated decision-making and business intelligence.',
    features: [
      'Data Pipeline & Warehouse Setup',
      'Custom ML Model Development',
      'Business Intelligence Reporting',
      'Generative AI Integration & Prompt Engineering'
    ],
    detailLink: '/services/ai-ml'
  },
  {
    id: 'it-security',
    category: 'security',
    icon: '🔒',
    title: 'Managed IT & Security',
    description: '24/7 monitoring, threat detection, and disaster recovery to ensure continuous operation and data protection.',
    features: [
      '24/7 Monitoring & Incident Response',
      'Penetration Testing & Vulnerability Scanning',
      'Backup & Disaster Recovery (DR)',
      'Proactive System Maintenance'
    ]
  },
  {
    id: 'consulting',
    category: 'consulting',
    icon: '📈',
    title: 'Strategic Tech Consulting',
    description: 'Expert guidance for digital transformation, technology roadmaps, and IT investment alignment with business objectives.',
    features: [
      'Technology Roadmaps & Strategy',
      'Digital Transformation Planning',
      'IT Strategy Assessment & Audit',
      'Technology Leadership & Guidance'
    ]
  },
  {
    id: 'app-development',
    category: 'web',
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with seamless performance and user experience.',
    features: [
      'iOS & Android Native Development',
      'React Native & Flutter Apps',
      'App Store Optimization',
      'Real-time Features & Push Notifications'
    ],
    detailLink: '/services/app-development'
  },
  {
    id: 'crm-erp',
    category: 'software',
    icon: '📊',
    title: 'CRM & ERP Solutions',
    description: 'Integrated business management systems that unify data, automate workflows, and drive organizational growth.',
    features: [
      'Sales Force Automation',
      'Financial Management',
      'Inventory & Supply Chain',
      'Business Intelligence Dashboards'
    ],
    detailLink: '/services/crm-erp'
  }
];

export default Service;
