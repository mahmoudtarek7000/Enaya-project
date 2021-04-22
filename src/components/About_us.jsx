import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function About_us(query) {
  return (
    <div className="aboutUs">
      {query.location.query}
      <div className="container">
        <h2 className="text-left">About Us</h2>
        <p>
          Enaya.com is the leading digital healthcare booking platform and
          practice management software in MENA. We are pioneering the shift to
          automated physician, clinic and hospital bookings making healthcare
          easily accessible in the region.
        </p>
        <p>
          With over 200,000 verified reviews, patients are able to search,
          compare, and book the best doctors in just 1 minute. Doctors also
          provide Patients with seamless healthcare experiences through our
          clinic management software.
        </p>
        <p>
          We operate in Egypt, KSA, Jordan, Lebanon, Kenya and Nigeria. We
          strive to lead every aspect of the healthcare industry and continue to
          launch products that have positive impact on people’s lives.
        </p>
        <Button variant="contained" color="primary">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}

export default About_us;
