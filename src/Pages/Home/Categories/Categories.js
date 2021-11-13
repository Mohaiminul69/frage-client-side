import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./categories.css";

const Categories = () => {
  return (
    <Container className="homeCollection my-5">
      <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
        Categories
      </h1>
      <div className="customHorizontalLine mb-5"></div>
      <Row>
        <Col className="mb-3" sm={12} md={4}>
          <div className="category-div men">
            <h4>Mens Collection</h4>
            <Link to="/explore/men">
              <Button
                className="customBtn mt-4 mb-5 btn-grey"
                variant="contained"
              >
                Men
              </Button>
            </Link>
          </div>
        </Col>
        <Col className="mb-3" sm={12} md={4}>
          <div className="category-div explore-all">
            <h4>All Collection</h4>
            <Link to="/explore/all">
              <Button
                className="customBtn mt-4 mb-5 btn-grey"
                variant="contained"
              >
                Explore All
              </Button>
            </Link>
          </div>
        </Col>
        <Col className="mb-3" sm={12} md={4}>
          <div className="category-div women">
            <h4>Womens Collection</h4>
            <Link to="/explore/women">
              <Button
                className="customBtn mt-4 mb-5 btn-grey"
                variant="contained"
              >
                Women
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
