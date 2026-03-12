import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/banner/hero-bg-1-1.jpg";
import heroObject1 from "../../assets/images/icons/hero-object-1-1.png";
import heroObject2 from "../../assets/images/icons/hero-object-1-2.png";
import circleImg from "../../assets/images/banner/circle1-1.png";
import arrow1 from "../../assets/images/icons/right-arrow-1-1.png";
import arrow2 from "../../assets/images/icons/right-arrow-1-2.png";

const HeroSection = () => {
  return (
    <section
      className="hero-section hero-1 bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-oboject-1 tm-gsap-animate-circle">
        <img src={heroObject1} alt="" />
      </div>
      <div className="hero-oboject-2 tm-gsap-animate-circle">
        <img src={heroObject2} alt="" />
      </div>
      <div className="line-shape-animation cus-z-1 first w-100 h-100 d-flex flex-wrap">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="line-ani">
            <svg
              width="283"
              height="26"
              viewBox="0 0 283 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg" >
              <path
                className="arrow-path"
                d="M281.958 9.2867C287.808 -5.23407 75.0926 -2.10704 2.45233 14.3507C-1.44595 14.8817 -0.44477 17.216 3.6793 16.6863C104.169 5.89575 175.017 4.9921 240.033 6.76138C334.734 9.62295 123.021 14.9105 110.28 21.2919C107.951 22.4583 106.638 25.9245 114.938 25.4909C195.706 18.049 277.839 19.5104 281.958 9.2867Z"
                fill="#FF6B1E"
              />
            </svg>
          </div>
          <h1 className="hero-title char-animation">
            <span>We Build Digital</span> Experiences That Grow Your Business
          </h1>
          <div className="content-items">
            <div className="circle-box wow fadeInUp" data-wow-delay=".3s">
              <img className="ani-circle" src={circleImg} alt="" />
              <Link to="#" className="arrow-icon">
                <img src={arrow1} alt="" />
              </Link>
            </div>
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="hero-text">
                From startups to established companies, we create high-impact
                digital solutions that attract, engage, and convert customers.
              </div>
              <Link to="/page-about" className="btn-style-one">
                <span className="btn-arrow-left">
                  <img src={arrow2} alt="" />
                </span>
                <span className="btn-title">Discover More</span>
                <span className="btn-arrow-right">
                  <img src={arrow2} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;