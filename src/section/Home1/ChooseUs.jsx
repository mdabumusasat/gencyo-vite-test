import React from "react";
import CounterUp from "../../lib/CounterUp";
import star from "../../assets/images/icons/star.png";
import icon1 from "../../assets/images/icons/choose-us-icon1-1.png";
import icon2 from "../../assets/images/icons/choose-us-icon1-2.png";
import client1 from "../../assets/images/icons/client-1-1.jpg";
import client2 from "../../assets/images/icons/client-1-2.jpg";
import client3 from "../../assets/images/icons/client-1-3.jpg";
import client4 from "../../assets/images/icons/client-1-4.jpg";
import ball from "../../assets/images/icons/ball.png";
import chooseImg from "../../assets/images/resource/choose-us-1-1.jpg";

const counters = [
  {
    value: 92,
  },
];

const features = [
  {
    icon: icon1,
    title: "Long-Term Support",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    border: true,
  },
  {
    icon: icon2,
    title: "Data-Driven Strategy",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    border: false,
  },
];

const clientImages = [client1, client2, client3, client4];

const ChooseUsSection = () => {
  return (
    <section className="choose-us-section section-padding pt-0">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-6">
            <div className="choose-us-content-1">
              <div className="sec-title mb-0">
                <span className="sub-title">
                  <img src={star} alt="icon" />
                  Why Choose Us
                </span>
                <h2 className="title">
                  Here’s Why Brands Trust <span>Our Expertise</span>
                </h2>
              </div>
              <div className="choose-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
              <div className="feature-box-wrapper">
                {features.map((item, index) => (
                  <div className="feature-box" key={index}>
                    <div
                      className={`inner-box ${
                        item.border ? "border-add" : ""
                      }`}>
                      <div className="icon">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="content-box">
                        <h4 className="title">{item.title}</h4>
                        <div className="text">{item.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="choose-client-info">
                <div className="info-content">
                  <div className="client-image">
                    <span>+</span>
                    {clientImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="client"
                        className={`icon-${i + 1}`}
                      />
                    ))}
                  </div>
                  <p>300+ Happy Customer</p>
                </div>
                <div className="ball-icon">
                  <img src={ball} alt="ball" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="choose-us-image-1">
              <img src={chooseImg} alt="choose us" />
              <div className="choose-counter">
                <div>
                  <h3 className="count-box">
                    <span className="count-text">
                      <CounterUp end={counters[0].value} />
                    </span>
                    %
                  </h3>
                  <p>
                    Satisfied Clients <br />
                    Returning Often
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;