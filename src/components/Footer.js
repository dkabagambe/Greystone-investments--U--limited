import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy;{new Date().getFullYear()} Greystone Investments (U) Ltd</p>
    </div>
  );
};

export default Footer;
