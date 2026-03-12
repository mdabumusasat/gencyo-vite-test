import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import serviceDetailsImg from "../assets/images/resource/service-details.jpg";
import serviceD1 from "../assets/images/resource/service-d1.jpg";
import serviceD2 from "../assets/images/resource/service-d2.jpg";

const sidebarServices = [
  { title: "App Development", slug: "/page-service-details", current: true },
  { title: "UI/UX Design", slug: "/page-service-details", current: true },
  { title: "Website Design", slug: "/page-service-details" },
  { title: "Web Development", slug: "/page-service-details" },
  { title: "E-commerce Development", slug: "/page-service-details" },
  { title: "Branding Identity", slug: "/page-service-details" },
];

const sliderData = [
  {
    img: serviceD1,
    text: "Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing",
  },
  {
    img: serviceD2,
    text: "Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing",
  },
  {
    img: serviceD1,
    text: "Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing",
  },
];

const faqData = [
  {
    question: "What services does your creative agency offer?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "Do you provide brand guidelines?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    active: true,
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "Do you provide digital marketing services?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

export default function ServiceDetails() {
  const [activeFaq, setActiveFaq] = useState(
    faqData.findIndex((faq) => faq.active) || 0
  );

  return (
    <section className="services-details pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    <li><Link to="/page-service-details" className="current"><i className="fas fa-angle-right"></i><span>App Development</span></Link></li>
                    <li className="current"><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>UI/UX Design</span></Link></li>
                    <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Website Design</span></Link></li>
                    <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Web Development</span></Link></li>
                    <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>E-commerce Development</span></Link></li>
                    <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Branding Identity</span></Link></li>
    						  </ul>
                </div>
                <div className="service-details-help">
                  <div className="help-shape-1"></div>
                  <div className="help-shape-2"></div>
                  <h2 className="help-title">
                    Contact with <br /> us for any <br /> advice
                  </h2>
                  <div className="help-icon">
                    <span className="lnr-icon-phone-handset"></span>
                  </div>
                  <div className="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <Link to="#">
                      +892 ( 123 ) 112 - 9999
                    </Link>
                  </div>
                </div>
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <div className="service-sidebar-single-btn d-grid">
                    <Link to="#" className="theme-btn btn-style-one d-grid">
                      <span>
                        <i className="fas fa-file-pdf"></i> download pdf file
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="services-details__content">
              <div className="service-details-image fix">
                <img
                  className="w-100"
                  src={serviceDetailsImg}
                  alt="Service Details"
                />
              </div>
              <h3 className="mt-4 mb-2">Service Overview</h3>
    						<p className="text mb-3">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
    						<p className="text mb-3">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit  </p>
              <div className="content mt-40">
                <h3 className="mb-2">Service Center</h3>
                  <p className="text mb-3">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <blockquote className="blockquote-one mb-3">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur</blockquote>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={2}
                  loop={true}
                  modules={[Navigation]}
                  className="project-image-slider">
                  {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <figure className="image">
                        <img src={slide.img} alt="" className="w-100" />
                      </figure>
                      <p className="text">{slide.text}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="faq-content mt-5">
                <h3 className="mb-3">Frequently Asked Question</h3>
                <p className="text mb-3">
                  Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <ul className="accordion-box p-0 mt-40">
                  {faqData.map((faq, idx) => (
                    <li
                      key={idx}
                      className={`accordion block ${
                        activeFaq === idx ? "active-block" : ""
                      }`}>
                      <div
                        className={`acc-btn ${
                          activeFaq === idx ? "active" : ""
                        }`}
                        onClick={() => setActiveFaq(idx)}>
                        {faq.question}
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${
                          activeFaq === idx ? "current" : ""
                        }`}>
                        <div className="content">
                          <div className="text">{faq.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}