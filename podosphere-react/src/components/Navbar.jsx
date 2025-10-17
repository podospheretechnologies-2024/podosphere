import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="navbar-area">
      {/* Menu For Mobile Device */}
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img src="/assets/img/logo/logo1.png" className="logo-one" alt="Logo" />
          <img src="/assets/img/logo/logo2.png" className="logo-two" alt="Logo" />
        </Link>
      </div>

      {/* Menu For Desktop Device */}
      <div className="main-nav">
        <div className="container-fluid">
          <nav className="container-max-2 navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/img/logo/logo1.png"
                className="logo-one"
                alt="Logo"
              />
              <img
                src="/assets/img/logo/logo2.png"
                className="logo-two"
                alt="Logo"
              />
            </Link>

            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >

              {/* <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Company
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/work" className="nav-link">How We Work</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/nda" className="nav-link">NDA</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/career" className="nav-link">Career</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/service" className={`nav-link ${isActive('/service')}`}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/solution" className={`nav-link ${isActive('/solution')}`}>
                    Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`}>
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
                    Contact
                  </Link>
                </li>
              </ul> */}

<ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link to="/about" className={`nav-link ${isActive('/about')}`}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Company
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/work" className="nav-link">How We Work</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/team" className="nav-link">Our Team</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/nda" className="nav-link">NDA</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/career" className="nav-link">Career</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/service" className={`nav-link ${isActive('/service')}`}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/solution" className={`nav-link ${isActive('/solution')}`}>
                    Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`}>
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="side-nav d-flex align-items-center">
                <div className="side-item">
                  <div className="search-box">
                    <i className="flaticon-loupe"></i>
                  </div>
                </div>

                <div className="side-item">
                  <div className="user-btn">
                    <a href="#">
                      <i className="flaticon-contact"></i>
                    </a>
                  </div>
                </div>

                <div className="side-item">
                  <div className="nav-add-btn">
                    <Link to="/contact" className="nav-menu-btn">
                      Contact us
                      <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

