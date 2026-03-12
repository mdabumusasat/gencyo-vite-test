import React from "react";
import PropTypes from "prop-types";

function Loader({ className = "" }) {
  return <div className={`preloader ${className}`}></div>;
}

Loader.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Loader);
