import React from "react";
import { Link } from "react-router-dom";
import contactShape1 from "../../assets/images/resource/contact-shape-1-2.png";
import contactShape2 from "../../assets/images/resource/contact-1-1.jpg";
import contactShape3 from "../../assets/images/resource/contact-shape-1-1.png";
import starIcon from "../../assets/images/icons/star.png";
import locationIcon from "../../assets/images/icons/location.svg";
import emailIcon from "../../assets/images/icons/email.svg";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";

const ContactSection = () => {
  return (
    <section className="contact-section section-padding">
      <div className="vec-shape d-none d-xl-block">
        <img src={contactShape1} alt="shape" />
      </div>
      <div className="contact-image fix">
        <img data-speed=".8" src={contactShape2} alt="contact" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-content-1">
              <div className="sec-title mb-0">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={starIcon} alt="icon" />
                  Contact us
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Always Happy to <span className="d-xl-block">Hear from You</span>
                </h2>
              </div>
              <div className="contact-text wow fadeInUp" data-wow-delay=".2s">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>
              <div className="contact-list-items">
                <div className="contact-list wow fadeInUp" data-wow-delay=".4s">
                  <h4 className="title">Location</h4>
                  <div className="contact-icon">
                    <div className="icon">
                      <img src={locationIcon} alt="icon" />
                    </div>
                    <p>Holland Park Holland, London 7QU</p>
                  </div>
                </div>
                <div className="line"></div>
                <div className="contact-list wow fadeInUp" data-wow-delay=".6s">
                  <h4 className="title">Email:</h4>
                  <div className="contact-icon">
                    <div className="icon">
                      <img src={emailIcon} alt="icon" />
                    </div>
                    <p>
                      <Link href="#" className="d-block">
                        example@gmail.com
                      </Link>
                      <Link href="#" className="d-block">
                        info8797@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-style-1">
              <div className="line-shape d-none d-xl-block">
                <img src={contactShape3} alt="shape" />
              </div>
              <form action="#" id="contact-form" className="contact-form-box">
                <div className="row g-4">
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="form-clt">
                      <input type="text" name="username" placeholder="Your Name *" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="form-clt">
                      <input type="email" name="email" placeholder="Email Address *" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="form-clt">
                      <input type="text" name="phone" placeholder="Phone *" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                    <div className="form-clt">
                      <input type="text" name="subject" placeholder="Subject (Optional)" />
                    </div>
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                    <div className="form-clt">
                      <textarea name="message" placeholder="Type Your Message"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                    <div className="contact-button">
                      <button type="submit" className="btn-style-one">
                        <span className="btn-arrow-left">
                          <img src={arrowIcon} alt="arrow" />
                        </span>
                        <span className="btn-title">Send Message</span>
                        <span className="btn-arrow-right">
                          <img src={arrowIcon} alt="arrow" />
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
    </section>
  );
};

export default ContactSection;