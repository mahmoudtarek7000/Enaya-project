import { CodeSharp } from "@material-ui/icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { db } from "../firebase/config";
import { ImLocation2, ImMobile } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";
import { AuthContext } from "../../context/AuthProvider";

const About = ({
  building,
  street,
  governorate,
  phone,
  mobile,
  documentId,
  intensiveCares,
}) => {
  const initialState = {
    buildingNumber: building ? building : "",
    mobile: mobile ? mobile : "",
    phone: phone ? phone : "",
    streetName: street ? street : "",
    governorate: governorate ? governorate : "Cairo",
    intensiveCares: intensiveCares ? intensiveCares : "",
  };

  const [modal, setModal] = useState(false);

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

  const toggle = () => setModal(!modal);
  const [data, setData] = useState(initialState);
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    const {
      buildingNumber,
      mobile,
      phone,
      streetName,
      governorate,
      intensiveCares,
    } = data;
    db.collection("hospitals").doc(documentId).update({
      address: {
        buildingNumber,
        streetName,
        governorate,
      },
      mobile,
      phone,
      intensiveCares,
    });
  };

  return (
    <div className="about section-cont">
      <div className="container">
        <h2 className="text-center mb-5">About</h2>
        <div className="text-center">
          {user && user.uid === documentId && (
            <Button className=" my-3 bttn-primary px-4 py-2" onClick={toggle}>
              Edit Info
            </Button>
          )}
        </div>
        <div>
          {(building || street || governorate) && (
            <div className="d-flex align-items-start py-2">
              <ImLocation2 className="mr-2 h4 text-danger" />
              <p className="mr-2 text-dark">Location : </p>
              <p className="text-dark">
                {building} {street} {governorate}
              </p>
            </div>
          )}
          {phone && (
            <div className="d-flex align-items-start py-2">
              <AiFillPhone className="mr-2 h4 text-primary" />
              <p className="text-dark">Telephone : {phone}</p>
            </div>
          )}
          {mobile && (
            <div className="d-flex align-items-start py-2">
              <ImMobile className="mr-2 h4 text-primary" />
              <p className="text-dark">Mobile : {mobile}</p>
            </div>
          )}
          {intensiveCares && (
            <p className="text-dark">
              Avilable Intensive Cares : {intensiveCares}
            </p>
          )}
        </div>
      </div>
      <div>
        <Modal isOpen={modal} fade={false} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Info</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FormGroup>
                <Label for="governorate">Governorate</Label>
                <Input
                  type="select"
                  name="governorate"
                  id="governorate"
                  value={data.governorate}
                  onChange={handleChange}
                >
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
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="streetName">Street Name</Label>
                <Input
                  type="text"
                  name="streetName"
                  id="streetName"
                  placeholder="Street Name"
                  onChange={handleChange}
                  value={data.streetName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="buildingNumber">Building Number</Label>
                <Input
                  type="text"
                  name="buildingNumber"
                  id="buildingNumber"
                  placeholder="Building Number"
                  onChange={handleChange}
                  value={data.buildingNumber}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Telephone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Telephone"
                  onChange={handleChange}
                  value={data.phone}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mobile">Mobile</Label>
                <Input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  onChange={handleChange}
                  value={data.mobile}
                />
              </FormGroup>
              <FormGroup>
                <Label for="intensiveCares">Intensive Cares Num.</Label>
                <Input
                  type="text"
                  name="intensiveCares"
                  id="intensiveCares"
                  placeholder="Intensive Cares Num."
                  onChange={handleChange}
                  value={data.intensiveCares}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              type="submit"
              onClick={() => {
                toggle();
                handleSubmit();
              }}
            >
              Update Info
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default About;
