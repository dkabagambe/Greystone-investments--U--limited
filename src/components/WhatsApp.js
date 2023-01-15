import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "../styles/WhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <ReactWhatsapp
        // number="2-567-046-22476"
        number="2-567-024-61511"
        message="Hey i got this number from Greystone Investments (U) Limited!!!"
        className="whatsapp_float"
      >
        <FaWhatsapp className="whatsapp" />
      </ReactWhatsapp>
    </div>
  );
};

export default WhatsApp;
