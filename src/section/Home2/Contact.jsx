import React from "react";
import ContactImg from  "../../assets/images/resource/contact2-1.png";


const ContactSectionTwo = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    // You can collect form data here or integrate with an API
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    // Optionally reset the form
    e.target.reset();
  };
  return (
        <section className="contact-section-two">
            <div className="bg bg-pattern-12"></div>
            <div className="shape-20"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
                        <div className="inner-column">
                            <div className="sec-title light">
                                <div className="sub-title">Contact us</div>
                                <h2 className="text-reveal-anim">Get in Touch</h2>
                            </div>
                            <div className="contact-form">
                                <form onSubmit={handleSubmit} id="contact-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text "id="Yname" name="Yname" placeholder="Your Name" required/>
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="email" id="Yemail" name="Yemail" placeholder="Email Address" required/>
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="subject" placeholder="Subject" required/>
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="tel" id="Ytel" name="Ytel" placeholder="Phone" required/>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea name="message" placeholder="Write a Message" required></textarea>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <div className="btn-box">
                                                <button className="theme-btn-main">
                                                    <span className="theme-btn-arrow-left"><i className="fa fa-arrow-right"></i></span>
                                                  <span className="theme-btn">Send a message</span>
                                                  <span className="theme-btn-arrow-right"><i className="fa fa-arrow-right"></i></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <figure className="image bounce-x"><img src={ContactImg} alt="Image"/>
                            </figure>
                            <div className="icon-27 zoom-one"></div>
                            <div className="icon-28 bounce-y"></div>
                            <div className="icon-29 bounce-y"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default ContactSectionTwo;
