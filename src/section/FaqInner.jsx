import React, { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section pt-120 pb-120">
      <div className="container">
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