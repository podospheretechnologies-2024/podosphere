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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
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

        /* Color Scheme Variables - Portfolio Theme */
        :root {
          --primary-orange: #f77f00;
          --secondary-orange: #ff6a00;
          --text-black: #1a1b1e;
          --text-white: #ffffff;
          --text-gray: #4a5568;
          --text-light-gray: #718096;
          --bg-light: #f9fafb;
          --bg-white: #ffffff;
          --border-color: #e6e9ef;
        }

        .default-btn {
          background-color: var(--primary-orange) !important;
          color: var(--text-white) !important;
          padding: 12px 28px !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease;
          border: none !important;
          box-shadow: 0 4px 12px rgba(247, 127, 0, 0.2);
        }
        .default-btn:hover {
          background-color: var(--secondary-orange) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(247, 127, 0, 0.3);
        }

        /* Page Title Area - Portfolio Style Hero Section */
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
          background: rgba(247, 127, 0, 0.1);
          color: var(--primary-orange);
          font-size: 1em;
          border-radius: 20px;
          margin: 0 5px;
          border: 1px solid rgba(247, 127, 0, 0.3);
          transition: all 0.3s ease;
          animation: bounceIn 1s ease-out 0.8s both;
        }
        .hero-badge:nth-child(1) {
          animation-delay: 0.9s;
        }
        .hero-badge:nth-child(2) {
          animation-delay: 1s;
        }
        .hero-badge:nth-child(3) {
          animation-delay: 1.1s;
        }
        .hero-badge:hover {
          transform: translateY(-3px) scale(1.05);
          background: rgba(247, 127, 0, 0.2);
          box-shadow: 0 8px 20px rgba(247, 127, 0, 0.3);
        }
        .page-title-content .default-btn {
          margin-top: 30px !important;
          animation: fadeInUp 0.8s ease-out 1.2s both;
        }

        /* Services Container - Portfolio Style */
        .services-container {
          padding: 80px 0;
          background-color: var(--bg-light);
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

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
          padding: 50px 0;
        }
        .service-card {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 16px rgba(16, 24, 40, 0.04);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(247, 127, 0, 0.1), transparent);
          transition: left 0.6s;
        }
        .service-card:hover::before {
          left: 100%;
        }
        .service-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: var(--primary-orange);
          box-shadow: 0 15px 40px rgba(247, 127, 0, 0.15);
        }
        .service-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          display: inline-block;
          animation: pulse 2s infinite;
        }
        .service-card h3 {
          color: var(--text-black);
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .service-card p {
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .service-features {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .service-features li {
          padding: 8px 0;
          display: flex;
          align-items: center;
          color: var(--text-gray);
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .service-features li:hover {
          transform: translateX(5px);
          color: var(--primary-orange);
        }
        .service-features li i {
          color: var(--primary-orange);
          font-size: 1.2rem;
          margin-right: 10px;
          transition: transform 0.3s ease;
        }
        .service-features li:hover i {
          transform: scale(1.2) rotate(360deg);
        }
        .service-detail-link {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 25px;
          background: var(--primary-orange);
          color: var(--text-white);
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .service-detail-link:hover {
          background: var(--secondary-orange);
          transform: translateY(-2px);
          color: var(--text-white);
          box-shadow: 0 8px 20px rgba(247, 127, 0, 0.3);
        }
      `}</style>

      {/* Page Title Area - Portfolio Style Hero Section */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after" style={{color: 'var(--primary-orange)', fontSize: '1.1rem', fontWeight: '600'}}>
              Our Services
            </span>
            <h1 className="h2-color" style={{color: 'var(--text-black)'}}>
              Expert Services for <span style={{color: 'var(--primary-orange)'}}>Digital Excellence</span>
            </h1>
            <p style={{color: 'var(--text-gray)'}}>
              From web development to AI integration, we deliver cutting-edge solutions that drive business growth and technological innovation.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> <span style={{color: 'var(--text-black)'}}>Innovation Driven</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> <span style={{color: 'var(--text-black)'}}>Security First</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i> <span style={{color: 'var(--text-black)'}}>Performance Focused</span>
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
                to="/portfolio"
                className="default-btn"
                style={{ background: 'var(--text-black)', color: 'var(--text-white)' }}
              >
                <span style={{color: 'var(--text-white)'}}>View Portfolio</span> <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Container - Portfolio Style */}
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