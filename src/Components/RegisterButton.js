// import icon from "../assets/buttonarrow.png";
import React from "react";
import arrow from "../assets/arrow.png";

const RegisterButton = () => {
  return (
    <div className="register-btn">
      <a href="https://forms.gle/th22N9s5qc5oEHJL6">
        <button className="register-button">
          Register Now <img src={arrow} alt="Arrow" width="10" height="12" />
        </button>
      </a>
    </div>
  );
};

export default RegisterButton;
