import React, { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";
import MainLogo from '../../assets/images/logo/white-logo2.png';
import MobileLogo from '../../assets/images/logo/white-logo2.png';
import stickyLogo from '../../assets/images/logo/white-logo2.png';

const Header = ({ handleOpen, handleRemove, handleRemove2, scroll }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleToggle = useCallback(() => {
    setIsSearchActive((prev) => !prev);
  }, []);

  const handleRemoveMenu = useCallback(() => {
    if (handleRemove) handleRemove();
    if (handleRemove2) handleRemove2();
  }, [handleRemove, handleRemove2]);

  return (
    <header className={`main-header header-style-one header-1 ${scroll ? "fixed-header" : ""}`}>
      <div className="container">
        {/* <!-- Header Lower --> */}
      <div className="header-lower">
        {/* <!-- Main box --> */}
        <div className="main-box">
          <div className="logo">
            <Link to="#"><img src={MainLogo} alt=""/></Link>
          </div>
          {/* <!--Nav Box--> */}
          <div className="nav-outer">
            <nav className="nav main-menu">
             <NavLinks/>
            </nav>
            <div className="outer-box">
              {/* <!-- Main Menu End--> */}
              <div className="ui-btn-outer">
                <div className="ui-btn-search" onClick={handleToggle}>
                  <button className="ui-btn ui-btn search-btn main-header__search search-toggler">
                  <i className="fa-regular fa-magnifying-glass"></i>
                  </button>
                  <Link to="/page-contact" className="contact-btn">
                    Let’s Talk
                  </Link>
                </div>
                {/* <!-- Mobile Nav toggler --> */}
              </div>
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header Lower --> */}
      </div>

      {/* <!-- Mobile Menu  --> */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleRemoveMenu} />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="#"><img src={MobileLogo} alt=""/></Link>
            </div>
            <div className="close-btn" onClick={handleRemoveMenu}><i className="icon fa fa-times"></i></div>
          </div>
          <ul className="navigation clearfix">
            <MobileMenu/>
          </ul>
          <ul className="contact-list-one">
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <Link to="#">+92 (8800) - 98670</Link>
              </div>
            </li>
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <Link to="#">help@company.com</Link>
              </div>
            </li>
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock"></span>
                <span className="title">Send Email</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>
          <ul className="social-links">
            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </nav>
      </div>
      {/* <!-- End Mobile Menu --> */}

      {/* <!-- Header Search --> */}
      <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
        <span className="search-back-drop" onClick={handleToggle} />
        <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
        <div className="search-inner">
          <form method="post" action="#">
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search..." />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Header Search --> */}

      {/* <!-- Sticky Header  --> */}
      <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
        <div className="auto-container">
          <div className="inner-container">
            {/* <!--Logo--> */}
            <div className="logo">
              <Link to="#"><img src={stickyLogo} alt="img"/></Link>
            </div>

            {/* <!--Right Col--> */}
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <NavLinks/>
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              {/* <!--Mobile Navigation Toggler--> */}
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sticky Menu --> */}
    </header>
  );
};

Header.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleRemove: PropTypes.func,
  handleRemove2: PropTypes.func,
  scroll: PropTypes.bool,
};

export default memo(Header);
