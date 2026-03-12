import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { throttle } from '../utils/throttle';

function BackToTop({ className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      setIsVisible(window.scrollY > window.innerHeight);
    }, 100),
    []
  );

  useEffect(() => {
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  if (!isVisible) return null;

  return (
    <div className="footer-bottom-two">
      <button
        className={`goTop-btn ${className}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-angles-up"></i>
        <i className="fa-solid fa-angles-up"></i>
      </button>
    </div>
  );
}

BackToTop.propTypes = {
  className: PropTypes.string,
};

export default React.memo(BackToTop);
