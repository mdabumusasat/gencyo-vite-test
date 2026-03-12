import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import light1 from "../../assets/images/icons/about-light-1-1.png";
import shape1 from "../../assets/images/icons/about-shape-1-1.png";
import light2 from "../../assets/images/icons/about-light-1-2.png";
import shape2 from "../../assets/images/icons/about-shape-1-2.png";
import aboutImg1 from "../../assets/images/resource/about-1-1.jpg";
import aboutImg2 from "../../assets/images/resource/about-1-2.jpg";
import star from "../../assets/images/icons/star.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";

const counters = [
  {
    value: 92,
  },
];

const AboutSection = () => {
  return (
    <section className="about-section section-padding">
      <div className="light-shape-1">
        <img src={light1} alt="img" />
      </div>
      <div className="about-shape-1 tm-gsap-animate-circle">
        <img src={shape1} alt="img" />
      </div>
      <div className="light-shape-2">
        <img src={light2} alt="img" />
      </div>
      <div className="about-shape-2 tm-gsap-animate-circle">
        <img src={shape2} alt="img" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-xxl-5 col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="about-image-1 fix">
              <img data-speed=".8" src={aboutImg1} alt="" />
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="about-content">
              <div className="sec-title mb-0">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={star} alt="img" />
                  Who We Are
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  A Creative Digital Agency Focused
                  <span> on Real Results</span>
                </h2>
              </div>
              <div className="about-text wow fadeInUp" data-wow-delay=".2s">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div>
              <div className="about-list-items">

                <ul className="wow fadeInUp" data-wow-delay=".3s">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Creativity Meets Strategy
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Design. Develop. Deliver
                  </li>
                </ul>
                <ul className="wow fadeInUp" data-wow-delay=".4s">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Innovative Development
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Unleashing Digital Power.
                  </li>
                </ul>
              </div>
              <div className="about-thumb-items">
                <div className="thumb1 wow fadeInUp" data-wow-delay=".5s">
                  <img src={aboutImg2} alt="" />
                </div>
                <div className="content wow fadeInUp" data-wow-delay=".6s">
                  <h3 className="count-box">
                    <span className="count-text">
                      <CounterUp end={counters[0].value} />
                    </span>
                    %
                  </h3>
                  <p>
                    Satisfied Clients
                    <br />
                    Returning Often
                  </p>
                </div>
              </div>
              <Link
                href="/page-about"
                className="btn-style-one wow fadeInUp"
                data-wow-delay=".8s">
                <span className="btn-arrow-left">
                  <img src={arrow} alt="" />
                </span>
                <span className="btn-title">Discover More</span>
                <span className="btn-arrow-right">
                  <img src={arrow} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;