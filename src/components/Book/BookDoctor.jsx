import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
function BookDoctor() {
  return (
    <div className="bookDoctor">
      <div className="bookDoctor__head">
        <div className="container">
          <div className="bookDoctor__content">
            <h1>How to book a Doctor?</h1>
            <h4>
              Through our leading-edge user experience management systems, smart
              queue management solutions, and easy-to-use applications and
              software.
            </h4>
            <Button variant="contained" color="primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="bookDoctor__info py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>
                Queue management systems specially designed to suit your needs
              </h3>
              <p className="text-justify">
                We provide solutions that suit different sizes of organizations,
                covering both basic and advanced needs. The basic needs, as we
                see them, are centered on ensuring that the service is provided
                to customers in the correct order. For more sophisticated
                requirements, we allow you to design solutions to tailor the
                user experience according to their needs, by choosing the
                functionality that best suits your current needs.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://www.qmatic.com/hubfs/email/gl/1200%20x%20628px%20Customer-Journey-Management%E2%80%936-step-process-for-creating-a-successful-customer-journey.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bookDoctor__advantages py-5">
        <div className="container">
          <h3>Your advantages at a glance</h3>
          <ul>
            <li>
              Uncomplicated online appointment management and placement by
              e-mail.
            </li>
            <li>Appointments for consultation and second opinions.</li>
            <li>Simple management.</li>
            <li>Your direct online access to your desired hospital.</li>
            <li>Real-time information about the requested appointment.</li>
            <li>Compliant with data protection.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookDoctor;
