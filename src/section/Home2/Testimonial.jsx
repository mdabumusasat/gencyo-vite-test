import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import starIcon from "../../assets/images/icons/star.png";
import quoteIcon from "../../assets/images/icons/quote-icon-2-1.png";
import testimonialBg from "../../assets/images/background/testimonial-bg-2-1.jpg";
import clientImg from "../../assets/images/resource/client2-1.jpg";

const testimonials = [
  {
    text: `From our very first visit, we knew this property was something special. The layout is spacious, the natural light fills every room, and the neighborhood feels both peaceful and well-connected.`,
    name: "Amanda Lee",
    designation: "CEO, Edigital",
    image: clientImg,
  },
  {
    text: `From our very first visit, we knew this property was something special. The layout is spacious, the natural light fills every room, and the neighborhood feels both peaceful and well-connected.`,
    name: "Amanda Lee",
    designation: "CEO, Edigital",
    image: clientImg,
  },
  {
    text: `From our very first visit, we knew this property was something special. The layout is spacious, the natural light fills every room, and the neighborhood feels both peaceful and well-connected.`,
    name: "Amanda Lee",
    designation: "CEO, Edigital",
    image: clientImg,
  },
  {
    text: `From our very first visit, we knew this property was something special. The layout is spacious, the natural light fills every room, and the neighborhood feels both peaceful and well-connected.`,
    name: "Amanda Lee",
    designation: "CEO, Edigital",
    image: clientImg,
  },
];

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="testimonial-section-2">
      <div
        className="testimonial-inner-2 section-padding bg-cover"
        style={{ backgroundImage: `url(${testimonialBg})` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="sec-title text-center mb-30">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={starIcon} alt="icon" />
                  Testimonial
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  The Best Customers Says <span>About Our Action</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-2 d-none d-xl-block">
              <button ref={prevRef} className="array-prev">
                <i className="fas fa-long-arrow-left"></i>
              </button>
            </div>
            <div className="col-xl-8">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{
                  el: ".swiper-dot .dot",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".array-next",
                  prevEl: ".array-prev",
                }}
                className="testimonial-slider-2">
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-block-two">
                      <div className="inner-box">
                        <div className="quote-icon">
                          <img src={quoteIcon} alt="quote" />
                        </div>
                        <div className="text">{item.text}</div>
                        <div className="author-info">
                          <div className="thumb">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <div className="info">
                            <h6 className="name">{item.name}</h6>
                            <div className="designation">
                              {item.designation}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-dot text-center mt-5">
                  <div className="dot"></div>
                </div>
              </Swiper>
            </div>
            <div className="col-xl-2 text-end d-none d-xl-block">
              <button ref={nextRef} className="array-next">
                <i className="fas fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;