import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logos from "../img/greystone-logo.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);
  return (
    <div>
      <div className="App__navbar">
        <div className="App__navbar-logo">
          <Link to="/">
            <img src={logos} alt="logo" />
          </Link>
        </div>
        <div className="App__navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/machines">Machines</Link>
          <Link to="/services">Equipment & Facilities</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/contact">Contacts</Link>
        </div>
        <div className="App__navbar-smallscreen">
          <GiHamburgerMenu
            color="#0d367e"
            cursor="pointer"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="App__navbar-smallscreen-overlay flex__center slide-bottom">
              <MdClose
                color="red"
                fontSize={33}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/machines">Machines</Link>
              <Link to="/services">Equipment & Facilities</Link>
              <Link to="/clients">Clients</Link>
              <Link to="/contact">Contacts</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
