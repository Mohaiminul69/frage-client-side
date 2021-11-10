import React from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <div className="sliderContainer">
      <Carousel className="customSlider">
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/cgLrjVk/top-view-blue-ribbon-man-perfume.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/YcfjNvX/attractive-seductive-sensual-stylish-woman-holding-perfume.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/sFZq4n6/peakpx.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="bannerSlogan">
        <img src="https://i.ibb.co/dJG3Qj0/logo.png" alt="" />
        <h1 className="mt-3 text-center text-white text-capitalize display-6">
          {/* <span className="text-danger display-1 fw-bold">Tuzy</span> */}
          {/* <br /> */}
          Have Confidence in yourself.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
