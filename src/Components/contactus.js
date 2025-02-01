import React, { useState } from "react";
import emailjs from "emailjs-com";  // Import EmailJS
import "../styles/contactus.css";
import robot from "../assets/contactus.png";
import addressIcon from "../assets/addressIcon.png";
import facebookIcon from "../assets/icon1.png";
import instagramIcon from "../assets/icon2.png";
import linkedinIcon from "../assets/icon3.png";
import twitterIcon from "../assets/icon4.png";

const ContactUsForm = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    // State for status messages
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [status, setStatus] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation: Ensure all fields are filled
        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            setStatus("Please fill in all fields.");
            return;
        }

        emailjs
            .send(
                "service_t77o2lr",  // Replace with EmailJS Service ID
                "template_jfa0iik", // Replace with EmailJS Template ID
                formData,
                "lE9t-oN-4Dc4rs-B6"   // Replace with EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStatus("Message sent successfully!");
                    setIsSubmitted(true);
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Clear form
                    setTimeout(() => {
                        setIsSubmitted(false);
                    }, 3000);
                },
                (error) => {
                    console.log("FAILED...", error);
                    setStatus("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div className="contactus">
            <div className="row">
                <div className="col-12 col-md-8">
                    <h4 style={{ color: "#D81324", marginBottom: "1rem" }}>Contact Us</h4>
                    <h1>Send Us a Message</h1>

                    <div className="form-container mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                {/* Name */}
                                <div className="col-12 col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="col-12 col-md-6 second-input">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="col-12 col-md-6 mt-3">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Subject */}
                                <div className="col-12 col-md-6 mt-3">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className="form-input"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="col-12 mt-3">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-left mt-4">
                                <button type="submit" className="form-button">
                                    Submit
                                </button>
                            </div>

                            {/* Status Message */}
                            {status && <p className="status-message">{status}</p>}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="row mt-5">
                        <div className="col-12 col-md-6">
                            <div className="presence-address1">
                                <p style={{ fontWeight: "bold", display: "flex", alignItems: "center", color: "black" }}>
                                    <img src={addressIcon} style={{ marginRight: "0.8rem" }} alt="Address" /> USA &nbsp;
                                    <span className="highlight"> Texas Auto Parts</span>
                                </p>
                                <p style={{ color: "grey", fontSize: "0.8rem" }}>
                                    12505 Reed Rd Suit 145 Sugar Land TX 77478
                                </p>
                                <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}>Email us:</span> <u>kash@txautoparts.net</u>
                                </p>
                            </div>
                            <div className="presence-address2">
                                <p style={{ fontWeight: "bold", display: "flex", alignItems: "center", color: "black" }}>
                                    <img src={addressIcon} style={{ marginRight: "0.8rem" }} alt="Address" /> USA &nbsp;
                                    <span className="highlight"> Texas Auto Parts</span>
                                </p>
                                <p style={{ color: "grey", fontSize: "0.8rem" }}>
                                    12505 Reed Rd Suit 145 Sugar Land TX 77478
                                </p>
                                <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}>Email us:</span> <u>kash@txautoparts.net</u>
                                </p>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="col-12 col-md-6">
                            <div className="contactus-social" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                <div className="social-links">
                                    <div className="social-icons-footer" style={{ marginLeft: "0px", padding: "0px" }}>
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

                {/* Right Side Image */}
                <div className="col-12 col-md-4 contactus-bg" style={{ overflow: "hidden" }}>
                    <img className="contactus-img" src={robot} style={{ objectFit: "cover", width: "100%" }} alt="Contact Us" />
                </div>
            </div>
            {/* Success Popup */}
            {isSubmitted && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Sent Successfully!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUsForm;
