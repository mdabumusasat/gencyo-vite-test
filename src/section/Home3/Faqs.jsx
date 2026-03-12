import React, { useState } from "react";
import faqLight from "../../assets/images/icons/faq-light-3-1.png";
import star from "../../assets/images/icons/star.png";

const faqs = [
  {
    question: "How long have you been in business?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
  },
  {
    question: "What are your team members' qualifications?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
  },
  {
    question: "How do you handle confidential information?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
  },
  {
    question: "Can I add or change features mid-project?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
  },
  {
    question: "What is your support availability?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
  },
];

export default function FaqSection3() {
  const [activeIndex, setActiveIndex] = useState(2);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section-3 section-padding pt-0">
      <div className="faq-light">
        <img src={faqLight} alt="light" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={star} alt="star" /> Faqs
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Have Questions in Your Mind? Get the{" "}
                <span>Answers Now</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="faq-inner-items">
              <div className="content">
                <h3 className="title">Get Answers</h3>
                <div className="text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="icon-content">
                    <h6 className="icon-title">Flexible Scheduling</h6>
                    <div className="text-2">
                      It is a long established fact that a reader will be
                      distracted
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-block-one new-style-add ${
                  activeIndex === index ? "active" : ""
                }`}>
                <div
                  className="title-box"
                  onClick={() => toggleFaq(index)}
                  style={{ cursor: "pointer" }}>
                  <div className="content">
                    <h5 className="title">{item.question}</h5>
                  </div>
                  <span className="icon">
                    <i
                      className={`fa-sharp fa-solid ${
                        activeIndex === index ? "fa-minus" : "fa-plus"
                      }`}
                    ></i>
                  </span>
                </div>
                <div
                  className={`content-box ${
                    activeIndex === index ? "show" : ""
                  }`}>
                  <div className="inner">
                    <div className="text">{item.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}