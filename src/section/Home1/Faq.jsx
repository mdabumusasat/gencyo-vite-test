import React, { useState } from "react";
import faqLight from "../../assets/images/icons/faq-light-1-1.png";
import faqShape from "../../assets/images/icons/faq-shape-1-1.png";
import starIcon from "../../assets/images/icons/star.png";

const faqData = [
  {
    question: "What services does your digital agency offer?",
    answer:
      "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way.",
  },
  {
    question: "Do you design custom websites?",
    answer:
      "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="faq-light-shape">
        <img src={faqLight} alt="faq light" />
      </div>
      <div className="faq-shape tm-gsap-animate-circle">
        <img src={faqShape} alt="faq shape" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="sec-title text-center mb-60">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="star" />
                Faqs
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Have Questions in Your Mind? <br />
                <span> Get the Answers Now</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="faq-column col-lg-6">
            <div className="inner-column pt-0">
              <ul className="accordion-box mb-5 mb-lg-0">
                {faqData.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex === index ? "active-block" : ""
                    }`}>
                    <div
                      className={`acc-btn ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}>
                      {item.question}
                      <div className="icon far fa-angle-down"></div>
                    </div>
                    <div
                      className={`acc-content ${
                        activeIndex === index ? "current" : ""
                      }`}>
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="faq-column col-lg-6">
            <div className="inner-column pt-0">
              <ul className="accordion-box">
                {faqData.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex === index + 4 ? "active-block" : ""
                    }`}>
                    <div
                      className={`acc-btn ${
                        activeIndex === index + 4 ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index + 4)}>
                      {item.question}
                      <div className="icon far fa-angle-down"></div>
                    </div>
                    <div
                      className={`acc-content ${
                        activeIndex === index + 4 ? "current" : ""
                      }`}>
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}