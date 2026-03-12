import React from "react";
import { Link } from "react-router-dom";
import footerVec from "../../assets/images/icons/footer-vec-4-1.png";
import footerLine from "../../assets/images/icons/footer-line2-1.png";
import logo from "../../assets/images/logo/white-logo.png";
import arrow from "../../assets/images/icons/right-arrow-2-1.png";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-vec-4 tm-gsap-animate-circle d-none d-xxl-block">
        <img src={footerVec} alt="Footer Shape" />
      </div>
      <div className="foorer-area">
        <div className="footer-line-2 d-none d-xxl-block">
          <img src={footerLine} alt="Footer Line" />
        </div>
        <div className="container">
          <div className="footer-widget-wrapper style-four">
            <div className="row justify-content-between">
              <div
                className="col-xl-5 col-lg-6 col-md-7 wow fadeInUp"
                data-wow-delay=".3s">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <Link to="/" className="foote-logo">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="footer-content-2">
                    <div className="footer-form">
                      <h5 className="title">
                        Subscribe to receive high-potential investment
                        properties, market analysis, and expert recommendations.
                      </h5>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input
                          type="email"
                          name="email"
                          className="email"
                          placeholder="Your email address"
                          required
                        />
                        <button className="subscribe-btn">
                          Subscribe
                          <img src={arrow} alt="Arrow" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-sm-6 col-md-4 col-lg-3 wow fadeInUp"
                data-wow-delay=".5s">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title text-theme-color">
                      Quick Link
                    </h4>
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
              <div
                className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
                data-wow-delay=".7s">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title text-theme-color">
                      Our Solutions
                    </h4>
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
              <div
                className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
                data-wow-delay=".7s">
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title text-theme-color">
                      Contact
                    </h4>
                  </div>
                  <ul className="footer-contact">
                    <li>
                      <Link to="#">+175 005-0088</Link>
                    </li>
                    <li>
                      <Link to="#">
                        demo@example.com
                      </Link>
                    </li>
                    <li>
                      1901 Thornridge Cir. Shiloh, <br />
                      Hawaii 81063
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="gencyo-text text-scale-anim">Gencyo</div>
          <div className="footer-bottom">
            <div
              className="footer-bottom-wrapper wow fadeInUp"
              data-wow-delay=".3s">
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