import React from 'react';
import '../styles/benefits.css';
import arrow from "../assets/arrow.png";
import b1 from '../assets/benefit1.png';
import b2 from '../assets/benefit2.png';
import b3 from '../assets/benefit3.png';



const Benefits= () => {


    return(

<div className='benefits' style={{}}> 
    
    <div className='benefits-container'>
        <div className='benefits-left'>
        <h4 className="" style={{ color: "#000000", textAlign: "left" }}>
        Benefits of <span className="highlight">Ordering with Us</span> 
        </h4>
         <h1 style={{fontWeight:'bold' , fontSize:'2.5rem'}}>Why Order from Texas Auto Parts?</h1>
         
         <button className="contact-button" style={{width:'150px' ,height:'45px'}} onClick={() => window.open('https://partstech.com/', '_blank')}>
         Browse Now
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        
        </div>
        <div className='benefits-right'>
        <div className='benefits-image'>
        <div className='benefits-row'>
            <div className='benefits-left'>
            <div
                  style={{
                    backgroundColor: "#ffffff",
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "column",
                    textAlign: "left",
                    
                  }}
                  className="product-card"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      
                    </h1>
                    <img
                      src={b1}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "130px" }} className='cardheight'>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                    Verified Quality Parts
                    </h3>
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

                    >
                      rusted parts for domestic & foreign vehicles.
                    </p>
                  </div>
                </div>
            </div>
            <div className='benefits-right'>
            <div
                  style={{
                    backgroundColor: "#ffffff",
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "column",
                    textAlign: "left",
                    
                  }}
                  className="product-card"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      
                    </h1>
                    <img
                      src={b2}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "130px" }} className='cardheight'>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                    Exclusivity
                    </h3>
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

                    >
                      Dedicated service for repair shops, mobile mechanics and dealerships.
                    </p>
                  </div>
                </div>
            </div>
        </div>
        <div
                  style={{
                    backgroundColor: "#ffffff",
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "row",
                    textAlign: "left",
                    gap:'20px',
                    marginTop:'1rem'
                    
                  }}
                  className="product-card product-card-desktop"
                >
                  <div style={{  overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      
                    </h1>
                    <img
                      src={b3}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{  }}>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                    Wide Selection
                    </h3>
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

                    >
                      Access a variety of electrical, suspension, and cooling parts.
                    </p>
                  </div>
                </div>



        
        <div
                  style={{
                    backgroundColor: "#ffffff",
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "column",
                    textAlign: "left",
                    
                  }}
                  className="product-card product-card-mobile"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      
                    </h1>
                    <img
                      src={b3}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "130px" }} className='cardheight'>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                    Wide Selection
                    </h3>
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

                    >
                      Access a variety of electrical, suspension, and cooling parts.
                    </p>
                  </div>
                </div>
        </div>
        </div>

        

    </div>
    
    
    
    </div>
    
    
    
    
    );


}

export default Benefits;