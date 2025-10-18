import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Enhanced scroll effect for better mobile experience
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Close mobile menu when scrolling on mobile
      if (window.innerWidth <= 991 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Handle window resize
    const handleResize = () => {
      if (window.innerWidth > 991 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Enhanced mobile menu toggle with better accessibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className={`navbar-area ${isScrolled ? 'scrolled' : ''}`}>
      {/* Enhanced Menu For Mobile Device */}
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img src="/assets/img/logo/logo1.png" className="logo-one" alt="Logo" />
          <img src="/assets/img/logo/logo2.png" className="logo-two" alt="Logo" />
        </Link>
        
        <button
          className={`mobile-menu-toggle${isMobileMenuOpen ? ' open' : ''}`}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobileMenu"
          onClick={toggleMobileMenu}
          type="button"
        >
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
        </button>

        <div
          id="mobileMenu"
          className={`mobile-menu${isMobileMenuOpen ? ' open' : ''}`}
          role="navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="mobile-nav-list">
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/about" className={`nav-link ${isActive('/about')}`} aria-current={isActive('/about') ? 'page' : undefined}>
                About Us
              </Link>
            </li>
            <li className="nav-item has-dropdown">
              <span className="nav-link dropdown-label" aria-haspopup="true" aria-expanded="false">
                Company
              </span>
              <ul className="dropdown-menu" role="menu">
                <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/work" className="nav-link" role="menuitem">How We Work</Link>
                </li>
                <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/team" className="nav-link" role="menuitem">Our Team</Link>
                </li>
                <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/nda" className="nav-link" role="menuitem">NDA</Link>
                </li>
                <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/career" className="nav-link" role="menuitem">Career</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/service" className={`nav-link ${isActive('/service')}`} aria-current={isActive('/service') ? 'page' : undefined}>
                Services
              </Link>
            </li>
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/solution" className={`nav-link ${isActive('/solution')}`} aria-current={isActive('/solution') ? 'page' : undefined}>
                Solutions
              </Link>
            </li>
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`} aria-current={isActive('/portfolio') ? 'page' : undefined}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} aria-current={isActive('/contact') ? 'page' : undefined}>
                Contact
              </Link>
            </li>
            <li className="nav-item cta" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/contact" className="nav-menu-btn" aria-label="Contact us">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Enhanced Menu For Desktop Device */}
      <div className="main-nav">
        <div className="container-fluid">
          <nav className="container-max-2 navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/" aria-label="Go to homepage">
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

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link to="/about" className={`nav-link ${isActive('/about')}`} aria-current={isActive('/about') ? 'page' : undefined}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Company
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="nav-item">
                      <Link to="/work" className="nav-link" role="menuitem">How We Work</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/team" className="nav-link" role="menuitem">Our Team</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/nda" className="nav-link" role="menuitem">NDA</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/career" className="nav-link" role="menuitem">Career</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/service" className={`nav-link ${isActive('/service')}`} aria-current={isActive('/service') ? 'page' : undefined}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/solution" className={`nav-link ${isActive('/solution')}`} aria-current={isActive('/solution') ? 'page' : undefined}>
                    Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`} aria-current={isActive('/portfolio') ? 'page' : undefined}>
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${isActive('/contact')}`} aria-current={isActive('/contact') ? 'page' : undefined}>
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
                    <a href="#" aria-label="User account">
                      <i className="flaticon-contact"></i>
                    </a>
                  </div>
                </div>

                <div className="side-item">
                  <div className="nav-add-btn">
                    <Link to="/contact" className="nav-menu-btn" aria-label="Contact us">
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