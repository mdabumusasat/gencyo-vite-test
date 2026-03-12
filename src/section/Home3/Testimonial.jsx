import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import light1 from "../../assets/images/icons/testimonial-light3-1.png";
import light2 from "../../assets/images/icons/testimonial-light3-2.png";
import star from "../../assets/images/icons/star.png";
import quoteIcon from "../../assets/images/icons/quote-icon-3-1.png";
import client1 from "../../assets/images/resource/client3-1.jpg";
import client2 from "../../assets/images/resource/client3-2.jpg";
import client3 from "../../assets/images/resource/client3-3.jpg";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CEO, Bright Solutions",
    image: client1,
    text: "As we scaled from startup to enterprise, Gencyo guided our complete digital transformation. Their strategic roadmap, cloud migration expertise, and change management support",
  },
  {
    name: "Wade Warren",
    role: "Marketing Director",
    image: client2,
    text: "As we scaled from startup to enterprise, Gencyo guided our complete digital transformation. Their strategic roadmap, cloud migration expertise, and change management support",
  },
  {
    name: "Arlene McCoy",
    role: "Data Analyst",
    image: client3,
    text: "As we scaled from startup to enterprise, Gencyo guided our complete digital transformation. Their strategic roadmap, cloud migration expertise, and change management support",
  },
  {
    name: "Michael Thompson",
    role: "CEO, Bright Solutions",
    image: client1,
    text: "As we scaled from startup to enterprise, Gencyo guided our complete digital transformation. Their strategic roadmap, cloud migration expertise, and change management support",
  },
];

export default function TestimonialSection3() {
  return (
    <section className="testimonial-section-3 fix section-padding">
      <div className="testimonial-light1">
        <img src={light1} alt="" />
      </div>
      <div className="testimonial-light2">
        <img src={light2} alt="" />
      </div>
      <div className="container">
        <div className="sec-title">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-xl-7 col-lg-8">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={star} alt="" /> Our Testimonial
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                What Our Happy Clients <br />
                Say <span>About Us</span>
              </h2>
            </div>
            <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-delay=".3s">
              <div className="client-top-items justify-content-start justify-content-xl-end">
                <div className="client-image">
                  <img src={client1} alt="" />
                  <img src={client2} alt="" />
                  <img src={client3} alt="" />
                </div>
                <div className="text">
                  Worldwide Brand & <br /> Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="testimonial-slider-3"
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}>
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="testimonial-slider-4"
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3500, reverseDirection: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}>
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-block-three">
      <div className="inner-box">
        <div className="quote-icon">
          <img src={quoteIcon} alt="" />
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
  );
}