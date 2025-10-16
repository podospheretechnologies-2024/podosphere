import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  useEffect(() => {
    // Initialize Magnific Popup for image gallery
    if (window.$ && window.$.fn.magnificPopup) {
      window.$('.popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
      });
    }
  }, []);

  return (
    <>
      <style>{`
        body {
          font-size: 16px;
          line-height: 1.7;
        }
        .container-max-2 {
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }
        h1, h2, h3, h4, h5, h6 {
          font-weight: 700 !important;
        }
        .default-btn {
          background-color: #f77f00 !important;
          color: #fff !important;
          padding: 12px 28px !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease;
          border: none !important;
          box-shadow: 0 4px 12px rgba(255, 122, 0, 0.2);
        }
        .default-btn:hover {
          background-color: #ff6a00 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(255, 122, 0, 0.3);
        }
        .default-btn[style*="background: #111"] {
          background: #333 !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .default-btn[style*="background: #111"]:hover {
          background: #111 !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
        }
        .bx-plus {
          font-size: 1em !important;
          vertical-align: middle;
        }
        .page-title-area {
          padding: 100px 0 80px;
        }
        .page-title-content h1 {
          font-size: 3.2rem;
          margin-bottom: 15px;
        }
        .page-title-content p {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.15rem;
          color: #4a5568;
        }
        .hero-badges {
          margin-top: 25px;
          margin-bottom: 25px;
        }
        .hero-badge {
          padding: 7px 18px;
          background: rgba(255, 127, 80, 0.1);
          color: #f77f00;
          font-size: 1em;
        }
        .page-title-content .default-btn {
          margin-top: 30px !important;
        }
        .portfolio-grid {
          padding: 80px 0;
          background-color: #f9fafb;
        }
        .portfolio-grid .card {
          border: 1px solid #e6e9ef;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(16, 24, 40, 0.04);
        }
        .portfolio-grid .card:hover {
          transform: translateY(-4px);
          border-color: #f77f00;
          box-shadow: 0 12px 30px rgba(16, 24, 40, 0.1);
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
        }
        .portfolio-meta {
          font-size: 1rem;
          color: #718096;
          line-height: 1.6;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after">Our Portfolio</span>
            <h1 className="h2-color">Transforming Ideas into Digital Reality</h1>
            <p>
              Discover our comprehensive collection of successful projects that
              showcase our expertise in delivering innovative digital solutions
              across various industries and technologies.
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
              <Link
                to="/contact"
                className="default-btn"
                style={{ marginRight: '15px' }}
              >
                Get In Touch <i className="bx bx-plus"></i>
              </Link>
              <Link
                to="/solution"
                className="default-btn"
                style={{ background: '#111', color: '#fff' }}
              >
                Explore Solutions <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="portfolio-grid">
        <div className="container">
          <div className="row g-4">
            {portfolioItems.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card">
                  <a
                    href={item.image}
                    className="popup-link"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="portfolio-meta">{item.description}</p>
                    <div className="d-flex justify-content-between portfolio-actions">
                      <Link to={item.link} className="default-btn">
                        View Case Study<i className="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const portfolioItems = [
  {
    title: 'Meditate & Wellness App',
    description: 'An app developed for a client to relieve stress, allowing users to listen to audio tailored for desired mental states like happiness, relaxation, or focus.',
    image: '/assets/img/case-studies/case-studies1.png',
    link: '/portfolio/meditation-wellness'
  },
  {
    title: 'Social Media App',
    description: 'The DigiCupid social networking app enables secure sharing of audio, video, and images, with features like following, private chat, and group creation.',
    image: '/assets/img/case-studies/case-studies2.png',
    link: '/portfolio/social-media'
  },
  {
    title: 'Car Bike Booking App',
    description: 'The RideX booking application, featuring services for taxis, bikes, pickups, and deliveries, plus supplemental features like food delivery and transit.',
    image: '/assets/img/case-studies/case-studies3.png',
    link: '/portfolio/ride-booking'
  },
  {
    title: 'E-learning App',
    description: 'An innovative e-learning platform providing an interactive and enjoyable learning experience through video conferencing for users to study from home.',
    image: '/assets/img/case-studies/case-studies4.png',
    link: '/portfolio/elearning'
  },
  {
    title: 'Event Booking App',
    description: 'An app for booking celebrities and comedians for private parties, concerts, and events. Users can search by date, region, view reviews, and rate events.',
    image: '/assets/img/case-studies/case-studies5.png',
    link: '/portfolio/event-booking'
  },
  {
    title: 'On Demand Home Service Booking App',
    description: 'The ultimate one-stop solution for conveniently scheduling all home services, allowing users to request services, make secure payments, and receive real-time notifications.',
    image: '/assets/img/case-studies/case-studies6.png',
    link: '/portfolio/home-service'
  },
  {
    title: 'Video Consultation App',
    description: 'An app enabling professional video consultations globally, featuring appointment booking and secure payment processing for users to connect with experts.',
    image: '/assets/img/case-studies/case-studies7.png',
    link: '/portfolio/video-consultation'
  },
  {
    title: 'Video KYC App',
    description: 'Developed for a top bank, this app allows users to complete their KYC remotely via video conference, eliminating the need to visit a physical location.',
    image: '/assets/img/case-studies/case-studies8.png',
    link: '/portfolio/video-kyc'
  },
  {
    title: 'Fitness App',
    description: 'A comprehensive wellness app that seamlessly tracks physical activity and crucial health indicators, promoting a healthy and balanced lifestyle.',
    image: '/assets/img/case-studies/case-studies9.jpg',
    link: '/portfolio/fitness'
  },
  {
    title: 'Learning Management System',
    description: 'A comprehensive LMS platform with course management, student tracking, assignment submission, grade management, and interactive learning modules for educational institutions.',
    image: '/assets/img/case-studies/case-studies4.png',
    link: '/portfolio/lms'
  },
  {
    title: 'Content Management System',
    description: 'A powerful CMS solution enabling easy content creation, management, and publishing with role-based access control, media library, and SEO optimization features.',
    image: '/assets/img/case-studies/case-studies1.png',
    link: '/portfolio/cms'
  },
  {
    title: 'Portfolio Website',
    description: 'A stunning portfolio website showcasing creative work with dynamic galleries, project case studies, client testimonials, and an integrated contact system.',
    image: '/assets/img/case-studies/case-studies2.png',
    link: '/portfolio/portfolio-site'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with product catalog, shopping cart, payment gateway integration, order management, and customer analytics dashboard.',
    image: '/assets/img/case-studies/case-studies3.png',
    link: '/portfolio/ecommerce'
  },
  {
    title: 'MERN Stack Application',
    description: 'A robust full-stack web application built with MongoDB, Express.js, React, and Node.js, featuring real-time updates, RESTful APIs, and scalable architecture.',
    image: '/assets/img/case-studies/case-studies5.png',
    link: '/portfolio/mern-stack'
  },
  {
    title: 'React Web Application',
    description: 'A modern, responsive single-page application built with React, featuring component-based architecture, state management with Redux, and optimized performance.',
    image: '/assets/img/case-studies/case-studies6.png',
    link: '/portfolio/react-app'
  },
  {
    title: 'N8N Workflow Automation',
    description: 'Custom workflow automation solution using N8N for seamless integration of business processes, API connections, data synchronization, and automated task execution.',
    image: '/assets/img/case-studies/case-studies7.png',
    link: '/portfolio/n8n-automation'
  },
  {
    title: 'AI-Powered Website',
    description: 'An intelligent website leveraging artificial intelligence for personalized user experiences, chatbot integration, predictive analytics, and machine learning capabilities.',
    image: '/assets/img/case-studies/case-studies8.png',
    link: '/portfolio/ai-website'
  },
  {
    title: 'LMS Pro - Corporate Training',
    description: 'Enterprise-level Learning Management System with advanced features for corporate training, certifications, and skill development programs.',
    image: '/assets/img/case-studies/case-studies4.png',
    link: '/portfolio/lms-pro'
  },
  {
    title: 'Headless CMS Platform',
    description: 'API-first headless CMS providing content delivery across web, mobile, IoT, and any other platform with flexible content modeling.',
    image: '/assets/img/case-studies/case-studies1.png',
    link: '/portfolio/headless-cms'
  },
  {
    title: 'Portfolio Builder Platform',
    description: 'SaaS platform enabling creatives to build and customize professional portfolio websites without coding knowledge.',
    image: '/assets/img/case-studies/case-studies2.png',
    link: '/portfolio/portfolio-builder'
  },
  {
    title: 'Multi-Vendor Marketplace',
    description: 'Complete marketplace platform with vendor management, logistics integration, split payments, and comprehensive analytics.',
    image: '/assets/img/case-studies/case-studies3.png',
    link: '/portfolio/multi-vendor-marketplace'
  },
  {
    title: 'MERN SaaS Platform',
    description: 'Enterprise SaaS platform with multi-tenancy, subscription billing, API integrations, and white-label capabilities.',
    image: '/assets/img/case-studies/case-studies5.png',
    link: '/portfolio/mern-saas'
  },
  {
    title: 'React Dashboard Application',
    description: 'Admin dashboard with real-time data visualization, advanced reporting, and business intelligence features.',
    image: '/assets/img/case-studies/case-studies6.png',
    link: '/portfolio/react-dashboard'
  },
  {
    title: 'Enterprise Workflow Automation',
    description: 'Complex business process automation connecting CRM, ERP, and 50+ business tools with custom integrations.',
    image: '/assets/img/case-studies/case-studies7.png',
    link: '/portfolio/enterprise-automation'
  },
  {
    title: 'AI Content Platform',
    description: 'AI-powered content generation and optimization platform for automated marketing campaigns and SEO.',
    image: '/assets/img/case-studies/case-studies8.png',
    link: '/portfolio/ai-content-platform'
  }
];

export default Portfolio;

