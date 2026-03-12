import React from "react";
import { Link } from "react-router-dom";
import teamBg from "../../assets/images/background/team-bg-1-1.jpg";
import lightShape from "../../assets/images/icons/team-light-1-1.png";
import teamShape from "../../assets/images/icons/team-shape-1-1.png";
import starIcon from "../../assets/images/icons/star.png";
import team1 from "../../assets/images/resource/team-1-1.jpg";
import team2 from "../../assets/images/resource/team-1-2.jpg";
import team3 from "../../assets/images/resource/team-1-3.jpg";

const teamMembers = [
  {
    name: "Jenny Wilson",
    role: "Developer",
    image: team1,
    delay: ".3s",
    social: ["x-twitter", "facebook-f", "pinterest", "instagram"],
  },
  {
    name: "Kristin Watson",
    role: "Developer",
    image: team2,
    delay: ".5s",
    social: ["x-twitter", "facebook-f", "pinterest", "instagram"],
  },
  {
    name: "Bessie Cooper",
    role: "Developer",
    image: team3,
    delay: ".7s",
    social: ["x-twitter", "facebook-f", "pinterest", "instagram"],
  },
];

const TeamSection = () => {
  return (
    <section
      className="team-section section-padding bg-cover"
      style={{ backgroundImage: `url(${teamBg})` }}>
        <div className="light-shape">
            <img src={lightShape} alt="light-shape" />
        </div>
        <div className="team-shape tm-gsap-animate-circle">
            <img src={teamShape} alt="team-shape" />
        </div>
        <div className="container">
            <div className="sec-title text-center">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                    <img src={starIcon} alt="icon" /> Our Team
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                    Meet Our Experienced <br />
                    <span>Team People</span>
                </h2>
            </div>
            <div className="row">
                {teamMembers.map((member, index) => (
                    <div
                    key={index}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay={member.delay}>
                    <div className="team-block">
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
                            {member.social.map((icon, i) => (
                                <Link key={i} to="#">
                                <i className={`fa-brands fa-${icon}`}></i>
                                </Link>
                            ))}
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

export default TeamSection;