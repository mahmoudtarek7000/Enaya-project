import React from "react";
import png1 from "../assets/images/img-01-3.png";
import png2 from "../assets/images/img-02-4.png";
import png3 from "../assets/images/img-03-3.png";
function HowWorks() {
  return (
    <div className="howWorks">
      <div className="container">
        <div className="howWorks-header pb-5">
          <p className="text-center">We Made It Simple</p>
          <h2 className="mb-5">How We Works?</h2>
          <p className="text-center">
            Enaya culture fosters learning, adaptability and disruption. A
            culture that equips youth with skills, opportunities and a network
            of strong willed individuals all sharing the same passion for what
            they do for life.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 text-center mb-3">
            <img src={png1} alt="Professional" className="img-fluid" />

            <h5 className="my-2">Search Best Online</h5>
            <h2>Professional</h2>
          </div>
          <div className="col-lg-4 text-center mb-3">
            <img src={png2} alt="Appointment" className="img-fluid" />

            <h5 className="my-2">Get Instant</h5>
            <h2>Appointment</h2>
          </div>
          <div className="col-lg-4 text-center">
            <img src={png3} alt="Feedback" className="img-fluid" />

            <h5 className="my-2">Leave Your</h5>
            <h2>Feedback</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWorks;
