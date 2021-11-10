import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PerfumeCard from "../../Shared/PerfumeCard/PerfumeCard";
import "./homeCollection.css";

const HomeCollection = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://frozen-refuge-23457.herokuapp.com/perfumes")
      .then((res) => res.json())
      .then((data) => {
        setPerfumes(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <Container className="text-center">
        <CircularProgress />
      </Container>
    );
  }
  return (
    <Container className="homeCollection my-4">
      <Row>
        <Col sm={12} md={6}>
          <Row>
            <Col sm={12} md={6}>
              <PerfumeCard perfume={perfumes[2]} />
            </Col>
            <Col sm={12} md={6}>
              <PerfumeCard perfume={perfumes[4]} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <PerfumeCard perfume={perfumes[6]} />
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <Col sm={12}>
              <PerfumeCard perfume={perfumes[7]} />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <PerfumeCard perfume={perfumes[8]} />
            </Col>
            <Col sm={12} md={6}>
              <PerfumeCard perfume={perfumes[10]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeCollection;