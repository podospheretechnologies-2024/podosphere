import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <>
      <div className="inner-banner">
        <div className="container">
          <div className="inner-title text-center">
            <h3>How We Work</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><i className="bx bx-chevron-right"></i></li>
              <li>How We Work</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="work-process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Our Process</span>
            <h2>Simple & Effective Work Process</h2>
            <p>
              We follow a proven methodology to deliver successful projects 
              on time and within budget.
            </p>
          </div>
          <div className="row pt-45">
            {workProcess.map((step, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="work-process-card">
                  <div className="number-title">
                    <h3>{step.number}</h3>
                  </div>
                  <i className={step.icon}></i>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="work-details-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="work-details-img">
                <img src="/assets/img/work-img.png" alt="Work Process" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-details-content">
                <div className="section-title">
                  <span className="sp-before sp-after">Why Our Process Works</span>
                  <h2>Delivering Excellence Through Proven Methods</h2>
                  <p>
                    Our systematic approach ensures that every project is executed 
                    flawlessly from conception to delivery. We believe in transparency, 
                    collaboration, and continuous improvement.
                  </p>
                </div>
                <ul className="work-details-list">
                  <li><i className="bx bx-check"></i> Agile Development Methodology</li>
                  <li><i className="bx bx-check"></i> Regular Progress Updates</li>
                  <li><i className="bx bx-check"></i> Quality Assurance at Every Stage</li>
                  <li><i className="bx bx-check"></i> Post-Launch Support & Maintenance</li>
                </ul>
                <Link to="/contact" className="default-btn">
                  Start Your Project
                  <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const workProcess = [
  {
    number: '01',
    icon: 'flaticon-consulting',
    title: 'Discovery',
    description: 'We understand your business goals and requirements through detailed consultation.'
  },
  {
    number: '02',
    icon: 'flaticon-research',
    title: 'Planning',
    description: 'Create a comprehensive project plan with timeline, milestones, and deliverables.'
  },
  {
    number: '03',
    icon: 'flaticon-software',
    title: 'Development',
    description: 'Our expert team builds your solution using best practices and modern technologies.'
  },
  {
    number: '04',
    icon: 'flaticon-solution',
    title: 'Delivery',
    description: 'Deploy and launch your project with thorough testing and quality assurance.'
  }
];

export default Work;

