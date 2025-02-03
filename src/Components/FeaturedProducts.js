import React from "react";
import "../../src/styles/featureproduct.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import featureproduct1 from "../assets/i1.png";
import featureproduct2 from "../assets/i2.png";
import featureproduct3 from "../assets/i3.png";
import featureproduct4 from "../assets/i4.png";
import arrow from "../assets/arrow.png";
import { useNavigate } from 'react-router-dom';

const FeatureProducts = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      name: "Suspension Parts",
      company: "High-quality shocks, struts, and suspension components.",
      image: featureproduct1,
    },
    {
      name: "Cooling Systems",
      company: "Radiators, fans, and everything to keep engines cool.",
      image: featureproduct3,
    },
    {
      name: "Electrical Parts",
      company:
        "Find alternators, sensors, and more for reliable electrical performance.",
      image: featureproduct2,
    },
    {
      name: "Automotive Lubricants",
      company: "Premium motor oils and greases for optimal engine health.",
      image: featureproduct4,
    },
  ];

  return (
    <div
      id="featuredproducts"
      className="featureproduct mt-5 pb-5 "
      style={{ height: "auto" }}
    >
      <div className="featureproduct-inner pt-4">
        <h4
          className="mx-3"
          style={{ color: "#000000", textAlign: "left", marginLeft: "10px" }}
        >
          Our | <span className="highlight">Featured Product Categories</span>
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
            style={{ textAlign: "left", width: "100%" }}
          >
            <div className="explore-heading">
              <h1 className="explore-title">Explore Our Product Categories</h1>
              <button className="featurecontact-button" onClick={() => window.open('https://nexpart.com/login.php', '_blank')}>
                Start Ordering{" "}
                <img src={arrow} alt="Arrow" width="10" height="12" />
              </button>
            </div>

            <div className="button2"></div>
          </div>
        </div>

        <div style={{ maxWidth: "90%", margin: "auto" }}>
          <Slider {...sliderSettings}>
            {cards.map((card) => (
              <div key={card.id} style={{ padding: "10px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E7E7E7",
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
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      {card.no}
                    </h1>
                    <img
                      src={card.image}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "170px",
                        textAlign: "left",
                        objectPosition:"center"
                      }}
                    ></img>
                  </div>
                  <div style={{ minHeight: "100px" }}>
                    <h3
                      className="featureproduct-name"
                      style={{
                        width: "100%",
                        marginTop: "1rem",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {card.name}
                    </h3>
                    <p
                      className="featureproduct-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        
                        marginBottom: "0.3rem",
                      }}
                    >
                      {card.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
