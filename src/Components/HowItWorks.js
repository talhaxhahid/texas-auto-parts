import React, { useState } from 'react';
import '../styles/howitworks.css';
import arrow from '../assets/red-arrow.png';



const HowItWorks = () => {


    return(<div className='howitworks'>

        <div className='howitworks-left'>
        <h1 style={{fontWeight:'bold' , fontSize:'2.5rem',color:'white'}}>How It Works</h1>
         <p style={{color:'white'}}>Ordering from Texas Auto Parts is simple and efficient. Follow these easy steps to get the parts you need, when you need them.</p>
         <button className="contact-button" style={{width:'140px' ,height:'45px' ,backgroundColor:'white',color:'#D81324', fontWeight:'bold'}}>
                Learn More
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        </div>
        <div className='howitworks-right'>

        </div>

    </div>);


}

export default HowItWorks;