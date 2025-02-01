import React from 'react';
import '../styles/contactus.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import robot from '../assets/contactus.png'
import addressIcon from "../assets/addressIcon.png";
import postboxIcon from "../assets/postboxIcon.png";
import facebookIcon from "../assets/icon1.png";
import instagramIcon from "../assets/icon2.png";
import linkedinIcon from "../assets/icon3.png";
import twitterIcon from "../assets/icon4.png";

const ContactUsForm = () => {
    return (
        <div className="contactus">
            <div className="row">
                <div className="col-12 col-md-8">
                    <h4 style={{color:'#D81324' ,marginBottom:'1rem'}}>Contact Us</h4>
                    <h1>Send Us a Message</h1>
                    
                    <div className="form-container mt-4">
                <form>
                    <div className="row">
                        {/* Name and Last Name */}
                        <div className="col-12 col-md-6">
                            <input type="text" placeholder="Name" className="form-input" />
                        </div>
                        <div className="col-12 col-md-6 second-input">
                            <input type="email" placeholder="Email Address" className="form-input" />
                        </div>

                        {/* Email and Phone Number */}
                        <div className="col-12 col-md-6 mt-3">
                            <input type="text" placeholder="Phone Number" className="form-input" />
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <input type="text" placeholder="Subject" className="form-input" />
                        </div>

                        {/* Message Field */}
                        <div className="col-12 mt-3">
                            <textarea placeholder="Message" className="form-textarea"></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-left mt-4">
                        <button type="submit" className="form-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className='row mt-5'>
            <div className="col-12 col-md-6">
            <div className='presence-address1'>
        <p style={{fontWeight:'bold' , display:'flex' ,alignItems:'center' ,marginTop:'0rem' ,color:'black'}}>
              <img src={addressIcon}  style={{marginRight:'0.8rem'}} alt="Address" />   USA &nbsp; <span className="highlight"> Texas Auto Parts</span>
            </p>
        <p style={{color:'grey',fontSize:'0.8rem'}}>12505 Reed Rd Suit 145 Sugar Land TX 77478</p>
        <p style={{color:'black'}}><span style={{fontWeight:'bold'}}>Email us:</span> <u>kash@txautoparts.net</u></p>
        </div>
        <div className='presence-address2'>
        <p style={{fontWeight:'bold' , display:'flex' ,alignItems:'center' ,marginTop:'0rem' ,color:'black'}}>
              <img src={addressIcon}  style={{marginRight:'0.8rem'}} alt="Address" />   USA &nbsp; <span className="highlight"> Texas Auto Parts</span>
            </p>
        <p style={{color:'grey',fontSize:'0.8rem'}}>12505 Reed Rd Suit 145 Sugar Land TX 77478</p>
        <p style={{color:'black'}}><span style={{fontWeight:'bold'}}>Email us:</span> <u>kash@txautoparts.net</u></p>
        </div>
            </div>
            
            <div className="col-12 col-md-6">
            <div className='contactus-social' style={{display:'flex' , justifyContent:'end',alignItems:'center'}}>
            <div className="social-links">
                      
            <div className="social-icons-footer" style={{marginLeft:'0px', padding:'0px'}}>
              <a href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
                    </div>
            </div>

            </div>
            </div>
                </div>
                <div className="col-12 col-md-4 contactus-bg"  style={{overflow:'hidden'}}>
                    <img className='contactus-img' src={robot}  style={{objectFit:'cover',width:'100%'}}></img>
                </div>
            </div>

            
            
        </div>
    );
};

export default ContactUsForm;
