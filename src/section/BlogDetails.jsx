import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../assets/images/resource/news-details.jpg";
import commentImg from "../assets/images/resource/testi1-1.jpg";
import arrowIcon from "../assets/images/icons/right-arrow-1-2.png";
import NewsImage1 from "../assets/images/resource/news-1.jpg";
import NewsImage2 from "../assets/images/resource/news-2.jpg";
import NewsImage3 from "../assets/images/resource/news-3.jpg";

const BlogDetails = () => {

  return (
    <section className="blog-section pt-90 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="blog-details__left">
              <div className="blog-details__img">
                <img src={blogImg} alt="Blog" />
                <div className="blog-details__date">
                  <span className="day">28</span>
                  <span className="month">Aug</span>
                </div>
              </div>
              <div className="blog-details__content">
                <ul className="list-unstyled blog-details__meta">
                  <li>
                    <Link to="/news-details">
                      <i className="fas fa-user-circle"></i> Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/news-details">
                      <i className="fas fa-comments"></i> 02 Comments
                    </Link>
                  </li>
                </ul>
                <h3 className="blog-details__title">
                  Technical SEO Audit Framework for 2026
                </h3>
    							<p className="blog-details__text-2 mb-3">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet </p>
    							<p className="blog-details__text-2 mb-3">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet </p>
    							<p className="blog-details__text-2 mb-3">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet </p>
              </div>
              <div className="blog-details__bottom">
                <p className="blog-details__tags">
                  <span>Tags</span>
                  <Link to="/news-details">Business</Link>
                  <Link to="/news-details">Agency</Link>
                </p>
                <div className="blog-details__social-list">
                  <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-facebook"></i></Link>
                  <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                  <Link to="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
              <div className="nav-links">
                <div className="prev">
                  <Link to="/news-details">
                    Bring to the table win-win survival strategies
                  </Link>
                </div>
                <div className="next">
                  <Link to="/news-details">
                    How to lead a healthy & well-balanced life
                  </Link>
                </div>
              </div>
              <div className="comment-one">
                <h3 className="comment-one__title">2 Comments</h3>
                {[1,2].map((item)=>(
                  <div className="comment-one__single" key={item}>
                    <div className="comment-one__image">
                      <img src={commentImg} alt="comment" />
                    </div>
                    <div className="comment-one__content">
                      <h3>{item === 1 ? "Kevin Martin" : "Sarah Albert"}</h3>
                      <p>
                        Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.
                      </p>
                      <Link
                        to="/news-details"
                        className="theme-btn btn-style-one comment-one__btn">
                        Reply
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="comment-form">
                  <h3 className="comment-form__title mb-3">
                    Leave a Comment
                  </h3>
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-style-one">
                      <span className="btn-arrow-left">
                        <img src={arrowIcon} alt="arrow" />
                      </span>
                      <span className="btn-title">Submit Comment</span>
                      <span className="btn-arrow-right">
                        <img src={arrowIcon} alt="arrow" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="sidebar">
              <div className="sidebar__single sidebar__search">
                <form className="sidebar__search-form">
                  <input type="search" placeholder="Search here" />
                  <button type="submit">
                    <i className="lnr-icon-search"></i>
                  </button>
                </form>
              </div>
    						<div className="sidebar__single sidebar__post">
    							<h3 className="sidebar__title">Latest Posts</h3>
    							<ul className="sidebar__post-list list-unstyled">
    								<li>
    									<div className="sidebar__post-image"> <img src={NewsImage1} alt=""/> </div>
    									<div className="sidebar__post-content">
    										<h3>
                          <span className="sidebar__post-content-meta">
                          <i className="fas fa-user-circle"></i>Admin</span>
                          <Link to="/news-details">Cloud Migration Strategy for Businesses</Link>
    										</h3>
    									</div>
    								</li>
    								<li>
    									<div className="sidebar__post-image"> <img src={NewsImage2} alt=""/> </div>
    									<div className="sidebar__post-content">
    										<h3>
                          <span className="sidebar__post-content-meta">
                          <i className="fas fa-user-circle"></i>Admin</span>
                          <Link to="/news-details">Cybersecurity Risk Assessment Guide</Link>
                        </h3>
    									</div>
    								</li>
    								<li>
    									<div className="sidebar__post-image"> <img src={NewsImage3} alt=""/> </div>
    									<div className="sidebar__post-content">
    										<h3>
                          <span className="sidebar__post-content-meta">
                          <i className="fas fa-user-circle"></i>Admin</span>
                          <Link to="/news-details">Scalable Web Application Architecture</Link>
                        </h3>
    									</div>
    								</li>
    							</ul>
    						</div>
                <div className="sidebar__single sidebar__category">
                  <h3 className="sidebar__title">Categories</h3>
                  <ul className="sidebar__category-list list-unstyled">
                    <li><Link to="/news-details">Performance Marketing<span className="icon-right-arrow"></span></Link> </li>
                    <li className="active"><Link to="/news-details">Web Development<span className="icon-right-arrow"></span></Link></li>
                    <li><Link to="/news-details">IT Infrastructure<span className="icon-right-arrow"></span></Link> </li>
                    <li><Link to="/news-details">Cybersecurity<span className="icon-right-arrow"></span></Link> </li>
                    <li><Link to="/news-details">Cloud Solutions<span className="icon-right-arrow"></span></Link> </li>
                    <li><Link to="/news-details">UI/UX Strategy<span className="icon-right-arrow"></span></Link> </li>
                  </ul>
                </div>
                <div className="sidebar__single sidebar__tags">
                  <h3 className="sidebar__title">Tags</h3>
                  <div className="sidebar__tags-list"> <Link to="#">DevOps</Link> <Link to="#">LinkBuilding</Link> <Link to="#">LocalSearch</Link> <Link to="#">PPC</Link> <Link to="#">CRO</Link> <Link to="#">Typography</Link> </div>
                </div>
                <div className="sidebar__single sidebar__comments">
                  <h3 className="sidebar__title">Recent Comments</h3>
                  <ul className="sidebar__comments-list list-unstyled">
                    <li>
                      <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                      <div className="sidebar__comments-text-box">
                        <p>A wordpress commenter on <br/> launch new mobile app</p>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                      <div className="sidebar__comments-text-box">
                        <p> <span>John Doe</span> on template:</p>
                        <h5>comments</h5>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                      <div className="sidebar__comments-text-box">
                        <p>A wordpress commenter on <br/> launch new mobile app</p>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                      <div className="sidebar__comments-text-box">
                        <p> <span>John Doe</span> on template:</p>
                        <h5>comments</h5>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;