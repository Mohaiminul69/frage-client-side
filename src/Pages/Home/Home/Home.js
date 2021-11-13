import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import HomeCollection from "../HomeCollection/HomeCollection";
import Footer from "./../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation render={true} />
      <Banner />
      <HomeCollection />
      <Categories />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Home;
