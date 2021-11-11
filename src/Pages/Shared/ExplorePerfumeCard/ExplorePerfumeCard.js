import React from "react";
import Button from "@mui/material/Button";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./explorePerfumeCard.css";

const ExplorePerfumeCard = ({ perfume }) => {
  const { name, price, img, _id } = perfume;
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="explorePerfumeCard mb-3">
        <img src={img} alt="" />
        <div className="p-3 pt-2 text-left">
          <h6>{name}</h6>
          <p>
            Price: <span className="text-warning fs-5">${price}</span>
          </p>
          {/* <p className="text-muted">{description.slice(0, 17)}...</p> */}
          <Link to={`/purchase/${_id}`}>
            <Button className="customBtn" variant="contained">
              Purchase
            </Button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ExplorePerfumeCard;
