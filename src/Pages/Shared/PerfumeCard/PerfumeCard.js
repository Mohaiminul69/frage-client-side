import Button from "@mui/material/Button";
import React from "react";
import "./perfumeCard.css";

const PerfumeCard = ({ perfume }) => {
  const { name, img, description, price } = perfume;
  return (
    <div className="perfumeCard mb-3">
      <img src={img} alt="" />
      <div className="p-2 pb-3 text-center">
        <h6>{name}</h6>
        <p>
          Price: <span className="text-warning fs-5">${price}</span>
        </p>
        <Button className="customBtn" variant="contained">
          Purchase
        </Button>
      </div>
    </div>
  );
};

export default PerfumeCard;
