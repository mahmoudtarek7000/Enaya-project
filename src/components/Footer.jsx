import React from "react";

function Footer() {
  return (
    <footer className="section-cont">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-4">logo</h4>
            <ul className="list-unstyled">
              <li className="mb-3">About us</li>
              <li className="mb-3">Out teams</li>
              <li className="mb-3">Careers</li>
              <li className="mb-3">Press</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-4">Search By</h4>
            <ul className="list-unstyled">
              <li className="mb-3">Location</li>
              <li className="mb-3">Speciality</li>
              <li className="mb-3">Insurance</li>
              <li className="mb-3">Hospitals</li>
              <li className="mb-3">Available Intensive Care Room</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-4">Are you a Hospitals?</h4>
            <ul className="list-unstyled">
              <li className="mb-3">Join Enayaa Hospitals</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-4">Need Help</h4>
            <ul className="list-unstyled">
              <li className="mb-3">Contact us</li>
              <li className="mb-3">Terms Of Use</li>
              <li className="mb-3">privacy Policy</li>
              <li className="mb-3">Doctors Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
