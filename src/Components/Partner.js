import React, { useState } from 'react';
import emailjs from "emailjs-com";
import "../styles/becomepartner.css";
import logo from "../assets/logo-black.png";
import arrow from "../assets/arrow.png";
import clip from "../assets/clip.png";



const Partner= () => {

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
      shopName: "",
      contactName: "",
      email: "",
      phone: "",
      address: "",
      salesTax: "",
      salesTaxId: null,
      salesTaxIdBase64: "",
    });
  
    const toggleForm = () => setShowForm(!showForm);
    if(showForm){
      document.body.classList.add('modal-open');
    }
    else{
      document.body.classList.remove('modal-open');
  
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, salesTaxId: file, salesTaxIdBase64: reader.result });
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (formData.salesTaxId) {
        try {
          const imgUrl = await uploadToImgBB(formData.salesTaxId);
          sendEmail(imgUrl);
        } catch (error) {
          console.error("Image upload failed:", error);
          alert("Failed to upload image. Please try again.");
        }
      } else {
        sendEmail(null);
      }
    };
    
    const uploadToImgBB = async (file) => {
      const apiKey = "1a759d778a13d6e4085872d4ab38c327"; // Replace with your ImgBB API Key
      const formData = new FormData();
      formData.append("image", file);
    
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });
    
      const data = await response.json();
      if (!data.success) {
        throw new Error("Failed to upload image");
      }
    
      return data.data.url; // Returns the URL of the uploaded image
    };
    
    const sendEmail = (imgUrl) => {
      const emailParams = {
        shopName: formData.shopName,
        contactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        salesTax: formData.salesTax,
        salesTaxIdUrl: imgUrl || "No image uploaded",
      };
    
      emailjs
        .send("service_t77o2lr", "template_nny10jm", emailParams, "lE9t-oN-4Dc4rs-B6")
        .then((response) => {
          alert("Form submitted successfully!");
          setShowForm(false);
          setFormData({
            shopName: "",
            contactName: "",
            email: "",
            phone: "",
            address: "",
            salesTax: "",
            salesTaxId: null,
            salesTaxIdBase64: "",
          });
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send email. Please try again.");
        });
    };

    return(<div className='becomepartner' style={{}}> 
    
    <div className='becomepartner-container'>
       
        <div className='becomepartner-left' style={{width:'100%',backgroundPosition:'bottom'}}>
        <span className="highlight"> Texas Auto Parts</span>
         <h1 style={{fontWeight:'bold' , fontSize:'2.5rem',color:'white'}}>Ready to Partner with Us?</h1>
         <p style={{color:'white'}}>Join the many repair shops, mobile mechanics, and dealerships who trust Texas Auto Parts.</p>
         <a className="contact-button" style={{width:'190px' ,height:'45px'}} href="https://forms.gle/th22N9s5qc5oEHJL6" target="_blank" rel="noopener noreferrer">
                Become a Partner
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
          </a>
        
        </div>
    </div>
    {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleForm}>
              &times;
            </span>
            <img src={logo} alt="Texas Auto Parts" className="logo" />
            <h3 style={{fontWeight:'700' , fontSize:'1rem',textAlign:'center'}}>New account Information Form To <span style={{color:'#D81324'}}>Become a Partner</span></h3>
            <form onSubmit={handleSubmit}>
              <input className="form-input" type="text" name="shopName" placeholder="Enter Shop Name" value={formData.shopName} onChange={handleChange} required />
              <input className="form-input" type="text" name="contactName" placeholder="Enter Contact Name" value={formData.contactName} onChange={handleChange} required />
              <input className="form-input" type="email" name="email" placeholder="Enter Email (For Statements & Special Offers)" value={formData.email} onChange={handleChange} required />
              <input className="form-input" type="text" name="phone" placeholder="Enter Phone Number (For Orders & Payments)" value={formData.phone} onChange={handleChange} required />
              <input className="form-input" type="text" name="address" placeholder="Enter Delivery Address (For Orders)" value={formData.address} onChange={handleChange} required />
              <select className="form-input" name="salesTax" value={formData.salesTax} onChange={handleChange} required>
                <option value="">Do you pay sales tax?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        height:'40px',
        width: "100%",
        cursor: "pointer",
        backgroundColor: "rgb(248, 248, 248)",
        transition: "background-color 0.2s",
        marginBottom:'1rem'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f8f8")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgb(248, 248, 248)")}
    >
      <label
        htmlFor="file-upload"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          cursor: "pointer",
        }}
      >
        {/* Paperclip Icon (SVG) */}
        <img
          src={clip}
          style={{
            width: "20px",
            height: "20px",
            marginRight: "8px"
          }}
        >
        </img>
        {/* Label Text */}
        <span style={{ color: "#444", fontSize: "14px" }}>
          Attach a picture of Sales Tax ID (if applicable)
        </span>
      </label>
      {/* Hidden File Input */}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
              <button style={{borderRadius:'50px'}} type="submit">Submit</button>
            </form>
            <div style={{ marginTop:'0.5rem'}}>
            <h5 style={{fontWeight:'700'  ,textAlign:'center'}}><span style={{color:'#D81324'}}>1. Purchasing options </span>(Sales Rep Use only)</h5>
            <h5 style={{fontWeight:'700' ,textAlign:'center'}}><span style={{color:'#D81324'}}>2. Terms: </span>COD or Weekly (Sales Rep use only)</h5>
            </div>
            
          </div>
        </div>
      )}
    
    
    </div>);


}

export default Partner;