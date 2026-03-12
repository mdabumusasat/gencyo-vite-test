import React from "react";
import { Link } from "react-router-dom";
import star from "../../assets/images/icons/star.png";
import news1 from "../../assets/images/resource/news-1-1.jpg";
import news2 from "../../assets/images/resource/news-1-2.jpg";
import news3 from "../../assets/images/resource/news-1-3.jpg";

const posts = [
  {
    id: 1,
    image: news1,
    day: "20",
    category: "Digital Agency",
    title: "Why Your Brand Needs a Strong Online Presence",
    link: "/news-details",
  },
  {
    id: 2,
    image: news2,
    day: "05",
    category: "Digital Agency",
    title: "Designing User Experiences That Actually Convert",
    link: "/news-details",
  },
  {
    id: 3,
    image: news3,
    day: "08",
    category: "Digital Agency",
    title: "Brand Identity Essentials for Digital Businesses",
    link: "/news-details",
  },
];

export default function NewsSection3() {
  return (
    <section className="news-section-3 fix section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={star} alt="star" />
                Our Blog
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Check Out Latest News
                <span> Update & Articles</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`.${index + 3}s`}>
              <div className="blog-box">
                <div className="inner-box">
                  <div className="image-box position-relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid"
                    />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid"
                    />
                    <div className="num">{post.day}</div>
                  </div>
                  <div className="content-box">
                    <Link to={post.link} className="post-text">
                      {post.category}
                    </Link>
                    <h4 className="title">
                      <Link to={post.link}>{post.title}</Link>
                    </h4>
                    <Link to={post.link} className="arrow-link">
                      Read More
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 5.60006L10.5 5.60006M12.8353 5.61358C10.6569 5.48049 6.3 6.41212 6.3 11.2034M12.8353 5.58981C10.6569 5.7229 6.3 4.79127 6.3 0"
                          stroke="white"
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