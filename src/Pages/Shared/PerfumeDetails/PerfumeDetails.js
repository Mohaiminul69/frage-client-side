import React from "react";
import "./perfumeDetails.css";

const PerfumeDetails = ({ perfume }) => {
  const { name, img, price, description } = perfume;
  return (
    <div className="perfumeDetails mb-3">
      <img src={img} alt="" />
      <div className="p-3 pt-2 text-left">
        <h1 className="display-6">{name}</h1>
        <p className="fs-5">
          Price: <span className="text-success fs-4">${price}</span>
        </p>
        <p className="text-muted">{description}...</p>
      </div>
    </div>
  );
};

export default PerfumeDetails;
