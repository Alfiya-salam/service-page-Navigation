// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Importing the styling specific to the HomePage

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to Our Services</h1>
      <p className="homepage-intro">Explore our wide range of services designed to cater to your business needs.</p>
      <div className="services-grid">
        <div className="service-box">
          <Link to="/details/MOBILE-APP-DEVELOPMENT">
            <h2>Mobile App Development</h2>
            <p>Elevate your business with our custom mobile applications, engineered for intuitive user experiences, seamless functionality, and lasting impact on the go.</p>
          </Link>
        </div>
        <div className="service-box">
          <Link to="/details/WEB-APP-DEVELOPMENT">
            <h2>Web App Development</h2>
            <p>Transforming your ideas into powerful web applications with custom development, responsive design, and reliable support, we drive your digital success at NPNG TECH</p>
          </Link>
        </div>
        <div className="service-box">
          <Link to="/details/UI-UX DESIGN">
            <h2>UI/UX Designs</h2>
            <p>From sleek and intuitive UI/UX designs to seamless user experiences, we elevate your web applications to captivate and engage users, ensuring optimal digital interaction.</p>
          </Link>
        </div>
        <div className="service-box">
          <Link to="/details/E-COMMERCE APPLICATION">
            <h2>E-Commerce Application</h2>
            <p>Empower your online business with our tailored e-commerce applications, designed for seamless transactions, enhanced customer experiences, and scalable growth.</p>
          </Link>
        </div>
        <div className="service-box">
          <Link to="/details/POS-SOFTWARES">
            <h2>POS Softwares</h2>
            <p>Revolutionize your business operations with our POS software solutions, delivering seamless transactions, robust inventory management, and enhanced customer experiences.</p>
          </Link>
        </div>
        <div className="service-box">
          <Link to="/details/MANAGEMENT-SYSTEM">
            <h2>Management Systems</h2>
            <p>Streamline your business operations with our comprehensive management system, offering efficient workflows, insightful analytics, and seamless collaboration for optimized performance.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
