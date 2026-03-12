import React from "react";
import { Link } from "react-router-dom";
import teamLight from "../../assets/images/icons/team-light-2-1.png";
import teamVec from "../../assets/images/icons/team-vec-2-1.png";
import starIcon from "../../assets/images/icons/star.png";
import teamBg from "../../assets/images/background/team-bg-2-1.jpg";
import teamBgImage from "../../assets/images/resource/team-bg-image.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Michael Turner",
    role: "Furniture Craftsman",
    style: "style-one",
  },
  {
    id: 2,
    name: "Michael Turner",
    role: "Furniture Craftsman",
    style: "style-two",
  },
  {
    id: 3,
    name: "Michael Turner",
    role: "Furniture Craftsman",
    style: "style-three",
  },
  {
    id: 4,
    name: "Michael Turner",
    role: "Furniture Craftsman",
    style: "style-four",
  },
  {
    id: 5,
    name: "Michael Turner",
    role: "Furniture Craftsman",
    style: "style-five",
  },
];

const TeamSectionTwo = () => {
  return (
    <section className="team-section-2 scale-up-img">
      <div className="team-light d-none d-xxl-block">
        <img src={teamLight} alt="Team Light" />
      </div>
      <div className="team-vec tm-gsap-animate-circle d-none d-xxl-block">
        <img src={teamVec} alt="Team Vector" />
      </div>
      <div
        className="team-inner-2 section-padding pb-0 bg-cover"
        style={{ backgroundImage: `url(${teamBg})` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="sec-title text-center">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={starIcon} alt="star" />
                  Our Team
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Meet Our Experienced <span>Team People</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="team-outer-box">
          <div className="team-bg-image fix">
            <img
              src={teamBgImage}
              alt="Team Background"
              className="scale-up"
              data-speed="0.4"
            />
          </div>
          {teamMembers.map((member) => (
            <div className="team-block-two" key={member.id}>
              <div className={`inner-block ${member.style}`}>
                <div className="dot"></div>
                <div className="author-info">
                  <div className="inner-info">
                    <h4 className="name">
                      <Link to="/page-team-details">{member.name}</Link>
                    </h4>
                    <div className="designation">{member.role}</div>
                    <ul className="social-info">
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
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

export default TeamSectionTwo;