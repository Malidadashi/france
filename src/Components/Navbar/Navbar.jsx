import React from "react";
import { useState } from "react";
import "./navbar.css";
import franceicon from "../../assets/franceicon.png";
import { FaRegCompass } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-leftside">
        <img src={franceicon} width={"110px"} height={"60px"} />
        <h3>Offical Tourism Borad Website</h3>
      </div>

      <div className="navbar-center">
        <ul>
          <li className="navbar-center-paris">Paris 2024</li>
          <li>Sustaniable Travel</li>
          <li>Activities</li>
          <li>Destnations</li>
          <li>Get Inspire</li>
          <li>Practical Information</li>
        </ul>
      </div>

      <div className="navbar-rightside">
        <ul>
          <li>
            <FaRegCompass />
            Explore The Map
          </li>
          <div className="navbar-item dropdown">
            <li href="#English" className="dropdown-toggle">
              English
              <div className="dropdown-menu">
                <a href="#french" className="dropdown-item">
                  French
                </a>
                <a href="#dan" className="dropdown-item">
                  Danish
                </a>
                <a href="#germany" className="dropdown-item">
                  Dutch
                </a>
                <a href="#latin" className="dropdown-item">
                  Spanish
                </a>
                <a href="#arabic" className="dropdown-item">
                  Arabic
                </a>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
