import React from "react";
const About = ({ building, street, city, governorate, phone, mobile }) => {
  return (
    <div className="about section-cont">
      <div className="container">
        <h2 className="text-center mb-5">About</h2>
        <div>
          <p>
            location : {building} {street} {city} {governorate}
          </p>
          <p>Telephone : {phone}</p>
          <p>Mobile : {mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
