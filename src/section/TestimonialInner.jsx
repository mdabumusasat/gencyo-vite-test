import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonialLight from "../assets/images/icons/testimonial-light-4-1.png";
import testimonialBg from "../assets/images/background/testimonial-bg-4-1.jpg";
import testiVec from "../assets/images/icons/testi-vec.png";
import testimonialImg from "../assets/images/resource/testimonial-4-1.jpg";
import starIcon from "../assets/images/icons/star.png";

const testimonials = [
  {
    text: "Working with Gencyo was a game-changer for our app redesign. They conducted thorough user research, created seamless wireframes, and delivered pixel-perfect designs that aligned perfectly with our brand. The project was completed ahead of schedule",
    name: "Amanda Lee",
    role: "CEO, Edigital",
  },
  {
    text: "Working with Gencyo was a game-changer for our app redesign. They conducted thorough user research, created seamless wireframes, and delivered pixel-perfect designs that aligned perfectly with our brand. The project was completed ahead of schedule",
    name: "Amanda Lee",
    role: "CEO, Edigital",
  },
];

const TestimonialSection = () => {
  return (
    <section className="tetsimonial-section-4">
      <div className="testimonial-light d-none d-xxl-block">
        <img src={testimonialLight} alt="shape" />
      </div>
      <div
        className="testimonial-inner-4 section-padding bg-cover"
        style={{ backgroundImage: `url(${testimonialBg})` }}>
        <div className="testi-vec d-none d-xxl-block">
          <img src={testiVec} alt="vector" />
        </div>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="testimonial-image-block4 fix">
                <img
                  src={testimonialImg}
                  alt="testimonial"
                  className="img-custom-anim-left"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-block-four">
                <div className="sec-title mb-0">
                  <span className="sub-title">
                    <img src={starIcon} alt="star" />
                    Testimonial
                  </span>
                  <h2 className="title">
                    What Clients Say <span>About Me</span>
                  </h2>
                </div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".array-next",
                    prevEl: ".array-prev",
                  }}
                  className="testimonial-slider-5">
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="inner-box">
                        <div className="text">
                          {item.text}
                        </div>
                        <div className="clinet-info">
                          <h4 className="name">{item.name}</h4>
                          <div className="sub-text">{item.role}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="array-button">
                  <button className="array-prev">
                    <i className="fas fa-long-arrow-left"></i>
                  </button>
                  <button className="array-next">
                    <i className="fas fa-long-arrow-right"></i>
                  </button>
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