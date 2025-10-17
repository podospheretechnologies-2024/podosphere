import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//
const Home = () => {
  useEffect(() => {
    // Initialize animations and plugins
    if (window.WOW) {
      new window.WOW().init();
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-area');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize Owl Carousel for brand slider
    if (window.$ && window.$.fn.owlCarousel) {
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

      // Initialize Team Slider
      window.$('.team-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 4 }
        }
      });
    }

    // Initialize Magnific Popup for video
    if (window.$ && window.$.fn.magnificPopup) {
      window.$('.popup-btn').magnificPopup({
        type: 'iframe'
      });
    }
  }, []);

  return (
    <>
      <style>{`
        /* Color Scheme Variables - Theme Aware */
        :root {
          --primary-orange: #f97316;
          --secondary-orange: #ff6a00;
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
          padding: 8px 0 !important; /* Reduced navbar height */
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

        .navbar-brand {
          transition: all 0.3s ease !important;
          padding: 8px 0 !important;
        }

        .navbar-brand:hover {
          transform: scale(1.05) !important;
        }

        .navbar-nav .nav-link {
          font-family: 'Livvic', sans-serif !important;
          font-weight: 600 !important;
          font-size: 1rem !important; /* Reduced font size */
          color: var(--text-black) !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          position: relative !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          padding: 12px 18px !important; /* Reduced padding */
          margin: 0 3px !important;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: #f97316 !important;
          transform: translateY(-2px) !important;
        }

        /* Dark mode link colors */
        .theme-dark .navbar-nav .nav-link {
          color: #f1f5f9 !important;
        }

        .theme-dark .navbar-nav .nav-link:hover,
        .theme-dark .navbar-nav .nav-link.active {
          color: #f97316 !important;
        }

        .navbar-nav .nav-link::after {
          content: '' !important;
          position: absolute !important;
          bottom: 8px !important; /* Adjusted for reduced height */
          left: 50% !important;
          width: 0 !important;
          height: 2px !important;
          background: linear-gradient(90deg, #f97316, #2563eb) !important;
          transition: all 0.3s ease !important;
          transform: translateX(-50%) !important;
        }

        .navbar-nav .nav-link:hover::after,
        .navbar-nav .nav-link.active::after {
          width: 80% !important;
        }

        .dropdown-menu {
          border: none !important;
          border-top: 3px solid #f97316 !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          background: var(--bg-white) !important;
          border-radius: 8px !important;
          padding: 10px 0 !important;
          margin-top: 8px !important;
        }

        .theme-dark .dropdown-menu {
          background: var(--bg-dark) !important;
          border-top: 3px solid #f97316 !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
        }

        .dropdown-menu .nav-link {
          color: var(--text-black) !important;
          padding: 10px 20px !important; /* Reduced padding */
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
          text-transform: none !important;
          font-size: 0.95rem !important;
          letter-spacing: 0.3px !important;
        }

        .theme-dark .dropdown-menu .nav-link {
          color: #f1f5f9 !important;
        }

        .dropdown-menu .nav-link:hover {
          background: linear-gradient(135deg, #f97316, #2563eb) !important;
          color: #ffffff !important;
          padding-left: 25px !important;
          transform: translateX(5px) !important;
        }

        .nav-menu-btn {
          background: linear-gradient(135deg, #f97316, #2563eb) !important;
          color: #ffffff !important;
          padding: 10px 20px !important;
          border-radius: 25px !important;
          font-weight: 600 !important;
          font-size: 0.9rem !important;
          letter-spacing: 0.5px !important;
          transition: all 0.3s ease !important;
          text-transform: uppercase !important;
          box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3) !important;
        }

        .nav-menu-btn:hover {
          transform: translateY(-2px) scale(1.05) !important;
          box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4) !important;
          background: linear-gradient(135deg, #2563eb, #f97316) !important;
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

        .btn {
          font-family: 'Livvic', sans-serif !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          transition: all 0.3s ease !important;
          border-radius: 8px !important;
        }

        .section-title h2 {
          font-size: 2.8rem !important;
          font-weight: 800 !important;
          background: linear-gradient(135deg, var(--text-black), #2563eb) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        .theme-dark .section-title h2 {
          background: linear-gradient(135deg, #f1f5f9, #2563eb) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        .sp-after {
          background: linear-gradient(135deg, #f97316, #2563eb) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          font-weight: 700 !important;
          font-size: 1.1rem !important;
        }

        /* Enhanced Card Animations - Theme Aware */
        .service-card,
        .about-card,
        .value-card,
        .why-us-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          transform-origin: center !important;
          background: var(--bg-white) !important;
          border: 1px solid var(--border-color) !important;
        }

        .theme-dark .service-card,
        .theme-dark .about-card,
        .theme-dark .value-card,
        .theme-dark .why-us-card {
          background: var(--bg-dark-card) !important;
          border: 1px solid var(--border-dark) !important;
        }

        .service-card:hover,
        .about-card:hover,
        .value-card:hover,
        .why-us-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
          border-color: #f97316 !important;
        }

        .theme-dark .service-card:hover,
        .theme-dark .about-card:hover,
        .theme-dark .value-card:hover,
        .theme-dark .why-us-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth !important;
        }

        /* Loading animation for elements */
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

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out !important;
        }

        /* Theme-Aware AI Heading */
        .ai-heading {
          text-align: left;
          margin: 0;
          padding: 0;
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.3;
        }
        .ai-heading .main-text {
          color: var(--text-black);
          font-weight: 600;
        }
        .ai-heading .emphasis {
          color: var(--primary-orange);
          font-weight: 700;
          font-style: italic;
        }
        .ai-heading .ai-solutions {
          color: #2563eb;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }
        .container-max {
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }
        .container-max-2 {
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>

      {/* Banner Area */}
      <div className="banner-area">
        <div className="container-fluid">
          <div className="container-max-2">
            <div className="col-lg-7">
              <div className="banner-content">
                <div className="title">
                  <i className="flaticon-idea"></i>
                  <span>Podosphere Technologies</span>
                </div>

                <h1 className="hero-title ai-heading">
                  <span className="main-text">Empowering Your Business</span> with{' '}
                  <span className="emphasis">Cutting-Edge</span>{' '}
                  <span className="ai-solutions">AI Solutions</span>
                </h1>

                <div className="banner-btn">
                  <Link to="/contact" className="get-btn enhanced-btn">
                    Get In Touch
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                  <Link to="/portfolio" className="call-btn enhanced-btn">
                    <i className="bx bx-aperture"></i>
                    Success Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-right">
          <img src="/assets/img/home1/home-one-shape.png" alt="Shape" />
        </div>
        <div className="banner-img">
          <img src="/assets/img/home1/home1.png" alt="Banner" />
        </div>
        <div className="banner-shape">
          <div className="shape1">
            <img src="/assets/img/home1/home-one-shape3.png" alt="Shape" />
          </div>
          <div className="shape2">
            <img src="/assets/img/home1/home-one-shape1.png" alt="Shape" />
          </div>
          <div className="shape3">
            <img src="/assets/img/home1/home-one-shape2.png" alt="Shape" />
          </div>
          <div className="shape4">
            <img src="/assets/img/home1/home-one-shape4.png" alt="Shape" />
          </div>
          <div className="shape5">
            <img src="/assets/img/home1/home-one-shape5.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Banner Area End */}

      {/* Brand Area */}
      <div className="brand-area">
        <div className="container-fluid">
          <div className="brand-max">
            <div className="brand-title">
              <h3>Over <a href="#">150.000</a> supporter all over the world</h3>
            </div>
            <div className="brand-slider owl-carousel owl-theme">
              {brands.map((brand, index) => (
                <div className="brand-item" key={index}>
                  <a href="#">
                    <img src={brand.logo} alt={brand.name} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Brand Area End */}

      {/* About Area */}
      <div className="about-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="container-max">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="/assets/img/about/about-img1.png" alt="About" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sp-after">About Us</span>
                    <h2 className="h2-color">
                      Empowering Your Business <b>with AI-Driven Solutions</b>
                    </h2>
                  </div>
                  <h3>
                    We build intelligent, scalable ecosystems that drive
                    efficiency, automation, and growth.
                  </h3>
                  <p>
                    At Podosphere Technologies, we deliver innovative AI-driven
                    web and app solutions, combining advanced technology with
                    intuitive experiences to provide seamless performance tailored
                    to your unique needs. Our platforms focus on advanced
                    automation, seamless integration, and future-ready
                    intelligence to transform operations and decision-making
                    across industries.
                  </p>

                  <div className="about-btn">
                    <Link to="/portfolio" className="default-btn">
                      Our Portfolio
                      <i className="bx bx-plus"></i>
                    </Link>

                    <a
                      href="https://www.youtube.com/watch?v=07d2dXHYb94"
                      className="play-btn popup-btn"
                    >
                      <i className="flaticon-play-button"></i>
                      <span> Watch 1min <br />How we work</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape">
          <div className="shape-1">
            <img src="/assets/img/about/about-shape1.png" alt="Shape" />
          </div>
          <div className="shape-2">
            <img src="/assets/img/shape/shape1.png" alt="Shape" />
          </div>
          <div className="shape-3">
            <img src="/assets/img/shape/shape2.png" alt="Shape" />
          </div>
          <div className="shape-4">
            <img src="/assets/img/shape/shape3.png" alt="Shape" />
          </div>
          <div className="shape-5">
            <img src="/assets/img/shape/shape4.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* About Area End */}

      {/* Counter Area */}
      <div className="counter-area">
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="single-counter">
                  <i className={counter.icon}></i>
                  <div className="content">
                    <h3>{counter.count}</h3>
                    <p>{counter.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Counter Area End */}

      {/* Progress Area */}
      <div className="progress-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-after">Real Progress</span>
            <h2 className="h2-color">
              Super Great Things From <b>Your Desire Wishes</b>
            </h2>
          </div>
          <div className="row pt-45">
            {progressData.map((item, index) => (
              <div className={`col-lg-4 col-sm-6 ${index === 2 ? 'offset-sm-3 offset-lg-0' : ''}`} key={index}>
                <div className={`progress-card pr-bg-color-${index + 1}`}>
                  <img src={item.icon} alt="Progress" />
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Progress Area End */}

      {/* Service Area */}
      <div className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sp-after">Services</span>
            <h2 className="h2-color">
              Transforming Ideas into <b>AI-Powered Solutions</b>
            </h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4">
              <div className="service-card-into">
                <div className="service-card">
                  <Link to="/service">
                    <i className="bx bx-brain" style={{ fontSize: '48px', color: '#2563eb' }}></i>
                  </Link>
                  <h3><Link to="/service">AI & ML</Link></h3>
                  <p>
                    Custom AI models, automation, and intelligent platforms built
                    for measurable impact.
                  </p>
                  <div className="service-card-shape">
                    <img src="/assets/img/service/service-shape.png" alt="Shape" />
                  </div>
                </div>
                <div className="service-dots">
                  <img src="/assets/img/service/dots.png" alt="Dots" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-card">
                <Link to="/service">
                  <i className="bx bx-code-alt" style={{ fontSize: '48px', color: '#2563eb' }}></i>
                </Link>
                <h3><Link to="/service">Web Design & Development</Link></h3>
                <p>
                  We deliver full-stack web development solutions, specializing in
                  custom websites, scalable e-commerce platforms, and robust,
                  user-friendly web applications designed for performance and
                  growth.
                </p>
                <div className="service-card-shape">
                  <img src="/assets/img/service/service-shape.png" alt="Shape" />
                </div>
              </div>

              <div className="service-card">
                <Link to="/service">
                  <i className="bx bx-grid-alt" style={{ fontSize: '48px', color: '#2563eb' }}></i>
                </Link>
                <h3><Link to="/service">CRM & ERP</Link></h3>
                <p>
                  Integrated CRM/ERP solutions that unify data, streamline
                  operations, and scale with you.
                </p>
                <div className="service-card-shape">
                  <img src="/assets/img/service/service-shape.png" alt="Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-card">
                <Link to="/service">
                  <i className="bx bx-mobile" style={{ fontSize: '48px', color: '#2563eb' }}></i>
                </Link>
                <h3><Link to="/service">App Development</Link></h3>
                <p>
                  Native and cross‑platform mobile apps with seamless performance
                  and integrations.
                </p>
                <div className="service-card-shape">
                  <img src="/assets/img/service/service-shape.png" alt="Shape" />
                </div>
              </div>

              <div className="service-card">
                <Link to="/service">
                  <i className="bx bx-cube" style={{ fontSize: '48px', color: '#2563eb' }}></i>
                </Link>
                <h3><Link to="/service">Blockchain & NFT</Link></h3>
                <p>
                  Decentralized apps, tokenization, and secure ledger solutions
                  for modern businesses.
                </p>
                <div className="service-card-shape">
                  <img src="/assets/img/service/service-shape.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-shape">
          <div className="service-bg">
            <img src="/assets/img/service/service-bg.png" alt="Background" />
          </div>
          <div className="shape1">
            <img src="/assets/img/shape/shape4.png" alt="Shape" />
          </div>
          <div className="shape2">
            <img src="/assets/img/shape/shape2.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Service Area End */}

      {/* Work Area */}
      <div className="work-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-after">Working Process</span>
            <h2 className="h2-color">Simple & Clean <b>Work Process</b></h2>
          </div>

          <div className="row pt-45">
            {workProcess.map((item, index) => (
              <div className={`col-lg-4 col-sm-6 ${index === 2 ? 'offset-sm-3 offset-lg-0' : ''}`} key={index}>
                <div className={`work-card ${index === 1 ? 'active' : ''}`}>
                  <h2>{item.number}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="work-shape">
          <img src="/assets/img/shape/work-shape.png" alt="Shape" />
        </div>
      </div>
      {/* Work Area End */}

      {/* Featured Leadership Section */}
      <div className="featured-leadership-area pt-100 pb-70" style={{ background: 'linear-gradient(180deg, var(--bg-light) 0%, var(--bg-white) 100%)' }}>
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sp-before sp-after">Leadership</span>
            <h2 className="h2-color2" style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '20px' }}>
              Meet Our Visionary Leaders
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Driving innovation and excellence with strategic vision and technical expertise
            </p>
          </div>

          <div className="row align-items-stretch">
            {/* Sushant Singh - Founder & CEO */}
            <div className="col-lg-6 mb-4">
              <div
                className="leader-card"
                style={{
                  background: 'linear-gradient(145deg, var(--bg-white), var(--bg-light))',
                  borderRadius: '30px',
                  padding: '50px',
                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.2)',
                  border: '3px solid rgba(102, 126, 234, 0.15)',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(102, 126, 234, 0.35)';
                  e.currentTarget.style.borderColor = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.15)';
                }}
              >
                {/* Animated Gradient Border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea)',
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 4s ease infinite'
                }} />

                {/* CEO Badge */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  background: 'linear-gradient(145deg, #f59e0b, #ea580c)',
                  color: '#fff',
                  padding: '10px 22px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '800',
                  boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
                  letterSpacing: '0.5px'
                }}>
                  👑 FOUNDER & CEO
                </div>

                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Image Container with Animation */}
                    <div style={{
                      width: '220px',
                      height: '220px',
                      margin: '0 auto 20px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '6px solid',
                      borderImage: 'linear-gradient(135deg, #667eea, #764ba2) 1',

                      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.5)',
                      position: 'relative',
                      animation: 'pulse-glow 3s ease-in-out infinite'
                    }}>
                      <img
                        src="/assets/img/team/FOUNDER-CEO.webp"
                        alt="Sushant Singh"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-7">
                    <h3 style={{
                      fontSize: '2.2rem',
                      fontWeight: '900',
                      marginBottom: '10px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      SUSHANT SINGH
                    </h3>
                    <span style={{
                      fontSize: '1.2rem',
                      color: 'var(--primary-orange)',
                      fontWeight: '700',
                      display: 'block',
                      marginBottom: '20px'
                    }}>
                      Founder & CEO
                    </span>
                    <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: '1.8', marginBottom: '15px' }}>
                      With over 15 years of experience in the technology industry, Sushant leads Podosphere Technologies
                      with a vision to transform businesses through innovative digital solutions. His strategic leadership
                      and passion for excellence have been instrumental in establishing our company as a trusted partner
                      for clients worldwide.
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-light-gray)', lineHeight: '1.7', fontStyle: 'italic' }}>
                      Sushant is passionate about fostering innovation and building strong client relationships that drive mutual success.
                    </p>

                    <div style={{ marginTop: '25px' }}>
                      <a href="#" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(145deg, #667eea, #764ba2)',
                        borderRadius: '50%',
                        color: '#fff',
                        fontSize: '1.3rem',
                        marginRight: '12px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                      }}>
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a href="#" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(145deg, #667eea, #764ba2)',
                        borderRadius: '50%',
                        color: '#fff',
                        fontSize: '1.3rem',
                        marginRight: '12px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                      }}>
                        <i className="bx bxl-twitter"></i>
                      </a>
                      <a href="mailto:sushant@podospheretechnologies.com" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(145deg, #667eea, #764ba2)',
                        borderRadius: '50%',
                        color: '#fff',
                        fontSize: '1.3rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                      }}>
                        <i className="bx bx-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Surbhi Trivedi - CTO */}
            <div className="col-lg-6 mb-4">
              <div
                className="leader-card"
                style={{
                  background: 'linear-gradient(145deg, var(--bg-white), var(--bg-light))',
                  borderRadius: '30px',
                  padding: '50px',
                  boxShadow: '0 20px 60px rgba(16, 185, 129, 0.2)',
                  border: '3px solid rgba(16, 185, 129, 0.15)',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(16, 185, 129, 0.35)';
                  e.currentTarget.style.borderColor = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(16, 185, 129, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.15)';
                }}
              >
                {/* Animated Gradient Border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: 'linear-gradient(90deg, #10b981, #059669, #34d399, #10b981)',
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 4s ease infinite'
                }} />

                {/* CTO Badge */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  background: 'linear-gradient(145deg, #ec4899, #db2777)',
                  color: '#fff',
                  padding: '10px 22px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '800',
                  boxShadow: '0 8px 25px rgba(236, 72, 153, 0.4)',
                  letterSpacing: '0.5px'
                }}>
                  ⚡ CTO
                </div>

                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Image Container with Animation */}
                    <div style={{
                      width: '220px',
                      height: '220px',
                      margin: '0 auto 20px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '6px solid #10b981',
                      boxShadow: '0 20px 60px rgba(16, 185, 129, 0.5)',
                      position: 'relative',
                      animation: 'pulse-glow 3s ease-in-out infinite'
                    }}>
                      <img
                        src="/assets/img/team/CTO.webp"
                        alt="Surbhi Trivedi"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-7">
                    <h3 style={{
                      fontSize: '2.2rem',
                      fontWeight: '900',
                      marginBottom: '10px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      SURBHI TRIVEDI
                    </h3>
                    <span style={{
                      fontSize: '1.2rem',
                      color: '#ec4899',
                      fontWeight: '700',
                      display: 'block',
                      marginBottom: '20px'
                    }}>
                      Chief Technology Officer
                    </span>
                    <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: '1.8', marginBottom: '15px' }}>
                      Surbhi brings extensive technical expertise and innovation to Podosphere Technologies.
                      With 12 years of experience in software architecture, she oversees our technical strategy
                      and ensures we stay at the forefront of emerging technologies.
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-light-gray)', lineHeight: '1.7', fontStyle: 'italic' }}>
                      Her expertise spans across cloud computing, artificial intelligence, and scalable system design.
                      Surbhi is committed to building robust, secure, and efficient solutions that exceed client
                      expectations and drive digital transformation.
                    </p>

                    <div style={{ marginTop: '25px' }}>
                      <a href="#" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(145deg, #10b981, #059669)',
                        borderRadius: '50%',
                        color: '#fff',
                        fontSize: '1.3rem',
                        marginRight: '12px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                      }}>
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a href="#" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(145deg, #10b981, #059669)',
                        borderRadius: '50%',
                        color: '#fff',
                        fontSize: '1.3rem',
                        marginRight: '12px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                      }}>
                        <i className="bx bxl-twitter"></i>
                      </a>
                      <a href="mailto:surbhi@podospheretechnologies.com" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(145deg, #10b981, #059669)',
                        borderRadius: '50%',
                        color: '#fff',
                        fontSize: '1.3rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                      }}>
                        <i className="bx bx-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Area */}
      <div className="team-area-two pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Team</span>
            <h2 className="h2-color2">
              Meet Our Dedicated Team to Grow Your Business
            </h2>
          </div>

          <div className="team-slider-two owl-carousel owl-theme">
            {teamMembers.map((member, index) => (
              <div className={`team-card ${index === 0 ? 'active' : ''} ${index % 2 !== 0 ? 'team-rotated-2' : ''}`} key={index}>
                <a href="#">
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '350px',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      borderRadius: '15px'
                    }}
                  />
                </a>
                <div className="content">
                  <h3><Link to="/team">{member.name}</Link></h3>
                  <span>{member.position}</span>
                  <ul className="social-link">
                    <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-pinterest-alt"></i></a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-two-shape">
          <div className="shape1">
            <img src="/assets/img/shape/shape13.png" alt="Shape" />
          </div>
          <div className="shape2">
            <img src="/assets/img/shape/shape11.png" alt="Shape" />
          </div>
          <div className="shape3">
            <img src="/assets/img/shape/shape10.png" alt="Shape" />
          </div>
          <div className="shape4">
            <img src="/assets/img/shape/shape9.png" alt="Shape" />
          </div>
          <div className="shape5">
            <img src="/assets/img/shape/shape12.png" alt="Shape" />
          </div>
          <div className="shape6">
            <img src="/assets/img/shape/shape7.png" alt="Shape" />
          </div>
          <div className="shape7">
            <img src="/assets/img/shape/shape14.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Team Area End */}
    </>
  );
};

// Data Arrays
const brands = [
  { name: 'IBM', logo: '/assets/img/brand/ibm.svg' },
  { name: 'Microsoft', logo: '/assets/img/brand/microsoft.webp' },
  { name: 'Google', logo: '/assets/img/brand/google.webp' },
  { name: 'Netflix', logo: '/assets/img/brand/netflix.png' },
  { name: 'Meta', logo: '/assets/img/brand/meta.svg' },
  { name: 'Atlassian', logo: '/assets/img/brand/atlassian.svg' },
  { name: 'Amazon', logo: '/assets/img/brand/amazon.svg' },
  { name: 'Uber', logo: '/assets/img/brand/uber.svg' },
];

const counters = [
  { icon: 'flaticon-confetti', count: '10 +', label: 'Years in business' },
  { icon: 'flaticon-project', count: '1500 +', label: 'Projects completed' },
  { icon: 'flaticon-customers', count: '1100 +', label: 'Happy Clients' },
  { icon: 'flaticon-financial-advisor', count: '70 +', label: 'Full-time Employees' }
];

const progressData = [
  { icon: '/assets/img/progress-icon/progress-icon1.png', value: '28,998', label: 'RANKING KEYWORDS' },
  { icon: '/assets/img/progress-icon/progress-icon2.png', value: '600%', label: 'ANNUAL ORGANIC TRAFFIC' },
  { icon: '/assets/img/progress-icon/progress-icon3.png', value: '50,234', label: 'RANKING KEYWORDS' }
];

const workProcess = [
  {
    number: '01',
    title: 'Onsite Optimization',
    description: 'We fine‑tune site structure, performance, accessibility, and technical SEO to create a fast, crawlable, and user‑friendly foundation.'
  },
  {
    number: '02',
    title: 'Keyword Research',
    description: 'We identify high‑intent, opportunity keywords using data‑driven analysis to inform content strategy and maximize qualified traffic.'
  },
  {
    number: '03',
    title: 'Link Building',
    description: 'We earn authoritative backlinks through outreach and partnerships, strengthening domain trust and improving rankings sustainably.'
  }
];

const teamMembers = [
  { name: 'AJAY JAIN', position: 'Team Lead, Website Development', image: '/assets/img/team/ajayjain.jpeg' },
  { name: 'RAHUL JANGID', position: 'Full Stack Developer', image: '/assets/img/team/team2.jpg' },
  { name: 'DEVENDRA SINGH GAHLOT', position: 'Graphic & Frontend Developer', image: '/assets/img/team/team4.jpg' },
  { name: 'SAMEER MAHESHWARI', position: 'Frontend Developer', image: '/assets/img/team/team5.jpg' },
  { name: 'JAY SHARMA', position: 'UI/UX Designer', image: '/assets/img/team/team6.jpg' },
  { name: 'YUVRAJ CHAUHAN', position: 'E-Commerce Manager', image: '/assets/img/team/team7.jpg' },
  { name: 'KULDEEP TANWAR', position: 'Video Editor', image: '/assets/img/team/team9.jpg' },
  { name: 'GAURAV SISODIA', position: '3D Generalist & TL of Design', image: '/assets/img/team/team10.jpg' },
  { name: 'TANU JANGID', position: 'Human Resource', image: '/assets/img/team/team11.jpg' },
  { name: 'SURAJ BAIRWA', position: 'Senior Graphic Designer', image: '/assets/img/team/team12.jpg' }
];

export default Home;