import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AlertModal from "../../Shared/AlertModal/AlertModal";
import Button from "@mui/material/Button";
import "./addProduct.css";

const AddProduct = () => {
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
    fetch("https://frozen-refuge-23457.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAlertText("Perfume Added");
          handleAlertModalOpen();
          reset();
        }
      });
  };
  return (
    <div className="bgAddProduct py-5">
      <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
        Add Product
      </h1>
      <div className="customHorizontalLine mb-5"></div>
      <Container className="mt-2">
        <Row>
          <Col sm={12} md={3}></Col>
          <Col sm={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)} className="AddProductForm">
              <h6 className="fw-light fs-5 mb-3">
                Please fill up the form to Add Product
              </h6>
              <input
                {...register("name", { required: true })}
                placeholder="Product Name"
                className="form-control mb-3"
              />
              <select {...register("type")} className="form-control mb-3">
                <option value="perfume">Perfume</option>
                <option value="bodySpray">Body Spray</option>
              </select>
              <select {...register("madeFor")} className="form-control mb-3">
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
              <select {...register("madeFor")} className="form-control mb-3">
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
              <input
                {...register("price", { required: true })}
                placeholder="Product Price"
                className="form-control mb-3"
                type="number"
              />
              <input
                {...register("description", { required: true })}
                placeholder="Description"
                className="form-control mb-3"
              />
              <input
                {...register("img", { required: true })}
                placeholder="Product Image URL"
                className="form-control mb-3"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <Button
                type="submit"
                variant="contained"
                className="customBtn btn-green"
              >
                Add Product
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

export default AddProduct;
