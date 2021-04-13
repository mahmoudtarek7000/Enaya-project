import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MouseIcon from "@material-ui/icons/Mouse";
import PersonPinIcon from "@material-ui/icons/PersonPin";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="form-control d-flex justify-content-between align-items-center border-0">
        <div className="input-wrapper">
          <label htmlFor="">select a speciality</label>
          <div className="input-select">
            <MouseIcon className="search-icons" />
            <select name="choose_speciality" id="speciality">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="">in this city</label>
          <div className="input-select">
            <LocationOnIcon className="search-icons" />
            <select name="city" id="city">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="">in this area</label>
          <div className="input-select">
            <LocationOnIcon className="search-icons" />
            <select name="area" id="area">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="">or search by name</label>
          <div className="input-select">
            <PersonPinIcon className="search-icons" />
            <select name="search" id="search">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <button type="submit">search</button>
      </div>
    </form>
  );
}

export default SearchForm;
