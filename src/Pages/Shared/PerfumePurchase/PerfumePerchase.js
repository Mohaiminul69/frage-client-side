import { CircularProgress } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import useAuth from "./../../../Hooks/useAuth";
import { useParams } from "react-router";
import PerfumeDetails from "../PerfumeDetails/PerfumeDetails";
import "./perfumePurchase.css";

const PerfumePerchase = () => {
  const { perfumeId } = useParams();
  const [perfume, setPerfume] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://frozen-refuge-23457.herokuapp.com/purchase/${perfumeId}`)
      .then((res) => res.json())
      .then((data) => {
        setPerfume(data);
        setLoading(false);
      });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  if (loading) {
    return (
      <Fragment>
        <Navigation />
        <div className="bgpefumePurchase py-5">
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
      <div className="bgpefumePurchase py-5">
        <Container className="my-5 container py-5">
          <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
            Order details
          </h1>
          <div className="customHorizontalLine mb-5"></div>
          <Row>
            <Col sm={12} md={6}>
              <PerfumeDetails perfume={perfume} />
            </Col>
            <Col sm={12} md={6}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="loginForm w-100"
              >
                <h6 className="fw-light fs-5 mb-3">
                  Please fill up the form to place order
                </h6>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="form-control mb-3"
                  defaultValue={user?.displayName}
                />
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="form-control mb-3"
                  defaultValue={user?.email}
                />
                <input
                  {...register("date")}
                  placeholder="Date"
                  className="form-control mb-3"
                  type="date"
                />
                <input
                  {...register("phone", { required: true })}
                  placeholder="Phone"
                  className="form-control mb-3"
                  type="number"
                />
                <input
                  {...register("address", { required: true })}
                  placeholder="Address"
                  className="form-control mb-3"
                />
                <input
                  {...register("creditCard", { required: true })}
                  placeholder="Credit Card Number"
                  className="form-control mb-3"
                  type="number"
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <Button
                  type="submit"
                  className="customBtn bg-success"
                  variant="contained"
                >
                  Order Now
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
};

export default PerfumePerchase;
