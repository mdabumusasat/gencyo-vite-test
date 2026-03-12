import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/images/icons/service-icon-1-1.png";
import icon2 from "../assets/images/icons/service-icon-1-2.png";
import icon3 from "../assets/images/icons/service-icon-1-3.png";
import icon4 from "../assets/images/icons/service-icon-1-4.png";
import icon5 from "../assets/images/icons/service-icon-1-5.png";
import icon6 from "../assets/images/icons/service-icon-1-6.png";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    icon: icon1,
    number: "01",
    description:
      "It is a long established fact that a reader will be distracted by the readable",
    slug: "/page-service-details",
    delay: ".3s",
  },
  {
    id: 2,
    title: "Brand Strategy",
    icon: icon2,
    number: "02",
    description:
      "It is a long established fact that a reader will be distracted by the readable",
    slug: "/page-service-details",
    delay: ".5s",
  },
  {
    id: 3,
    title: "Web Development",
    icon: icon3,
    number: "03",
    description:
      "It is a long established fact that a reader will be distracted by the readable",
    slug: "/page-service-details",
    delay: ".7s",
  },
  {
    id: 4,
    title: "App Development",
    icon: icon4,
    number: "04",
    description:
      "It is a long established fact that a reader will be distracted by the readable",
    slug: "/page-service-details",
    delay: ".3s",
  },
  {
    id: 5,
    title: "Search Optimization",
    icon: icon5,
    number: "05",
    description:
      "It is a long established fact that a reader will be distracted by the readable",
    slug: "/page-service-details",
    delay: ".5s",
  },
  {
    id: 6,
    title: "Digital Marketing",
    icon: icon6,
    number: "06",
    description:
      "It is a long established fact that a reader will be distracted by the readable",
    slug: "/page-service-details",
    delay: ".7s",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-section pt-120 pb-120">
      <div className="auto-container">
        <div className="row g-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
              data-wow-delay={service.delay}>
              <div className="service-block-one">
                <div className="inner-block">
                  <span className="dot"></span>
                  <span className="number">{service.number}</span>
                  <div className="content-box">
                    <div className="icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h4 className="title">
                      <Link to={service.slug}>{service.title}</Link>
                    </h4>
                    <div className="text">{service.description}</div>
                    <Link
                      to={service.slug}
                      className="arrow-link d-inline-flex align-items-center gap-2 mt-2">
                      View Details
                      <svg
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 8H15M18.3361 8.019C15.2241 7.829 9 9.16 9 16.0048M18.3361 7.985C15.2241 8.176 9 6.845 9 0"
                          stroke="#FF6B1E"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}