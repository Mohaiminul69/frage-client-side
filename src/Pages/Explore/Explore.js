import React, { useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import "./explore.css";

const Explore = () => {
  const [perfumes, setPerfumes] = useState([]);
  useEffect(() => {
    fetch("https://frozen-refuge-23457.herokuapp.com/perfumes")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);
  return (
    <div className="bgExplore">
      <Navigation />
      {perfumes.map((perfume) => (
        <h1>{perfume.name}</h1>
      ))}
    </div>
  );
};

export default Explore;
