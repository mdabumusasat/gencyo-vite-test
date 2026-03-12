import React from "react";
import { Link } from "react-router-dom";
import FeaturesImage1 from "../../assets/images/resource/object4.png";
import FeaturesImage2 from "../../assets/images/resource/robot2-1.png";
import FeaturesImage3 from "../../assets/images/resource/object5.png";
import starIcon from "../../assets/images/icons/star.png";
import starIcon1 from "../../assets/images/icons/star.png";
import starIcon2 from "../../assets/images/icons/star.png";

const features = [
  {
    type: "style2",
    delay: ".4s",
    image: FeaturesImage1,
    title: "Market & Competitor Research",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    type: "style3",
    delay: ".8s",
    image: FeaturesImage2,
    title: "Fast SEO Implementation Ai",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    hideOnMobile: true,
  },
  {
    type: "style4",
    delay: ".6s",
    image: FeaturesImage3,
    title: "Fast Project Turnaround",
    text: "It is a long established fact that a reader will be distracted by the readable",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="feature-box-style1 style-2">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="icon" /> Feature
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Advanced SEO Capabilities Built to Ignite <span>Sustainable Growth</span>
              </h2>
              <div className="feature-button">
                <Link
                  to="/page-contact"
                  className="btn-style-one mt-0 wow fadeInUp"
                  data-wow-delay=".8s">
                  <span className="btn-arrow-left">
                    <img src={starIcon1} alt="arrow left" />
                  </span>
                  <span className="btn-title">Get in Touch</span>
                  <span className="btn-arrow-right">
                    <img src={starIcon2} alt="arrow right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`col-xl-${
                feature.type === "style3" ? "8" : feature.type === "style4" ? "4" : "6"
              } col-lg-${
                feature.type === "style3" ? "7" : feature.type === "style4" ? "5" : "6"
              } wow fadeInUp`}
              data-wow-delay={feature.delay}>
              {feature.type === "style2" && (
                <div className="feature-box-style2 style-2">
                  <div className="image">
                    <img src={feature.image} alt={feature.title} />
                  </div>
                  <div className="content">
                    <h4 className="title font-weight-500">
                      {feature.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="d-block">{feature.title.split(" ").slice(-1)}</span>
                    </h4>
                    <div className="text">{feature.text}</div>
                  </div>
                </div>
              )}
              {feature.type === "style3" && (
                <div className="feature-box-style3 style-2 fix">
                  <div className="row align-items-center">
                    {feature.hideOnMobile && (
                      <div className="col-md-6 d-none d-xl-block">
                        <div className="image2">
                          <img src={feature.image} alt={feature.title} />
                        </div>
                      </div>
                    )}
                    <div className="col-xl-6">
                      <div className="content content-style-2">
                        <h4 className="title font-weight-500 split-text split-in-right">
                          {feature.title}
                        </h4>
                        <div className="text wow fadeInUp" data-wow-delay=".3s">
                          {feature.text}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {feature.type === "style4" && (
                <div className="feature-box-style4">
                  <div className="image">
                    <img src={feature.image} alt={feature.title} />
                  </div>
                  <div className="content">
                    <h4 className="title">{feature.title}</h4>
                    <div className="text">{feature.text}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;