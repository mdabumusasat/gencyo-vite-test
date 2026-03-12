import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeSubDropdown, setActiveSubDropdown] = useState("");

  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? "" : key));
  };

  const toggleSubDropdown = (key) => {
    setActiveSubDropdown((prev) => (prev === key ? "" : key));
  };

  const renderSubMenu = (items, keyPrefix) => (
    <ul
      className="sub-menu"
      style={{
        display: activeSubDropdown === keyPrefix ? "block" : "none",
      }}
    >
      {items.map(({ label, to }, index) => (
        <li key={index}>
          <Link to={to}>{label}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className="navigation">
      <li className="dropdown">
        <Link to="#">Home</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("home")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul
          className="sub-menu"
          style={{ display: activeDropdown === "home" ? "block" : "none" }}>
          <li>
            <Link to="/">Digital Agency</Link>
          </li>
          <li>
            <Link to="/index-2">SEO Agency</Link>
          </li>
          <li>
            <Link to="/index-3">IT Company</Link>
          </li>
          <li>
            <Link to="/index-4">Freelancer</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">Pages</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("pages")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul
          className="sub-menu"
          style={{ display: activeDropdown === "pages" ? "block" : "none" }}>
          <li>
            <Link to="/page-about">About</Link>
          </li>
          <li>
            <Link to="/page-faq">Faq</Link>
          </li>
          <li>
            <Link to="/page-pricing">Pricing</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Team</Link>
            <div
              className="dropdown-btn"
              onClick={() => toggleSubDropdown("team")}>
              <i className="fa fa-angle-down"></i>
            </div>

            {renderSubMenu(
              [
                { label: "Team List", to: "/page-team" },
                { label: "Team Details", to: "/page-team-details" },
              ],
              "team"
            )}
          </li>
          <li className="dropdown">
            <Link to="#">Shop</Link>
            <div
              className="dropdown-btn"
              onClick={() => toggleSubDropdown("shop")}>
              <i className="fa fa-angle-down"></i>
            </div>
            {renderSubMenu(
              [
                { label: "Products", to: "/shop-products" },
                { label: "Products with Sidebar", to: "/shop-products-sidebar" },
                { label: "Product Details", to: "/shop-product-details" },
                { label: "Cart", to: "/shop-cart" },
                { label: "Checkout", to: "/shop-checkout" },
              ],
              "shop"
            )}
          </li>
          <li>
            <Link to="/page-testimonial">Testimonials</Link>
          </li>
          <li>
            <Link to="/page-404">404</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">Services</Link>
        <div
          className="dropdown-btn"
          onClick={() => toggleDropdown("services")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul
          className="sub-menu"
          style={{ display: activeDropdown === "services" ? "block" : "none" }}>
          <li>
            <Link to="/page-services">Services</Link>
          </li>
          <li>
            <Link to="/page-service-details">Services Details</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">Projects</Link>
        <div
          className="dropdown-btn"
          onClick={() => toggleDropdown("portfolio")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul
          className="sub-menu"
          style={{ display: activeDropdown === "portfolio" ? "block" : "none" }}>
          <li>
            <Link to="/page-project">Project</Link>
          </li>
          <li>
            <Link to="/page-project-details">Project Details</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">News</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("news")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul
          className="sub-menu"
          style={{ display: activeDropdown === "news" ? "block" : "none" }}>
          <li>
            <Link to="/news-grid">News Grid</Link>
          </li>
          <li>
            <Link to="/news-details">News Details</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/page-contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;