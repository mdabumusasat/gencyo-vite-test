import React, { useState } from "react";
import processStepsImage1 from "../../assets/images/icons/work-process-vec3-1.png";
import processStepsImage2 from "../../assets/images/icons/work-process-light-3-1.png";
import processStepsImage3 from "../../assets/images/icons/star.png";
import processStepsBgImage from "../../assets/images/background/work-process-bg-3-1.jpg";

const processSteps = [
  {
    id: 1,
    title: "Discover & Analyse",
    shortText: "We understand business goals analyze requirements, and identify.",
    fullText: "After launch, we provide continuous monitoring, maintenance, and support to ensure long-term success.",
  },
  {
    id: 2,
    title: "Plan & Design",
    shortText: "Our team creates a strategic plan and designs user-focused solutions.",
    fullText: "After launch, we provide continuous monitoring, maintenance, and support to ensure long-term success.",
  },
  {
    id: 3,
    title: "Develop & Implement",
    shortText: "We develop, test, and implement the solution using modern technologies.",
    fullText: "After launch, we provide continuous monitoring, maintenance, and support to ensure long-term success.",
  },
  {
    id: 4,
    title: "Launch & Support",
    shortText: "We develop, test, and implement the solution using modern",
    fullText: "After launch, we provide continuous monitoring, maintenance, and support to ensure long-term success.",
  },
];

export default function WorkProcessSection3() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="work-process-section-3 hzAccordion-section">
      <div className="vec-shape tm-gsap-animate-circle d-none d-xxl-block">
        <img src={processStepsImage1} alt="vector shape" />
      </div>
      <div className="light-shape">
        <img src={processStepsImage2} alt="light shape" />
      </div>
      <div
        className="work-process-inner-3 section-padding bg-cover"
        style={{
          backgroundImage: `url(${processStepsBgImage})`,
        }}>
        <div className="container">
          <div className="sec-title text-center">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src={processStepsImage3} alt="star" /> Working Process
            </span>
            <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
              Shaping the Future Through <br /> Step-by-
              <span>Step Innovation</span>
            </h2>
          </div>
          <div className="row">
            <div className="client-gallery-wraper">
              <div className="options">
                {processSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`option ${activeIndex === index ? "active" : ""} wow fadeInUp`}
                    data-wow-delay={`.${index + 2}s`}
                    onClick={() => setActiveIndex(index)}>
                    <div className="client-content">
                      <div className="search-icon">
                        <div className="count">
                          <span>.</span> {String(step.id).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="default-content">
                        <div>
                          <h4 className="title">{step.title}</h4>
                          <div className="text">{step.shortText}</div>
                        </div>
                      </div>
                      <div className="label">
                        <div className="info">
                          <div className="cont">
                            <div className="count">
                              <span>.</span> {String(step.id).padStart(2, "0")}
                            </div>
                            <div className="lg-count">{String(step.id).padStart(2, "0")}</div>
                            <h4 className="sub-title">{step.title}</h4>
                            <div className="text">{step.fullText}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}