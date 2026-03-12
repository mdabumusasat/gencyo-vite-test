import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../lib/ProgressBar";
import teamImg from "../assets/images/resource/team.jpg";

const TeamDetails = () => {
  return (
    <section className="team-details pt-120">
      <div className="container pb-100">
        <div className="team-details__top pb-70">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  <img src={teamImg} alt="team" />
                  <div className="team-details__big-text">
                    12 years of experience
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <h3 className="team-details__top-name">
                    Sarah Lee
                    <span className="color1"> / Managing Director</span>
                  </h3>
                  <p className="team-details__text-1 mb-0">
                    Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.
                  </p>
                  <p className="team-details__text-2">
                    Bring to the table win-win survival strategies to ensure proactive domination going forward, a new normal that has evolved simply
                  </p>
                  <div className="info-outer-box">
                    <div className="info-left">
                      <div className="team-details-contact mb-30">
                        <h5 className="title">Email</h5>
                        <div className="text">
                          <span>info@yourdomain.com</span>
                        </div>
                      </div>
                      <div className="team-details-contact mb-30">
                        <h5 className="title">Phone</h5>
                        <div className="text">
                          <span>+012-3456-789</span>
                        </div>
                      </div>
                      <div className="team-details-contact">
                        <h5 className="title">Website</h5>
                        <div className="text">
                          <span>www.yourdomain.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="info-right">
                      <div className="team-details-contact mb-30">
                        <h5 className="title">Blood Group</h5>
                        <div className="text">
                          <span>AB+</span>
                        </div>
                      </div>
                      <div className="team-details-contact mb-30">
                        <h5 className="title">Age</h5>
                        <div className="text">
                          <span>25 Years</span>
                        </div>
                      </div>
                      <div className="team-details-contact">
                        <h5 className="title">Address</h5>
                        <div className="text">
                          <span>121 King Street, Melbourne</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-details__social">
                    <Link to="#"><i className="fa fa-x"></i></Link>
                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-details__bottom">
          <h4 className="team-details__bottom-left-title mb-2">
            Short Biography
          </h4>
          <p className="team-details__bottom-left-text">
            Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae abillo inventore veritatis et quasi architecto beatae There are many variations
          </p>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__bottom-left">
                <h4 className="team-details__bottom-left-title mb-2">
                  Contact Us
                </h4>
                <p className="team-details__bottom-left-text">
                  Bring to the table win-win survival strategies to ensure proactive domination going forward, a new normal that has evolved simply
                </p>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your Budget"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Message"
                    />
                  </div>
                  <div className="mb-3 theme-btn-main text-center">
                    <button
                      type="submit"
                      className="btn-style-one justify-content-center">
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__bottom-right">
                <h4 className="team-details__bottom-left-title mb-2">
                  Expertise & Skills
                </h4>
                <p className="team-details__bottom-left-text">
                  Bring to the table win-win at survival strategies win to ensure with proactiv other domination going with forward, a new normal that has evolved from generation X is on the runway heading towards a streamled solution survival strategies ensure adipisci impedit ab cloud
                </p>
                <div className="team-details__progress">
                  <ProgressBar title="Scalable Solutions" percent={90} />
                  <ProgressBar title="Automation Features" percent={80} />
                  <ProgressBar title="24/7 Support" percent={75} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;