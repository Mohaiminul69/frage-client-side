import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import HomeCollection from "../HomeCollection/HomeCollection";
import Footer from "./../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation render={true} />
      <Banner />
      <HomeCollection />
      <Footer />
    </div>
  );
};

export default Home;
