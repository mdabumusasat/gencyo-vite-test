import React from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/icons/star.png";
import pricingFlower from "../../assets/images/icons/pricing-flower-2-1.png";
import checkIcon from "../../assets/images/icons/check-2-1.png";

const pricingPlans = [
  {
    title: "Starter Plan",
    price: 399,
    duration: "Monthly",
    features: [
      "Full Website SEO Audit",
      "Keyword Research & Targeting",
      "Market & Industry Research",
      "SEO Strategy Development",
      "Monthly Health Reports",
    ],
    recommended: false,
  },
  {
    title: "Professional Plan",
    price: 660,
    duration: "Monthly",
    features: [
      "Full Website SEO Audit",
      "Keyword Research & Targeting",
      "Market & Industry Research",
      "SEO Strategy Development",
      "Monthly Health Reports",
    ],
    recommended: true,
  },
  {
    title: "Enterprise Plan",
    price: 990,
    duration: "Monthly",
    features: [
      "Full Website SEO Audit",
      "Keyword Research & Targeting",
      "Market & Industry Research",
      "SEO Strategy Development",
      "Monthly Health Reports",
    ],
    recommended: false,
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section-2 fix section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="icon" /> Our Pricing Plan
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Select a Plan According <br />
                <span>To Your Requirements</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}>
              <div
                className={`pricing-block ${
                  plan.recommended ? "style-2" : ""
                }`}>
                <div className="inner-box">
                  {plan.recommended && (
                    <div className="recommend">Recommended</div>
                  )}
                  <div className="pricing-header">
                    <h6 className="sub-title">{plan.title}</h6>
                    <h2 className="price">
                      <sup>$</sup>
                      {plan.price}
                      <sub> / {plan.duration}</sub>
                    </h2>
                    <div className="pricing-flower">
                      <img src={pricingFlower} alt="flower" />
                    </div>
                  </div>
                  <ul className="pricing-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <img src={checkIcon} alt="check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-button">
                    <Link to="/page-contact" className="pricing-btn">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;