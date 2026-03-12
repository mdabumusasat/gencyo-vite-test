import React from "react";
import { Link } from "react-router-dom";
import TeamImage1 from "../../assets/images/resource/team-3-1.jpg";
import TeamImage2 from "../../assets/images/resource/team-3-2.jpg";
import TeamImage3 from "../../assets/images/resource/team-3-3.jpg";
import TeamImage4 from "../../assets/images/resource/team-3-4.jpg";
import TeamIconImage1 from "../../assets/images/icons/star.png";
import TeamIconImage2 from "../../assets/images/icons/right-arrow-1-2.png";

const teamMembers = [
  {
    id: 1,
    name: "Ethan Roberts",
    role: "Project Managers",
    image: TeamImage1,
    delay: ".2s",
  },
  {
    id: 2,
    name: "Ethan Roberts",
    role: "Project Managers",
    image: TeamImage2,
    delay: ".4s",
  },
  {
    id: 3,
    name: "Ethan Roberts",
    role: "Project Managers",
    image: TeamImage3,
    delay: ".6s",
  },
  {
    id: 4,
    name: "Ethan Roberts",
    role: "Project Managers",
    image: TeamImage4,
    delay: ".8s",
  },
];

const TeamSection3 = () => {
  return (
    <section className="team-section-3 section-padding">
      <div className="container">
        <div className="sec-title text-center text-lg-start">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-xl-7 col-lg-8">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={TeamIconImage1} alt="star" /> Our Experts
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Meet Our Experienced <span>Team People</span>
              </h2>
            </div>
            <div
              className="col-xl-3 col-lg-4 wow fadeInUp"
              data-wow-delay=".3s">
              <div className="project-btn text-center text-lg-end">
                <Link to="/page-team" className="btn-style-one">
                  <span className="btn-arrow-left">
                    <img
                      src={TeamIconImage2}
                      alt="arrow"
                    />
                  </span>
                  <span className="btn-title">View All Experts</span>
                  <span className="btn-arrow-right">
                    <img
                      src={TeamIconImage2}
                      alt="arrow"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}>
              <div className="team-block-three">
                <div className="inner-block">
                  <div className="image-block">
                    <img src={member.image} alt={member.name} />
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="content-block">
                    <h4 className="title">
                      <Link to="/page-team-details">{member.name}</Link>
                    </h4>
                    <div className="text">{member.role}</div>
                    <div className="social-icon">
                      <Link to="#" aria-label="Twitter">
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                      <Link to="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="#" aria-label="Pinterest">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                      <Link to="#" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
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

export default TeamSection3;