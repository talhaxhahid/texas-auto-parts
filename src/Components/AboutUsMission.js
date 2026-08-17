import React from "react";
import "../../src/styles/aboutusmission.css";
import missionpic from "../assets/aboutusmission.png"

const AboutUsMission = () => {
  return (
    <div id="Mission" className="missioncontainer">
      <div className="missioncontent">
        <h3 className="missiontitle">
          About | <span className="missionhighlight">Texas Auto Parts</span>
        </h3>
        <h1 className="missionheading">
          Your Reliable Partner for Domestic & <br></br> Foreign Auto Parts
        </h1>
        <p className="missiondescription">
          At Texas Auto Parts, we specialize in providing top-quality
          under-the-hood components for repair shops, mobile mechanics, and dealerships across
          Texas. With a commitment to excellence, we offer a wide range of
          electrical, suspension, cooling parts, and automotive lubricants
          tailored to meet the demands of professionals.
        </p>
      </div>
      <div className="image-with-mission">
        <img
          src={missionpic} // Replace with actual image URL
          alt="Mechanic at work"
          className="missionresponsive-img"
        />
        <div className="mission-vision">
          <h1 className="mission-title">
            Our <span className="missionhighlight">Mission</span> & Vision
          </h1>
          <p className="mission-description">
            At Texas Auto Parts, our mission is to empower repair shops,
            mobile mechanics, and dealerships with high-quality, reliable auto parts. We aim to
            be the trusted partner in keeping vehicles on the road.{" "}
            <span className="mission-italic">
              Our vision is to lead the industry in delivering superior
              automotive solutions, fostering strong partnerships with our
              clients.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMission;
