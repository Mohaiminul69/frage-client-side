import { CircularProgress } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./customerReview.css";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
<------------------- Getting all the Reviews from Database ------------------->
*/

  useEffect(() => {
    fetch("https://frozen-refuge-23457.herokuapp.com/getReviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  const settings = {
    arrows: false,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  if (loading) {
    return (
      <Fragment>
        <div className="pb-5">
          <Container className="text-center my-3">
            <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
              Our Reviews
            </h1>
            <div className="customHorizontalLine mb-5"></div>
            <CircularProgress />
          </Container>
        </div>
      </Fragment>
    );
  }
  return (
    <div className="bgGrey pb-5">
      <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
        Our Reviews
      </h1>
      <div className="customHorizontalLine mb-5"></div>
      <Container className="px-5">
        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default CustomerReviews;
