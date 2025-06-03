import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../assets/contactus-slide.png";
import "../styles/heroslider.css";
import arrow from "../assets/arrow.png";

const ContactUsHeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex), // Update active index
    customPaging: (i) => (
      <div className={`custom-dot ${i === activeIndex ? "active" : ""}`}></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };
  const sayhello = () => {
    alert('hello how are you');
  };

  return (
    <Slider {...settings} className="hero-slider">
      
      
      <div className="slide contactus-slide" >
        <img src={s1} alt="Slide 1"  style={{objectPosition:'center'}}/>
        <div className="slide-content">
          <h1 style={{fontWeight:'bolder'}}>Get in Touch with Texas Auto Parts</h1>
          <p>We’re here to help repair shops, mobile mechanics, and dealerships with all your part needs.</p>
          
            
        </div>
      </div>
    </Slider>
  );
};

export default ContactUsHeroSlider;
