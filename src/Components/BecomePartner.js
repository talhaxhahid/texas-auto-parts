import React, { useState } from 'react';
import '../styles/becomepartner.css';
import becomepartner from '../assets/becomepartner.png';
import arrow from "../assets/arrow.png";
import addressIcon from "../assets/addressIcon.png";


const BecomePartner= () => {


    return(<div className='becomepartner' style={{}}> 
    
    <div className='becomepartner-container'>
    <div className='becomepartner-right'>
        <div className='becomepartner-image'></div>
        </div>
        <div className='becomepartner-left'>
        <span className="highlight"> Texas Auto Parts</span>
         <h1 style={{fontWeight:'bold' , fontSize:'2.5rem',color:'white'}}>BECOME A PARTNER</h1>
         <p style={{color:'white'}}>We would love to see how we can service your business.  Click below to find out more about becoming a valued customer partner with Texas Auto Parts.</p>
         <button className="contact-button" style={{width:'140px' ,height:'45px'}}>
                Learn More
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        
        </div>
        
        

    </div>
    
    
    
    </div>);


}

export default BecomePartner;