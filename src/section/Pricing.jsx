import React from "react";
import { Link } from "react-router-dom";
import pricingFlower from "../assets/images/icons/pricing-flower-2-1.png";
import checkIcon from "../assets/images/icons/check-2-1.png";

const pricingPlans = [
  {
    title: "Starter Plan",
    price: 399,
    delay: ".3s",
    recommended: false,
  },
  {
    title: "Professional Plan",
    price: 660,
    delay: ".5s",
    recommended: true,
  },
  {
    title: "Enterprise Plan",
    price: 990,
    delay: ".7s",
    recommended: false,
  },
];

const features = [
  "Full Website SEO Audit",
  "Keyword Research & Targeting",
  "Market & Industry Research",
  "SEO Strategy Development",
  "Monthly Health Reports",
];

export default function PricingSectionTwo() {
  return (
    <section className="pricing-section-2 fix section-padding">
      <div className="container">
        <div className="row">

          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={plan.delay}>
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
                      <sup>$</sup> {plan.price} <sub>/ Monthly</sub>
                    </h2>
                    <div className="pricing-flower">
                      <img src={pricingFlower} alt="flower" />
                    </div>
                  </div>
                  <ul className="pricing-list">
                    {features.map((item, i) => (
                      <li key={i}>
                        <img src={checkIcon} alt="check" />
                        {item}
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
}