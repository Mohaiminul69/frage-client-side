import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./perfumeCard.css";

const PerfumeCard = ({ perfume }) => {
  const { name, img, price, _id } = perfume;
  return (
    <div className="perfumeCard mb-3">
      <img src={img} alt="" />
      <div className="p-2 pb-3 text-center">
        <h6>{name}</h6>
        <p>
          Price: <span className="text-warning fs-5">${price}</span>
        </p>
        <Link to={`/purchase/${_id}`}>
          <Button className="customBtn" variant="contained">
            Purchase
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PerfumeCard;
