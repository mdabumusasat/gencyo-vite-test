import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import brand1 from "../../assets/images/resource/brand-3-1.png";
import brand2 from "../../assets/images/resource/brand-3-2.png";
import brand3 from "../../assets/images/resource/brand-3-3.png";
import brand4 from "../../assets/images/resource/brand-3-4.png";
import brand5 from "../../assets/images/resource/brand-3-5.png";
import brandLight from "../../assets/images/icons/brand-light-3-1.png";
import brandVec from "../../assets/images/icons/brand-vec-3-1.png";

const brandImages = [brand1, brand2, brand3, brand4, brand5, brand2, brand3];

const BrandSectionThree = () => {
  return (
    <div className="brand-section-3 section-padding">
      <div className="brand-light">
        <img src={brandLight} alt="brand light" />
      </div>
      <div className="brand-vec tm-gsap-animate-circle">
        <img src={brandVec} alt="brand vector" />
      </div>
      <div className="container">
        <div className="brand-text char-animation">
          <span className="line"></span>
          Partnering with leading global brands
          <span className="line2"></span>
        </div>
        <Swiper
          className="brand-slider-3"
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}>
          {brandImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="brand-box-2">
                <span className="brand-img-1">
                  <img src={img} alt="brand logo" />
                </span>
                <span className="brand-img-1">
                  <img src={img} alt="brand logo hover" />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSectionThree;