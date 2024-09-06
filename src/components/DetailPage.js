// src/components/DetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css'; // Styling for the detail page

const details = {
  'MOBILE-APP-DEVELOPMENT': {
    description: 'Our Mobile App Development services offer comprehensive, end-to-end solutions, covering the entire development lifecycle from concept to deployment. We specialize in creating intuitive, high-performance mobile applications tailored to meet the unique needs of businesses across industries.',
    additionalInfo: 'Whether its iOS or Android, our team delivers custom apps that combine sleek design, smooth functionality, and cutting-edge technology. We emphasize user experience, ensuring that your app is not only functional but also engaging and easy to use. Our agile development process allows for fast, efficient delivery, enabling your business to stay ahead in the rapidly evolving digital world.'
  },
  'WEB-APP-DEVELOPMENT': {
    description: 'Our Web App Development services provide businesses with robust, scalable, and feature-rich applications tailored to meet specific goals. We specialize in creating responsive web apps that deliver seamless experiences across all devices ensuring accessibility and performance. ',
    additionalInfo: 'Using cutting-edge technologies such as React, Node.js, and more, we develop custom solutions that enhance user engagement and streamline business processes. Our team focuses on security, usability, and future-proofing your application, enabling you to scale effortlessly as your business grows. Whether for e-commerce, enterprise solutions, or customer portals, we craft apps designed to meet modern digital demands.'
  },
  'UI-UX DESIGN': {
    description: 'Our UI/UX Design services focus on creating visually stunning and highly functional interfaces that enhance user experiences. We prioritize user-centric design, ensuring that each interface is intuitive, easy to navigate, and visually appealing. ',
    additionalInfo: 'From wireframes and prototypes to final designs, our team crafts interfaces that not only look great but also offer seamless interaction. We tailor our designs to the specific needs of your project, keeping in mind both aesthetic appeal and functionality. By focusing on usability and accessibility, we help businesses create digital experiences that engage users, increase retention, and drive overall business success.'
  },
  'E-COMMERCE APPLICATION': {
    description: 'Our E-Commerce Development services help businesses create powerful, user-friendly online stores tailored to their specific needs. We specialize in building scalable, secure platforms that ensure seamless shopping experiences across all devices. ',
    additionalInfo: 'With features like payment gateway integration, inventory management, personalized product recommendations, and customer analytics, our e-commerce solutions drive engagement and increase sales. We use cutting-edge technologies to design intuitive interfaces that enhance the user experience while ensuring strong security protocols to protect customer data. Whether launching a new online store or optimizing an existing platform, we provide end-to-end solutions for sustainable e-commerce growth.'
  },
  'POS-SOFTWARES': {
    description: 'Our POS solutions cater to both small and large businesses, providing tools for inventory, sales, and employee management.',
    additionalInfo: 'Our systems are designed for simplicity and efficiency, with cloud integration and multi-store management features.'
  },
  'MANAGEMENT-SYSTEM': {
    description: 'Custom management systems that help automate business processes, optimize workflows, and improve efficiency.',
    additionalInfo: 'Our systems can be tailored to HR, inventory, or customer relationship management, with analytics and reporting features included.'
  },
};

const DetailPage = () => {
  const { title } = useParams(); // Get title from URL
  const service = details[title]; // Fetch details based on the title

  if (!service) {
    return <div className="detail-page"><h2>Service not found</h2></div>;
  }

  return (
    <div className="detail-page">
      <h1 className="detail-heading">{title.replace(/-/g, ' ')}</h1> {/* Converts hyphens to spaces for titles */}
      {/* Combine description and additionalInfo into a single paragraph */}
      <p className="detail-description">{`${service.description} ${service.additionalInfo}`}</p>
    </div>
  );
};
export default DetailPage;
