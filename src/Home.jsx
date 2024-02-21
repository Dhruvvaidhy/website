import React from "react";
import web from "../src/images/home2.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
        name="Grow Your Business with Rocky "
        imgsrc={web}
        visit="/contact"
        btname="Stared Now"/>
    </>
  );
};

export default Home;
