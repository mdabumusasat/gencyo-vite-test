import React from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/icons/star.png";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";
import serviceImg from "../../assets/images/resource/service-2-1.jpg";
import bgImage from "../../assets/images/background/service-bg-2-1.jpg";

const services = [
  {
    number: "01",
    title: "SEO Audit & Strategy",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    img: serviceImg,
  },
  {
    number: "02",
    title: "On-Page SEO",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    img: serviceImg,
  },
  {
    number: "03",
    title: "Technical SEO",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    img: serviceImg,
  },
  {
    number: "04",
    title: "Content Marketing",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    img: serviceImg,
  },
  {
    number: "05",
    title: "Link Building",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    img: serviceImg,
  },
];

const ServiceSection2 = () => {
  return (
    <div
      className="service-section-2 section-padding bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <div className="sec-title text-center text-lg-start">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-xl-7 col-lg-7">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="icon" /> Our Service
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Helping You Succeed <span>Through Digital Services</span>
              </h2>
            </div>
            <div className="col-xl-5 col-lg-5 wow fadeInUp" data-wow-delay=".3s">
              <div className="sercice-top-text text-end">
                <div className="top-text">
                  It is a long established fact that read will be distracted by the readable content of a page when
                </div>
                <Link to="/page-services" className="btn-style-one">
                  <span className="btn-arrow-left">
                    <img src={arrowIcon} alt="arrow left" />
                  </span>
                  <span className="btn-title">View All Service</span>
                  <span className="btn-arrow-right">
                    <img src={arrowIcon} alt="arrow right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="service-hover-box-item">
          <div className="service-line"></div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              {services.map((service, idx) => (
                <div key={idx} className="service-block-two">
                  <div className={`inner-box ${idx === 0 ? "active" : ""}`} data-index={idx + 1}>
                    <h4 className="title">
                      <Link to="/page-service-details">
                        <span className="number">{service.number}</span> {service.title}
                      </Link>
                    </h4>
                    <Link to="/page-service-details" className="arrow-icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-hover-image">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`image-box ${idx === 0 ? "active" : ""}`}
                    data-index={idx + 1}>
                    <div className="image">
                      <img src={service.img} alt="" className="hover-img" />
                      <img src={service.img} alt="" className="hover-img" />
                    </div>
                    <div className="content-box">
                      <div className="text">{service.text}</div>
                      <Link to="/page-service-details" className="link-btn">
                        View Details{" "}
                        <svg
                          width="19"
                          height="16"
                          viewBox="0 0 19 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                            stroke="#FF6B1E"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection2;