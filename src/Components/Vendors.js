import React from "react";
import "../../src/styles/featureproduct.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import featureproduct1 from "../assets/i1.png";
import featureproduct2 from "../assets/i2.png";
import featureproduct3 from "../assets/i3.png";
import featureproduct4 from "../assets/i4.png";
import densologo from "../assets/vendor-logos/Denso.jpg";
import aisinlogo from "../assets/vendor-logos/AISIN.jpg";
import moog from "../assets/vendor-logos/Moog.jpg";
import trakmotive from "../assets/vendor-logos/Trakmotive.jpg";
import api from "../assets/vendor-logos/API.jpg";
import bosch from "../assets/vendor-logos/Bosch.jpg";
// import delphi from "../assets/delphi.png";
import dayco from "../assets/vendor-logos/Dayco.jpg";
import wagner from "../assets/vendor-logos/Wagner.jpg";
import fcs from "../assets/vendor-logos/FCS.jpg";
import fmp from "../assets/vendor-logos/FMP.jpg";
import arrow from "../assets/arrow.png";
import { useNavigate } from 'react-router-dom';

const Vendors = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const cards = [
    {
      image: aisinlogo,
    },
    {
      image: bosch,
    },
    {
      image: dayco,
    },
    {
      image: fmp,
    },
    {
      image: fcs,
    },
    {
      image: trakmotive,
    },
  
        { 
      image: moog,
    },
    {
      image: api,
    },
        {
      image: densologo,
    },
    {
      image: wagner,
    },
  ];

  return (
    <div
      id="featuredproducts"
      className="featureproduct mt-5 pb-5 "
      style={{ height: "100%" }}
    >
      <div className="featureproduct-inner" style={{ paddingLeft: "0px", marginLeft: "-30px" }}>
        <h4
          className="mx-3"
          style={{ color: "#000000", textAlign: "center", marginLeft: "40px" }}
        >
          Our | <span className="highlight">Suppliers</span>
        </h4>

        <div
          className="featureservices"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            gap: "5px",
            paddingTop: "1rem"
            
          }}
        >
          <div
            className="featureservices-msg"
            style={{ textAlign: "center", width: "100%" }}
          >
            <div className="explore-heading">
              <h1 style={{ textAlign: "center", width: "100%" }} className="explore-title">Trusted Parts</h1>
              
            </div>

            <div className="button2"></div>
          </div>
        </div>

        <div className="slider-main" >
          <Slider {...sliderSettings}>
            {cards.map((card) => (
              <div key={card.id} style={{ padding: "10px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "0px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color: "#000000",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                  className="featureproduct-card"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <img
                      src={card.image}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "auto",
                        textAlign: "left",
                        objectPosition:"center"
                      }}
                    ></img>
                  </div>
                
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button style={{margin:'auto', marginTop:'2rem'}} className="featurecontact-button" onClick={() => window.open('https://nexpart.com/login.php', '_blank')}>
                Start Ordering{" "}
                <img src={arrow} alt="Arrow" width="10" height="12" />
        </button>
      </div>
    </div>
  );
};

export default Vendors;
