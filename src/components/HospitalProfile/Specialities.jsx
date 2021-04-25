import React, { useContext, useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  Progress,
} from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

import { db, storage } from "../firebase/config";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const initialState = {
  id: "",
  name: "",
  title: "",
  speciality: "Allegry and Immunology",
  photo: "",
};
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

const Specialities = ({ specialitiesH, documentId, name }) => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [data, setData] = useState(initialState);
  const imgRef = useRef();
  const [progress, setProgress] = useState(0);
  const [imgURL, setimgURL] = useState(null);
  const { user, userType } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDrop = () => setDropdownOpen((prevState) => !prevState);
  const [lastClicked, setLastClicked] = useState("Select A Speciality");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImg = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(Math.ceil(percent));
      },
      (err) => console.log(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        await setimgURL(url);
      }
    );
  };

  const handleSubmit = () => {
    const { id, name, title, speciality, photo } = data;
    db.collection("hospitals")
      .doc(documentId)
      .update({
        specialities: {
          ...specialitiesH,
          [speciality]: specialitiesH[speciality]
            ? [
                ...specialitiesH[speciality],
                {
                  id:
                    Date.now().toString(36) +
                    Math.random().toString(36).substr(2, 5),
                  name,
                  title,
                  photo: imgURL,
                },
              ]
            : [
                {
                  id:
                    Date.now().toString(36) +
                    Math.random().toString(36).substr(2, 5),
                  name,
                  title,
                  photo: imgURL,
                },
              ],
        },
      });
      setProgress(0);
  };
  useEffect(() => {
    console.log(lastClicked);
    console.log(specialitiesH[lastClicked]);
  }, [lastClicked]);
  return (
    <div className="section-cont">
      <div className="container">
        <h2>Specialities</h2>
        <div className="text-center text-md-right">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDrop}>
            <DropdownToggle caret className="bttn-primary">
              {lastClicked}
            </DropdownToggle>
            <DropdownMenu container="body">
              {specialitiesH &&
                Object.keys(specialitiesH).map((property, index) => {
                  return (
                    <DropdownItem
                      key={property}
                      onClick={() => setLastClicked(property)}
                    >
                      {property}
                    </DropdownItem>
                  );
                })}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="text-right py-4">
          {user.uid === documentId && (
            <div className="text-center mb-5">
              <Button className="bttn-primary mr-3" onClick={toggle}>
                Add Doctor
              </Button>
              <Button type="button" className="bttn-primary">
                <Link className="text-white" to={`/appointments/${documentId}`}>Appointments</Link>
              </Button>
            </div>
          )}
        </div>
        <div className="row justify-content-center">
          {lastClicked !== "Select A Speciality" &&
            specialitiesH[lastClicked].map((item) => {
              return (
                <Card key={item.id} className="col-12 col-md-3 mx-3 mb-5">
                  <CardImg
                    top
                    width="100%"
                    src={item.photo}
                    alt="Card image cap"
                    className="img-doc"
                  />
                  <CardBody>
                    <CardTitle tag="h4">{item.name}</CardTitle>
                    <CardText> {item.title} </CardText>
                    {userType === "patients" && (
                      <Link
                        to={{
                          pathname: `/bookdoctor/${lastClicked}/${item.id}/${documentId}`,
                          query: {
                            doctor: item,
                            hospitalTitle: name,
                          },
                        }}
                        className="view-btn btn-info ml-auto text-center d-none d-xl-block link-unstyled py-2 px-2 h5"
                      >
                        Book A Doctor
                      </Link>
                    )}
                  </CardBody>
                </Card>
              );
            })}
        </div>
        <div>
          <Modal isOpen={modal} fade={false} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Doctor</ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Doctor Name"
                    onChange={handleChange}
                    value={data.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="speciality">Speciality</Label>
                  <Input
                    type="select"
                    name="speciality"
                    id="speciality"
                    value={data.speciality}
                    onChange={handleChange}
                  >
                    {specialitiesArr.map((spec) => {
                      return (
                        <option key={spec} value={`${spec}`}>
                          {spec}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={data.title}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="file">Photo</Label>
                  <Input
                    type="file"
                    name="file"
                    id="file"
                    ref={imgRef}
                    onChange={uploadImg}
                  />
                </FormGroup>
              </Form>
              <div className="text-center">{progress}%</div>
              <Progress value={progress} max="100" />
            </ModalBody>
            <ModalFooter>
              {imgURL && (
                <Button
                  color="primary"
                  type="submit"
                  onClick={() => {
                    toggle();
                    handleSubmit();
                  }}
                >
                  Add
                </Button>
              )}

              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
