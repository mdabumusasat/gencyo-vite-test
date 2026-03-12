import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/resource/404.png";

const ErrorPage = () => {
  return (
    <section>
      <div className="auto-container pt-120 pb-70">
        <div className="row">
          <div className="col-xl-12">
            <div className="error-page__inner">
              <div className="error-page__title-box">
                <img src={errorImg} alt="404 Page Not Found" />
                <h3 className="error-page__sub-title">Page not found!</h3>
              </div>
              <p className="error-page__text">
                Sorry we can't find that page! The page you are looking
                <br />
                for was never existed.
              </p>
              <form className="error-page__form">
                <div className="error-page__form-input">
                  <input type="search" placeholder="Search here" />
                  <button type="submit">
                    <i className="lnr lnr-icon-magnifier"></i>
                  </button>
                </div>
              </form>
              <Link
                to="/"
                className="btn-style-one justify-content-center">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;