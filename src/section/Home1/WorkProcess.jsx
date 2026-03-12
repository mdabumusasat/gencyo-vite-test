import React, { useState } from "react";
import star from "../../assets/images/icons/star.png";
import workShape from "../../assets/images/icons/work-process-shape1-1.png";

const steps = [
  {
    step: "Step 01",
    title: "Tailored Solutions",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    delay: "0s",
  },
  {
    step: "Step 02",
    title: "Project Planning",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    delay: ".2s",
  },
  {
    step: "Step 03",
    title: "Content Creation",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    delay: ".4s",
  },
  {
    step: "Step 04",
    title: "Seamless Execution",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    delay: ".6s",
  },
];

const WorkProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="work-process-section section-padding two">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="work-process-content-1">
              <div className="sec-title mb-0">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={star} alt="icon" />
                  Working Process
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Shaping the Future Through
                  <span>Step-by-Step Innovation</span>
                </h2>
              </div>
              <div className="work-process-thumb wow fadeInUp">
                <img
                  src={workShape}
                  alt="work process"
                  className="tm-gsap-animate-circle"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="working-block-one wow fadeInUp"
                data-wow-delay={item.delay}
                onMouseEnter={() => setActiveIndex(index)}>
                <div
                  className={`inner-block ${
                    activeIndex === index ? "active" : ""
                  } ${index === 0 ? "top-margin-none" : ""}`}>
                  <div className="step">{item.step}</div>
                  <div className="content-box">
                    <h4 className="title">{item.title}</h4>
                    <div className="text">{item.text}</div>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;