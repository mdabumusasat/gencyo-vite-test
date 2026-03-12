import React, { useState } from "react";
import { Link } from "react-router-dom";
import serviceLight from "../../assets/images/resource/service-light-3-1.png";
import serviceBg from "../../assets/images/background/service-bg-3-1.jpg";
import serviceVec from "../../assets/images/resource/service-vec-3-1.png";
import starIcon from "../../assets/images/icons/star.png";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";
import serviceImg1 from "../../assets/images/resource/service-3-1.jpg";

const services = [
  {
    title: "Website Development",
    image: serviceImg1,
    delay: ".2s",
  },
  {
    title: "UI/UX Design",
    image: serviceImg1,
    delay: ".4s",
  },
  {
    title: "Cloud Solutions",
    image: serviceImg1,
    delay: ".6s",
  },
  {
    title: "Digital Marketing",
    image: serviceImg1,
    delay: ".8s",
    extraClass: "bb-bottom-add",
  },
];
export default function ServiceSectionThree() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="service-section-3 section-padding pt-0">
      <div className="service-light">
        <img src={serviceLight} alt="service light" />
      </div>
      <div
        className="service-inner-3 section-padding bg-cover"
        style={{ backgroundImage: `url(${serviceBg})` }}>
        <div className="service-vec tm-gsap-animate-circle d-none d-xxl-block">
          <img src={serviceVec} alt="service vector" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="sec-title text-center mb-60">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={starIcon} alt="star" />
                  Our Service
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Professional IT Services for Modern <span>Businesses</span>
                </h2>
              </div>
            </div>
          </div>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-block-three wow fadeInUp"
              data-wow-delay={service.delay}
              onMouseEnter={() => setActiveIndex(index)}>
              <div
                className={`inner-box ${
                  activeIndex === index ? "active" : ""
                } ${service.extraClass || ""}`}>
                <div className="image-box">
                  <Link href="/page-service-details">
                    <img src={service.image} alt={service.title} />
                  </Link>
                </div>
                <div className="content-box">
                  <div className="content">
                    <h4 className="title">
                      <Link href="/page-service-details">{service.title}</Link>
                    </h4>
                    <div className="text">Branding / Development</div>
                  </div>
                  <ul className="service-list-item">
                    <li>UX/UI Design</li>
                    <li>Prototyping</li>
                    <li>Development</li>
                  </ul>
                  <div className="icon-box">
                    <Link href="/page-service-details">
                      <i className="icon fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="service-button wow fadeInUp" data-wow-delay=".3s">
            <Link href="/page-about" className="btn-style-one">
              <span className="btn-arrow-left">
                <img src={arrowIcon} alt="arrow" />
              </span>
              <span className="btn-title">Discover More</span>
              <span className="btn-arrow-right">
                <img src={arrowIcon} alt="arrow" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}