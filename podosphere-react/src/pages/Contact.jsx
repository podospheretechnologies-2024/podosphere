import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    msg_subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone_number: '',
      msg_subject: '',
      message: ''
    });
  };

  useEffect(() => {
    // Initialize animations and plugins
    if (window.WOW) {
      new window.WOW().init();
    }

    // Navbar scroll effect logic copied from Home.js
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-area');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize Owl Carousel (for consistency and if a slider is added later)
    if (window.$ && window.$.fn.owlCarousel) {
      // General Carousel Init (can be adapted if specific sliders are added)
      window.$('.brand-slider').owlCarousel({
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
          1000: { items: 6 }
        }
      });
    }

    // Initialize Magnific Popup (for consistency, if popups are used)
    if (window.$ && window.$.fn.magnificPopup) {
      window.$('.popup-btn').magnificPopup({
        type: 'iframe'
      });
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        /* --- CONTACT SPECIFIC STYLES (ENHANCED) ------------------------------ */
        /* ---------------------------------------------------------------------- */

                .page-title-area {
          background: var(--bg-white) !important;
          padding: 60px 0 80px !important;
          margin-top: 70px !important; /* Large top margin to ensure separation */
          margin-bottom: 0 !important; /* Added for proper section separation */
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
          background: rgba(249, 115, 22, 0.1);
          color: var(--primary-orange);
          font-size: 1em;
          border-radius: 20px;
          margin: 0 5px;
          border: 1px solid rgba(249, 115, 22, 0.3);
          transition: all 0.3s ease;
          animation: bounceIn 1s ease-out 0.8s both;
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

        /* Contact Cards Area - Enhanced */
        .contact-card-area {
          padding: 80px 0;
          background-color: var(--bg-light);
        }

        .theme-dark .contact-card-area {
          background-color: var(--bg-dark);
        }

        .contact-card {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out;
          position: relative;
          overflow: hidden;
        }

        .theme-dark .contact-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-dark);
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.1), transparent);
          transition: left 0.6s;
        }

        .contact-card:hover::before {
          left: 100%;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-orange);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .theme-dark .contact-card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }

        .contact-card i {
          font-size: 3rem;
          color: var(--primary-orange);
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .contact-card:hover i {
          transform: scale(1.1) rotate(5deg);
        }

        .contact-card h3 {
          color: var(--text-black);
          font-size: 1.4rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .contact-card p {
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .contact-card-btn {
          color: var(--primary-orange);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .contact-card-btn:hover {
          color: var(--secondary-orange);
          transform: translateX(5px);
        }

        /* Contact Form Section - Enhanced */
        .contact-section {
          padding: 80px 0;
          background-color: var(--bg-white);
        }

        .theme-dark .contact-section {
          background-color: var(--bg-dark);
        }

        .contact-img img {
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .contact-img:hover img {
          transform: scale(1.02) rotate(1deg);
        }

        .contact-wrap {
          animation: fadeInRight 0.8s ease-out;
        }

        .section-title h2 {
          color: var(--text-black);
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .section-title p {
          color: var(--text-gray);
          font-size: 1.1rem;
        }

        .form-group {
          position: relative;
          margin-bottom: 25px;
        }

        .form-group i {
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          color: var(--primary-orange);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .form-control {
          padding: 15px 15px 15px 50px;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          background: var(--bg-white);
          color: var(--text-black);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .theme-dark .form-control {
          background: var(--bg-dark-card);
          border: 2px solid var(--border-dark);
          color: var(--text-black);
        }

        .form-control:focus {
          border-color: var(--primary-orange);
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .form-control:focus + i {
          color: var(--secondary-orange);
          transform: translateY(-50%) scale(1.1);
        }

        .form-group textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }

        /* Map Area - Enhanced */
        .contact-map-area {
          background-color: var(--bg-light);
          padding: 0;
        }

        .theme-dark .contact-map-area {
          background-color: var(--bg-dark);
        }

        .contact-map-area iframe {
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .contact-map-area:hover iframe {
          transform: scale(1.01);
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

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth !important;
        }
      `}</style>

      {/* Page Title Area - Enhanced Hero Section */}
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
              Contact Us
            </span>
            <h1 className="h2-color" style={{ color: "var(--text-black)" }}>
              Get In{" "}
              <span style={{ color: "var(--primary-orange)" }}>Touch</span> With
              Us
            </h1>
            <p style={{ color: "var(--text-gray)" }}>
              Ready to start your next project? Let's discuss how we can help
              transform your ideas into reality.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i>{" "}
                <span style={{ color: "var(--text-black)" }}>
                  Quick Response
                </span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i>{" "}
                <span style={{ color: "var(--text-black)" }}>
                  Professional Service
                </span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-zap"></i>{" "}
                <span style={{ color: "var(--text-black)" }}>
                  Expert Consultation
                </span>
              </span>
            </div>
            <div>
              <a
                href="mailto:info@podospheretechnologies.com"
                className="default-btn"
                style={{ marginRight: "15px" }}
              >
                <span style={{ color: "var(--text-white)" }}>Email Us</span>{" "}
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="tel:+918595611983"
                className="default-btn"
                style={{
                  background: "var(--text-black)",
                  color: "var(--text-white)",
                }}
              >
                <span style={{ color: "var(--text-white)" }}>Call Now</span>{" "}
                <i className="bx bx-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards Area - Enhanced */}
      <div className="contact-card-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card" style={{ animationDelay: "0.1s" }}>
                <i className="flaticon-planet-earth"></i>
                <h3>Office Location</h3>
                <p>1st Floor, Amrapali Circle, Vaishali, Jaipur</p>
                <a
                  href="https://www.google.com/maps/place/1st+Floor,+Amrapali+Circle,+Vaishali,+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-btn"
                >
                  Direction
                  <i className="bx bx-plus plus-btn"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-card" style={{ animationDelay: "0.2s" }}>
                <i className="flaticon-email"></i>
                <h3>Contact</h3>
                <p>info@podospheretechnologies.com</p>
                <p>Mobile: +91 8595611983</p>
                <a
                  href="mailto:info@podospheretechnologies.com"
                  className="contact-card-btn"
                >
                  Email Us
                  <i className="bx bx-plus plus-btn"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="contact-card" style={{ animationDelay: "0.3s" }}>
                <i className="flaticon-clock"></i>
                <h3>Hours of Operation</h3>
                <p>Monday - Friday: 09:00 - 18:00</p>
                <p>Saturday: Closed</p>
                <a href="#" className="contact-card-btn">
                  Support
                  <i className="bx bx-plus plus-btn"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section - Enhanced */}
      <div className="contact-section pt-100 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-img">
                <img src="/assets/img/contact-img.png" alt="Contact" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-wrap">
                <div className="contact-form">
                  <div className="section-title">
                    <span className="sp-before sp-after">Contact</span>
                    <h2>Send Us Message</h2>
                    <p>
                      Have any questions? Let's start a conversation — we'll
                      respond within one business day.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <i className="bx bx-user"></i>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                            placeholder="Your Name*"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <i className="bx bx-envelope"></i>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                            placeholder="E-mail*"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <i className="bx bx-phone"></i>
                          <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                            className="form-control"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <i className="bx bx-file"></i>
                          <input
                            type="text"
                            name="msg_subject"
                            value={formData.msg_subject}
                            onChange={handleChange}
                            className="form-control"
                            required
                            placeholder="Your Subject"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <i className="bx bx-message-detail"></i>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control"
                            cols="30"
                            rows="8"
                            required
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button
                          type="submit"
                          className="default-btn border-radius"
                        >
                          Send Message
                          <i className="bx bx-plus"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Map Area - Enhanced */}
      <div className="contact-map-area">
        <div className="container-fluid m-0 p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.210936934668!2d75.8037!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a5e7a5e5e5%3A0x5e5e5e5e5e5e5e5e!2sVaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;