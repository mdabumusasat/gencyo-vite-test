import React from "react";
import { Link } from "react-router-dom";
import ctaBannerImg from "../../assets/images/resource/cta-banner4-1.jpg";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";

const CtaBannerSectionFour = () => {
  return (
    <section className="cta-banner-section-4 scale-up-img fix section-padding">
      <div className="cta-banner-inner-4 fix position-relative">
        <img
          src={ctaBannerImg}
          alt="CTA Banner"
          className="scale-up object-cover"/>
        <div className="content">
          <div className="sec-title mb-0">
            <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
              Designing the <br />
              Future of Digital <br />
              Experiences
            </h2>
            <Link
              to="/page-contact"
              className="btn-style-one wow fadeInUp mt-4 d-inline-flex align-items-center">
              <span className="btn-arrow-left">
                <img src={arrowIcon} alt="arrow" />
              </span>
              <span className="btn-title px-2">Contact Me</span>
              <span className="btn-arrow-right">
                <img src={arrowIcon} alt="arrow" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSectionFour;