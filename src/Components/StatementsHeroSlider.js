import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../assets/statements-hero.png";
import "../styles/heroslider.css";
import arrow from "../assets/arrow.png";
import { useNavigate } from 'react-router-dom';
const StatementsHeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:false,
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
        <img src={s1} alt="Slide 1" />
        <div className="slide-content">
          <h1>View Your Statements & Invoices</h1>
          <p>Easily access and manage your account statements and invoices through our secure platform.</p>
          
            
              <button className="contact-button" style={{height:'45px'}} onClick={() => window.open('https://eoffice.epartconnection.com/wpLogin.aspx', '_blank')}>
              Login to View Now
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
            
        </div>
      </div>
    </Slider>
  );
};

export default StatementsHeroSlider;
