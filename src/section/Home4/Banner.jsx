import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/banner/hero-bg4-1.png";
import heroThumb from "../../assets/images/banner/hero-image.jpg";
import heroMain from "../../assets/images/banner/hero-image-4-1.jpg";
import shape1 from "../../assets/images/banner/shape-1.png";
import shape2 from "../../assets/images/banner/shape-2.png";
import shape3 from "../../assets/images/banner/shape-3.png";
import shape4 from "../../assets/images/banner/shape-4.png";

export default function HeroSection4() {
  return (
    <section
      className="hero-section hero-4 bg-cover"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-7 col-lg-6 col-md-6">
            <div className="hero-content">
              <h1 className="hero-title char-animation">
                <span>Hello</span>
                I’m Albert
              </h1>
              <div className="hero-items wow fadeInUp" data-wow-delay=".3s">
                <div className="thumb">
                  <img src={heroThumb} alt="Hero Thumb" />
                </div>
                <div className="content">
                  <div className="text">
                    Gencyo is a full-service freelancing and software development
                    company that helps small to medium businesses automate
                    processes
                  </div>
                  <div className="social-icon">
                    <Link to="#"><i className="fab fa-x-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                    <Link to="#"><i className="fab fa-youtube"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="hero-image position-relative">
              <img src={heroMain} alt="Hero Main" className="img-fluid" />
              <div className="shape1">
                <img src={shape1} alt="" />
              </div>
              <div className="shape2">
                <img src={shape2} alt="" />
              </div>
              <div className="shape3">
                <img src={shape3} alt="" />
              </div>
              <div className="shape4">
                <img src={shape4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-section4">
        <div className="marquee-two">
          {[...Array(5)].map((_, i) => (
            <div className="marquee-group" key={i}>
              <div className="text">UI/UX Designer</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}