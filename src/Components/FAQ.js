import React, { useState } from "react";
import "../../src/styles/faq.css";
import plus from "../assets/plusIcon.png";
import { useLocation } from "react-router-dom";
import arrow from "../assets/redArrow.png";
import whiteplus from '../assets/whiteplus.png'

const FAQ = () => {
  const location = useLocation();
  const [selectedQuestion, setSelectedQuestion] = useState(
    "Who Can Order From Texas Auto Parts?"
  );
  const value = location.pathname === "/Robotics-AboutUs";

  // Questions and answers data
  const faqData = [
    {
      question: "Who Can Order From Texas Auto Parts?",
      answer:
        "Any individual or business can order from Texas Auto Parts. We offer nationwide shipping and bulk discounts for large orders.",
    },
    {
      question: "How Do I Access My Account?",
      answer:
        'You can access your account by clicking on the "Login" button at the top right of the homepage and entering your credentials.',
    },
    {
      question: "How Do I Track My Order?",
      answer:
        'You can track your order by logging into your account and navigating to the "My Orders" section. A tracking number will be provided.',
    },
  ];

  // Function to handle the click and change the selected question
  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="faqs-container">
      <div className="faq-header">
        <h2 className="faq-title">
          Frequently Asked <br></br> Questions
        </h2>
        <p className="faq-subtext">
          Find quick answers to common questions about our platform, including
          how to use Texas Auto Parts.
        </p>
      </div>

      <div className="faq-content">
        <div className="faq-left">
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div
                className={`faq-item ${
                  selectedQuestion === faq.question ? "active" : ""
                }`}
                key={index}
                onClick={() => handleQuestionClick(faq.question)}
              >
                <span className="faq-question">{faq.question}</span>
                <button className="faq-toggle">
                  <img src={selectedQuestion === faq.question ? whiteplus : plus} alt="Toggle" />
                  {/* <img src={plus} alt="Plus" /> */}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-right">
          <div className="faq-answer-box">
            <h4 className="faq-answer-title">{selectedQuestion}</h4>
            <p className="faq-answer-text">
              {faqData.find((faq) => faq.question === selectedQuestion)?.answer}
            </p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h3 className="cta-contact">Contact  <span className="cta-highlight"> Support</span></h3>
        <h1 className="cta-heading">Need Help with Your Order?</h1>
        <p>Our support team is here to assist you.</p>
        <button className="cta-button" >
            Contact Us
            <img src={arrow} alt="Order Arrow" className="arrow-icon" />
          </button>
      </div>
    </div>
  );
};

export default FAQ;
