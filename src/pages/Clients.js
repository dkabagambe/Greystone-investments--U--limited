import React from "react";
import "../styles/Clients.css";
import img1 from "../img/maaif.jpeg";
import img2 from "../img/lands.jpg";
import img3 from "../img/water and environment.jpg";
import img4 from "../img/molg.jpg";
import img5 from "../img/moe&s.jpg";
import img6 from "../img/mow&t.png";

const Clients = () => {
  return (
    <div>
      <h3>Our Clients</h3>
      <div className="clients">
        <div className="card">
          <img src={img5} alt="clients" />
        </div>
        <div className="card">
          <img src={img2} alt="clients" />
        </div>
        <div className="card">
          <img src={img3} alt="clients" />
        </div>

        <div className="card">
          <img src={img1} alt="clients" />
        </div>
        <div className="card">
          <img src={img6} alt="clients" />
        </div>
        <div className="card">
          <img src={img4} alt="clients" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
