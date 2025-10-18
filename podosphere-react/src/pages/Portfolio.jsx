import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  useEffect(() => {
    // Initialize animations and plugins
    if (window.WOW) {
      new window.WOW().init();
    }

    // Navbar scroll effect logic copied from Home.js
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

    // Initialize Magnific Popup for image gallery
    if (window.$ && window.$.fn.magnificPopup) {
      window.$(".popup-link").magnificPopup({
        type: "image",
        gallery: { enabled: true },
      });
    }

    // Initialize Owl Carousel (for consistency and if a slider is added later)
    if (window.$ && window.$.fn.owlCarousel) {
      // General Carousel Init (can be adapted if specific sliders are added)
      window.$(".brand-slider").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 6 },
        },
      });
    }

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ---------------------------------------------------------------------- */
        /* --- GLOBAL THEME VARIABLES AND TYPOGRAPHY (COPIED FROM HOME.JS) --- */
        /* ---------------------------------------------------------------------- */
        /* Color Scheme Variables - Theme Aware */
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
          padding: 0 !important; /* <-- Changed from 8px 0 to 0 */
          margin: 0 !important; /* <-- Added to remove margins */
          min-height: auto !important; /* <-- Added to prevent default height */
        }

        /* Dark Mode Navbar */
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

        /* Dark mode link colors */
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

        .sp-after, .sp-before {
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
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
          font-family: 'Livvic', sans-serif !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
        }

        .default-btn:hover {
          background-color: var(--secondary-orange) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 16px rgba(249, 115, 22, 0.3) !important;
        }

        .container-max-2 {
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ---------------------------------------------------------------------- */
        /* --- PORTFOLIO SPECIFIC STYLES (RETAINED & ENHANCED) ----------------- */
        /* ---------------------------------------------------------------------- */
        .page-title-area {
          background: var(--bg-white) !important;
          padding: 60px 0 80px !important;
          margin-top: 70px !important; /* Large top margin to ensure separation */
          margin-bottom: 0 !important; /* Added for proper section separation */
        }

        .page-title-content h1 {
          font-size: 3.2rem;
          margin-bottom: 15px;
          animation: fadeInUp 0.8s ease-out;
        }

        .page-title-content p {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.15rem;
          color: var(--text-gray);
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-badges {
          margin-top: 25px;
          margin-bottom: 25px;
        }

        .hero-badge {
          padding: 7px 18px;
          background: rgba(249, 115, 22, 0.1);
          color: var(--primary-orange);
          font-size: 1em;
          border-radius: 20px;
          margin: 0 5px;
          border: 1px solid rgba(249, 115, 22, 0.3);
          transition: all 0.3s ease;
          animation: bounceIn 1s ease-out;
        }

        .hero-badge:nth-child(1) { animation-delay: 0.9s; }
        .hero-badge:nth-child(2) { animation-delay: 1s; }
        .hero-badge:nth-child(3) { animation-delay: 1.1s; }

        .hero-badge:hover {
          transform: translateY(-3px) scale(1.05);
          background: rgba(249, 115, 22, 0.2);
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
        }

        .page-title-content .default-btn {
          margin-top: 30px !important;
          animation: fadeInUp 0.8s ease-out 1.2s both;
        }

        .portfolio-grid {
          padding: 80px 0;
          background-color: var(--bg-light);
        }

        .portfolio-grid .card {
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(16, 24, 40, 0.04);
          transition: all 0.3s ease;
          background: var(--bg-white);
        }

        .theme-dark .portfolio-grid .card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-dark);
        }

        .portfolio-grid .card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-orange);
          box-shadow: 0 12px 30px rgba(16, 24, 40, 0.1);
        }

        .theme-dark .portfolio-grid .card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
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
          color: var(--text-black);
        }

        .portfolio-meta {
          font-size: 1rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Animation keyframes */
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

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth !important;
        }
      `}</style>

      {/* Page Title Area - Theme Aware Hero Section */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span
              className="sp-after"
              style={{
                color: "var(--primary-orange)",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Our Portfolio
            </span>
            <h1 className="h2-color" style={{ color: "var(--text-black)" }}>
              Transforming Ideas into{" "}
              <span style={{ color: "var(--primary-orange)" }}>
                Digital Reality
              </span>
            </h1>
            <p style={{ color: "var(--text-gray)" }}>
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
                style={{ marginRight: "15px" }}
              >
                Get In Touch <i className="bx bx-plus"></i>
              </Link>
              <Link
                to="/solution"
                className="default-btn"
                style={{
                  background: "var(--text-black)",
                  color: "var(--text-white)",
                }}
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
                  <a href={item.image} className="popup-link">
                    <img src={item.image} alt={item.title} />
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
    title: "Meditate & Wellness App",
    description:
      "An app developed for a client to relieve stress, allowing users to listen to audio tailored for desired mental states like happiness, relaxation, or focus.",
    image: "/assets/img/case-studies/case-studies1.png",
    link: "/portfolio/meditation-wellness",
  },
  {
    title: "Social Media App",
    description:
      "The DigiCupid social networking app enables secure sharing of audio, video, and images, with features like following, private chat, and group creation.",
    image: "/assets/img/case-studies/case-studies2.png",
    link: "/portfolio/social-media",
  },
  {
    title: "Car Bike Booking App",
    description:
      "The RideX booking application, featuring services for taxis, bikes, pickups, and deliveries, plus supplemental features like food delivery and transit.",
    image: "/assets/img/case-studies/case-studies3.png",
    link: "/portfolio/ride-booking",
  },
  {
    title: "E-learning App",
    description:
      "An innovative e-learning platform providing an interactive and enjoyable learning experience through video conferencing for users to study from home.",
    image: "/assets/img/case-studies/case-studies4.png",
    link: "/portfolio/elearning",
  },
  {
    title: "Event Booking App",
    description:
      "An app for booking celebrities and comedians for private parties, concerts, and events. Users can search by date, region, view reviews, and rate events.",
    image: "/assets/img/case-studies/case-studies5.png",
    link: "/portfolio/event-booking",
  },
  {
    title: "On Demand Home Service Booking App",
    description:
      "The ultimate one-stop solution for conveniently scheduling all home services, allowing users to request services, make secure payments, and receive real-time notifications.",
    image: "/assets/img/case-studies/case-studies6.png",
    link: "/portfolio/home-service",
  },
  {
    title: "Video Consultation App",
    description:
      "An app enabling professional video consultations globally, featuring appointment booking and secure payment processing for users to connect with experts.",
    image: "/assets/img/case-studies/case-studies7.png",
    link: "/portfolio/video-consultation",
  },
  {
    title: "Video KYC App",
    description:
      "Developed for a top bank, this app allows users to complete their KYC remotely via video conference, eliminating the need to visit a physical location.",
    image: "/assets/img/case-studies/case-studies8.png",
    link: "/portfolio/video-kyc",
  },
  {
    title: "Fitness App",
    description:
      "A comprehensive wellness app that seamlessly tracks physical activity and crucial health indicators, promoting a healthy and balanced lifestyle.",
    image: "/assets/img/case-studies/case-studies9.jpg",
    link: "/portfolio/fitness",
  },
  {
    title: "Learning Management System",
    description:
      "A comprehensive LMS platform with course management, student tracking, assignment submission, grade management, and interactive learning modules for educational institutions.",
    image: "/assets/img/case-studies/case-studies4.png",
    link: "/portfolio/lms",
  },
  {
    title: "Content Management System",
    description:
      "A powerful CMS solution enabling easy content creation, management, and publishing with role-based access control, media library, and SEO optimization features.",
    image: "/assets/img/case-studies/case-studies1.png",
    link: "/portfolio/cms",
  },
  {
    title: "Portfolio Website",
    description:
      "A stunning portfolio website showcasing creative work with dynamic galleries, project case studies, client testimonials, and an integrated contact system.",
    image: "/assets/img/case-studies/case-studies2.png",
    link: "/portfolio/portfolio-site",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with product catalog, shopping cart, payment gateway integration, order management, and customer analytics dashboard.",
    image: "/assets/img/case-studies/case-studies3.png",
    link: "/portfolio/ecommerce",
  },
  {
    title: "MERN Stack Application",
    description:
      "A robust full-stack web application built with MongoDB, Express.js, React, and Node.js, featuring real-time updates, RESTful APIs, and scalable architecture.",
    image: "/assets/img/case-studies/case-studies5.png",
    link: "/portfolio/mern-stack",
  },
  {
    title: "React Web Application",
    description:
      "A modern, responsive single-page application built with React, featuring component-based architecture, state management with Redux, and optimized performance.",
    image: "/assets/img/case-studies/case-studies6.png",
    link: "/portfolio/react-app",
  },
  {
    title: "N8N Workflow Automation",
    description:
      "Custom workflow automation solution using N8N for seamless integration of business processes, API connections, data synchronization, and automated task execution.",
    image: "/assets/img/case-studies/case-studies7.png",
    link: "/portfolio/n8n-automation",
  },
  {
    title: "AI-Powered Website",
    description:
      "An intelligent website leveraging artificial intelligence for personalized user experiences, chatbot integration, predictive analytics, and machine learning capabilities.",
    image: "/assets/img/case-studies/case-studies8.png",
    link: "/portfolio/ai-website",
  },
  {
    title: "LMS Pro - Corporate Training",
    description:
      "Enterprise-level Learning Management System with advanced features for corporate training, certifications, and skill development programs.",
    image: "/assets/img/case-studies/case-studies4.png",
    link: "/portfolio/lms-pro",
  },
  {
    title: "Headless CMS Platform",
    description:
      "API-first headless CMS providing content delivery across web, mobile, IoT, and any other platform with flexible content modeling.",
    image: "/assets/img/case-studies/case-studies1.png",
    link: "/portfolio/headless-cms",
  },
  {
    title: "Portfolio Builder Platform",
    description:
      "SaaS platform enabling creatives to build and customize professional portfolio websites without coding knowledge.",
    image: "/assets/img/case-studies/case-studies2.png",
    link: "/portfolio/portfolio-builder",
  },
  {
    title: "Multi-Vendor Marketplace",
    description:
      "Complete marketplace platform with vendor management, logistics integration, split payments, and comprehensive analytics.",
    image: "/assets/img/case-studies/case-studies3.png",
    link: "/portfolio/multi-vendor-marketplace",
  },
  {
    title: "MERN SaaS Platform",
    description:
      "Enterprise SaaS platform with multi-tenancy, subscription billing, API integrations, and white-label capabilities.",
    image: "/assets/img/case-studies/case-studies5.png",
    link: "/portfolio/mern-saas",
  },
  {
    title: "React Dashboard Application",
    description:
      "Admin dashboard with real-time data visualization, advanced reporting, and business intelligence features.",
    image: "/assets/img/case-studies/case-studies6.png",
    link: "/portfolio/react-dashboard",
  },
  {
    title: "Enterprise Workflow Automation",
    description:
      "Complex business process automation connecting CRM, ERP, and 50+ business tools with custom integrations.",
    image: "/assets/img/case-studies/case-studies7.png",
    link: "/portfolio/enterprise-automation",
  },
  {
    title: "AI Content Platform",
    description:
      "AI-powered content generation and optimization platform for automated marketing campaigns and SEO.",
    image: "/assets/img/case-studies/case-studies8.png",
    link: "/portfolio/ai-content-platform",
  },
];

export default Portfolio;
