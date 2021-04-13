import React from "react";
import Card from "./Card";

function Booking() {
  return (
    <div
      className="booking carousel slide"
      id="carouselExampleControls"
      data-ride="carousel"
    >
      <h2>Book from top specialties</h2>
      <div className="carousel-inner">
        <div className="row">
          <Card
            className="col-lg-3"
            header="Skin"
            iconUrl={
              "https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26308/_next/static/images/specialties/dermatology/eg/desktop.jpg"
            }
          />
          <Card
            className="col-lg-3"
            header="Teeth"
            iconUrl={
              "https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26308/_next/static/images/specialties/dentistry/eg/desktop.jpg"
            }
          />

          <Card
            className="col-lg-3"
            header="Mental"
            iconUrl={
              "https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26308/_next/static/images/specialties/psychiatry/eg/desktop.jpg"
            }
          />
          <Card
            className="col-lg-3"
            header="Child"
            iconUrl={
              "https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/26308/_next/static/images/specialties/pediatrics-and-new-born/eg/desktop.jpg"
            }
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Booking;
