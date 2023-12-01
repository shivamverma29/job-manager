import React from "react";
import "../style/AboutUs.css";
import Particle from "./Particle";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="glass-background"></div>
      <div className="about-us-content">
        <h1>Welcome to Job Manager</h1>
        <p>
          At Job Manager, we are on a mission to revolutionize the way you
          manage your career aspirations. Our platform seamlessly integrates
          with various companies' career portals through the powerful Google
          API, offering a unique MERN (MongoDB, Express.js, React, Node.js)
          stack implementation.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a comprehensive and user-friendly platform
          that simplifies and enhances the job search and application process.
          We understand the challenges users face in managing their career
          aspirations, and our goal is to streamline this process by integrating
          with multiple companies' career portals.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Efficient Career Management</li>
          <li>User-Friendly Interface</li>
          <li>Integration with Google API</li>
          <li>Communication Enhancement</li>
        </ul>

        <h2>How We Do It</h2>
        <p>
          The Job Manager Application is developed using the MERN stack,
          ensuring scalability, flexibility, and robust performance. MongoDB,
          Express.js, React, and Node.js work together to create an environment
          that caters to the diverse needs of users navigating their career
          paths.
        </p>

        <h2>Join Us on the Journey</h2>
        <p>
          Embark on a journey with us to transform your job-seeking experience.
          At Job Manager, we believe in the potential of technology to empower
          individuals, and we are dedicated to making career management an
          efficient and enjoyable process. Whether you are a recent graduate or
          an experienced professional, our platform is here to support you on
          your career path.
        </p>

        <p>
          Discover a new way to manage your career – welcome to the Job Manager
          Application.
        </p>
      </div>
      <Particle />
    </div>
  );
};

export default AboutUs;
