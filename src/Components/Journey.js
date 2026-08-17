import React from 'react';
import '../styles/journey.css';
import icon from '../assets/journey-icon.png';



const Journey= () => {


    return(
        <div className='journey'>
            <h4 className="highlight" style={{ textAlign: "center" }}>Texas &nbsp;
        <span style={{color:'white'}}>Auto Parts</span> 
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
              <h1 style={{fontWeight: "bolder" ,color:'white' }}>Our Journey</h1>{" "}
              <div className="button1"> </div>{" "}
            </div>
            <div className="button2"></div>
          </div>
        </div>

        <div className='journey-container'>

         <div className='journey-left'>

         </div>
         <div className='journey-right'>
         <div className='journey-details'>
            <div className='journey-icon'> <img src={icon} style={{height:'20px',width:'20px'}}></img><div className="vertical-line"></div></div>
            <div className='journey-content'><h3 style={{fontWeight:'500' ,color:'white'}} >2018-Founded</h3><p style={{color:'white',marginTop:'0.8rem',marginBottom:'1.8rem' ,fontSize:'0.9rem'}}>“Texas Auto Parts was founded with a mission to supply high-quality auto parts to repair shops, mobile mechanics, and dealerships across Texas.”</p></div>
         </div>
         <div className='journey-details'>
            <div className='journey-icon'> <img src={icon} style={{height:'20px',width:'20px'}}></img><div className="vertical-line"></div></div>
            <div className='journey-content'><h3 style={{fontWeight:'500' ,color:'white'}} >2020 – Expansion into Foreign Auto Parts</h3><p style={{color:'white',marginTop:'0.8rem',marginBottom:'1.8rem' ,fontSize:'0.9rem'}}>“Expanded our inventory to include parts for foreign vehicles, ensuring we meet the needs of all mechanics”</p></div>
         </div>
         <div className='journey-details'>
            <div className='journey-icon'> <img src={icon} style={{height:'20px',width:'20px'}}></img><div className="vertical-line"></div></div>
            <div className='journey-content'><h3 style={{fontWeight:'500' ,color:'white'}} >2020 – Key Partnership with Major Brands</h3><p style={{color:'white',marginTop:'0.8rem',marginBottom:'1.8rem' ,fontSize:'0.9rem'}}>"Partnered with leading automotive brands to offer top-quality products and unmatched reliability."</p></div>
         </div>
         <div className='journey-details'>
            <div className='journey-icon'> <img src={icon} style={{height:'20px',width:'20px'}}></img><div className="vertical-line"></div></div>
            <div className='journey-content'><h3 style={{fontWeight:'500' ,color:'white'}} >2024 – Digital Transformation</h3><p style={{color:'white',marginTop:'0.8rem',marginBottom:'1.8rem' ,fontSize:'0.9rem'}}>"Launched our online ordering system to simplify the parts ordering process for our clients."</p></div>
         </div>
         <div className='journey-details'>
            <div className='journey-icon'> <img src={icon} style={{height:'20px',width:'20px'}}></img></div>
            <div className='journey-content'><h3 style={{fontWeight:'500' ,color:'white'}} >2025 – Continuous Improvement</h3><p style={{color:'white',marginTop:'0.8rem',marginBottom:'1.8rem' ,fontSize:'0.9rem'}}>"Continuing to grow and innovate, we remain dedicated to providing the best products and services for the automotive industry”</p></div>
         </div>

         </div>

        </div>

        </div>
    );


}

export default Journey;