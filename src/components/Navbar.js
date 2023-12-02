import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

const NavbarUI = () => {
  return (
    <nav className="custom-navbar">
      <div className="custom-logo">
        <a className="routehome" href="/">
          Job Manager
        </a>
      </div>
      <div className="jsx">
        <ul className="custom-nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <a href="oncampus">OnCampus</a>
          </li>
          <li>
            <a href="offcampus">OffCampus</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarUI;
