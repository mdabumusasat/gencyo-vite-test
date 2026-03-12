import React from "react";
import { Link } from "react-router-dom";
import projectLight from "../../assets/images/resource/project-light-4-1.png";
import starIcon from "../../assets/images/icons/star.png";
import arrowImg from "../../assets/images/resource/arrow.png";
import projectImg1 from "../../assets/images/resource/project-4-1.jpg";
import projectImg2 from "../../assets/images/resource/project-4-2.jpg";
import projectImg3 from "../../assets/images/resource/project-4-3.jpg";
import projectImg4 from "../../assets/images/resource/project-4-4.jpg";

const projects = [
  { id: 1, title: "Behind Creta UX", text: "Design - 2016", img: projectImg1, delay: ".3s" },
  { id: 2, title: "Behind Creta UX", text: "Design - 2016", img: projectImg2, delay: ".5s" },
  { id: 3, title: "Behind Creta UX", text: "Design - 2016", img: projectImg3, delay: ".3s" },
  { id: 4, title: "Behind Creta UX", text: "Design - 2016", img: projectImg4, delay: ".5s" },
];

export default function ProjectSection4() {
  return (
    <section className="project-section-4 section-padding">
      <div className="project-light">
        <img src={projectLight} alt="Light Shape" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="sec-title text-center">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="Star" /> Case Study
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                My Recently Completed Award <span className="d-xl-block">Wining Projects</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={project.delay}>
              <div className="project-block-four">
                <div className="inner-block">
                  <Link to="/page-project-details">
                    <div className="image-block">
                      <img src={project.img} alt={project.title} className="main-img" />
                      <img src={project.img} alt={project.title} className="hover-img" />
                    </div>
                    <div className="content-block">
                      <h4 className="title">{project.title}</h4>
                      <div className="text">{project.text}</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="project-button wt-hover-btn-wrapper text-center wow fadeInUp"
          data-wow-delay=".4s">
          <Link to="/page-project" className="project-btn wt-hover-btn wt-hover-btn-item">
            View All Work
            <span className="d-block">
              <img src={arrowImg} alt="Arrow" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}