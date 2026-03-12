import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

function Counter({ end = 100, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);
  const hasStartedRef = useRef(false);

  const startCount = useCallback(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const startTime = performance.now();
    startTimeRef.current = startTime;

    const animate = (currentTime) => {
      if (!startTimeRef.current) return;

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.round(progress * end);

      setCount(currentCount);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        startTimeRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [end, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCount();
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => {
      observer.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
      hasStartedRef.current = false;
    };
  }, [startCount]);

  return (
    <span ref={countRef}>
      <span>{Math.round(count)}</span>
    </span>
  );
}

Counter.propTypes = {
  end: PropTypes.number,
  duration: PropTypes.number,
};

export default React.memo(Counter);
