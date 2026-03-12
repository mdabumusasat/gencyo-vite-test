import React from "react";
import { Link } from "react-router-dom";
import footerVec from "../../assets/images/icons/footer-vec-2-1.png";
import footerLine from "../../assets/images/icons/footer-line2-1.png";
import letsTalkBg from "../../assets/images/background/footer-lets-talk-bg.jpg";
import arrow2 from "../../assets/images/icons/arrow2.png";
import logoWhite from "../../assets/images/logo/white-logo.png";
import rightArrow from "../../assets/images/icons/right-arrow-2-1.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-vec">
        <img src={footerVec} alt="vec" />
      </div>
      <div className="foorer-area">
        <div className="footer-line-2">
          <img src={footerLine} alt="line" />
        </div>
        <div className="container">
          <div
            className="footer-lets-talk bg-cover"
            style={{ backgroundImage: `url(${letsTalkBg})` }}>
            <h2 className="title">
              Let’s Talk Schedule <br />
              Consultation Today!
            </h2>
            <Link to="/page-contact" className="circle-btn">
              <img src={arrow2} alt="arrow" />
            </Link>
          </div>
          <div className="footer-widget-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <Link to="#" className="foote-logo">
                      <img src={logoWhite} alt="Logo" />
                    </Link>
                  </div>
                  <div className="footer-content-2">
                    <div className="footer-form">
                      <h5 className="title">
                        Subscribe to receive high-potential investment properties, market analysis, and expert recommendations.
                      </h5>
                      <form action="#">
                        <input type="email" name="email" className="email" placeholder="Your email address" />
                        <button className="subscribe-btn">
                          Subscribe <img src={rightArrow} alt="" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title text-theme-color">Quick Link</h4>
                  </div>
                  <ul className="user-links">
                    <li><Link to="/page-about">About Us</Link></li>
                    <li><Link to="/page-team">Our Team</Link></li>
                    <li><Link to="/page-project">Our Portfolio</Link></li>
                    <li><Link to="/page-contact">Careers</Link></li>
                    <li><Link to="/page-contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-6 col-md-6 col-lg-3">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title text-theme-color">Our Solutions</h4>
                  </div>
                  <ul className="user-links">
                    <li><Link to="/page-service-details">Web Development</Link></li>
                    <li><Link to="/page-service-details">UI/UX Design</Link></li>
                    <li><Link to="/page-service-details">Mobile Application</Link></li>
                    <li><Link to="/page-service-details">Cloud Service</Link></li>
                    <li><Link to="/page-service-details">Cyber Security</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-6 col-md-6 col-lg-3">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title text-theme-color">Contact</h4>
                  </div>
                  <ul className="footer-contact">
                    <li><Link to="#">+175 005-0088</Link></li>
                    <li><Link to="#">demo@example.com</Link></li>
                    <li>1901 Thornridge Cir. Shiloh, Hawaii 81063</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-wrapper">
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
}