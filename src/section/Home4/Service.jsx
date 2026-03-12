import React, { useState } from "react";
import { Link } from "react-router-dom";
import serviceLight1 from "../../assets/images/icons/service-light-4-1.png";
import serviceLight2 from "../../assets/images/icons/service-light-4-2.png";
import serviceVec from "../../assets/images/icons/service-vec4-1.png";
import star from "../../assets/images/icons/star.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import serviceBg from "../../assets/images/background/service-bg-3-1.jpg";
import serviceImg from "../../assets/images/resource/service-4-1.jpg";

const services = [
  {
    id: 1,
    title: "E-commerce Solutionsgy",
    desc: "Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly",
    tags: ["Email Marketing", "Affiliate Marketing"],
    img: serviceImg,
    delay: "0s",
  },
  {
    id: 2,
    title: "UI/UX & Web Design",
    desc: "Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly",
    tags: ["Email Marketing", "Affiliate Marketing"],
    img: serviceImg,
    delay: ".2s",
  },
  {
    id: 3,
    title: "E-commerce Solutionsgy",
    desc: "Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly",
    tags: ["Email Marketing", "Affiliate Marketing"],
    img: serviceImg,
    delay: ".4s",
  },
  {
    id: 4,
    title: "Web & App Development",
    desc: "Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly",
    tags: ["Email Marketing", "Affiliate Marketing"],
    img: serviceImg,
    delay: ".6s",
  },
  {
    id: 5,
    title: "Data Entry & Research",
    desc: "Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly",
    tags: ["Email Marketing", "Affiliate Marketing"],
    img: serviceImg,
    delay: ".8s",
    borderRadius: true,
  },
];

export default function ServiceSection4() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="service-section-4">
      <div className="service-light d-none d-xxl-block">
        <img src={serviceLight1} alt="Light Shape" />
      </div>
      <div className="service-light2 d-none d-xxl-block">
        <img src={serviceLight2} alt="Light Shape 2" />
      </div>
      <div
        className="service-inner-4 section-padding bg-cover"
        style={{ backgroundImage: `url(${serviceBg})` }}>
        <div className="service-vec tm-gsap-animate-circle d-none d-xxl-block">
          <img src={serviceVec} alt="Vector Shape" />
        </div>
        <div className="container">
          <div className="sec-title">
            <div className="row g-4 justify-content-between align-items-end">
              <div className="col-xxl-7 col-xl-7 col-lg-8">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={star} alt="Star Icon" /> What I Do
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Expert Freelance Solutions for <span>Your Needs</span>
                </h2>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4">
                <Link to="/page-services" className="btn-style-one">
                  <span className="btn-arrow-left">
                    <img src={arrow} alt="" />
                  </span>
                  <span className="btn-title">View All Services</span>
                  <span className="btn-arrow-right">
                    <img src={arrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {services.map((service) => (
            <div
              key={service.id}
              className="service-block-four wow fadeInUp"
              data-wow-delay={service.delay}
              onMouseEnter={() => setActiveId(service.id)}>
              <div
                className={`inner-box ${
                  activeId === service.id ? "active" : ""
                } ${service.borderRadius ? "border-radius-add" : ""}`}>
                <div
                  className={`service-box-four ${
                    service.borderRadius ? "border-radius-add" : ""
                  }`}>
                  <h4 className="title">
                    {service.id.toString().padStart(2, "0")}. {service.title}
                  </h4>
                  <Link to="/page-service-details" className="arrow-icon">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
                {activeId === service.id && (
                  <div className="service-box-hover-four mt-0">
                    <div className="content-box">
                      <h4 className="title">
                        <Link to="/page-service-details">
                          {service.id.toString().padStart(2, "0")}.{" "}
                          {service.title}
                        </Link>
                      </h4>
                      <div className="text">{service.desc}</div>
                      <div className="tag-items">
                        {service.tags.map((tag, index) => (
                          <Link
                            key={index}
                            to="/page-services"
                            className={`tag-box ${
                              index === 1 ? "bg-2" : ""
                            }`}>
                            {tag}
                          </Link>
                        ))}
                      </div>
                      <Link to="/page-services" className="tag-box bg-3">
                        Analytics and Reporting
                      </Link>
                    </div>
                    <div className="image-box">
                      <img src={service.img} alt={service.title} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}