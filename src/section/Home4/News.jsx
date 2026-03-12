import React from "react";
import { Link } from "react-router-dom";
import newsLight from "../../assets/images/resource/news-light-4-1.png";
import newsVec from "../../assets/images/resource/news-vec-4-1.png";
import starIcon from "../../assets/images/icons/star.png";
import arrowIcon from "../../assets/images/icons/right-arrow-1-2.png";
import news1 from "../../assets/images/resource/news-3-1.jpg";
import news2 from "../../assets/images/resource/news-3-2.jpg";
import news3 from "../../assets/images/resource/news-3-3.jpg";

const blogs = [
  {
    category: "Digital Agency",
    title: "Why Your Brand Needs a Strong Online Presence",
    image: news1,
    link: "/news-details",
  },
  {
    category: "Digital Agency",
    title: "Designing User Experiences That Actually Convert",
    image: news2,
    link: "/news-details",
  },
  {
    category: "Digital Agency",
    title: "Brand Identity Essentials for Digital Businesses",
    image: news3,
    link: "/news-details",
  },
];

const NewsSectionFour = () => {
  return (
    <section className="news-section-4 position-relative">
      <div className="news-light">
        <img src={newsLight} alt="news light" />
      </div>
      <div className="news-inner-4 section-padding position-relative">
        <div className="news-vec d-none d-xxl-block">
          <img src={newsVec} alt="news vector" />
        </div>
        <div className="container">
          <div className="sec-title text-center text-lg-start">
            <div className="row g-4 justify-content-between align-items-center">
              <div className="col-xl-6 col-lg-8">
                <span className="sub-title">
                  <img src={starIcon} alt="star" /> Our Blog
                </span>
                <h2 className="title">
                  Check Out Latest News <span>Update & Articles</span>
                </h2>
              </div>
              <div className="col-xl-3 col-lg-4 text-center text-lg-end">
                <Link to="/news-details" className="btn-style-one">
                  <span className="btn-arrow-left">
                    <img src={arrowIcon} alt="arrow" />
                  </span>
                  <span className="btn-title">View All News</span>
                  <span className="btn-arrow-right">
                    <img src={arrowIcon} alt="arrow" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            {blogs.map((blog, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog-box-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <Link to={blog.link} className="post-text">
                        {blog.category}
                      </Link>
                      <h4 className="title">
                        <Link to={blog.link}>{blog.title}</Link>
                      </h4>
                    </div>
                    <div className="image-box position-relative">
                      <img src={blog.image} alt={blog.title} className="img-fluid" />
                      <img src={blog.image} alt={blog.title} className="img-fluid hover-img" />
                      <Link to={blog.link} className="circle-box">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSectionFour;