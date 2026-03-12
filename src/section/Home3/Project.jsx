import React from "react";
import { Link } from "react-router-dom";
import ProjectsImage1 from "../../assets/images/resource/project3-1.jpg";
import ProjectsImage2 from "../../assets/images/resource/project3-2.jpg";
import ProjectsImage3 from "../../assets/images/resource/project3-3.jpg";
import ProjectsImage4 from "../../assets/images/resource/project3-4.jpg";
import ProjectsImage5 from "../../assets/images/icons/project-light3-1.png";
import ProjectsImage6 from "../../assets/images/icons/star.png";
import ProjectsImage7 from "../../assets/images/resource/arrow.png";

const projects = [
  {
    id: 1,
    img: ProjectsImage1,
    date: "09 March, 2026",
    title: "Legacy System Migration to cloud",
    tags: ["Design", "UI/UX Design", "Branding"],
    delay: ".3s",
  },
  {
    id: 2,
    img: ProjectsImage2,
    date: "09 March, 2026",
    title: "Hybrid & Progressive Web Apps",
    tags: ["Design", "UI/UX Design", "Branding"],
    delay: ".5s",
    extraClass: "style-height-2",
  },
  {
    id: 3,
    img: ProjectsImage3,
    date: "09 March, 2026",
    title: "Enterprise Mobile Solutions",
    tags: ["Design", "UI/UX Design", "Branding"],
    delay: ".3s",
    extraClass: "top-margin-none",
  },
  {
    id: 4,
    img: ProjectsImage4,
    date: "09 March, 2026",
    title: "Load Balancing & Scaling Solutions",
    tags: ["Design", "UI/UX Design", "Branding"],
    delay: ".5s",
    extraClass: "style-height-2",
  },
];

export default function ProjectSection() {
  return (
    <section className="project-section-3 section-padding">
      <div className="project-light">
        <img src={ProjectsImage5} alt="project light" />
      </div>
      <div className="container">
        <div className="row g-4 g-xl-5">
          <div className="col-lg-6 col-md-6">
            <div className="sec-title mb-0">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={ProjectsImage6} alt="star" />
                Case Study
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Selected Case Studies That Reflect <span>Our Expertise</span>
              </h2>
            </div>
            {projects.slice(0, 2).map((project) => (
              <div className="project-block-three wow fadeInUp" data-wow-delay={project.delay} key={project.id}>
                <div className={`inner-block ${project.extraClass || ""}`}>
                  <div className="image-block">
                    <img className="hover-img" src={project.img} alt={project.title} />
                    <img className="hover-img" src={project.img} alt={project.title} />
                    <div className="tag-items">
                      {project.tags.map((tag, idx) => (
                        <Link href="/page-project" key={idx}>{tag}</Link>
                      ))}
                    </div>
                  </div>
                  <div className="content-block">
                    <div className="text">{project.date}</div>
                    <h4 className="title">
                      <Link href="/page-project-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6 col-md-6">
            {projects.slice(2).map((project) => (
              <div className="project-block-three wow fadeInUp" data-wow-delay={project.delay} key={project.id}>
                <div className={`inner-block ${project.extraClass || ""}`}>
                  <div className="image-block">
                    <img className="hover-img" src={project.img} alt={project.title} />
                    <img className="hover-img" src={project.img} alt={project.title} />
                    <div className="tag-items">
                      {project.tags.map((tag, idx) => (
                        <Link href="/page-project" key={idx}>{tag}</Link>
                      ))}
                    </div>
                  </div>
                  <div className="content-block">
                    <div className="text">{project.date}</div>
                    <h4 className="title">
                      <Link href="/page-project-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
                <div className="project-button wt-hover-btn-wrapper text-center wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/page-project" className="project-btn wt-hover-btn wt-hover-btn-item">
                    View All Work 
                    <span className="d-block"><img src={ProjectsImage7} alt="arrow" /></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}