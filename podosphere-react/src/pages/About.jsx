import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

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

        /* Color Scheme Variables - Theme Aware */
        :root {
          --primary-orange: #f77f00;
          --secondary-orange: #ff6a00;
          --primary-blue: #2563eb;
          --secondary-blue: #1d4ed8;
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
        .default-btn[style*="background: #111"] {
          background: var(--text-black) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .default-btn[style*="background: #111"]:hover {
          background: #333 !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
        }

        /* Page Title Area - Theme Aware */
        .page-title-area {
          background: var(--bg-white);
          padding: 100px 0 80px;
          position: relative;
        }
        .page-title-content h1 {
          font-size: 3.2rem;
          margin-bottom: 15px;
          color: var(--text-black) !important;
        }
        .page-title-content p {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.15rem;
          color: var(--text-gray);
        }
        .hero-badges {
          margin-top: 25px;
          margin-bottom: 25px;
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
        }
        .hero-badge:hover {
          transform: translateY(-3px) scale(1.05);
          background: rgba(247, 127, 0, 0.2);
        }
        .page-title-content .default-btn {
          margin-top: 30px !important;
        }

        /* Content Sections - Theme Aware */
        .about-section,
        .about-widget-area,
        .service-list-area {
          padding: 80px 0;
          background-color: var(--bg-light);
        }

        .about-subtitle {
          font-size: 2.5rem;
          color: var(--text-black);
          margin-bottom: 30px;
          text-align: center;
          position: relative;
        }
        .about-subtitle::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: var(--primary-orange);
          border-radius: 2px;
        }

        .about-card,
        .value-card,
        .service-list-content {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        .about-card:hover,
        .value-card:hover,
        .service-list-content:hover {
          transform: translateY(-4px);
          border-color: var(--primary-orange);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .highlight-text {
          color: var(--primary-orange);
          font-weight: 700;
        }
        .about-text {
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .value-icon {
          font-size: 3rem;
          color: var(--primary-orange);
          margin-bottom: 20px;
        }
        .value-title {
          color: var(--text-black);
          font-size: 1.4rem;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .value-text {
          color: var(--text-light-gray);
          line-height: 1.6;
        }

        /* Why Partner Section - Theme Aware */
        .why-us-section {
          padding: 80px 0;
          background-color: var(--bg-white);
          color: var(--text-black);
        }
        .why-us-section .about-subtitle {
          color: var(--text-black);
        }
        .why-us-section .about-text {
          color: var(--text-gray);
        }
        .why-us-card {
          background: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        .why-us-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-orange);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }
        .why-us-card .value-icon {
          color: var(--primary-orange);
        }
        .why-us-title {
          color: var(--text-black);
          font-size: 1.3rem;
          margin-bottom: 15px;
        }
        .why-us-text {
          color: var(--text-gray);
          line-height: 1.6;
        }

        .about-widget-img img {
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }
        .about-widget-img:hover img {
          transform: scale(1.03) rotate(1deg);
        }
        .section-title h2 {
          color: var(--text-black);
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .about-widget-content h3 {
          color: var(--text-gray);
          font-size: 1.3rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .about-widget-list ul {
          list-style: none;
          padding: 0;
        }
        .about-widget-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          padding: 15px;
          background: var(--bg-white);
          border-radius: 10px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        .about-widget-list li:hover {
          background: var(--bg-white);
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        .about-widget-list li i {
          color: var(--primary-orange);
          font-size: 1.5rem;
          margin-right: 15px;
          margin-top: 2px;
        }
        .about-widget-list li span {
          color: var(--primary-orange);
          font-weight: 700;
          font-size: 1.2rem;
          margin-right: 15px;
        }
        .about-widget-list li p {
          color: var(--text-gray);
          margin: 0;
          flex: 1;
        }

        /* Counter Area - Theme Aware */
        .counter-area-two {
          background: linear-gradient(135deg, var(--text-black) 0%, #2d3748 100%);
          color: var(--text-white);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        .counter-card {
          text-align: center;
          padding: 30px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        .counter-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.2);
        }
        .counter-card h3 {
          font-size: 2.5rem;
          color: var(--primary-orange);
          margin-bottom: 10px;
          font-weight: 700;
        }
        .counter-card p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .service-list-content h3 {
          color: var(--text-black);
          font-size: 1.4rem;
          margin-bottom: 15px;
        }
        .service-list-content p {
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .service-list-btn {
          color: var(--primary-orange);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .service-list-btn:hover {
          color: var(--primary-orange);
          transform: translateX(5px);
        }
      `}</style>

      {/* Page Title Area - Theme Aware Hero Section */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after" style={{color: 'var(--primary-orange)', fontSize: '1.1rem', fontWeight: '600'}}>
              About Us
            </span>
            <h1 className="h2-color" style={{color: 'var(--text-black)'}}>
              Transforming Ideas into <span style={{color: 'var(--primary-orange)'}}>Digital Excellence</span>
            </h1>
            <p style={{color: 'var(--text-gray)'}}>
              We craft high-performing, secure, and scalable digital products that drive real business outcomes.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bx bx-rocket"></i> <span style={{color: 'var(--text-black)'}}>Innovation Driven</span>
              </span>
              <span className="hero-badge">
                <i className="bx bxs-lock-alt"></i> <span style={{color: 'var(--text-black)'}}>Quality Assured</span>
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
                to="/service"
                className="default-btn"
                style={{ background: 'var(--text-black)', color: 'var(--text-white)' }}
              >
                <span style={{color: 'var(--text-white)'}}>Explore Services</span> <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Theme Aware */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="about-subtitle">Who We Are</h2>
              <div className="about-card">
                <div className="welcome-text-container">
                  <p className="about-text">
                    Welcome to <strong className="highlight-text">Podosphere Technologies</strong> - where <em>innovation meets expertise</em>.
                    As a dynamic IT solutions provider, we specialize in creating cutting-edge digital experiences that drive business growth.
                  </p>
                  <p className="about-text">
                    Our passion lies in transforming complex challenges into elegant, efficient solutions that deliver real results for our clients worldwide.
                  </p>
                  <p className="about-text">
                    With a proven track record of delivering exceptional web design, development, and mobile applications,
                    we've earned the trust of clients globally. Our commitment to excellence, coupled with our innovative approach,
                    makes us your ideal technology partner for the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values - Theme Aware Cards */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2 className="about-subtitle">Core Values</h2>
              <p className="about-text text-center mb-5">
                Our values are the foundation of everything we do, guiding us in
                delivering exceptional solutions and service to our clients.
              </p>
            </div>
            {coreValues.map((value, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="value-card">
                  <i className={`bx ${value.icon} value-icon`}></i>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-text">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission & Vision - Theme Aware Cards */}
          <div className="row mt-5">
            <div className="col-lg-6">
              <h2 className="about-subtitle">Our Mission</h2>
              <div className="about-card h-100">
                <p className="about-text">
                  Our mission is to consistently deliver top-tier solutions that exceed client expectations in quality and service,
                  ensuring customer satisfaction remains our highest priority. We are committed to continuous improvement and innovation,
                  building long-term partnerships that foster mutual success.
                  By cultivating a workplace defined by exceptional performance, teamwork, and respect,
                  we empower our team to tackle new challenges and celebrate every contribution.
                </p>
                <p className="about-text mb-0">
                  We foster lasting partnerships with our clients, understanding
                  their unique challenges and delivering tailored solutions that
                  exceed expectations.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="about-subtitle">Our Vision</h2>
              <div className="about-card h-100">
                <p className="about-text">
                  Our vision is to be the driving force behind global digital transformation,
                  setting the benchmark for innovation and excellence in the technology industry.
                  We aspire to empower organizations of all sizes, from emerging startups to established enterprises,
                  with powerful digital tools that unlock their full potential and fuel sustainable growth.
                  Through relentless pursuit of new ideas and best practices, we strive to make cutting-edge technology
                  more accessible, efficient, and impactful for businesses across the world.
                </p>
                <p className="about-text mb-0">
                  By fostering a culture of ingenuity, collaboration, and inclusivity,
                  we are committed to shaping a future where technology bridges gaps, solves complex challenges,
                  and enables every business to thrive in a rapidly evolving digital landscape
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us - Theme Aware */}
      <section className="why-us-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="about-subtitle text-center">Why Partner With Us</h2>
              <p className="about-text text-center mb-5">
                Our expertise is in creating customised software for a variety of organisations.
                We will deliver the best possible service and support. The foundation of a company's growth is its customers' trust,
                and we have over 700 satisfied clients from all around the world who have chosen our services.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {whyPartnerData.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="why-us-card">
                  <i className={`bx ${item.icon} value-icon`}></i>
                  <h3 className="why-us-title">{item.title}</h3>
                  <p className="why-us-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Widget Area - Theme Aware */}
      <div className="about-widget-area pt-50 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-widget-img">
                <img src="/assets/img/about/about-img4.png" alt="About" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-widget-content">
                <div className="section-title">
                  <span className="sp-before sp-after">About Us</span>
                  <h2>Grow Your Business With <span style={{color: 'var(--primary-orange)'}}>PodoSphere</span></h2>
                </div>
                <h3 style={{color: 'var(--text-gray)'}}>
                  We have 30 years of experience and our strategy includes consistently evolving, to
                  ensure we are producing exceptional web and app solutions for business.
                </h3>
                <p style={{color: 'var(--text-gray)'}}>
                  At Podosphere Technologies, we deliver innovative web and app solutions, combining advanced technology with
                  intuitive user experiences to drive your business forward.
                </p>

                <div className="about-widget-list">
                  <ul>
                    {aboutWidgetList.map((item, index) => (
                      <li key={index}>
                        <i className="bx bx-check"></i>
                        <span style={{color: 'var(--primary-orange)'}}>{item.number}</span>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Area - Theme Aware */}
      <div className="counter-area-two pt-100">
        <div className="container">
          <div className="row">
            {aboutCounters.map((counter, index) => (
              <div className="col-lg-3 col-sm-6 col-md-3" key={index}>
                <div className="counter-card">
                  <h3 style={{color: 'var(--primary-orange)'}}>{counter.value}</h3>
                  <p>{counter.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="counter-shape-top">
          <img src="/assets/img/counter/counter-shape.png" alt="Shape" />
        </div>
      </div>

      {/* Service List - Theme Aware */}
      <div className="service-list-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Services</span>
            <h2>Our Journey's Path</h2>
          </div>

          <div className="row pt-45">
            {journeyData.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-list-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to="/service" className="service-list-btn">
                    <span style={{color: 'var(--primary-orange)'}}>Read More</span><i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Data Arrays (unchanged)
const coreValues = [
  {
    icon: 'bx-diamond',
    title: 'Excellence',
    description: 'Striving for perfection in every line of code and pixel we craft.'
  },
  {
    icon: 'bx-bulb',
    title: 'Innovation',
    description: 'Pushing boundaries to create groundbreaking solutions.'
  },
  {
    icon: 'bx-group',
    title: 'Collaboration',
    description: 'Working together to achieve extraordinary results.'
  },
  {
    icon: 'bx-shield',
    title: 'Integrity',
    description: 'Building trust through transparency and honesty.'
  }
];

const whyPartnerData = [
  {
    icon: 'bx-check-shield',
    title: 'Proven Expertise',
    description: 'Years of experience delivering successful digital solutions across industries.'
  },
  {
    icon: 'bx-rocket',
    title: 'Innovation Process',
    description: 'Pragmatic approach to solving client problems.'
  },
  {
    icon: 'bx-line-chart',
    title: 'Results-Driven',
    description: 'Focus on delivering measurable business impact and ROI.'
  },
  {
    icon: 'bx-time-five',
    title: 'Timely Delivery',
    description: 'Efficient project management ensuring on-time, within-budget delivery.'
  },
  {
    icon: 'bx-support',
    title: '24/7 Support',
    description: 'Dedicated team providing round-the-clock technical assistance.'
  },
  {
    icon: 'bx-customize',
    title: 'Custom Solutions',
    description: 'Tailored approaches meeting your unique business requirements.'
  }
];

const aboutWidgetList = [
  {
    number: '01',
    text: 'High standards of professionalism, integrity. Establishment of close working relationships.'
  },
  {
    number: '02',
    text: 'A different way of thinking, both inside and outside the box.'
  },
  {
    number: '03',
    text: 'We do not have to be the best, we do have to give our best. Ability to learn. Multicultural competence.'
  }
];

const aboutCounters = [
  { value: '10 Years', label: 'GLORIOUS YEARS' },
  { value: '100%', label: 'SATISFACTION RATE' },
  { value: '₹2CR+', label: 'SPENT IN MEDIA' },
  { value: '50+', label: 'BRAND SCALING' }
];

const journeyData = [
  {
    title: 'Our Mission',
    description: 'Our goal is to provide the best solutions with the best quality and service. Customer satisfaction is of the utmost importance to us.'
  },
  {
    title: 'Our Vision',
    description: 'To be a leading provider of IT solutions, recognized for innovation, quality, and customer-centric approach.'
  },
  {
    title: 'Our Values',
    description: 'Excellence, integrity, innovation, and collaboration are the core values that guide our every action.'
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure we deliver flawless products.'
  },
  {
    title: 'Client Focus',
    description: 'We prioritize understanding our clients\' needs and delivering solutions that exceed expectations.'
  },
  {
    title: 'Continuous Innovation',
    description: 'Staying ahead of technology trends to provide cutting-edge solutions to our clients.'
  }
];

export default About;