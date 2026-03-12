import React from "react";
import { Link } from "react-router-dom";
import team1 from "../assets/images/resource/team-1-1.jpg";
import team2 from "../assets/images/resource/team-1-2.jpg";
import team3 from "../assets/images/resource/team-1-3.jpg";
import teamBg from "../assets/images/background/team-bg-1-1.jpg";
import teamLight from "../assets/images/icons/team-light-1-1.png";
import teamShape from "../assets/images/icons/team-shape-1-1.png";

const teamMembers = [
  {
    name: "Jenny Wilson",
    role: "Developer",
    img: team1,
  },
  {
    name: "Kristin Watson",
    role: "Developer",
    img: team2,
  },
  {
    name: "Bessie Cooper",
    role: "Developer",
    img: team3,
  },
  {
    name: "Kristin Watson",
    role: "Developer",
    img: team2,
  },
  {
    name: "Bessie Cooper",
    role: "Developer",
    img: team3,
  },
  {
    name: "Jenny Wilson",
    role: "Developer",
    img: team1,
  },
];

export default function TeamSection() {
  return (
    <section
      className="team-section section-padding bg-cover"
      style={{ backgroundImage: `url(${teamBg})` }}>
      <div className="light-shape">
        <img src={teamLight} alt="light" />
      </div>
      <div className="team-shape tm-gsap-animate-circle">
        <img src={teamShape} alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`.${index + 1}s`}>
              <div className="team-block">
                <div className="inner-block">
                  <div className="image-block">
                    <img src={member.img} alt={member.name} />
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="content-block">
                    <h4 className="title">
                      <Link to="/page-team-details">{member.name}</Link>
                    </h4>
                    <div className="text">{member.role}</div>
                    <div className="social-icon">
                      <Link to="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-pinterest"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-instagram"></i>
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
}