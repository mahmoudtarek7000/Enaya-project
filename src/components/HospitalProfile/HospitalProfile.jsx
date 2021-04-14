import React from "react";
import About from "./About";
import Gallery from "./Gallery";
import Header from "./Header";
import Rooms from "./Rooms";
import Specialities from "./Specialities";

const HospitalProfile = () => {
  return (
    <div>
      <Header />
      <About />
      <Gallery />
      <Specialities />
      <Rooms />
    </div>
  );
};

export default HospitalProfile;
