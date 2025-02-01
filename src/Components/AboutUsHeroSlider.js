import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../assets/about-hero.png";
import "../styles/heroslider.css";
import arrow from "../assets/arrow.png";

const AboutUsHeroSlider = () => {
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

  return (
    <Slider {...settings} className="hero-slider">
      <div className="slide">
        <img style={{objectPosition:'top'}} src={s1} alt="Slide 1" />
        <div className="slide-content">
          <h1>Delivering Excellence in Automotive Parts</h1>
          <p>Specializing in Domestic & Foreign Under-the-Hood Components</p>
          
            
              <button className="contact-button" style={{width:'140px' ,height:'45px'}}>
                Our Story
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
            
        </div>
      </div>
      <div className="slide">
        <img style={{objectPosition:'top'}} src={s1} alt="Slide 2" />
        <div className="slide-content">
          <h1>Reliable and Affordable</h1>
          <p>Find the best auto parts for your business</p>
        </div>
      </div>
      <div className="slide">
        <img style={{objectPosition:'top'}} src={s1} alt="Slide 1" />
        <div className="slide-content">
          <h1>High-Quality Auto Parts for Repair Shops & Mobile Mechanics</h1>
          <p>Specializing in Domestic & Foreign Under-the-Hood Components</p>
          
            
              <button className="contact-button" style={{width:'140px' ,height:'45px'}}>
                Order Now
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
            
        </div>
      </div>
    </Slider>
  );
};

export default AboutUsHeroSlider;
