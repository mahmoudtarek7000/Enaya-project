import React, { useContext } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { BiHealth } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Hospital_card.scss";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { AuthContext } from "../../../context/AuthProvider";

function Hospital_card({ results, hospitals, doctors }) {
  const { userType } = useContext(AuthContext);

  return (
    <div>
      {hospitals &&
        hospitals.map((hospital) => {
          return (
            <div key={hospital?.id}>
              <Card className="d-flex flex-row card my-5  rounded p-4 result-card">
                <CardImg
                  top
                  className="img-fluid photo w-25  rounded-circle"
                  src={hospital?.logo}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="mb-4 d-flex txt" tag="h6">
                    {hospital?.name}
                    <Link
                      to={{
                        pathname: `/hospitals/${hospital.id}`,
                      }}
                      className="btn-sm view-btn btn-info ml-auto d-none d-xl-block link-unstyled py-3 px-4"
                    >
                      View Hospital
                    </Link>
                  </CardTitle>

                  <CardSubtitle tag="h6" className="mb-4 text-muted">
                    <FaPhoneAlt className="result-icon ml-4" />
                    <span className="ml-2">{hospital?.phone}</span>
                  </CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-4 text-muted">
                    <HiLocationMarker className="result-icon ml-4" />
                    <span className="ml-2">{hospital?.address?.governorate}</span>
                  </CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-4 text-muted">
                    <FaMobileAlt className="result-icon ml-4" />
                    <span className="ml-2"> {hospital?.mobile}</span>
                  </CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-4 text-muted">
                    <BiHealth className="result-icon ml-4" />
                    <span className="ml-2">
                      avilable intensive rooms: {hospital?.intensiveCares}
                    </span>
                  </CardSubtitle>

                  <Link
                    to={{
                      pathname: `/hospitals/${hospital.id}`,
                    }}
                    className="btn view-btn btn-info d-md-block d-xl-none mt-4 mr-auto"
                  >
                    View Hospital
                  </Link>
                </CardBody>
              </Card>
            </div>
          );
        })}
      {doctors &&
        doctors.map((resultDoctor) =>
          resultDoctor.results.map((doctor) => {
            console.log(resultDoctor.hospitalId);
            return (
              <div key={doctor.id}>
                <Card className="d-flex flex-row card my-5 rounded p-4 result-card">
                  <CardImg
                    top
                    className="img-fluid photo w-25 rounded-circle"
                    src={doctor.photo}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="mb-2 d-flex txt" tag="h6">
                      {doctor.name}
                      {userType === "patients" && (
                        <Link
                          to={{
                            pathname: `/bookdoctor/${resultDoctor.speciality}/${doctor.id}/${resultDoctor.hospitalId}`,
                            query: {
                              doctor: doctor,
                              hospitalTitle: resultDoctor.hospitalTitle,
                            },
                          }}
                          className="btn-sm view-btn btn-info ml-auto d-none d-xl-block link-unstyled py-3 px-4"
                        >
                          Book
                        </Link>
                      )}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-4 text-muted">
                      {doctor.title}
                    </CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-4 font-weight-bold">
                      {resultDoctor.hospitalTitle}
                    </CardSubtitle>

                    <div className="btn-group d-md-block d-xl-none mt-4 mr-auto">
                      <Link
                        to={{
                          pathname: `/bookdoctor/${resultDoctor.speciality}/${doctor.id}/${resultDoctor.hospitalId}`,
                          query: doctor,
                        }}
                        className="btn-sm view-btn btn-info ml-auto d-none d-xl-block link-unstyled py-3 px-4"
                      >
                        Book
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          })
        )}
    </div>
  );
}

export default Hospital_card;
