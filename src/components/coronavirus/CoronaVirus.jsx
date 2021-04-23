import React from "react";
import Card from "../Card";
import png1 from "../../assets/images/stayathome.png";
import png2 from "../../assets/images/wash.jpg";
import png3 from "../../assets/images/temp.png";
import png4 from "../../assets/images/room.png";
import png5 from "../../assets/images/cough.png";
import png6 from "../../assets/images/call.png";
import png7 from "../../assets/images/dist.png";

function CoronaVirus() {
  return (
    <div className="coronaVirus">
      <div className="container">
        <div className="coronaVirus-header py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="text-left main-head">
                Procedures for Self-Quarantine under Covid-19
              </h2>
            </div>
            <div className="col-lg-6">
              <p>
                Self-quarantine is recommended for individuals who have been
                directly exposed to the new Coronavirus or have history of
                travel in infected or heavily populated areas.
              </p>
            </div>
          </div>
        </div>
        <div className="coronaVirus-wrapper row">
          <Card
            iconUrl={png1}
            header="Stay at home."
            paragraph="Limit all your non-essential travels.Unless you're going out for food, medicines or other essentials."
          />
          <Card
            iconUrl={png2}
            header="Wash your hands."
            paragraph="Practice good hand hygiene by washing your hands with soap and water or using alcohol or hand sanitizer."
          />
          <Card
            iconUrl={png3}
            header="Check your temperature."
            paragraph="Check your temperature at least two times a day."
          />
          <Card
            iconUrl={png4}
            header="Stay in a specific room."
            paragraph="If you're sick or suspect yourself to be sick, it's best to stay in a designated room or area away from others. If possible, have a designated toilet and bathroom as well."
          />
          <Card
            iconUrl={png5}
            header="Watch for other symptoms."
            paragraph="Aside from fever, Covid-19 symptoms include cough, difficulty breathing, and fatigue."
          />
          <Card
            iconUrl={png6}
            header="Call your doctor or hospital before visiting."
            paragraph="If you need to seek medical attention whether for viral symptoms or other medical care reasons, contact your doctor or hospital ahead of time so they can prepare and take precautions for your arrival."
          />
          <Card
            iconUrl={png7}
            header="Practice social distancing."
            paragraph="If you need to go out, maintain at least 2 meters (6 feet) distance from others."
          />
        </div>
      </div>
      <p className="text-center">
        Source:{" "}
        <span>Centers for Disease Control and Prevention (cdc.gov)</span>
      </p>
    </div>
  );
}

export default CoronaVirus;
