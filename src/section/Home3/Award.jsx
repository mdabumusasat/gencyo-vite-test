import React from "react";
import awardLight1 from "../../assets/images/icons/award-light3-1.png";
import awardLight2 from "../../assets/images/icons/award-light3-2.png";
import awardVec from "../../assets/images/icons/award-vec-3-1.png";
import star from "../../assets/images/icons/star.png";
import awardBg from "../../assets/images/background/award-bg-3-1.jpg";

const awards = [
  {
    year: "2018-2019",
    title: "UI Behance",
    count: "x14",
    delay: "0s",
  },
  {
    year: "2018-2019",
    title: "UI Behance",
    count: "x14",
    delay: ".2s",
  },
  {
    year: "2021-2022",
    title: "Awwwards",
    count: "x36",
    delay: ".4s",
  },
  {
    year: "2022-2023",
    title: "CSS winner",
    count: "x08",
    delay: ".6s",
  },
  {
    year: "2023-2024",
    title: "Envato",
    count: "x28",
    delay: ".7s",
  },
  {
    year: "2024-2025",
    title: "Dribbble",
    count: "x40",
    delay: ".9s",
  },
];

const AwardSection3 = () => {
  return (
    <section className="award-section-3">
      <div className="award-light">
        <img src={awardLight1} alt="light" />
      </div>
      <div className="award-light2">
        <img src={awardLight2} alt="light" />
      </div>
      <div className="award-vec tm-gsap-animate-circle d-none d-xxl-block">
        <img src={awardVec} alt="vector" />
      </div>
      <div
        className="award-inner-3 section-padding bg-cover"
        style={{ backgroundImage: `url(${awardBg})` }}>
        <div className="container">
          <div className="sec-title text-center">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src={star} alt="star" /> Award Wining Company
            </span>
            <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
              Innovation for Business <br />
              <span>Growth with Genciio</span>
            </h2>
            <div className="text mt-3 wow fadeInUp">
              We understand that every business is unique. That's why we offer
              <br className="d-none d-md-block" />
              customized solutions to meet your specific needs.
            </div>
          </div>
          <div className="award-block-three wow fadeInUp">
            {awards.map((item, index) => (
              <div
                key={index}
                className={`list-item ${index === 0 ? "border-add" : ""} wow fadeInUp`}
                data-wow-delay={item.delay}>
                <div className="text-left-items">
                  <div className="text">{item.year}</div>
                  <h5 className="title">{item.title}</h5>
                </div>
                <div className="text-2">{item.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection3;