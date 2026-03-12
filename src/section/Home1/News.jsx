import React from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/icons/star.png";
import newsImg1 from "../../assets/images/resource/news-1-1.jpg";
import newsImg2 from "../../assets/images/resource/news-1-2.jpg";
import newsImg3 from "../../assets/images/resource/news-1-3.jpg";

const newsData = [
  {
    id: 1,
    img: newsImg1,
    num: "20",
    category: "Digital Agency",
    title: "Why Your Brand Needs a Strong Online Presence",
    link: "/news-details",
  },
  {
    id: 2,
    img: newsImg2,
    num: "05",
    category: "Digital Agency",
    title: "Designing User Experiences That Actually Convert",
    link: "/news-details",
  },
  {
    id: 3,
    img: newsImg3,
    num: "08",
    category: "Digital Agency",
    title: "Brand Identity Essentials for Digital Businesses",
    link: "/news-details",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section-3 fix section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="icon" />
                Our Blog
              </span>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Check Out Latest News
                <span>Update & Articles</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {newsData.map((news, index) => (
            <div
              key={news.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}>
              <div className="blog-box">
                <div className="inner-box">
                  <div className="image-box">
                    <img src={news.img} alt={news.title} />
                    <img src={news.img} alt={news.title} />
                    <div className="num">{news.num}</div>
                  </div>
                  <div className="content-box">
                    <Link to={news.link} className="post-text">
                      {news.category}
                    </Link>
                    <h4 className="title">
                      <Link to={news.link}>{news.title}</Link>
                    </h4>
                    <Link to={news.link} className="arrow-link">
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
};

export default NewsSection;