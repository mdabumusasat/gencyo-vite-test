import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CounterUp from "../../lib/CounterUp";
import testiBg from "../../assets/images/icons/testi-bg-shape.png";
import testiLight from "../../assets/images/icons/testi-light-shape-1-1.png";
import testiShape from "../../assets/images/icons/testi-shape-1-1.png";
import star from "../../assets/images/icons/star.png";
import circleText from "../../assets/images/icons/text-circle1-1.png";
import quoteIcon from "../../assets/images/icons/quote-icon-1-1.png";
import capterra from "../../assets/images/icons/capterra-1-1.png";
import google from "../../assets/images/icons/google-1-1.png";
import client from "../../assets/images/resource/client1-1.jpg";

const counters = [{ value: 4 }];

const testimonials = [
  {
    text: "Their data-driven SEO approach delivered real results. Our rankings improved across competitive keywords, organic traffic grew steadily, and conversions increased.",
    name: "Emily Carter",
    role: "Senior Project Manager",
    image: client,
    rating: 5,
  },
  {
    text: "Their data-driven SEO approach delivered real results. Our rankings improved across competitive keywords, organic traffic grew steadily, and conversions increased.",
    name: "Emily Carter",
    role: "Senior Project Manager",
    image: client,
    rating: 5,
  },
  {
    text: "Their data-driven SEO approach delivered real results. Our rankings improved across competitive keywords, organic traffic grew steadily, and conversions increased.",
    name: "Emily Carter",
    role: "Senior Project Manager",
    image: client,
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-wrapper testimonial-one section-padding">
      <div className="testi-bg-shape">
        <img src={testiBg} alt="shape" />
      </div>
      <div className="testi-light-shape-1">
        <img src={testiLight} alt="shape" />
      </div>
      <div className="testi-shape-1">
        <img src={testiShape} alt="shape" />
      </div>
      <div className="container">
        <div className="sec-title">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-8">
              <span className="sub-title">
                <img src={star} alt="icon" />
                Testimonial
              </span>
              <h2 className="title">
                The Best Customers <br />
                Says <span>About Our Action</span>
              </h2>
            </div>
            <div className="col-lg-3">
              <div className="testi-counter">
                <h3 className="count-box">
                  <span className="count-text">
                    <CounterUp end={counters[0].value} />
                  </span>
                </h3>
                <p>
                  (5k+) Customer
                  <span className="d-block">reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="left-content">
              <div className="circle-box">
                <img className="ani-circle" src={circleText} alt="circle" />
                <span className="icon">
                  <img src={quoteIcon} alt="quote" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="slider-box">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".array-next",
                  prevEl: ".array-prev",
                }}
                className="testimonial-slider">
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-block-one">
                      <div className="inner-box">
                        <div className="star">
                          {[...Array(item.rating)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                        <div className="text">{item.text}</div>
                        <div className="infu">
                          <div className="image">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <div className="name-info">
                            <h5 className="name">{item.name}</h5>
                            <span>{item.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="array-button">
                <button className="array-prev">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="array-next">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-customar-area">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5">
                <div className="customar-content">
                    <h4 className="customar-title">
                    <span>Our Customers</span> <br />
                    Consistently Rated 4.8/5
                    </h4>
                </div>
            </div>
            <div className="col-xl-7">
              <div className="customar-right-content">
                <div className="capterra-area">
                  <div className="icon">
                    <img src={capterra} alt="capterra" />
                  </div>
                  <div className="content">
                    <h5 className="title">Capterra</h5>
                    <div className="text">4.8/5 (102 Reviews)</div>
                  </div>
                </div>
                <div className="line"></div>
                <div className="google-area">
                  <div className="icon">
                    <img src={google} alt="google" />
                  </div>
                  <div className="content">
                    <h5 className="title">Google</h5>
                    <div className="text">4.8/5 (102 Reviews)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;