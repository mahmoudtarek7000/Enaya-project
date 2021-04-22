import { Button, Link } from "@material-ui/core";
import React from "react";
import png from "../assets/images/img.png";

function BringCare() {
  return (
    <div className="BringCare">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <h2 className="text-left">
              Bring Care to Your
              <span>Home With One Click</span>
            </h2>
            <p className="text-justify">
              Enaya.com is built by a team who constantly brings in fresh
              perspectives, provides new ideas and finds solutions for everyday
              challenges to make an impact.
              <ul>
                Our culture values are:
                <li>lead from the front.</li>
                <li>synthesize knowledge.</li>
                <li>problem-solve passionately.</li>
                <li>build on others’ strength.</li>
                <li>drive outcomes fast.</li>
              </ul>
            </p>
            <div className="bottons mt-4">
            <Button variant="contained" color="primary">
              <Link to="/about">About Us</Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to="/contact">Contact Us</Link>
            </Button></div>
          </div>
          <div className="col-lg-6">
            <figure>
              <img src={png} alt="member" className="img-fluid" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BringCare;
