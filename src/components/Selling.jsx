import React from "react";
import Card from "./Card";

function Selling() {
  return (
    <div className="row selling section-cont">
      <Card
        iconUrl="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26308/_next/static/images/medical-care-icon.svg"
        header="All your healthcare needs"
        paragraph="Search and book a clinic visit, home visit, or a teleconsultation. Order your medicine and book a service or operation."
      />
      <Card
        iconUrl="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26308/_next/static/images/doctor-icon.svg"
        header="Verified patient reviews"
        paragraph="Doctor ratings are from patients who booked and visited the doctor through Vezeeta."
      />
      <Card
        iconUrl="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26308/_next/static/images/booking-icon.svg"
        header="Your booking is confirmed"
        paragraph="Your booking is automatically confirmed, as the doctor specifies his working hours and is notified of the booking details."
      />
      <Card
        iconUrl="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26308/_next/static/images/security-icon.svg"
        header="Book for free, and pay in the Hospital"
        paragraph="The consultation fees stated on Vezeeta are the actual doctor's fees with no extra charges."
      />
    </div>
  );
}

export default Selling;
