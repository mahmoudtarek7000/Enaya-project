import { Link } from "react-router-dom";
import React from "react";

function CoronaSection() {
  return (
    <div className="coronaSection py-5">
      <div className="container">
        <div className="coronaSection__wrapper d-flex">
          <figure className="mr-4">
            <img
              src="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26866/_next/static/images/ministry-of-health-logo.png"
              alt="health logo"
            />
          </figure>
          <div className="coronaSection__content">
            <h3>Corona Symptoms?</h3>
            <p>
              You can ask and consult an internist about corona symptoms through
              a free call, sponsored by the Ministry of Health and Population,
              from 8 am to 12 am.
            </p>
          </div>
            <Link to="/coronavirus" className="d-flex">
              <img
                src="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26866/_next/static/images/next-arrow.svg"
                alt="arrow"
              />
            </Link>
        </div>
        <div className="dropdown-divider"></div>
      </div>

    </div>
  );
}

export default CoronaSection;
