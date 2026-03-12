import React from "react";
import MarqueeImage1 from "../../assets/images/icons/star1-2.svg";

const texts = [
  "Digital Agency",
  "Smart & Efficient",
  "Powerful Performance",
  "Digital Excellence",
  "Growth Platform",
];

const MarqueeSection = () => {
  const repeatCount = 5;

  return (
    <div className="marquee-section style-2 style-four">
      <div className="marquee-two">
        {[...Array(repeatCount)].map((_, groupIdx) => (
          <div className="marquee-group" key={groupIdx}>
            {texts.map((text, idx) => (
              <div className="text" key={idx}>
                <img src={MarqueeImage1} alt="star" />
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;