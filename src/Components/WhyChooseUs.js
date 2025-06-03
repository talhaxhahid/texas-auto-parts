import React from "react";
import "../../src/styles/whychooseus.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../assets/v1.png";
import product2 from "../assets/v2.png";
import product3 from "../assets/v3.png";
import product4 from "../assets/v4.png";


const WhyChooseUs = () => {
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
      
      name: "Exclusive B2B Service",
      company: "We cater exclusively to repair shops, dealerships and mobile mechanics, ensuring specialized support and products tailored for professionals.",
      image: product1,
    },
    {
      
      name: "Wide Range of Quality Parts",
      company: "Our inventory includes top-notch electrical, suspension, cooling parts, and lubricants for both domestic and foreign vehicles.",
      image: product3,
    },
    {
     
      name: "Fast & Reliable Delivery",
      company: "We understand the urgency of repairs, offering quick delivery to keep your business moving.",
      image: product2,
    },
    {
      
      name: "Expert Support",
      company: "Our team is knowledgeable and ready to assist with part selection and technical questions.",
      image: product4,
    },
  ];

  return (
    <div
      id="horecafeaturedproducts"
      className="roboticsproduct mt-5 pb-5 "
      style={{ height: "auto" }}
    >
      <div className="roboticsproduct-inner pt-4">
        <h4 className="mx-3" style={{ color: "#000000", textAlign: "center" }}>
        Why Choose | <span className="highlight">Texas Auto Parts</span> 
        </h4>
     

        <div
          className="myservices"
          style={{
            display: "flex",
            flexDirection:"column",
            padding: "25px",
            gap: "5px",
            paddingTop: "1rem",
            width: "100%",
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <div
            className="services-msg"
            style={{ textAlign: "center", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bolder"
              }}
            >
              <h1 style={{fontWeight: "bolder" }}>Committed to Quality, Service, and Reliability</h1>{" "}
              <div className="button1"> </div>{" "}
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
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "column",
                    textAlign: "left",
                    
                  }}
                  className="product-card"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      {card.no}
                    </h1>
                    <img
                      src={card.image}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "130px" }}>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                      {card.name}
                    </h3>
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

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

export default WhyChooseUs;
