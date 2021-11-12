import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Test = () => {
  return (
    <div>
      <Container>
        <Row>
          <div class="portfolio-container full-width">
            <Col md={3} class="portfolio-item  web-design">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} class="portfolio-item  web-design">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} class="portfolio-item  brand">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} class="portfolio-item  brand">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} class="portfolio-item  web-design">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} class="portfolio-item  web-design">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Test;
