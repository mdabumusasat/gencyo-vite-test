import React from "react";
import CounterUp from "../../lib/CounterUp";
import awardIcon1 from "../../assets/images/icons/award-1-1.png";
import awardIcon2 from "../../assets/images/icons/award-1-2.png";
import awardIcon3 from "../../assets/images/icons/award-1-3.png";
import shape1 from "../../assets/images/icons/award-shape-1-2.png";
import shape2 from "../../assets/images/icons/award-light-1-1.png";
import shape3 from "../../assets/images/icons/award-shape-1-3.png";
import thumbShape from "../../assets/images/icons/award-shape-1-1.png";
import starIcon from "../../assets/images/icons/star.png";

const counters = [
  {
    value: 3,
  },
];

const awards = [
  {
    year: 2026,
    title: "Awwwards Interior Excellence",
    text: "It is a long established fact that a reader will be distracted by the readable",
    icon: awardIcon1,
  },
  {
    year: 2023,
    title: "Awesome business models",
    text: "It is a long established fact that a reader will be distracted by the readable",
    icon: awardIcon2,
  },
  {
    year: 2020,
    title: "Creative Agencies Worldwide",
    text: "It is a long established fact that a reader will be distracted by the readable",
    icon: awardIcon3,
  },
];

const AwardSection = () => {
  return (
    <section className="award-section section-padding">
      <div className="award-shape-1">
        <img src={shape1} alt="shape" />
      </div>
      <div className="award-light-shape">
        <img src={shape2} alt="shape" />
      </div>
      <div className="award-shape-2">
        <img src={shape3} alt="shape" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-6">
            {awards.map((award, index) => (
              <div className="award-box-items-one" key={index}>
                <div className={`inner-block ${index === 2 ? "style-bottom-0" : ""}`}>
                  <div className="icon-box">
                    <span className="year">{award.year}</span>
                    <div className="icon">
                      <img src={award.icon} alt={`Award ${award.year}`} />
                    </div>
                  </div>
                  <div className="content-box">
                    <h4 className="title">{award.title}</h4>
                    <div className="text">{award.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="award-right-items-1">
              <div className="sec-title mb-0">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={starIcon} alt="icon" />
                  Award Wining Company
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Innovation for Business <span>Growth with Genciio</span>
                </h2>
              </div>
              <div className="award-text wow fadeInUp" data-wow-delay=".2s">
                We understand that every business is unique. That's why we offer <br />
                customized solutions to meet your specific needs.
              </div>
              <div className="award-thumb tm-gsap-animate-circle">
                <img src={thumbShape} alt="shape" />
              </div>
              <div className="content wow fadeInUp" data-wow-delay=".6s">
                <h3 className="count-box">
                  <span className="count-text">
                    <CounterUp end={counters[0].value} />
                  </span>
                </h3>
                <div className="text">Years In Providing Digital Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;