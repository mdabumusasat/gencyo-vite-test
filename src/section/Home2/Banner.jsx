import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/banner/hero-bg-2-1.png";
import rocketImg from "../../assets/images/icons/roket2-1.png";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";
import client1 from "../../assets/images/banner/client1.jpg";
import client2 from "../../assets/images/banner/client2.jpg";
import client3 from "../../assets/images/banner/client3.jpg";
import client4 from "../../assets/images/banner/client4.jpg";

const HeroSection = () => {
  return (
    <section
      className="hero-section-2 hero-2 bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="line-shape-animation cus-z-1 first w-100 h-100 d-flex flex-wrap">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="roket-shape float-bob-y">
        <img src={rocketImg} alt="rocket" />
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title wow fadeInUp" data-wow-delay=".3s">
            Grow Your Business with Data <span> Driven SEO</span>
          </h1>
          <div className="hero-items wow fadeInUp" data-wow-delay=".5s">
            <div className="hero-info">
              <div className="ratting-top">
                <span>4.8 </span>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <div className="text">Based on 204 Reviews</div>
                </div>
              </div>
              <div className="client-image">
                <img src={client1} alt="client1" className="icon-1" />
                <img src={client2} alt="client2" className="icon-2" />
                <img src={client3} alt="client3" className="icon-3" />
                <img src={client4} alt="client4" className="icon-4" />
                <span>+</span>
              </div>
            </div>
            <div className="content">
              <div className="hero-text">
                From startups to established companies, we create high-impact digital solutions that attract, engage, and convert customers.
              </div>
              <Link to="/page-about" className="btn-style-one">
                <span className="btn-arrow-left">
                  <img src={arrowIcon} alt="arrow left" />
                </span>
                <span className="btn-title">Discover More</span>
                <span className="btn-arrow-right">
                  <img src={arrowIcon} alt="arrow right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;