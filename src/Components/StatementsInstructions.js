import React, { useState } from 'react';
import arrow from '../assets/arrow.png';
import { useNavigate } from 'react-router-dom';


const HowItWorks = () => {

    const navigate = useNavigate();
    return(<div style={{textAlign:'center',paddingTop:'0px', paddingBottom:'40px'}} id='howtoaccess'>

        <h1 style={{fontWeight:'bold' , fontSize:'2.5rem',color:'#D81324', display:'inline-block', marginBottom:'15px'}}>Access your Account</h1>
         <h4 style={{color:'#000', marginTop:'10px', fontSize: '115%', marginBottom:'5px'}}>Username and Password</h4>
         <p style={{color:'#000'}}>Both will be your account number. You can find your account number on your invoice.</p>
         <h4 style={{color:'#000', marginTop:'15px', fontSize: '115%', marginBottom:'5px'}}>Store ID</h4>
         <p style={{color:'#000'}}>The Store ID is "<b>texasap</b>"</p>
         <a className="register-button" style={{width:'280px' ,height:'45px', display:'inline-block', backgroundColor:'#D81324',color:'#FFF', fontWeight:'bold', marginTop:'20px'}} href='https://eoffice.epartconnection.com/wpLogin.aspx' target='_blank' rel='noopener noreferrer'>
                View your Statements & Invoices
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </a>
        </div>

    );


}

export default HowItWorks;