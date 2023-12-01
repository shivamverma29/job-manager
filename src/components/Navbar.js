import React from "react";
import "../style/navbar.css";

const NavbarUI = () => {
  return (
    <nav className="custom-navbar">
      <div className="custom-logo">
        <a className="routehome" href="/w">
          Jobify
        </a>
      </div>
      <div className="jsx">
        <ul className="custom-nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
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
