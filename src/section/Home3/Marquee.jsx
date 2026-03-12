import React from "react";
import star1_1 from "../../assets/images/icons/star1-1.svg";
import star1_2 from "../../assets/images/icons/star1-2.svg";

const marqueeItems = [
  "Digital Agency",
  "Smart & Efficient",
  "Powerful Performance",
  "Digital Excellence",
  "Growth Platform",
];

const MarqueeSection = () => {
  return (
    <div className="marquee-area2 section-padding pb-0">
      <div className="marquee-section style-2">
        <div className="marquee-two">
          {[...Array(5)].map((_, i) => (
            <div className="marquee-group" key={i}>
              {marqueeItems.map((text, idx) => (
                <div className="text" key={idx}>
                  <img src={star1_2} alt="icon" /> {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-section style-3">
        <div className="marquee-two">
          {[...Array(4)].map((_, i) => (
            <div className="marquee-group" key={i}>
              {marqueeItems.map((text, idx) => (
                <div className="text" key={idx}>
                  <img src={star1_1} alt="icon" /> {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;