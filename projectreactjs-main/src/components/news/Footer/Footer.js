import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Thông tin liên hệ -{" "}
        <a href="https://donga.edu.vn/" target="__blank">
          Dong-A University
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.facebook.com/daihocdonga" target="__blank">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/user/dongadanang" target="__blank">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
        <a href="https://donga.edu.vn/" target="__blank">
          <i className="fas fa-home fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
