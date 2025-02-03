import React, { useState } from 'react';
import '../styles/abouttexas.css';
import aboutTexas from '../assets/abouttexas.png';
import arrow from "../assets/arrow.png";
import { useNavigate } from 'react-router-dom';


const AboutTexas = () => {

    const navigate = useNavigate();
    return(<div className='aboutTexas'  style={{padding:'2rem'}}> 
    <h4 className="" style={{ color: "#000000", textAlign: "left" }}>
        About | <span className="highlight">Texas Auto Parts</span> 
        </h4>
    <div className='abouttexas-container'>
        <div className='abouttexas-left'>
         <h1>Your Reliable Partner for Domestic & Foreign Auto Parts</h1>
        </div>
        <div className='abouttexas-right'>
        <button className="contact-button" style={{width:'140px' ,height:'45px'}}  onClick={() => navigate('/AboutUs')}>
                Learn More
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        </div>

        

    </div>
    <p>At Texas Auto Parts, we specialize in providing top-quality under-the-hood components for repair shops and mobile mechanics across Texas. With a commitment to excellence, we offer a wide range of electrical, suspension, cooling parts, and automotive lubricants tailored to meet the demands of professionals.</p>
    <div className='abouttexas-image'>

    </div>
    </div>);


}

export default AboutTexas;