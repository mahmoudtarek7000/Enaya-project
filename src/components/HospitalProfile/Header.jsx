import React from "react";
import "../../assets/scss/_headerHospitalProfile.scss";
import { AiFillStar } from "react-icons/ai";
const Header = ({ logo, name, coverPhoto }) => {
  return (
    <div
      className="header section-cont"
      style={{ backgroundImage: `url(${coverPhoto})` }}
    >
      <div className="container  d-flex justify-content-center justify-content-md-start h-100">
        <div className="logo-name_cont d-flex flex-column flex-md-row align-items-center align-self-end ">
          <div className="profile_logo mr-3 ">
            <img
              src={logo}
              alt="logo"
              className="rounded-circle w-100 shadow-lg rounded"
            />
          </div>
          <div>
            <h3 className="mb-0 shadow-lg rounded">{name}</h3>
            <div className="rate">
              <AiFillStar className=" shadow-lg rounded" />
              <span className=" shadow-lg rounded">4.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
