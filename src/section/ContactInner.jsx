import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/images/icons/right-arrow-1-2.png";


export default function ContactSection() {
  return (
    <>
      <section className="contact-details pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="section-title mb-30">
                <div className="sub-title">
                  <span>Send us email</span>
                </div>
                <h2 className="title">Feel free to write</h2>
              </div>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="email"
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
                        name="subject"
                        className="form-control"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="7"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div className="mb-5 theme-btn-main">
                  <button type="submit" className="btn-style-one">
                    <span className="btn-arrow-left">
                      <img src={arrowIcon} alt="arrow" />
                    </span>
                    <span className="btn-title">Send Message</span>
                    <span className="btn-arrow-right">
                      <img src={arrowIcon} alt="arrow" />
                    </span>
                  </button>
                  <button type="reset" className="btn-style-one ms-3">
                    <span className="btn-arrow-left">
                      <img src={arrowIcon} alt="arrow" />
                    </span>
                    <span className="btn-title">Reset</span>
                    <span className="btn-arrow-right">
                      <img src={arrowIcon} alt="arrow" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="section-title mb-30">
                  <div className="sub-title">
                    <span>Need any help?</span>
                  </div>
                  <h2 className="title">Get in touch with us</h2>
                  <div className="text mt-3">
                    Lorem ipsum is simply free text available dolor sit amet
                    consectetur adipisicing elit.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-flex align-items-center mb-3">
                    <div className="icon me-3">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h5 className="mb-1">Have any question?</h5>
                      <Link to="#">+92 (020)-9850</Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <div className="icon me-3">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h5 className="mb-1">Write email</h5>
                      <Link to="#">needhelp@company.com</Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon me-3">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h5 className="mb-1">Visit anytime</h5>
                      <span>66 Brooklyn golden street, New York</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe
          className="map w-100"
          title="google-map"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
      </section>
    </>
  );
}