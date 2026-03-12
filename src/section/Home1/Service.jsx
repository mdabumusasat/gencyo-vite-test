import React from "react";
import { Link } from "react-router-dom";
import serviceBg from "../../assets/images/background/service-bg-1-1.jpg";
import star from "../../assets/images/icons/star.png";
import icon1 from "../../assets/images/icons/service-icon-1-1.png";
import icon2 from "../../assets/images/icons/service-icon-1-2.png";
import icon3 from "../../assets/images/icons/service-icon-1-3.png";
import icon4 from "../../assets/images/icons/service-icon-1-4.png";
import icon5 from "../../assets/images/icons/service-icon-1-5.png";
import icon6 from "../../assets/images/icons/service-icon-1-6.png";

const ServiceSection = () => {
  return (
    <section
      className="service-section section-padding bg-cover"
      style={{ backgroundImage: `url(${serviceBg})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="sec-title text-center mb-60">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={star} alt="img" />
                Who We Are
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Helping You Succeed Through <span>Creative & Digital Services</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">01</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={icon1} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/page-service-details">UI/UX Design</Link>
                  </h4>
                  <div className="text">
                    It is a long established fact that a reader will be distracted
                  </div>
                  <Link to="/page-service-details" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">02</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/page-service-details">Brand Strategy</Link>
                  </h4>
                  <div className="text">
                    It is a long established fact that a reader will be distracted
                  </div>
                  <Link to="/page-service-details" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">03</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/page-service-details">Web Development</Link>
                  </h4>
                  <div className="text">
                    It is a long established fact that a reader will be distracted
                  </div>
                  <Link to="/page-service-details" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">04</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={icon4} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/page-service-details">App Development</Link>
                  </h4>
                  <div className="text">
                    It is a long established fact that a reader will be distracted
                  </div>
                  <Link to="/page-service-details" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">05</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={icon5} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/page-service-details">Search Optimization</Link>
                  </h4>
                  <div className="text">
                    It is a long established fact that a reader will be distracted
                  </div>
                  <Link to="/page-service-details" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">06</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={icon6} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/page-service-details">Digital Marketing</Link>
                  </h4>
                  <div className="text">
                    It is a long established fact that a reader will be distracted
                  </div>
                  <Link to="/page-service-details" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;