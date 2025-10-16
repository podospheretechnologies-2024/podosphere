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
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
          50% { box-shadow: 0 0 50px rgba(102, 126, 234, 0.6); }
        }

        .page-title-area {
          background: linear-gradient(-45deg, #667eea, #764ba2, #667eea, #5a67d8);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
          padding: 100px 0 80px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .page-title-area::before {
          content: '';
          position: 'absolute';
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .page-title-content {
          position: relative;
          z-index: 2;
        }
        .page-title-content h1 {
          color: #fff !important;
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }
        .page-title-content p {
          font-size: 1.2rem;
          opacity: 0.95;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        
        .about-section {
          padding: 80px 0;
          background: #fff;
        }
        .about-subtitle {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 30px;
          color: #1f2937;
          position: relative;
          padding-bottom: 15px;
        }
        .about-subtitle::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }
        .about-card {
          background: linear-gradient(145deg, #ffffff, #f9fafb);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          border: 2px solid #f3f4f6;
          transition: all 0.4s ease;
        }
        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
        }
        .about-text {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #4b5563;
          margin-bottom: 20px;
        }
        .highlight-text {
          color: #667eea;
          font-weight: 700;
        }
        
        .value-card {
          background: linear-gradient(145deg, #ffffff, #fafafa);
          border-radius: 20px;
          padding: 35px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border: 2px solid #f0f0f0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s;
        }
        .value-card:hover::before {
          left: 100%;
        }
        .value-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
        }
        .value-icon {
          font-size: 4rem;
          color: #667eea;
          margin-bottom: 20px;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .value-card:hover .value-icon {
          transform: scale(1.2) rotate(360deg);
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .value-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: #1f2937;
        }
        .value-text {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.7;
        }

        .why-us-section {
          padding: 80px 0;
          background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
        }
        .why-us-card {
          background: linear-gradient(145deg, #ffffff, #fafafa);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.1);
          border: 2px solid #f0f0f0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        .why-us-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.1), transparent);
          transition: left 0.6s;
        }
        .why-us-card:hover::before {
          left: 100%;
        }
        .why-us-card:hover {
          transform: translateY(-12px) scale(1.04);
          box-shadow: 0 25px 60px rgba(16, 185, 129, 0.2);
          border-color: #10b981;
        }
        .why-us-card .value-icon {
          color: #10b981;
        }
        .why-us-card:hover .value-icon {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .why-us-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: #1f2937;
        }
        .why-us-text {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.7;
        }

        .about-widget-area {
          background: #fff;
        }
        .about-widget-list ul {
          list-style: none;
          padding: 0;
          margin-top: 30px;
        }
        .about-widget-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 25px;
          padding: 20px;
          background: linear-gradient(145deg, #ffffff, #f9fafb);
          border-radius: 15px;
          border-left: 4px solid #667eea;
          transition: all 0.3s ease;
        }
        .about-widget-list li:hover {
          transform: translateX(10px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.15);
        }
        .about-widget-list li i {
          font-size: 2rem;
          color: #10b981;
          margin-right: 15px;
          flex-shrink: 0;
        }
        .about-widget-list li span {
          font-size: 1.5rem;
          font-weight: 800;
          color: #667eea;
          margin-right: 15px;
          flex-shrink: 0;
        }
        .about-widget-list li p {
          margin: 0;
          color: #4b5563;
          line-height: 1.7;
        }

        .counter-area-two {
          background: linear-gradient(135deg, #667eea, #764ba2);
          position: relative;
        }
        .counter-card {
          text-align: center;
          padding: 40px 20px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          margin-bottom: 30px;
          border: 2px solid rgba(255,255,255,0.2);
          transition: all 0.4s ease;
        }
        .counter-card:hover {
          transform: translateY(-10px) scale(1.05);
          background: rgba(255,255,255,0.25);
          box-shadow: 0 15px 50px rgba(0,0,0,0.3);
        }
        .counter-card h3 {
          font-size: 3rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 10px;
          text-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }
        .counter-card p {
          font-size: 1.1rem;
          color: #fff;
          font-weight: 700;
          opacity: 0.95;
        }

        .service-list-area {
          background: #fff;
        }
        .service-list-content {
          background: linear-gradient(145deg, #ffffff, #f9fafb);
          border-radius: 20px;
          padding: 35px;
          margin-bottom: 30px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border: 2px solid #f0f0f0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
        }
        .service-list-content:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
        }
        .service-list-content h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: #1f2937;
        }
        .service-list-content p {
          font-size: 1.05rem;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .service-list-btn {
          display: inline-block;
          padding: 12px 28px;
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: #fff;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
        }
        .service-list-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
          color: #fff;
        }
        .service-list-btn i {
          margin-left: 8px;
        }
      `}</style>

      {/* Page Title Area - Enhanced */}
      <div className="page-title-area">
        {/* Floating Particles */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}
            />
          ))}
        </div>

        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after" style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700' }}>About Us</span>
            <h1 className="animate-slide-up">Transforming Ideas into Digital Excellence</h1>
            <p className="animate-slide-up delay-200">
              We craft high-performing, secure, and scalable digital products that drive real business outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="about-subtitle">Who We Are</h2>
              <div className="about-card wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
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

          {/* Core Values */}
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
                <div className="value-card wow animate__animated animate__fadeInUp" data-wow-delay={`${0.3 + index * 0.2}s`}>
                  <i className={`bx ${value.icon} value-icon`}></i>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-text">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="row mt-5">
            <div className="col-lg-6">
              <h2 className="about-subtitle">Our Mission</h2>
              <div className="about-card h-100 wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
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
              <div className="about-card h-100 wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
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

      {/* Why Partner With Us */}
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
                <div className="why-us-card wow animate__animated animate__zoomIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                  <i className={`bx ${item.icon} value-icon`}></i>
                  <h3 className="why-us-title">{item.title}</h3>
                  <p className="why-us-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Widget Area */}
      <div className="about-widget-area pt-50 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-widget-img wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
                <img src="/assets/img/about/about-img4.png" alt="About" style={{ borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-widget-content wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                <div className="section-title">
                  <span className="sp-before sp-after">About Us</span>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>
                    Grow Your Business With PodoSphere
                  </h2>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#374151', marginBottom: '20px' }}>
                  We have 30 years of experience and our strategy includes consistently evolving, to
                  ensure we are producing exceptional web and app solutions for business.
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#6b7280', lineHeight: '1.8', marginBottom: '30px' }}>
                  At Podosphere Technologies, we deliver innovative web and app solutions, combining advanced technology with
                  intuitive user experiences to drive your business forward.
                </p>

                <div className="about-widget-list">
                  <ul>
                    {aboutWidgetList.map((item, index) => (
                      <li key={index}>
                        <i className="bx bx-check"></i>
                        <span>{item.number}</span>
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

      {/* Counter Area */}
      <div className="counter-area-two pt-100 pb-100">
        <div className="container">
          <div className="row wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            {aboutCounters.map((counter, index) => (
              <div className="col-lg-3 col-sm-6 col-md-3" key={index}>
                <div className="counter-card">
                  <h3>{counter.value}</h3>
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

      {/* Service List / Journey's Path */}
      <div className="service-list-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Services</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Our Journey's Path</h2>
          </div>

          <div className="row pt-45">
            {journeyData.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-list-content wow animate__animated animate__fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to="/service" className="service-list-btn">
                    Read More<i className="bx bx-plus"></i>
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

// Data Arrays
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
