import React from "react";
import { Link } from "react-router-dom";
import lightShape from "../../assets/images/icons/feature-light-1-1.png";
import shape1 from "../../assets/images/icons/feature-shape-1-1.png";
import featureFrame from "../../assets/images/icons/feature-frame1-1.png";
import starIcon from "../../assets/images/icons/star.png";
import rightArrow from "../../assets/images/icons/right-arrow-1-2.png";
import object1 from "../../assets/images/resource/object.png";
import object2 from "../../assets/images/resource/object2.png";
import object3 from "../../assets/images/resource/object3.png";

const FeatureSection = () => {
  return (
    <section className="feature-section section-padding">
      <div className="light-shape-1">
        <img src={lightShape} alt="img" />
      </div>
      <div className="shape-1 tm-gsap-animate-circle">
        <img src={shape1} alt="img" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-7">
            <div className="feature-box-style1">
              <div className="feature-frame">
                <img src={featureFrame} alt="frame" />
              </div>
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="icon" />
                Feature
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Powerful Digital Capabilities Designed
                <span className="d-xl-block">for Long-Term Growth</span>
              </h2>
              <Link to="/page-contact" className="btn-style-one">
                <span className="btn-arrow-left">
                  <img src={rightArrow} alt="arrow" />
                </span>
                <span className="btn-title">Get in Touch</span>
                <span className="btn-arrow-right">
                  <img src={rightArrow} alt="arrow" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="feature-box-style2">
              <div className="image">
                <img src={object1} alt="img" />
              </div>
              <div className="content">
                <h4 className="title font-weight-500">
                  Fast Project <span className="d-block">Turnaround</span>
                </h4>
                <div className="text">
                  It is a long established fact that a reader will be distracted by the readable content
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="feature-box-style2 bg-theme-color">
              <div className="image">
                <img src={object2} alt="img" />
              </div>
              <div className="content">
                <h4 className="title font-weight-500">
                  User-Centered <span className="d-block">Design</span>
                </h4>
                <div className="text">
                  It is a long established fact that a reader will be distracted by the readable content
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="feature-box-style3 fix">
              <div className="row">
                <div className="col-md-6">
                  <div className="image top_view">
                    <img src={object3} alt="img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content content-style-2">
                    <h4 className="title font-weight-500 split-text split-in-right">
                      Brand Identity <br /> Creation
                    </h4>
                    <div className="text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;