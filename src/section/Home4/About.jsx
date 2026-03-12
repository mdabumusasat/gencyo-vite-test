import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import aboutVec from "../../assets/images/icons/about-vec-4-1.png";
import star from "../../assets/images/icons/star.png";
import client1 from "../../assets/images/resource/client3-1.jpg";
import client2 from "../../assets/images/resource/client3-2.jpg";
import client3 from "../../assets/images/resource/client3-3.jpg";
import client4 from "../../assets/images/resource/client1-1.jpg";

const counters = [
  {
    value: 5,
  },
];

export default function AboutSection4() {
  return (
    <section className="about-section-4 fix section-padding">
      <div className="about-vec tm-gsap-animate-circle d-none d-xxl-block">
        <img src={aboutVec} alt="About Shape" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="sec-title text-center mb-0">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={star} alt="Star Icon" />
                About Me
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                I am a dedicated and passionate freelancer with a commitment
                to delivering <span>high-quality work </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="about-inner-block-4">
          <div className="inner-counter wow fadeInUp" data-wow-delay=".3s">
            <h3 className="count-box">
              <span className="count-text">
                <CounterUp end={counters[0].value} />
              </span>
            </h3>
            <div className="text">
              Years Of Experience In UI/UX <br />
              Designing and Develop
            </div>
          </div>
          <div className="line"></div>
          <div className="about-content4 wow fadeInUp" data-wow-delay=".5s">
            <h5 className="title">
              I turn ideas into practical solutions that drive results. Every project
            </h5>
            <div className="about-text">
              We approached gencyo with complex project. Designing a website can
              involve various aspects such as layout, graphics, content, and
              experience. For a more…
            </div>
            <div className="about-bottom">
              <Link to="/page-about" className="about-btn">
                <span className="text">
                  <span className="text-default">
                    Continue Reading <i className="fa-regular fa-chevron-right"></i>
                  </span>
                  <span className="text-hover">
                    Continue Reading <i className="fa-regular fa-chevron-right"></i>
                  </span>
                </span>
              </Link>
              <div className="client-top-items">
                <div className="client-image">
                  <img src={client1} alt="Client 1" className="icon-1" />
                  <img src={client2} alt="Client 2" className="icon-2" />
                  <img src={client3} alt="Client 3" className="icon-3" />
                  <img src={client4} alt="Client 4" className="icon-4" />
                </div>
                <div className="text">
                  10k+ Guests
                  <div className="guest-line">
                    <svg
                      width="98"
                      height="5"
                      viewBox="0 0 98 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M90.2294 0.615385C88.1037 0.5 85.9415 0.384615 83.7792 0.269231..."
                        fill="#FF6B1E"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}