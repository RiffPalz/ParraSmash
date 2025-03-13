import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import "./About.css";

export const About = () => {
  return (
    <>
      <div className="about-bg">
        <div className="about-welcome">
          <div className="glow-parrasmash">
            <p className="about-title">Welcome to</p>
            <p className="about-title-2">PARRASMASH</p>
          </div>
          <p className="about-desc">
            <i>
              We aim to connect you with the best badminton courts and enhance
              your game. <br /> Access to quality sports facilities is essential
              for all, and our platform simplifies this process.
            </i>
          </p>
        </div>

        <div className="about-selection">
          <Accordion className="select">
            <Accordion.Item eventKey="0" className="select-item">
              <Accordion.Header className="select-header">Who we are?</Accordion.Header>
              <Accordion.Body className="select-body">
                We are a dedicated team of badminton enthusiasts and tech experts who recognize the need for quality playing spaces. Our expertise has led us to create a platform that connects players with premium badminton courts, catering to everyone from beginners to seasoned athletes.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="select-item">
              <Accordion.Header className="select-header">What we do?</Accordion.Header>
              <Accordion.Body className="select-body">
                Our platform features advanced tools to streamline your search for the ideal badminton court. With location-based recommendations, easy-to-use filters, and detailed court profiles, we help you make informed choices about booking and facilities.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="select-item">
              <Accordion.Header className="select-header">Why it matters?</Accordion.Header>
              <Accordion.Body className="select-body">
                Choosing the proper badminton court can enhance your experience and skills. We prioritize transparency, ease, and accuracy, connecting players with top facilities to foster a stronger badminton community and promote a healthier lifestyle.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <Link to="/bookcourt"><Button variant="outline-success" className="red2bg">Ready to Begin?</Button></Link>

      </div>
    </>
  );
};
