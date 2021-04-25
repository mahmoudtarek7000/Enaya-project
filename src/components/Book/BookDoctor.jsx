import React, { useContext, useEffect, useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { db } from "../firebase/config";
import firebase from "firebase/app";
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
  FormText,
} from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { InputGroup, InputGroupAddon } from "reactstrap";
import { AuthContext } from "../../context/AuthProvider";
import { useHistory } from "react-router";
function BookDoctor({ match }) {
  const result = match.params;
  const [doctor, setdoctor] = useState({});
  const [hospitalTitle, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const initialState = {
    patientMail: "",
    patientName: "",
  };
  const [values, setvalues] = useState(initialState);
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const history = useHistory();

  useEffect(() => {
    db.collection("hospitals")
      .doc(`${result.hospitalId}`)
      .get()
      .then((doc) => {
        let doctorsArr = doc.data().specialities[result.special];
        let hospitalName = doc.data().name;
        let bookedDoctor = doctorsArr.find((doctor) => {
          return doctor.id == `${result.id}`;
        });
        setdoctor(bookedDoctor);
        setTitle(hospitalName);
      });
  }, []);

  const handleChanges = ({ target }) => {
    setvalues({ ...values, [target.name]: target.value });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [dateTime, setdateTime] = useState({});
  const handleDateTimeChange = (e) => {
    setdateTime({ ...dateTime, [e.target.name]: e.target.value });
  };
  const handleBooking = async () => {
    let updatePatientData = async () => {
      await db
        .collection("patients")
        .doc(user.uid)
        .update({
          booking_data: firebase.firestore.FieldValue.arrayUnion({
            ...values,
            id:
              Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            date: dateTime.date,
            hospitalName: hospitalTitle,
            doctorName: doctor.name,
            Time: dateTime.time,
            special: result.special,
            hospitalId: result.hospitalId
          }),
        })
        .then(() => {
          console.log("Document in patient successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    };
    history.push(`/${user.uid}`);
    let updateHospitalData = async () => {
      await db
        .collection("hospitals")
        .doc(`${result.hospitalId}`)
        .update({
          booking_data: firebase.firestore.FieldValue.arrayUnion({
            ...values,
            patientId: user.uid,
            date: dateTime.date,
            doctorName: doctor.name,
            Time: dateTime.time,
            special: result.special,
          }),
        })
        .then(() => {
          console.log("Document in hospital successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    };
    await updatePatientData();
    await updateHospitalData();
    await setvalues(initialState);
  };
  return (
    <div className="booking">
      <div className="container">
        <Card className="d-flex flex-row card my-5 w-75 mx-auto rounded p-4 result-card">
          <CardImg
            top
            className="img-fluid photo w-25 rounded-circle"
            src={doctor.photo}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle className="mb-4 d-flex font-weight-bold txt">
              {doctor.name}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-4 text-muted sub-txt">
              {doctor.title}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-4 font-weight-bold sub-txt">
              {hospitalTitle}
            </CardSubtitle>
          </CardBody>
        </Card>
        <div className="bg-white pb-5 book-form w-75 mx-auto">
          <div className="book_title mb-5 p-2 text-white text-center">
            <h5>enter your data</h5>
          </div>
          <InputGroup className="book-input mx-auto w-75" size="md">
            <Input
              placeholder="email"
              name="patientMail"
              value={values.patientMail}
              onChange={handleChanges}
            />
          </InputGroup>
          <InputGroup className="book-input my-3 mx-auto w-75" size="md">
            <Input
              placeholder="full patient name"
              name="patientName"
              value={values.patientName}
              onChange={handleChanges}
            />
          </InputGroup>
          <div className="px-3 d-flex justify-content-center align-items-center">
            <FormGroup className="mx-3">
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                id="date"
                onChange={handleDateTimeChange}
                placeholder="Date"
              />
            </FormGroup>
            <FormGroup className="mx-3">
              <Label for="time">Time</Label>
              <Input
                type="time"
                name="time"
                id="time"
                onChange={handleDateTimeChange}
                placeholder="Time"
              />
            </FormGroup>
          </div>
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around" className="my-5">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Choose a date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="choose a time"
                value={selectedDate}
                onChange={handleDateChange}
                className="date"
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider> */}
          <div className="text-center">
            <Modal isOpen={modal} fade={false} toggle={toggle}>
              <ModalHeader toggle={toggle}>Confirm Booking</ModalHeader>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => {
                    toggle();
                    handleBooking();
                  }}
                >
                  Confirm
                </Button>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>

            <button
              className="book-btn btn px-4 py-2 text-white"
              onClick={toggle}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDoctor;
