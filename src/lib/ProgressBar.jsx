import React, { useEffect, useState } from "react";

const ProgressBar = ({ title, percent }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 200);

    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="team-details__progress-single">
      <h4 className="team-details__progress-title">{title}</h4>
      <div className="bar">
        <div
          className="bar-inner count-bar"
          style={{
            width: `${width}%`,
            transition: "width 1.5s ease-in-out",
          }}>
          <div className="count-text">{width}%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;