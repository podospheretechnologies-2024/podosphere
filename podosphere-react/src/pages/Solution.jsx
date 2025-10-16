import React from 'react';
import { Link } from 'react-router-dom';

const Solution = () => {
  return (
    <>
      <div className="inner-banner">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Our Solutions</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><i className="bx bx-chevron-right"></i></li>
              <li>Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="solution-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Industry Solutions</span>
            <h2>Tailored Solutions for Every Industry</h2>
            <p>
              We provide industry-specific solutions that address unique challenges 
              and drive innovation across various sectors.
            </p>
          </div>
          <div className="row pt-45">
            {solutions.map((solution, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="solution-card">
                  <div className="solution-icon">
                    <img src={solution.icon} alt={solution.title} />
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <Link to="/contact" className="default-btn">
                    Learn More
                    <i className="bx bx-plus"></i>
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

const solutions = [
  {
    icon: '/assets/img/icons/ecommerce.svg',
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.'
  },
  {
    icon: '/assets/img/icons/education.svg',
    title: 'Education & E-Learning',
    description: 'Learning management systems and educational platforms for modern teaching.'
  },
  {
    icon: '/assets/img/icons/fitness.svg',
    title: 'Healthcare & Fitness',
    description: 'Digital health solutions including telemedicine, fitness tracking, and patient management.'
  },
  {
    icon: '/assets/img/icons/on-demand.svg',
    title: 'On-Demand Services',
    description: 'Build on-demand service platforms like ride-sharing, food delivery, and home services.'
  },
  {
    icon: '/assets/img/icons/retail.svg',
    title: 'Retail Solutions',
    description: 'POS systems, inventory management, and customer relationship management for retail.'
  },
  {
    icon: '/assets/img/icons/consulting.svg',
    title: 'Business Consulting',
    description: 'Strategic consulting services to optimize operations and drive digital transformation.'
  }
];

export default Solution;

