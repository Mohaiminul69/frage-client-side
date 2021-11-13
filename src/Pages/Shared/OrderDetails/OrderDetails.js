import { CircularProgress } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useParams } from "react-router";
import PerfumeDetails from "../PerfumeDetails/PerfumeDetails";
import "./orderDetails.css";

const OrderDetails = () => {
  const { perfumeId } = useParams();
  const [perfume, setPerfume] = useState({});
  const [loading, setLoading] = useState(true);

  /*
<------------------ Getting Single Perfume Details from Database ------------------>
*/

  useEffect(() => {
    fetch(`https://frozen-refuge-23457.herokuapp.com/order/${perfumeId}`)
      .then((res) => res.json())
      .then((data) => {
        setPerfume(data);
        setLoading(false);
      });
  }, [perfumeId]);

  if (loading) {
    return (
      <Fragment>
        <Navigation />
        <div className="bgOrderDetails py-5">
          <Container className="text-center my-5">
            <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
              Order details
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
      <Navigation render={true} />
      <div className="bgOrderDetails py-5">
        <Container className="my-5 container py-5">
          <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
            Order details
          </h1>
          <div className="customHorizontalLine mb-5"></div>
          <Row>
            <Col sm={12} md={3}></Col>
            <Col sm={12} md={6}>
              <PerfumeDetails perfume={perfume} />
            </Col>
            <Col sm={12} md={3}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
};

export default OrderDetails;
