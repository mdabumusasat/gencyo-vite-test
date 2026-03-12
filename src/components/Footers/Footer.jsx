import React from "react";
import { Link } from "react-router-dom";
import footerShape from "../../assets/images/icons/footer-shape-1-1.png";
import footerLine from "../../assets/images/icons/footer-line1-1.png";
import logo from "../../assets/images/logo/white-logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="shape-1 tm-gsap-animate-circle">
        <img src={footerShape} alt="img" />
      </div>
      <div className="foorer-area section-padding pb-0">
        <div className="footer-line">
          <img src={footerLine} alt="" />
        </div>
        <div className="container">
          <div className="footer-top-wrapper wow fadeInUp" data-wow-delay=".2s">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="logo" />
            </Link>
            <div className="footer-info">
              <Link className="mail" href="#">
                needhelp@company.com
              </Link>
              <Link className="phone" href="#">
                (+123) 456789 00
              </Link>
            </div>
          </div>
          <div className="footer-widget-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="footer-content">
                  <h2 className="title">
                    Let’s Talk
                    <span className="d-xl-block">Work Together</span>
                  </h2>
                  <h3 className="title-2">
                    Get the latest inspiration & insights
                  </h3>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Enter your email"
                        required
                      />
                      <button type="submit" className="circle-btn">
                        <i className="fa-light fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-2 d-none d-xl-block"></div>
              <div className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".5s">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title">Quick Link</h4>
                  </div>
                  <ul className="user-links">
                    <li><Link to="/page-about">About Us</Link></li>
                    <li><Link to="/page-team">Our Team</Link></li>
                    <li><Link to="/page-project">Our Portfolio</Link></li>
                    <li><Link to="#">Careers</Link></li>
                    <li><Link to="/page-contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".7s">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title">Our Solutions</h4>
                  </div>
                  <ul className="user-links">
                    <li><Link to="#">Web Development</Link></li>
                    <li><Link to="#">UI/UX Design</Link></li>
                    <li><Link to="#">Mobile Application</Link></li>
                    <li><Link to="#">Cloud Service</Link></li>
                    <li><Link to="#">Cyber Security</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-wrapper wow fadeInUp" data-wow-delay=".3s">
              <p>© Copyright 2026 by Company.com</p>
              <div className="social-icon">
                <Link to="#"><i className="fa-brands fa-x-twitter"></i> Twitter</Link>
                <Link to="#"><i className="fa-brands fa-facebook-f"></i> Facebook</Link>
                <Link to="#"><i className="fa-brands fa-pinterest"></i> Pinterest</Link>
                <Link to="#"><i className="fa-brands fa-instagram"></i> Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;