import React from "react";
import { Link } from "react-router-dom";
import shape1 from "../../assets/images/resource/feature-shape-1-1.png";
import shape2 from "../../assets/images/resource/feature-shape-1-2.png";
import icon1 from "../../assets/images/icons/icon-1-1.png";
import icon2 from "../../assets/images/icons/icon-1-2.png";
import icon3 from "../../assets/images/icons/icon-1-3.png";

const FeatureSection = () => {
  return (
    <section className="feature-section-2 pt-100 pb-100">
      <div className="shape-1 float-bob-y">
        <img src={shape1} alt="img" />
      </div>
      <div className="shape-2 float-bob-y">
        <img src={shape2} alt="img" />
      </div>
      <div className="container">
        <div className="row g-5 g-xl-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="feature-block">
              <div className="inner-block">
                <div className="icon">
                  <img src={icon1} alt="img" />
                </div>
                <div className="content-box">
                  <h4 className="title">Creative Branding</h4>
                  <div className="text">
                    It is a long established fact that read will be distracted by
                    the readable content of a page when
                  </div>
                  <Link to="/page-about" className="arrow-link">
                    <span className="text">Read More</span>
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="border-line"></div>
              </div>
            </div>
          </div>
          {/* Feature Item 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="feature-block">
              <div className="inner-block">
                <div className="icon">
                  <img src={icon2} alt="img" />
                </div>
                <div className="content-box">
                  <h4 className="title">Analytics & Strategy</h4>
                  <div className="text">
                    It is a long established fact that read will be distracted by
                    the readable content of a page when
                  </div>
                  <Link to="/page-about" className="arrow-link">
                    <span className="text">Read More</span>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="border-line"></div>
              </div>
            </div>
          </div>
          {/* Feature Item 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="feature-block">
              <div className="inner-block">
                <div className="icon">
                  <img src={icon3} alt="img" />
                </div>
                <div className="content-box">
                  <h4 className="title">Content Creation</h4>

                  <div className="text">
                    It is a long established fact that read will be distracted by
                    the readable content of a page when
                  </div>
                  <Link to="/page-about" className="arrow-link">
                    <span className="text">Read More</span>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;