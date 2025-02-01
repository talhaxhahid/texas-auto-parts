import React, { useState } from 'react';
import '../styles/becomepartner.css';
import becomepartner from '../assets/becomepartner.png';
import arrow from "../assets/arrow.png";
import addressIcon from "../assets/addressIcon.png";


const Partner= () => {


    return(<div className='becomepartner' style={{}}> 
    
    <div className='becomepartner-container'>
       
        <div className='becomepartner-left' style={{width:'100%',backgroundPosition:'bottom'}}>
        <span className="highlight"> Texas Auto Parts</span>
         <h1 style={{fontWeight:'bold' , fontSize:'2.5rem',color:'white'}}>Ready to Partner with Us?</h1>
         <p style={{color:'white'}}>Join the many repair shops and mobile mechanics who trust Texas Auto Parts.</p>
         <button className="contact-button" style={{width:'140px' ,height:'45px'}}>
                Contact Us
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        
        </div>
        
        

    </div>
    
    
    
    </div>);


}

export default Partner;