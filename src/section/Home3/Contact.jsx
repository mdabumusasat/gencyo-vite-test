import React from "react";
import { Link } from "react-router-dom";
import contactLight from "../../assets/images/icons/contact-light-3-1.png";
import contactVec from "../../assets/images/icons/contact-vec-3-1.png";
import star from "../../assets/images/icons/star.png";
import contactLogo from "../../assets/images/contact-logo.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";

const ContactSection = () => {
  return (
    <section className="contact-section-3">
      <div className="contact-light d-none d-xxl-block">
        <img src={contactLight} alt="" />
      </div>
      <div className="contact-inner-3 section-padding">
        <div className="contact-vec tm-gsap-animate-circle d-none d-xxl-block">
          <img src={contactVec} alt="" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="sec-title mb-0">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={star} alt="img" /> Contact us
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Your Free Growth Chat <span>Starts Here</span>
                </h2>
                <div className="text wow fadeInUp" data-wow-delay=".3s">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page looking
                </div>
              </div>
              <div className="contact-wrapper">
                <div
                  className="contact-widget wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms">
                  <div className="contact-badge">
                    <div className="conpany-logo">
                      <img src={contactLogo} alt="" />
                    </div>
                    <h5 className="title">Schedule a Free Consultation</h5>
                  </div>
                  <div className="contact-social">
                    <h5 className="title">Follow Us</h5>
                    <div className="social-icons">
                      <Link to="#"><i className="fab fa-x-twitter"></i></Link>
                      <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                      <Link to="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </div>
                </div>
                <div
                  className="contact-info wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms">
                  <div className="info-list">
                    <div className="subtitle">Email</div>
                    <div className="title">
                      <Link to="#">demo@example.com</Link>
                    </div>
                  </div>
                  <div className="info-list">
                    <div className="subtitle">Phone</div>
                    <div className="title">
                      <Link to="#">+629 555-0129</Link>
                    </div>
                  </div>
                  <div className="info-list">
                    <div className="subtitle">Office</div>
                    <div className="title">
                      <Link to="#">
                        1901 Thornridge Cir. Shiloh <br />
                        Hawaii 81063
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-column col-lg-6">
              <div
                className="contact-form3 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms">
                <form>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Your Name <span className="color3">*</span></label>
                      <input type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Email <span className="color3">*</span></label>
                      <input type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group col-lg-12">
                      <label>Subject <span className="color3">*</span></label>
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group col-lg-12">
                      <label>Message <span className="color3">*</span></label>
                      <textarea
                        name="message"
                        placeholder="Write a Message"
                        rows={6}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group col-lg-12">
                      <div className="btn-box">
                        <button type="submit" className="btn-style-one">
                          <span className="btn-arrow-left">
                            <img src={arrow} alt="" />
                          </span>
                          <span className="btn-title">Submit Now</span>
                          <span className="btn-arrow-right">
                            <img src={arrow} alt="" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;