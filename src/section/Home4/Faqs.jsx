import React, { useState } from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/icons/star.png";
import faqIcon from "../../assets/images/icons/faq-icon-4-1.png";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";

const faqData = [
  {
    question: "How do I know what to freelance in?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "What should I include in a freelance proposal?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Do you offer custom website or app development?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "What is your pricing model or cost structure?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Can you help with ongoing support?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const FaqSectionFour = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section-4 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="sec-title text-center">
              <span className="sub-title">
                <img src={starIcon} alt="star" />
                Frequently Asked Question
              </span>
              <h2 className="title">
                Have Questions in Your Mind? Get
                <span className="d-xl-block">the Answers Now</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-xl-8 col-lg-7">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-block-one style-new-2 ${
                    isActive ? "active" : ""
                  }`}>
                  <div
                    className="title-box d-flex justify-content-between align-items-center"
                    onClick={() => toggleFaq(index)}
                    style={{ cursor: "pointer" }}>
                    <h5 className="title mb-0">{item.question}</h5>
                    <span className="icon">
                      {isActive ? (
                        <i className="fa-sharp fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-sharp fa-solid fa-plus"></i>
                      )}
                    </span>
                  </div>
                  {isActive && (
                    <div className="content-box show">
                      <div className="inner">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="faqs-block-crm">
              <figure className="image mb-4">
                <img src={faqIcon} alt="FAQ Icon" />
              </figure>
              <h4 className="mb-3">Still Have Question?</h4>
              <div className="text mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking.
              </div>
              <Link to="/page-contact" className="btn-style-one">
                <span className="btn-arrow-left">
                  <img src={arrowIcon} alt="arrow" />
                </span>
                <span className="btn-title">Send Mail</span>
                <span className="btn-arrow-right">
                  <img src={arrowIcon} alt="arrow" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSectionFour;