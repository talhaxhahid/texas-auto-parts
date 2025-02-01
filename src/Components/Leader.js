import React from "react";
import "../../src/styles/meetleader.css";
import leader from "../assets/leader.png";
import ctqimg from "../assets/ctq-img.png";

const MeetLeader = () => {
  return (
    <div className="meetleader">
      <h4
        style={{
          marginTop: "1.8rem",
          marginBottom: "1.6rem",
          textAlign: "center",
          color: "white",
          fontSize: "1.2rem",
          paddingTop:"2rem"
        }}
      >
        Meet <span className="highlight">Our Leader</span>
      </h4>
    
      <div style={{ padding: "2rem" }}>
        <h1 className="Leader-Tagline"
          style={{
        
            textAlign: "center",
            color: "white",
            fontSize: "2.6rem",
            fontWeight: "700",
            marginTop: "-1.6rem",
          }}
        >
          Behind Every Innovation is a Visionary Team
        </h1>

        <div
          className="meetleader-container"
          style={{ display: "flex", marginTop: "3rem" }}
        >
          <div className="meetleader-box1">
            <img
              className="leader-pic"
              src={leader}
              width="70%"
              height="100%"
              style={{
                objectFit: "cover",
                borderRadius: "5px",
                objectPosition: "top",
              }}
            ></img>
          </div>
          <div className="meetleader-box2" style={{ position: "relative" }}>
            <h2 style={{color:"white"}}>Syed Kashif</h2>
            <p style={{ fontSize: "1rem", color: "white" }}>
              Managing Director
            </p>
            <p style={{ color: "white" }}>
              With over 10 years of experience in the automotive industry, Syed
              Kashif founded Texas Auto Parts with a clear vision: to provide
              reliable, high-quality parts to repair shops and mobile mechanics
              across Texas. Syed Kashif believes in fostering strong
              relationships with clients and prioritizing their needs. His
              hands-on approach and deep understanding of the industry have made
              Texas Auto Parts a trusted name for mechanics.
            </p>
            <h4 style={{color:"white"}}>Quote</h4>
            <p
              style={{
                fontSize: "0.9rem",
                color: "white",
                fontStyle: "italic",
                fontWeight:"bold"
              }}
            >
              “At Texas Auto Parts, we don’t just supply parts—we help keep your
              business running smoothly and efficiently.”
            </p>
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetLeader;
