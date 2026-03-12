import React from "react";
import { Link } from "react-router-dom";
import aboutLight from "../../assets/images/icons/about-light-2-1.png";
import aboutObject from "../../assets/images/icons/about-object-2-1.png";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";
import aboutThumb from "../../assets/images/resource/about-2-1.jpg";

const AboutSection2 = () => {
  return (
    <section className="about-section-2 fix section-padding">
      <div className="about-light">
        <img src={aboutLight} alt="decorative light" />
      </div>
      <div className="about-vec tm-gsap-animate-circle">
        <img src={aboutObject} alt="animated object" />
      </div>
      <div className="container">
        <div className="about-items-2">
          <h2 className="title title tx-title sec_title tz-itm-title tz-itm-anim">
            We are a results-driven digital agency helping modern businesses build strong online presences. Our team blends creativity and technology to deliver user-friendly digital solutions.
          </h2>
          <div className="about-btn wow fadeInUp">
            <Link to="/page-about" className="btn-style-one">
              <span className="btn-arrow-left">
                <img src={arrowIcon} alt="arrow left" />
              </span>
              <span className="btn-title">Discover More</span>
              <span className="btn-arrow-right">
                <img src={arrowIcon} alt="arrow right" />
              </span>
            </Link>
          </div>
          <div className="about-thumb wow fadeInUp" data-wow-delay=".3s">
            <img src={aboutThumb} alt="About us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;