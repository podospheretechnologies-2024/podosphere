import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <>
      <div className="inner-banner">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Careers</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><i className="bx bx-chevron-right"></i></li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="career-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Join Our Team</span>
            <h2>Build Your Career with PodoSphere</h2>
            <p>
              We're always looking for talented individuals who are passionate 
              about technology and innovation.
            </p>
          </div>

          <div className="career-content pt-45">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="career-card">
                  <i className="flaticon-consultant"></i>
                  <h3>Growth Opportunities</h3>
                  <p>
                    Continuous learning and career advancement opportunities 
                    in a dynamic environment.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="career-card">
                  <i className="flaticon-solution"></i>
                  <h3>Innovative Projects</h3>
                  <p>
                    Work on cutting-edge technologies and challenging projects 
                    that make a real impact.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="career-card">
                  <i className="flaticon-help"></i>
                  <h3>Work-Life Balance</h3>
                  <p>
                    Flexible working hours and a supportive culture that values 
                    your well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="job-openings pt-100">
            <div className="section-title text-center">
              <h2>Current Openings</h2>
            </div>
            <div className="row pt-45">
              {jobOpenings.map((job, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="job-card">
                    <div className="job-header">
                      <h3>{job.title}</h3>
                      <span className="job-type">{job.type}</span>
                    </div>
                    <div className="job-details">
                      <p><i className="bx bx-location-plus"></i> {job.location}</p>
                      <p><i className="bx bx-briefcase"></i> {job.experience}</p>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <Link to="/contact" className="default-btn">
                      Apply Now
                      <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="career-cta pt-100">
            <div className="text-center">
              <h3>Don't See a Position That Fits?</h3>
              <p>Send us your resume anyway! We're always interested in meeting talented people.</p>
              <Link to="/contact" className="default-btn">
                Get In Touch
                <i className="bx bx-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const jobOpenings = [
  {
    title: 'Senior React Developer',
    type: 'Full-time',
    location: 'Jaipur, India',
    experience: '3+ years',
    description: 'Looking for an experienced React developer to build modern web applications.'
  },
  {
    title: 'Node.js Backend Developer',
    type: 'Full-time',
    location: 'Jaipur, India',
    experience: '2+ years',
    description: 'Seeking a skilled backend developer proficient in Node.js and database technologies.'
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Jaipur, India',
    experience: '2+ years',
    description: 'Creative designer needed to create beautiful and intuitive user experiences.'
  },
  {
    title: 'Mobile App Developer',
    type: 'Full-time',
    location: 'Jaipur, India',
    experience: '3+ years',
    description: 'Experienced mobile developer for iOS and Android app development.'
  }
];

export default Career;

