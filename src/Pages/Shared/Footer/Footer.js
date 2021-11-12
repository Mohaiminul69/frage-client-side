import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bgBlack text-white pt-5 pb-4">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3} className="mb-2 pt-1">
            <img
              className="footerLogo mt-3"
              src="https://i.ibb.co/dJG3Qj0/logo.png"
              alt=""
            />
            <p className="mt-3">
              We have the best collection of perfume. <br /> If you are looking
              for something unique and exotic we are the one you need.
            </p>
            <ul className="follow-links">
              <li>
                <Link to="#">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} className="d-flex align-items-start mb-2">
            <div className="footer-bottom-div mt-3">
              <h4 className="text-uppercase mb-3">Contact Us</h4>
              <ul className="list">
                <li>SUN - SAT 9AM - 10PM BST</li>
                <li>
                  <Link to="#">ONLINE form</Link>
                </li>
                <li>
                  <Link to="#">whatsapp +88 0179 9999 09</Link>
                </li>
                <li>
                  <Link to="#">contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="d-flex align-items-start mb-2">
            <div className="footer-bottom-div mt-3">
              <h4 className="text-uppercase mb-3">About Us</h4>
              <ul className="list">
                <li>Learn about us</li>
                <li>
                  <Link to="#">Upcoming Events</Link>
                </li>
                <li>
                  <Link to="#">News</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="d-flex align-items-start mb-2">
            <div className="footer-bottom-div mt-3">
              <h4 className="text-uppercase mb-3">Customer Care</h4>
              <ul className="list">
                <li>Customer Service Policy</li>
                <li>
                  <Link to="#">Help Line: +88 0179 9999 09</Link>
                </li>
                <li>
                  <Link to="#">FAQs</Link>
                </li>
                <li>
                  <Link to="#">Facebook Messenger</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="gallary footer-bottom-div mt-3 mb-4">
          <h4 className="text-uppercase mb-3">Instagram</h4>
          <Row>
            <Col className="mb-3" xs={6} md={3} lg={2}>
              <img
                src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                alt=""
              />
            </Col>
            <Col className="mb-3" xs={6} md={3} lg={2}>
              <img
                src="https://i.ibb.co/SnjSH1D/pexels-valeria-boltneva-1961794.jpg"
                alt=""
              />
            </Col>
            <Col className="mb-3" xs={6} md={3} lg={2}>
              <img
                src="https://i.ibb.co/d2xkMqR/pexels-anastasiya-lobanovskaya-4110336.jpg"
                alt=""
              />
            </Col>
            <Col className="mb-3" xs={6} md={3} lg={2}>
              <img src="https://i.ibb.co/BTLHXzH/zara-something.jpg" alt="" />
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p className="text-center">
            Site managed by FRAGE.co. Copyright &copy; FRAGE.co Limited 2021.
            All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
