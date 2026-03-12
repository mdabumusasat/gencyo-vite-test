import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const ProgressBar2 = ({ label = "Skill", percentage, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const startAnimation = () => {
      const startTime = performance.now();
      startTimeRef.current = startTime;

      const animate = (currentTime) => {
        if (!startTimeRef.current) return;

        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const currentProgress = Math.floor(progress * percentage);

        setProgress(currentProgress);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setProgress(percentage);
          startTimeRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    startAnimation();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [percentage, duration]);

  return (
    <div className="skill-bar">
      <div className="bar-inner">
        <div
          className="bar progress-line"
          style={{
            width: `${progress}%`,
            transition: "width 0.3s ease",
          }}
        >
          <div className="skill-percentage">
            <div className="count-box">
              <span className="count-text">{progress}</span>%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProgressBar2.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
  duration: PropTypes.number,
};

export default React.memo(ProgressBar2);
