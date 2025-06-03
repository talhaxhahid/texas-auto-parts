import React from 'react';
import '../styles/presence.css';
import presence from '../assets/presence.png';
import arrow from "../assets/arrow.png";
import addressIcon from "../assets/addressIcon.png";
import { useNavigate } from 'react-router-dom';


const Presence= () => {
    const navigate = useNavigate();

    return(<div className='presence' style={{}}> 
    <h4 className="" style={{ color: "#000000", textAlign: "left" }}>
        Our | <span className="highlight">Presence</span> 
        </h4>
    <div className='presence-container'>
        <div className='presence-left'>
         <h1 style={{fontWeight:'bold' , fontSize:'2.5rem'}}>Serving Repair Shops,
         Mobile Mechanics, & Dealerships</h1>
         <p>With a strong network and reliable delivery, Texas Auto Parts is the trusted supplier for auto professionals throughout the state.</p>
         <button className="contact-button" style={{width:'140px' ,height:'45px'}} onClick={() => navigate('/AboutUs')}>
                Learn More
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        <div className='presence-address1'>
        <p style={{fontWeight:'bold' , display:'flex' ,alignItems:'center' ,marginTop:'3.5rem'}}>
              <img src={addressIcon}  style={{marginRight:'0.8rem'}} alt="Address" />   USA &nbsp; <span className="highlight"> Texas Auto Parts</span>
            </p>
        <p style={{color:'grey',fontSize:'0.8rem'}}>12505 Reed Rd Suite 145 Sugar Land TX 77478</p>
        <p><span style={{fontWeight:'bold'}}>Email us:</span> <u>inquiries@txautoparts.net</u></p>
        </div>
        </div>
        <div className='presence-right'>
        <div className='presence-image'></div>
        </div>

        

    </div>
    <div className='presence-address2'>
        <p style={{fontWeight:'bold' , display:'flex' ,alignItems:'center' ,marginTop:'0rem'}}>
              <img src={addressIcon}  style={{marginRight:'0.8rem'}} alt="Address" />   USA &nbsp; <span className="highlight"> Texas Auto Parts</span>
            </p>
        <p style={{color:'grey',fontSize:'0.8rem'}}>12505 Reed Rd Suite 145 Sugar Land TX 77478</p>
        <p><span style={{fontWeight:'bold'}}>Email us:</span> <u>inquiries@txautoparts.net</u></p>
        </div>
    
    
    </div>);


}

export default Presence;