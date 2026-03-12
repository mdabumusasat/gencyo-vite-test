import React, { useState } from "react";
import faqLight1 from "../../assets/images/icons/faq-light-2-1.png";
import faqLight2 from "../../assets/images/icons/faq-light-2-2.png";
import faqVec1 from "../../assets/images/icons/faq-vec-2-1.png";
import faqVec2 from "../../assets/images/icons/faq-vec-2-2.png";
import starIcon from "../../assets/images/icons/star.png";
import faqBg from "../../assets/images/background/faq-bg-2-1.jpg";

const faqData = [
  {
    number: "01",
    question: "What services does your digital agency offer?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is.",
  },
  {
    number: "02",
    question: "How do you approach a new project?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is.",
  },
  {
    number: "03",
    question: "Do you provide updates on how donations are being used?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is.",
  },
  {
    number: "04",
    question: "What industries do you specialize in?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is.",
  },
  {
    number: "05",
    question: "What is your pricing model or cost structure?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section-2">
      <div className="faq-light">
        <img src={faqLight1} alt="icon" />
      </div>
      <div className="faq-light2">
        <img src={faqLight2} alt="icon" />
      </div>
      <div className="faq-vec tm-gsap-animate-circle">
        <img src={faqVec1} alt="icon" />
      </div>
      <div className="faq-vec2 tm-gsap-animate-circle">
        <img src={faqVec2} alt="icon" />
      </div>
      <div
        className="faq-inner-2 fix section-padding bg-cover"
        style={{ backgroundImage: `url(${faqBg})` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="sec-title text-center mb-60">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={starIcon} alt="icon" /> Faqs
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Have Questions in Your Mind? <br />
                  <span>Get the Answers Now</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 wow fadeInUp" data-wow-delay=".3s">
              {faqData.map((faq, index) => (
                <div
                  key={faq.number}
                  className={`faq-block-two ${
                    activeIndex === index ? "active" : ""
                  }`}>
                  <div
                    className="title-box"
                    onClick={() => toggleFaq(index)}>
                    <div className="content">
                      <span className="number">{faq.number}</span>
                      <div className="line"></div>
                      <h5 className="title">{faq.question}</h5>
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
                    }`}
                  >
                    <div className="inner">
                      <div className="text">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;