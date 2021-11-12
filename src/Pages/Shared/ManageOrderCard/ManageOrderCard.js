import React from "react";
import Button from "@mui/material/Button";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./manageOrderCard.css";

const ManageOrderCard = ({ perfume, sendOrderIdToModal }) => {
  const { name, price, img, _id, status } = perfume;
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="manageOrderCard mb-3">
        <img src={img} alt="" />
        <div className="p-3 pt-2 text-left">
          <h5 className="fw-light">{name}</h5>
          <p>
            Price: <span className="text-warning fs-5">${price}</span>
          </p>
          <p>
            Order Status:{" "}
            {status === false ? (
              <span className="text-warning">Pending</span>
            ) : (
              <span className="text-success">Shipped</span>
            )}
          </p>
          {/* <p className="text-muted">{description.slice(0, 17)}...</p> */}
          <div className="d-flex justify-content-between">
            <Link to={`/orderDetails/${_id}`}>
              <Button className="bg-dark" variant="contained">
                view details
              </Button>
            </Link>
            <Button
              onClick={() => sendOrderIdToModal(_id)}
              className="bg-danger"
              variant="contained"
            >
              cancel order
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ManageOrderCard;
