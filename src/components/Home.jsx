import React from "react";
import Booking from "./Booking";
import Head from "./Head";
import SearchBox from "./Search/SearchBox";
import Selling from "./Selling";

function Home() {
  return (
    <div>
      <Head />
      <div className="container">
        <SearchBox />
        <Selling />
        {/* <Booking /> */}
      </div>
    </div>
  );
}

export default Home;
