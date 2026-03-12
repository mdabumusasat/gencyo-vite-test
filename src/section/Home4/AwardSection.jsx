import React from "react";
import { Link } from "react-router-dom";
import awardLight from "../../assets/images/icons/award-light.png";

const awards = [
  { year: "2013", title: "Toptal Elite Awards", platform: "UI Behance" },
  { year: "2014", title: "Upwork Rising Talent Awards", platform: "Envato" },
  { year: "2018", title: "CSS Design Awards", platform: "CSS Awards" },
  { year: "2020", title: "Writer's Digest Awards", platform: "Behance" },
  { year: "2022", title: "Excellence Award", platform: "Dribble" },
  { year: "2025", title: "Brilliance Award", platform: "LinkedIn" },
];

const AwardSectionFour = () => {
  return (
    <section className="award-section-4 section-padding position-relative">
      <div className="award-light d-none d-xxl-block">
        <img src={awardLight} alt="award light" />
      </div>
      <h2 className="awar-title-text get-in-texts text-center mb-5">
        Our <span>Awards</span>
      </h2>
      <div className="container">
        {awards.map((item, index) => (
          <div key={index} className="award-block-four wow fadeInUp">
            <div
              className={`inner-box ${
                index === awards.length - 1 ? "bb-bottom-add" : ""
              }`}>
              <div className="row g-4 g-md-0 align-items-center">
                <div className="col-md-2">
                  <div className="award-text">{item.year}</div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <h5 className="award-text">{item.title}</h5>
                </div>
                <div className="col-lg-4 col-md-3">
                  <div className="award-text">{item.platform}</div>
                </div>
                <div className="col-md-1 text-end">
                  <Link to="/page-about" className="award-icon">
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardSectionFour;