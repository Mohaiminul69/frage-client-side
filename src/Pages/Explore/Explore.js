import { CircularProgress } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ExplorePerfumeCard from "../Shared/ExplorePerfumeCard/ExplorePerfumeCard";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "./../Shared/Footer/Footer";
import "./explore.css";

const Explore = () => {
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
      <Fragment>
        <Navigation />
        <div className="bgExplore py-5">
          <Container className="text-center my-5">
            <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
              Explore Our Collection
            </h1>
            <div className="customHorizontalLine mb-5"></div>
            <CircularProgress />
          </Container>
        </div>
        <Footer />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Navigation />
      <div className="bgExplore py-5">
        <Container className="my-5">
          <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
            Explore Our Collection
          </h1>
          <div className="customHorizontalLine mb-5"></div>
          <Row>
            {perfumes.map((perfume) => (
              <ExplorePerfumeCard key={perfume._id} perfume={perfume} />
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Explore;
