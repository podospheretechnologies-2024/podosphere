import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <>
      {/* Inner Banner Area */}
      <div className="inner-banner">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Team</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><i className="bx bx-chevron-right"></i></li>
              <li>Team</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one">
            <img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" />
          </div>
          <div className="shape-two">
            <img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" />
          </div>
          <div className="shape-three">
            <img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" />
          </div>
          <div className="inner-banner-dots-2">
            <img src="/assets/img/shape/dots-shape.png" alt="Dots" />
          </div>
        </div>
      </div>

      {/* Team Area */}
      <div className="team-area-two pt-50 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Team</span>
            <h2 className="h2-color2">
              Meet Our Experts to Grow Your Business
            </h2>
          </div>

          <div className="row pt-45">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="team-card team-card-mt active">
                  <a href="#">
                    <img src={member.image} alt={member.name} />
                  </a>
                  <div className="content">
                    <h3><a href="#">{member.name}</a></h3>
                    <span>{member.position}</span>
                    <ul className="social-link">
                      <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const teamMembers = [
  { name: 'Ajay Jain', position: 'Team Lead, Website Developer', image: '/assets/img/team/team1.jpg' },
  { name: 'Rahul Jangid', position: 'Fullstack Developer', image: '/assets/img/team/team2.jpg' },
  { name: 'Priya Sharma', position: 'UI/UX Designer', image: '/assets/img/team/team3.jpg' },
  { name: 'Vikram Singh', position: 'Mobile App Developer', image: '/assets/img/team/team4.jpg' },
  { name: 'Anjali Verma', position: 'Project Manager', image: '/assets/img/team/team5.jpg' },
  { name: 'Rohan Kumar', position: 'DevOps Engineer', image: '/assets/img/team/team6.jpg' },
  { name: 'Sneha Gupta', position: 'QA Lead', image: '/assets/img/team/team7.jpg' },
  { name: 'Amit Patel', position: 'Backend Developer', image: '/assets/img/team/team8.jpg' },
  { name: 'Neha Kapoor', position: 'Frontend Developer', image: '/assets/img/team/team9.jpg' }
];

export default Team;

