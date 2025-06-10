import React, { useState } from 'react';
import arrow from '../assets/arrow.png';


const LoginInfo = () => {

    return(<div>
    <div style={{textAlign:'center',paddingTop:'0px', paddingBottom:'40px'}} id='nexpart'>

        <h1 style={{fontWeight:'bold' , fontSize:'2.5rem',color:'#D81324', display:'inline-block', marginBottom:'15px'}}>Access your Nexpart Account</h1>
         <h4 style={{color:'#000', marginTop:'10px', fontSize: '115%', marginBottom:'5px'}}>Username</h4>
         <p style={{color:'#000'}}>Your username will be TEXAP_[Account Number], for example: TEXAP_000.</p>
         <h4 style={{color:'#000', marginTop:'15px', fontSize: '115%', marginBottom:'5px'}}>Password</h4>
         <p style={{color:'#000'}}>The password for your first login will be <b>Allow1234?</b>. Please be sure to change this.</p>
         <a className="register-button" style={{width:'280px' ,height:'45px', display:'inline-block', backgroundColor:'#D81324',color:'#FFF', fontWeight:'bold', marginTop:'20px'}} href='https://nexpart.com/login.php' target='_blank' rel='noopener noreferrer'>
                Order from NexPart
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </a>
        </div>
    <div style={{textAlign:'center',paddingTop:'0px', paddingBottom:'40px'}} id='partstech'>

        <h1 style={{fontWeight:'bold' , fontSize:'2.5rem',color:'#D81324', display:'inline-block', marginBottom:'15px'}}>Access your PartsTech Account</h1>
         <h4 style={{color:'#000', marginTop:'10px', fontSize: '115%', marginBottom:'5px'}}>Username and Password</h4>
         <p style={{color:'#000'}}>Both will be your account number. You can find your account number on your invoice.</p>
         <a className="register-button" style={{width:'280px' ,height:'45px', display:'inline-block', backgroundColor:'#D81324',color:'#FFF', fontWeight:'bold', marginTop:'20px'}} href='https://partstech.com/login' target='_blank' rel='noopener noreferrer'>
                Order from PartsTech
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </a>
        </div>
    <hr style={{borderWidth:'0.5px'}}/>
    </div>

    );
}



export default LoginInfo;