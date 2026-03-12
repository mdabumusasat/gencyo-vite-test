import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import counterBg from "../../assets/images/icons/counter-bg.jpg";
import arrowRight from "../../assets/images/icons/arrow-right.png";

const counters = [
  { value: 22 },
  { value: 612 },
];

export default function FunFactSection4() {
  return (
    <section className="funfact-section-4">
      <div
        className="funfact-area-1 bg-cover"
        style={{ backgroundImage: `url(${counterBg})` }}>
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="funfact-left-content">
                <h2 className="title split-text split-in-right char-animation">
                  Ready To Transform Your Brand With Creative Design Solutions?
                </h2>
                <Link
                  to="/page-contact"
                  className="btn-style-one wow fadeInUp">
                  <span className="btn-arrow-left">
                    <img src={arrowRight} alt="" />
                  </span>
                  <span className="btn-title">Get In Touch</span>
                  <span className="btn-arrow-right">
                    <img src={arrowRight} alt="" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="funfact-counter-items">
                <div
                  className="count-box wow fadeInUp"
                  data-wow-delay=".3s">
                  <h3 className="title">
                    <span className="count-text">
                      <CounterUp end={counters[0].value} />
                    </span>
                    k
                  </h3>
                  <p>Projects Completed</p>
                </div>
                <div className="line-border"></div>
                <div
                  className="count-box wow fadeInUp"
                  data-wow-delay=".5s">
                  <h3 className="title">
                    <span className="count-text">
                      <CounterUp end={counters[1].value} />
                    </span>
                  </h3>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}