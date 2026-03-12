import React from "react";
import { Link } from "react-router-dom";
import ellipse from "../../assets/images/icons/ellipse1-1.png";
import star from "../../assets/images/icons/star.png";
import arrowBtn from "../../assets/images/icons/right-arrow-1-2.png";
import arrowIcon from "../../assets/images/icons/arrow-icon.png";
import project1 from "../../assets/images/resource/project1-1.jpg";
import project2 from "../../assets/images/resource/project1-2.jpg";
import project3 from "../../assets/images/resource/project1-3.jpg";

const ProjectSection = () => {
  return (
    <section className="project-section section-padding">
      <div className="light-shape">
        <img src={ellipse} alt="" />
      </div>
      <div className="container">
        <div className="sec-title text-center text-lg-start">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-xl-7 col-lg-8">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={star} alt="img" />
                Case Study
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Our Recently Completed <span>Latest Projects</span>
              </h2>
            </div>
            <div className="col-xl-3 col-lg-4 wow fadeInUp">
              <div className="project-btn text-center text-lg-end">
                <Link to="/page-project" className="btn-style-one">
                  <span className="btn-arrow-left">
                    <img src={arrowBtn} alt="" />
                  </span>
                  <span className="btn-title">View All Project</span>
                  <span className="btn-arrow-right">
                    <img src={arrowBtn} alt="" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
          <div className="project-block">
            <div className="inner-block">
              <div className="image-block">
                <img className="hover-img" src={project1} alt="" />
                <img className="hover-img" src={project1} alt="" />
                <Link to="/page-project-details" className="arrow-icon">
                  <img src={arrowIcon} alt="" />
                </Link>
              </div>
              <div className="content-block">
                <h4 className="title">
                  <Link to="/page-project-details">
                    E-Commerce Growth Platform
                  </Link>
                </h4>
                <ul>
                  <li>Graphic</li>
                  <li className="dot"></li>
                  <li>Graphic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
          <div className="project-block">
            <div className="inner-block">
              <div className="image-block">
                <img className="hover-img" src={project2} alt="" />
                <img className="hover-img" src={project2} alt="" />
                <Link to="/page-project-details" className="arrow-icon">
                  <img src={arrowIcon} alt="" />
                </Link>
              </div>
              <div className="content-block">
                <h4 className="title">
                  <Link to="/page-project-details">
                    Brand & Website Redesign
                  </Link>
                </h4>
                <ul>
                  <li>Graphic</li>
                  <li className="dot"></li>
                  <li>Graphic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
          <div className="project-block">
            <div className="inner-block">
              <div className="image-block">
                <img className="hover-img" src={project3} alt="" />
                <img className="hover-img" src={project3} alt="" />

                <Link to="/page-project-details" className="arrow-icon">
                  <img src={arrowIcon} alt="" />
                </Link>
              </div>
              <div className="content-block">
                <h4 className="title">
                  <Link to="/page-project-details">
                    Local Business SEO Campaign
                  </Link>
                </h4>
                <ul>
                  <li>Graphic</li>
                  <li className="dot"></li>
                  <li>Graphic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;