import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/background/hero-bg-3-1.jpg";
import lineIcon from "../../assets/images/icons/line.png";
import heroIcon from "../../assets/images/icons/hero-icon.png";
import heroVec from "../../assets/images/resource/hero-vec-3-1.png";
import heroImage from "../../assets/images/banner/hero-image-3-1.jpg";

const HeroSectionThree = () => {
  return (
    <section className="hero-section-3">
      <div
        className="hero-3 bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="email-items">
          <img src={lineIcon} alt="line" />
          <Link to="#">example@gmail.com</Link>
        </div>
        <div className="social-icon-items">
          <div className="line"></div>
          <span>FOLLOW US -</span>
          <div className="social-icon">
            <Link to="#">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-pinterest-p"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-xl-8 col-lg-7">
              <h1 className="hero-title char-animation">
                Smart Solutions For A Digital <br />
                <span className="icon">
                  <img src={heroIcon} alt="hero icon" />
                </span>
                World
                <span className="line-ani">
                  <svg
                    width="283"
                    height="26"
                    viewBox="0 0 283 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M281.958 9.28669C287.808 -5.23407 75.0931 -2.10704 2.45282 14.3507C-1.44547 14.8817 -0.444281 17.216 3.67979 16.6863C104.169 5.89575 175.017 4.9921 240.034 6.76138C334.735 9.62295 123.022 14.9105 110.28 21.2919C107.951 22.4583 106.638 25.9244 114.939 25.4909C195.707 18.049 277.839 19.5104 281.958 9.28669Z"
                      fill="#FF6B1E"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="hero-content">
                <div className="hero-vec d-none d-lg-block">
                  <img
                    src={heroVec}
                    alt="vector"
                    className="tm-gsap-animate-circle"
                  />
                </div>
                <div
                  className="hero-list wow fadeInUp"
                  data-wow-delay=".3s">
                  <Link to="/page-about">Risk assessment</Link>
                  <Link to="/page-about">Virtualization</Link>
                </div>
                <div
                  className="text wow fadeInUp"
                  data-wow-delay=".5s">
                  Gencyo is a full-service IT consulting and software
                  development company that helps small to medium
                  businesses automate processes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="hero-image wow fadeInUp"
          data-wow-delay=".5s">
          <Link to="/page-contact" className="circle-box">
            <span>
              get{" "}
              <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              <span className="d-block">started</span>
            </span>
          </Link>
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionThree;