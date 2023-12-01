import React from "react";
import ilustrasi from "../assets/ilustrasi.png";
import { Link } from "react-router-dom";
import "../style/home.css";
import Particle from "./Particle";

const Home = () => {
  return (
    <div className="con" style={{ overflow: "hidden !important" }}>
      <div className="contain ">
        <div className="homec">
          <h1 className="text">Find Your Dream Job</h1>
          <p className="text2">
            Platform to Explore Various Jobs and kick start you career
          </p>
          <Link to="oncampus" className="job-button">
            Explore Jobs
          </Link>
        </div>
        <div className="image ">
          <img src={ilustrasi} alt="ilustrasi" className="illustration " />
        </div>
      </div>
      <Particle />
    </div>
  );
};

export default Home;
