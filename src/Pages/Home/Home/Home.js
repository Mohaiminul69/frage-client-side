import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import thor from "../../../Videos/1268729919001_5537394095001_5537388317001.mp4";

const Home = () => {
  return (
    <div>
      <Navigation />
      {/* <video autoPlay loop muted>
        <source src={thor} type="video/mp4" />
      </video>
      <video class="z-depth-1" autoPlay loop muted>
        <source src={thor} type="video/mp4" />
      </video> */}
      <Banner />
    </div>
  );
};

export default Home;
