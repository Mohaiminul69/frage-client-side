import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bgBlack text-white pt-5 pb-4">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3} className="mb-4 pt-1">
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
          <Col sm={12} md={6} lg={3} className="d-flex align-items-start mb-4">
            <div className="footer-bottom-div mt-3">
              <h5 className="text-uppercase mb-3">Contact Us</h5>
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
          <Col sm={12} md={6} lg={3} className="gallary mb-4">
            <div className="footer-bottom-div mt-3">
              <h5 className="text-uppercase mb-3">Gallary</h5>
              <Row>
                <Col xm={6}>
                  <img
                    src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                    alt=""
                  />
                </Col>
                <Col xm={6}>
                  <img
                    src="https://i.ibb.co/SnjSH1D/pexels-valeria-boltneva-1961794.jpg"
                    alt=""
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xm={6}>
                  <img
                    src="https://i.ibb.co/d2xkMqR/pexels-anastasiya-lobanovskaya-4110336.jpg"
                    alt=""
                  />
                </Col>
                <Col xm={6}>
                  <img
                    src="https://i.ibb.co/BTLHXzH/zara-something.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="d-flex align-items-start mb-4">
            <div className="worldMap footer-bottom-div mt-3">
              <h5 className="text-uppercase mb-3">We Ship World Wide</h5>
              <img src="https://i.ibb.co/S7ZjSDp/988914939-PO-big.jpg" alt="" />
            </div>
          </Col>
        </Row>
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
