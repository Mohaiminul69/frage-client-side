import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AlertModal from "../../Shared/AlertModal/AlertModal";
import Button from "@mui/material/Button";
import useAuth from "../../../Hooks/useAuth";

const UserReview = () => {
  const { user } = useAuth();
  // Alert Modal
  // Alert Modal
  // Alert Modal
  const [alertText, setAlertText] = useState("");
  const [AlertOpen, setAlertOpen] = useState(false);
  const handleAlertModalOpen = () => setAlertOpen(true);
  const handleAlertModalClose = () => setAlertOpen(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://frozen-refuge-23457.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAlertText("Your Review Added");
          handleAlertModalOpen();
          reset();
        }
      });
  };
  return (
    <div className="bgAddProduct py-5">
      <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
        Add Review
      </h1>
      <div className="customHorizontalLine mb-5"></div>
      <Container className="mt-2">
        <Row>
          <Col sm={12} md={3}></Col>
          <Col sm={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)} className="AddProductForm">
              <h6 className="fw-light fs-5 mb-3">
                Please give us your honest review..
              </h6>
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
                defaultValue={user?.displayName}
                className="form-control mb-3"
              />
              <input
                {...register("email", { required: true })}
                placeholder="Your Email"
                defaultValue={user?.email}
                className="form-control mb-3"
              />
              <input
                {...register("review", { required: true })}
                placeholder="Your Review"
                className="form-control mb-3"
              />
              <input
                {...register("rating", { required: true })}
                placeholder="Rate Us"
                className="form-control mb-3"
                type="number"
              />
              <input
                {...register("img", { required: true })}
                placeholder="Display Image URL"
                className="form-control mb-3"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <Button
                type="submit"
                variant="contained"
                className="customBtn btn-green"
              >
                Add Review
              </Button>
            </form>
          </Col>
          <Col sm={12} md={3}></Col>
        </Row>
      </Container>
      <AlertModal
        AlertOpen={AlertOpen}
        alertText={alertText}
        handleAlertModalClose={handleAlertModalClose}
      />
    </div>
  );
};

export default UserReview;
