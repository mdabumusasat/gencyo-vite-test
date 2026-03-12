import React from "react";
import starIcon from "../../assets/images/icons/star.png";

const leftColumn = [
  {
    institute: "Dhaka University",
    title: "Bachelor Degree Of Design",
    year: "2018 - 2021",
    delay: ".3s",
  },
  {
    institute: "Dhaka University",
    title: "Junior Ui Ux Designer",
    year: "2018 - 2021",
    delay: ".5s",
  },
  {
    institute: "Dhaka University",
    title: "Senior Ui Ux Designer",
    year: "2018 - 2021",
    delay: ".7s",
  },
];

const rightColumn = [
  {
    institute: "Dhaka University",
    title: "Bachelor Degree Of Design",
    year: "2018 - 2021",
    delay: ".3s",
  },
  {
    institute: "Dhaka University",
    title: "Junior Ui Ux Designer",
    year: "2018 - 2021",
    delay: ".5s",
  },
  {
    institute: "Dhaka University",
    title: "Senior Ui Ux Designer",
    year: "2018 - 2021",
    delay: ".7s",
  },
];

const WorkEducationSection = () => {
  return (
    <section className="work-eduction-section section-padding pt-0">
      <div className="container">
        <div className="row g-4 justify-content-between sec-title">
          <div className="col-xl-7">
            <div className="work-eduction-sec-title">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="star" />
                Education And Work
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Education & <span>Job History</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="text">
              Through strategy, design, and technology, we bring ideas
              to life with impact and clarity. Our approach blends
              creativity with innovation.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {leftColumn.map((item, index) => (
              <div
                className="working-block-four wow fadeInUp"
                data-wow-delay={item.delay}
                key={index}>
                <div className="inner-block style-margin-0">
                  <div className="content-box">
                    <span>{item.institute}</span>
                    <h4 className="title">{item.title}</h4>
                  </div>
                  <div className="year-text">{item.year}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {rightColumn.map((item, index) => (
              <div
                className="working-block-four wow fadeInUp"
                data-wow-delay={item.delay}
                key={index}>
                <div className="inner-block">
                  <div className="content-box">
                    <span>{item.institute}</span>
                    <h4 className="title">{item.title}</h4>
                  </div>
                  <div className="year-text">{item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEducationSection;