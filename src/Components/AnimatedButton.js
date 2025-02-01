// import icon from "../assets/buttonarrow.png";
import React from "react";
import arrow from "../assets/arrow.png";

const AnimatedButton = () => {
  return (
    <div className="contact-btn">
      <a href="/Contact">
        <button className="contact-button">
          Contact Us <img src={arrow} alt="Arrow" width="10" height="12" />
        </button>
      </a>
    </div>
  );
};

export default AnimatedButton;
