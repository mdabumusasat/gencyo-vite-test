import React from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/icons/star.png";
import lightIcon from "../../assets/images/icons/work-process-light-2-1.png";
import vecIcon from "../../assets/images/icons/work-process-vec2-1.png";
import stepIcon from "../../assets/images/icons/process-icon-2-1.png";
import client1 from "../../assets/images/resource/client2-2.jpg";
import client2 from "../../assets/images/resource/client2-3.jpg";
import client3 from "../../assets/images/resource/client2-4.jpg";
import client4 from "../../assets/images/resource/client2-5.jpg";
import shapeImg from "../../assets/images/resource/shape-2-1.png";
import bgImage from "../../assets/images/background/work-process-bg-2-1.jpg";
import bgIconImage from "../../assets/images/icons/right-arrow-1-2.png";

const steps = [
  { step: "01", title: "Research & Audit", text: "It is a long established fact that a reader will be distracted by the readable content of a page when", icon: stepIcon },
  { step: "02", title: "Strategy Planning", text: "It is a long established fact that a reader will be distracted by the readable content of a page when", icon: stepIcon },
  { step: "03", title: "Implementation", text: "It is a long established fact that a reader will be distracted by the readable content of a page when", icon: stepIcon },
];

const clientImages = [client1, client2, client3, client4];

const WorkProcessSection2 = () => {
  return (
    <section className="work-process-section-2">
      <div className="work-process-light">
        <img src={lightIcon} alt="light" />
      </div>
      <div className="work-process-vec tm-gsap-animate-circle">
        <img src={vecIcon} alt="vector" />
      </div>
      <div
        className="work-process-inner-2 section-padding bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="sec-title text-center">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={starIcon} alt="icon" /> Working Process
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Shaping The Future Through{" "}
                  <span className="d-md-block">Step-by-Step Innovation</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="row">
            {steps.map((stepItem, idx) => (
              <div
                key={idx}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`.${3 + idx * 2}s`}>
                <div className="working-block-two">
                  <div className="step-btn">Step {stepItem.step}</div>
                  <div className="inner-block">
                    <div className="icon-box">
                      <img src={stepItem.icon} alt={stepItem.title} />
                    </div>
                    <div className="dot"></div>
                    <h4 className="title">{stepItem.title}</h4>
                    <div className="text">{stepItem.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="how-it-client-wrapper wow fadeInUp" data-wow-delay=".3s">
            <div className="client-info">
              <div className="client-image">
                {clientImages.map((img, idx) => (
                  <img key={idx} src={img} alt={`client-${idx}`} className={`icon-${idx + 1}`} />
                ))}
              </div>
              <h5 className="info-title">
                Turn Search Traffic Into Measurable Business Growth
              </h5>
            </div>
            <div className="clieng-btn">
              <div className="floower-shape">
                <img src={shapeImg} alt="shape" />
              </div>
              <Link to="/page-contact" className="btn-style-one">
                <span className="btn-arrow-left">
                  <img src={bgIconImage} alt="" />
                </span>
                <span className="btn-title">Get in Touch</span>
                <span className="btn-arrow-right">
                  <img src={bgIconImage} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection2;