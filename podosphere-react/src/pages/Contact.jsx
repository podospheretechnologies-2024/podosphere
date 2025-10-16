import React, { useState } from 'react';

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

  return (
    <>
      <div className="inner-banner">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-card-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card">
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
              <div className="contact-card">
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
              <div className="contact-card">
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
                          <i className="bx bx-user"></i>
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
                          <i className="bx bx-envelope"></i>
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
                        <button type="submit" className="default-btn border-radius">
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

