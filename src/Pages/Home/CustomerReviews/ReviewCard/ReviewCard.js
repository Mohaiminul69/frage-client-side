import React from "react";
import "./reviewCard.css";
import Rating from "@mui/material/Rating";

const ReviewCard = ({ review }) => {
  const { name, review: comment, rating, img } = review;
  return (
    <div className="reviewCard">
      <div className="review-div">
        <i className="fas fa-quote-right"></i>
        <q className="text-muted fs-6 text-center mx-3">
          {comment.slice(0, 150)}..
        </q>
      </div>
      <div className="bg-grey px-3 py-4">
        <img src={img} alt="" />
        <div className="reviewer-name">
          <h6>{name}</h6>
          <Rating
            name="half-rating-read"
            value={parseInt(rating)}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
