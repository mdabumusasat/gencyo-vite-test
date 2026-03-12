import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import brand1 from "../../assets/images/icons/brand1-1.png";
import brand2 from "../../assets/images/icons/brand1-2.png";
import brand3 from "../../assets/images/icons/brand1-3.png";
import brand4 from "../../assets/images/icons/brand1-4.png";
import brand5 from "../../assets/images/icons/brand1-5.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand3, brand4];

const BrandSlider = () => {
  return (
    <div className="brand-section wow fadeInUp" data-wow-delay=".3s">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}>
        {brands.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="brand-box-1">
              <span className="brand-img-1">
                <img src={src} alt={`Brand ${index + 1}`} />
              </span>
              <span className="brand-img-1">
                <img src={src} alt={`Brand ${index + 1}`} />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;