import React, { useState } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MouseIcon from "@material-ui/icons/Mouse";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { Link } from "react-router-dom";
import { FaCity } from "react-icons/fa";
function SearchForm() {
  const [city, setCity] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [specialist, setSpecialist] = useState('')
  const cities = [{id:"1",governorate_name_ar:"القاهرة",governorate_name_en:"Cairo"},{id:"2",governorate_name_ar:"الجيزة",governorate_name_en:"Giza"},{id:"3",governorate_name_ar:"الأسكندرية",governorate_name_en:"Alexandria"},{id:"4",governorate_name_ar:"الدقهلية",governorate_name_en:"Dakahlia"},{id:"5",governorate_name_ar:"البحر الأحمر",governorate_name_en:"Red Sea"},{id:"6",governorate_name_ar:"البحيرة",governorate_name_en:"Beheira"},{id:"7",governorate_name_ar:"الفيوم",governorate_name_en:"Fayoum"},{id:"8",governorate_name_ar:"الغربية",governorate_name_en:"Gharbiya"},{id:"9",governorate_name_ar:"الإسماعلية",governorate_name_en:"Ismailia"},{id:"10",governorate_name_ar:"المنوفية",governorate_name_en:"Menofia"},{id:"11",governorate_name_ar:"المنيا",governorate_name_en:"Minya"},{id:"12",governorate_name_ar:"القليوبية",governorate_name_en:"Qaliubiya"},{id:"13",governorate_name_ar:"الوادي الجديد",governorate_name_en:"New Valley"},{id:"14",governorate_name_ar:"السويس",governorate_name_en:"Suez"},{id:"15",governorate_name_ar:"اسوان",governorate_name_en:"Aswan"},{id:"16",governorate_name_ar:"اسيوط",governorate_name_en:"Assiut"},{id:"17",governorate_name_ar:"بني سويف",governorate_name_en:"Beni Suef"},{id:"18",governorate_name_ar:"بورسعيد",governorate_name_en:"Port Said"},{id:"19",governorate_name_ar:"دمياط",governorate_name_en:"Damietta"},{id:"20",governorate_name_ar:"الشرقية",governorate_name_en:"Sharkia"},{id:"21",governorate_name_ar:"جنوب سيناء",governorate_name_en:"South Sinai"},{id:"22",governorate_name_ar:"كفر الشيخ",governorate_name_en:"Kafr Al sheikh"},{id:"23",governorate_name_ar:"مطروح",governorate_name_en:"Matrouh"},{id:"24",governorate_name_ar:"الأقصر",governorate_name_en:"Luxor"},{id:"25",governorate_name_ar:"قنا",governorate_name_en:"Qena"},{id:"26",governorate_name_ar:"شمال سيناء",governorate_name_en:"North Sinai"},{id:"27",governorate_name_ar:"سوهاج",governorate_name_en:"Sohag"}]
  const sentQuery=({target})=>{
    switch (target.name){
      case 'city':
     return setCity(`${target.value}`)
      case 'choose_speciality':
        return setSpecialist(`${target.value}`)
        case 'hospital_name':
          return  setHospitalName(`${target.value}`)
        
}
  }
  return (
    <form className="search-form">
      <div className="form-control d-flex justify-content-between align-items-center border-0">
        <div className="input-wrapper">
          <label htmlFor="">select a speciality</label>
          <div className="input-select">
            <MouseIcon className="search-icons" />
            <select  name="choose_speciality" onChange={sentQuery}  id="speciality">
              <option value="Allegry and Immunology">Allegry and Immunology</option>
              <option value="Dentistry">Dentistry</option>
            </select>
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="">in this city</label>
          <div className="input-select">
            <LocationOnIcon className="search-icons" />
            <select name="city" onChange={sentQuery} id="city">
             {cities.map((city)=>{
               return  <option value = {`${city.governorate_name_en}`} >{city.governorate_name_en}</option>
             })}
            </select>
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="">or search by name</label>
          <div className="input-select">
            <PersonPinIcon className="search-icons" />
          <input type="text" name='hospital_name' onChange={sentQuery}/>
          </div>
        </div>
        <button>  <Link to={{ pathname: '/searchresults', query:  [city,specialist,hospitalName]  }} className="nav-link" >
              search  </Link></button>
      </div>
    </form>
  );
}

export default SearchForm;
