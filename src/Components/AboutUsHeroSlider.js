import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../assets/about-hero.png";
import s2 from "../assets/homeslide2.jpg";
import s3 from "../assets/homeslide3.jpg";
import "../styles/heroslider.css";
import arrow from "../assets/arrow.png";
import {  useNavigate } from "react-router-dom";



const AboutUsHeroSlider = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover:false,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex), // Update active index
    customPaging: (i) => (
      <div className={`custom-dot ${i === activeIndex ? "active" : ""}`}></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };
  const handleScroll = () => {
    const missionElement = document.getElementById('Mission');
    if (missionElement) {
      missionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Slider {...settings} className="hero-slider">
      <div className="slide">
        <img style={{objectPosition:'top'}} src={s1} alt="Slide 1" />
        <div className="slide-content">
          <h1>Delivering Excellence in Automotive Parts</h1>
          <p>Specializing in Domestic & Foreign Under-the-Hood Components</p>
          
            
              <button className="contact-button" style={{width:'140px' ,height:'45px'}} onClick={handleScroll}>
                Our Story
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
            
        </div>
      </div>
      <div className="slide">
        <img style={{objectPosition:'top'}} src={s2} alt="Slide 2" />
        <div className="slide-content">
          <h1>Delivering Excellence in Automotive Parts</h1>
          <p>Specializing in Domestic & Foreign Under-the-Hood Components</p>
          
            
              <button className="contact-button" style={{width:'140px' ,height:'45px'}} onClick={handleScroll}>
                Our Story
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
            
        </div>
      </div>
      <div className="slide">
        <img style={{objectPosition:'top'}} src={s3} alt="Slide 1" />
        <div className="slide-content">
          <h1>Delivering Excellence in Automotive Parts</h1>
          <p>Specializing in Domestic & Foreign Under-the-Hood Components</p>
          
            
              <button className="contact-button" style={{width:'140px' ,height:'45px'}} onClick={handleScroll}>
                Our Story
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
            
        </div>
      </div>
    </Slider>
  );
};

export default AboutUsHeroSlider;
