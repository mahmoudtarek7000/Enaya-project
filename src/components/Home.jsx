import React from "react";
import BringCare from "./BringCare";
import CoronaSection from "./coronavirus/CoronaSection";
import Head from "./Head";
import HowWorks from "./HowWorks";
import SearchBox from "./Search/SearchBox";
import Selling from "./Selling";

function Home() {
  return (
    <div>
      <Head />
      <div className="container">
        <SearchBox />
        <Selling />
      </div>
      <HowWorks />
      <CoronaSection />
      <BringCare />
      
    </div>
  );
}

export default Home;
