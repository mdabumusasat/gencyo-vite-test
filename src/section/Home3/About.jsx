import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import aboutArrow from "../../assets/images/icons/about-arrow-3-1.png";
import starIcon from "../../assets/images/icons/star.png";
import aboutLight from "../../assets/images/icons/about-light-3-1.png";
import aboutThumb from "../../assets/images/resource/about-3-1.jpg";
import icon1 from "../../assets/images/icons/about-icon3-1.png";
import icon2 from "../../assets/images/icons/about-icon3-2.png";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";

const counters = [
  {
    value: 5,
  },
];

const AboutSectionThree = () => {
  return (
    <section className="about-section-3 section-padding pt-0">
      <div className="about-arrow">
        <img src={aboutArrow} alt="about arrow" />
      </div>
      <div className="container">
        <div className="row sec-title">
          <div className="col-lg-3">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src={starIcon} alt="star" />
              Who We Are
            </span>
          </div>
          <div className="col-lg-8">
            <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
              We build smart digital systems and user-first experiences for
              brands <span> ready to grow</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <div className="about-items-3">
              <div className="about-light d-none d-xl-block">
                <img src={aboutLight} alt="about light" />
              </div>
              <div className="thumb-1 wow fadeInUp" data-wow-delay=".3s">
                <img src={aboutThumb} alt="about" />
              </div>
              <div className="about-content-3 wow fadeInUp" data-wow-delay=".5s">
                <h3 className="count-box">
                  <span className="count-text">
                    <CounterUp end={counters[0].value} />
                  </span>
                  <span className="plus">+</span>
                </h3>
                <div className="text">
                  Over $25 million in funding has been secured with our guidance.
                </div>
                <ul className="about-list">
                  <li>Lorem ipsum dolor sit amet, conse</li>
                  <li>Powering Change Through</li>
                  <li>Gencyo is a full-service IT consulting</li>
                  <li>It is a long established fact that</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-8 wow fadeInUp" data-wow-delay=".7s">
            <div className="about-icon-box-3">
              <div className="icon-box-1">
                <div className="icon">
                  <img src={icon1} alt="regular updates" />
                </div>
                <div className="content">
                  <h4 className="title">Regular Updates</h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, conse ctetur sadipiscing elit,
                    sed
                  </div>
                </div>
              </div>
              <div className="icon-box-1 bb-none">
                <div className="icon">
                  <img src={icon2} alt="security updates" />
                </div>
                <div className="content">
                  <h4 className="title">Security Updates</h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, conse ctetur sadipiscing elit,
                    sed
                  </div>
                </div>
              </div>
              <Link to="/page-about" className="btn-style-one">
                <span className="btn-arrow-left">
                  <img src={arrowIcon} alt="arrow" />
                </span>
                <span className="btn-title">Discover More</span>
                <span className="btn-arrow-right">
                  <img src={arrowIcon} alt="arrow" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;