import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdownCircle } from "react-icons/io";

function SearchForm() {
  const [city, setCity] = useState("none");
  const [hospitalName, setHospitalName] = useState("none");
  const [searchType, setType] = useState("none");
  const [specialist, setSpecialist] = useState("none");
  const cities = [
    { id: "1", governorate_name_ar: "القاهرة", governorate_name_en: "Cairo" },
    { id: "2", governorate_name_ar: "الجيزة", governorate_name_en: "Giza" },
    {
      id: "3",
      governorate_name_ar: "الأسكندرية",
      governorate_name_en: "Alexandria",
    },
    {
      id: "4",
      governorate_name_ar: "الدقهلية",
      governorate_name_en: "Dakahlia",
    },
    {
      id: "5",
      governorate_name_ar: "البحر الأحمر",
      governorate_name_en: "Red Sea",
    },
    { id: "6", governorate_name_ar: "البحيرة", governorate_name_en: "Beheira" },
    { id: "7", governorate_name_ar: "الفيوم", governorate_name_en: "Fayoum" },
    {
      id: "8",
      governorate_name_ar: "الغربية",
      governorate_name_en: "Gharbiya",
    },
    {
      id: "9",
      governorate_name_ar: "الإسماعلية",
      governorate_name_en: "Ismailia",
    },
    {
      id: "10",
      governorate_name_ar: "المنوفية",
      governorate_name_en: "Menofia",
    },
    { id: "11", governorate_name_ar: "المنيا", governorate_name_en: "Minya" },
    {
      id: "12",
      governorate_name_ar: "القليوبية",
      governorate_name_en: "Qaliubiya",
    },
    {
      id: "13",
      governorate_name_ar: "الوادي الجديد",
      governorate_name_en: "New Valley",
    },
    { id: "14", governorate_name_ar: "السويس", governorate_name_en: "Suez" },
    { id: "15", governorate_name_ar: "اسوان", governorate_name_en: "Aswan" },
    { id: "16", governorate_name_ar: "اسيوط", governorate_name_en: "Assiut" },
    {
      id: "17",
      governorate_name_ar: "بني سويف",
      governorate_name_en: "Beni Suef",
    },
    {
      id: "18",
      governorate_name_ar: "بورسعيد",
      governorate_name_en: "Port Said",
    },
    { id: "19", governorate_name_ar: "دمياط", governorate_name_en: "Damietta" },
    {
      id: "20",
      governorate_name_ar: "الشرقية",
      governorate_name_en: "Sharkia",
    },
    {
      id: "21",
      governorate_name_ar: "جنوب سيناء",
      governorate_name_en: "South Sinai",
    },
    {
      id: "22",
      governorate_name_ar: "كفر الشيخ",
      governorate_name_en: "Kafr Al sheikh",
    },
    { id: "23", governorate_name_ar: "مطروح", governorate_name_en: "Matrouh" },
    { id: "24", governorate_name_ar: "الأقصر", governorate_name_en: "Luxor" },
    { id: "25", governorate_name_ar: "قنا", governorate_name_en: "Qena" },
    {
      id: "26",
      governorate_name_ar: "شمال سيناء",
      governorate_name_en: "North Sinai",
    },
    { id: "27", governorate_name_ar: "سوهاج", governorate_name_en: "Sohag" },
  ];
  const specialitiesArr = [
    "Allegry and Immunology",
    "Andrology and Male Infertility",
    "Audiology",
    "Cardiology and Thoracic Surgery",
    "Cardiolog and Vascular Disease",
    "Chest and Respiratory",
    "Dentistry",
    "Dermatology",
    "Diabetes and Endocrinology",
    "Diagnostic Radiology",
    "Dietitian and Nutrition",
    "Ear, Nose and Throat",
    "Family Medicine",
    "Gastroenterology and Endosocopy",
    "General Practice",
    "General Surgery",
    "Geriatrics",
    "Gynaecology and Infertility",
    "Hematology",
    "Hepatology",
    "Internal Medicine",
    "IVF and Infertility",
    "Laboratories",
    "Nephrology",
    "Neurosurgery",
    "Obecity and Laparoscopic Surgery",
    "Oncology",
    "Oncology Surgery",
    "Opthalmology",
    "Orthopedics",
    "Osteopathy",
    "Pain Management",
    "Pediatric Surgery",
    "Pediatrics and New Born",
    "Phoniatrics ",
    "Physiotherapy and Sport Injuries",
    "Plastic Surgery",
    "Psychiatry",
    "Rheumatology",
    "Spinal Surgery",
    "Urology",
    "Vascular Surgery",
  ];
  const sentQuery = ({ target }) => {
    console.log(target.name)
    switch (target.name) {
      case "city":
        return setCity(`${target.value}`);
      case "choose_speciality":
        return setSpecialist(`${target.value}`);
      case "hospital_name":
        return setHospitalName(`${target.value}`);
      case "seacrh_for":
        return setType(`${target.value}`);
    }
    console.log(searchType);
  };
  return (
    <div className="search-form">
      <form className="search-box py-5">
        <div className="text-center py-3">
<<<<<<< HEAD
          <p className="text-white h1">Enaya</p>
        </div>
        <div className="row text-center justify-content-center">
=======
          <p className="text-white h1">Enaya.com</p>
        </div>
        <div className="row text-center justify-content-center ml-3">
>>>>>>> b9421816c55b3d131876dc16784baeeb94e8dd11
          <div className="col-12 d-flex justify-content-center">
            <div className="select  mb-5">
              <select name="seacrh_for" onChange={sentQuery} id="search_for">
                <option disabled selected>
                  Search for
                </option>
                <option value="care">Available intensive care</option>
                <option value="hospitals">Hospitals</option>
                <option value="doctors">Doctors</option>
              </select>
              <IoMdArrowDropdownCircle className="dropIcon" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
          {(searchType == "hospitals" || searchType == "doctors") && (
            <div className="mb-3 mx-2">
              <label htmlFor="speciality" className="text-white mb-3 h4">
                Select A Speciality
              </label>
              <div className="select">
                <select
                  name="choose_speciality"
                  onChange={sentQuery}
                  id="speciality"
                >
                  <option disabled selected>
                    Select A Speciality
                  </option>
                  {specialitiesArr.map((spec) => {
                    return (
                      <option key={spec} value={`${spec}`}>
                        {spec}
                      </option>
                    );
                  })}
                </select>
                <IoMdArrowDropdownCircle className="dropIcon" />
              </div>
            </div>
          )}
          {searchType != "none" && (
            <div className="mb-3 mx-2">
              <label htmlFor="city" className="text-white mb-3 h4">
                Governorate
              </label>
              <div className="select">
                <select name="city" onChange={sentQuery} id="city">
                  <option selected key="0" disabled>
                    Governorates
                  </option>
                  {cities.map((city) => {
                    return (
                      <option
                        key={city.id}
                        value={`${city.governorate_name_en}`}
                      >
                        {city.governorate_name_en}
                      </option>
                    );
                  })}
                </select>
                <IoMdArrowDropdownCircle className="dropIcon" />
              </div>
            </div>
          )}
          {searchType == "hospitals" && (
            <div className="input-select mb-3 mx-2">
              <label htmlFor="city" className="text-white mb-3 h4 d-block">
                Search
              </label>
              <input
                type="text"
                className="searchInput"
                name="hospital_name"
                onChange={sentQuery}
                placeholder="Hospital Name"
              />
            </div>
          )}
        </div>
        {searchType != "none" && (
          <div className="text-center mt-2 mx-2">
            <button
              type="button"
              className="btn btn-outline-info px-5 py-1 searchBtn"
            >
              <Link
                to={{
                  pathname: `/searchresults/${searchType}/${specialist}/${city}/${hospitalName}`,
                  query: [city, specialist, hospitalName],
                }}
                className="nav-link text-white h4"
              >
                Search
              </Link>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchForm;
