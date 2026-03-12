import React from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/icons/star.png";
import projectImg1 from "../../assets/images/resource/project2-1.jpg";
import projectImg2 from "../../assets/images/resource/project2-2.jpg";
import projectImg3 from "../../assets/images/resource/project2-3.jpg";

const projects = [
  {
    title: "E-Commerce SEO Growth Campaign",
    img: projectImg1,
    tags: ["Graphic", "Web Design"],
    link: "/page-project-details",
  },
  {
    title: "Local Business SEO Domination",
    img: projectImg2,
    tags: ["Graphic", "Web Design"],
    link: "/page-project-details",
  },
  {
    title: "SaaS SEO Authority Build",
    img: projectImg3,
    tags: ["Graphic", "Web Design"],
    link: "/page-project-details",
  },
];

const ProjectSection2 = () => {
  return (
    <section className="project-section-2 fix tm-project-area section-padding">
      <div className="container">
        <div className="sec-title text-center">
          <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
            <img src={starIcon} alt="icon" /> Case Study
          </span>
          <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
            We Have Completed 1030+ <br /> <span>Awards Winning Projects</span>
          </h2>
        </div>
        <div className="des-portfolio-wrap">
          {projects.map((project, idx) => (
            <div key={idx} className="project-block-two des-portfolio-panel">
              <div className="inner-block">
                <div className="image-block">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="content-block">
                  <h4 className="title">
                    <Link to={project.link}>{project.title}</Link>
                  </h4>
                  <div className="tag-items">
                    {project.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <Link to="/page-project" className="tag-text">
                          {tag}
                        </Link>
                        {tIdx < project.tags.length - 1 && <span className="dot"></span>}
                      </React.Fragment>
                    ))}
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

export default ProjectSection2;