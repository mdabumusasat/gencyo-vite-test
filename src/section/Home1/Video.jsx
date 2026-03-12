import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import videoShape from "../../assets/images/icons/video-shape-1-1.png";
import videoThumb from "../../assets/images/resource/video-1-1.jpg";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-section section-padding pt-0">
        <div className="video-light-shape-1">
          <img src={videoShape} alt="shape" />
        </div>
        <div className="video-image fix">
          <img
            src={videoThumb}
            alt="video thumbnail"
            data-speed=".8"/>
          <div className="content">
            <a
              onClick={() => setOpen(true)}
              className="play-now"
              aria-label="Play Video">
              <i className="icon fa-solid fa-play"></i>
              <span className="ripple"></span>
            </a>
            <h3 className="title char-animation">
              See How We Turn Ideas Into Impactful Digital Experiences
            </h3>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Fvae8nxzVz4"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default VideoSection;