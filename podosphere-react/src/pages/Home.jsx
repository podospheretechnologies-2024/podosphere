import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Initialize animations and plugins
    if (window.WOW) {
      new window.WOW().init();
    }

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
        .ai-heading {
          text-align: left;
          margin: 0;
          padding: 0;
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.3;
        }
        .ai-heading .gradient-text {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }
        .ai-heading .emphasis {
          color: #f97316;
          font-style: italic;
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
                  <span className="gradient-text">Empowering Your Business</span> with{' '}
                  <span className="emphasis">Cutting-Edge</span>{' '}
                  <span className="gradient-text glow">AI Solutions</span>
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
                    <i className="bx bx-brain" style={{ fontSize: '48px', color: '#6366f1' }}></i>
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
                  <i className="bx bx-code-alt" style={{ fontSize: '48px', color: '#6366f1' }}></i>
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
                  <i className="bx bx-grid-alt" style={{ fontSize: '48px', color: '#6366f1' }}></i>
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
                  <i className="bx bx-mobile" style={{ fontSize: '48px', color: '#6366f1' }}></i>
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
                  <i className="bx bx-cube" style={{ fontSize: '48px', color: '#6366f1' }}></i>
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
                  <img src={member.image} alt={member.name} />
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
  { name: 'AJAY JAIN', position: 'Team Lead, Website Development', image: '/assets/img/team/team1.jpg' },
  { name: 'RAHUL JANGID', position: 'FULLSTACK DEVELOPER', image: '/assets/img/team/team2.jpg' },
  { name: 'ANISH YADAV', position: 'MERNSTACK DEVELOPER', image: '/assets/img/team/team3.jpg' },
  { name: 'DEVENDRA SINGH GAHLOT', position: 'GRAPHIC & FRONTEND DEVELOPER', image: '/assets/img/team/team4.jpg' },
  { name: 'SAMEER MAHESHWARI', position: 'FRONTEND DEVELOPER', image: '/assets/img/team/team5.jpg' },
  { name: 'JAY SHARMA', position: 'UI/UX DESIGNER', image: '/assets/img/team/team6.jpg' },
  { name: 'YUVRAJ CHAUHAN', position: 'E-COMMERCE MANAGER', image: '/assets/img/team/team7.jpg' },
  { name: 'SUMIT SWAMI', position: 'FRONTEND DEVELOPER', image: '/assets/img/team/team8.jpg' },
  { name: 'KULDEEP TANWAR', position: 'VIDEO EDITOR', image: '/assets/img/team/team9.jpg' },
  { name: 'GAURAV SISODIA', position: '3d Generalist & TL of design Department', image: '/assets/img/team/team10.jpg' },
  { name: 'TANU JANGID', position: 'HUMAN RESOURCE', image: '/assets/img/team/team11.jpg' },
  { name: 'SURAJ BAIRWA', position: 'SENIOR GRAPHIC DESIGNER', image: '/assets/img/team/team12.jpg' }
];

export default Home;
