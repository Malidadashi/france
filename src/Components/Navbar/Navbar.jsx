import React from "react";
import "./navbar.css";
import franceicon from "../../assets/franceicon.png";
import { FaRegCompass } from "react-icons/fa";
import { Link } from "react-router-dom";
import Newlight from "../Newlight/Newlight";
import GetInspired from "../Inspire/GetInspired";
import { useState } from "react";
import Showfurther from "../Showmore/Showfurther";






// const [hideCourse, setHideCourse] = useState(false);
// return (
//   <div>
//     <Newlight />
//   </div>
// );

const Navbar = () => {
  const longman = () => {
    window.open("https://www.ldoceonline.com/dictionary/rout", "_top");
  };

  const opennewtab = () => {
    window.open(<Newlight />, "_top");
  };

  //opne another component
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const handleClick = () => {
    setShowSecondComponent(true);
  };

  return (
    <div className="navbar">
      {/* <div className="navbar-leftside">
        <img src={franceicon} width={"110px"} height={"60px"} alt="pic"/>
        <h3>Offical Tourism Borad Website</h3>
      </div> */}

      <div className="navbar-center">
        <ul to={"/"}>
          <li className="navbar-center-paris">Paris 2024</li>
          <li onClick={handleClick}>
            Sustaniable Travel
            {showSecondComponent && <Showfurther/>}
          </li>
          <li handleClick={Navbar}>Activities</li>
          <li onClick={opennewtab}>Destnations</li>

          <li>
            <Link to={`/getinspire`}>Get Inspire</Link>
          </li>

          <Link to={`/newidea`}>
            <button>Go back</button>
          </Link>
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
