import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function ReserveRoom() {
  return (
    <div className="reserveRoom">
      <div className="reserveRoom__head">
        <div className="container">
          <div className="reserveRoom__head-content">
            <h1>How to reserve a room?</h1>
            <h4>Intensive Care Unit</h4>
            <Button variant="contained" color="primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="reserveRoom__recovery py-5">
        <div className="container">
          <div className="reserveRoom__recovery-content">
            <h2 className="text-left">
              RECOVERY IS NOT A MIRACLE AT ENAYA HOSPITALS
            </h2>
            <p>
              When patients are critically ill, there should be no question
              regarding the availability of resources that they may require. Our
              nurse-to-patient ratio of 1:1 furthers this commitment to superior
              patient care, allowing us to provide individualized attention to
              each of our patients along with a comfortable recovery process.
              The Istishari Hospital provides an unquestionably high standard of
              care, specialist expertise and technology, whether day or night,
              offering:
            </p>
            <ul>
              <li>
                Highest quality intensive care Hill-Rom beds to minimize bed
                sores.
              </li>
              <li>
                Negative pressure isolation rooms for patients with compromised
                immune systems.
              </li>
              <li>
                Positive pressure isolation rooms for kidney transplant
                patients.
              </li>
              <li>
                Separate rooms equipped with portable kidney dialysis machines
                for post cardiac surgeries.
              </li>
              <li>
                Round-the-clock on-call physicians to provide comprehensive care
                and intervention for critically ill, heart or RTA patients.
              </li>
            </ul>
            <h2 className="text-left">ISOLATION AREAS</h2>
            <p>
              Patients in isolation may have visitors; however the nurse will
              ensure that visitors are educated on proper protective techniques
              and that these techniques are strictly followed.
            </p>
            <h2 className="text-left">VISITING REGULATIONS</h2>
            <ul>
              <li>Only one visitor at a time.</li>
              <li>No children allowed.</li>
              <li>Flowers are strictly forbidden.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserveRoom;
