import React from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/images/resource/project3-1.jpg";
import project2 from "../assets/images/resource/project3-2.jpg";
import project3 from "../assets/images/resource/project3-3.jpg";
import project4 from "../assets/images/resource/project3-4.jpg";
import projectLight from "../assets/images/icons/project-light3-1.png";
import starIcon from "../assets/images/icons/star.png";
import arrowImg from "../assets/images/resource/arrow.png";

export default function ProjectSectionThree() {
  return (
    <section className="project-section-3 section-padding">
      <div className="project-light">
        <img src={projectLight} alt="" />
      </div>
      <div className="container">
        <div className="row g-4 g-xl-5">
          <div className="col-lg-6 col-md-6">
            <div className="sec-title mb-0">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="img" />
                Case Study
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Selected Case Studies That Reflect <span>Our Expertise</span>
              </h2>
            </div>
            <div className="project-block-three wow fadeInUp" data-wow-delay=".5s">
              <div className="inner-block">
                <div className="image-block">
                  <img className="hover-img" src={project1} alt="" />
                  <img className="hover-img" src={project1} alt="" />
                  <div className="tag-items">
                    <Link to="/page-project">Design</Link>
                    <Link to="/page-project">UI/UX Design</Link>
                    <Link to="/page-project">Branding</Link>
                  </div>
                </div>
                <div className="content-block">
                  <div className="text">09 March, 2026</div>
                  <h4 className="title">
                    <Link to="/page-project-details">
                      Legacy System Migration to cloud
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="project-block-three wow fadeInUp" data-wow-delay=".5s">
              <div className="inner-block style-height-2">
                <div className="image-block">
                  <img className="hover-img" src={project2} alt="" />
                  <img className="hover-img" src={project2} alt="" />
                  <div className="tag-items">
                    <Link to="/page-project">Design</Link>
                    <Link to="/page-project">UI/UX Design</Link>
                    <Link to="/page-project">Branding</Link>
                  </div>
                </div>
                <div className="content-block">
                  <div className="text">09 March, 2026</div>
                  <h4 className="title">
                    <Link to="/page-project-details">
                      Hybrid & Progressive Web Apps
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="project-block-three wow fadeInUp" data-wow-delay=".3s">
              <div className="inner-block top-margin-none">
                <div className="image-block">
                  <img className="hover-img" src={project3} alt="" />
                  <img className="hover-img" src={project3} alt="" />
                  <div className="tag-items">
                    <Link to="/page-project">Design</Link>
                    <Link to="/page-project">UI/UX Design</Link>
                    <Link to="/page-project">Branding</Link>
                  </div>
                </div>
                <div className="content-block">
                  <div className="text">09 March, 2026</div>
                  <h4 className="title">
                    <Link to="/page-project-details">
                      Enterprise Mobile Solutions
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="project-block-three wow fadeInUp" data-wow-delay=".5s">
              <div className="inner-block style-height-2">
                <div className="image-block">
                  <img className="hover-img" src={project4} alt="" />
                  <img className="hover-img" src={project4} alt="" />
                  <div className="tag-items">
                    <Link to="/page-project">Design</Link>
                    <Link to="/page-project">UI/UX Design</Link>
                    <Link to="/page-project">Branding</Link>
                  </div>
                </div>
                <div className="content-block">
                  <div className="text">09 March, 2026</div>
                  <h4 className="title">
                    <Link to="/page-project-details">
                      Load Balancing & Scaling Solutions
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project-button wt-hover-btn-wrapper text-center wow fadeInUp" data-wow-delay=".4s">
                <Link
                  to="/page-project"
                  className="project-btn wt-hover-btn wt-hover-btn-item">
                  View All Work
                  <span className="d-block">
                    <img src={arrowImg} alt="img" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}