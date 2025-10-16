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
      {/* Page Title Area */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <span className="sp-after">About Us</span>
            <h1 className="h2-color">Transforming Ideas into Digital Excellence</h1>
            <p>We craft high-performing, secure, and scalable digital products that drive real business outcomes.</p>
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
                <img src="/assets/img/about/about-img4.png" alt="About" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-widget-content wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                <div className="section-title">
                  <span className="sp-before sp-after">About Us</span>
                  <h2>Grow Your Business With PodoSphere</h2>
                </div>
                <h3>
                  We have 30 years of experience and our strategy includes consistently evolving, to
                  ensure we are producing exceptional web and app solutions for business.
                </h3>
                <p>
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
      <div className="counter-area-two pt-100">
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
            <h2>Our Journey's Path</h2>
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
