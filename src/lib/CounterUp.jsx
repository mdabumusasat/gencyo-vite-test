import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

// CounterUp now just triggers Counter, avoiding duplicate IntersectionObserver
const CounterUp = ({ end }) => {
  const [inViewport, setInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          observer.disconnect(); // Disconnect immediately after triggering
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span ref={ref} className="count-text">
      {inViewport && <Counter end={end} duration={2000} />}
    </span>
  );
};

CounterUp.propTypes = {
  end: PropTypes.number.isRequired,
};

export default React.memo(CounterUp);
