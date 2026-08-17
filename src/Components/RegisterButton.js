// import icon from "../assets/buttonarrow.png";
import React from "react";
import arrow from "../assets/arrow.png";

const RegisterButton = () => {
  return (
    <div className="register-btn">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfB85x8eBZ4pE8ycaq47yXuWRDwdRwpLTxsM3wJ8_14CAjdbg/viewform?vc=0&c=0&w=1&flr=0">
        <button className="register-button">
          Register Now <img src={arrow} alt="Arrow" width="10" height="12" />
        </button>
      </a>
    </div>
  );
};

export default RegisterButton;
