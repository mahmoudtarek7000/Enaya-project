import React, { useEffect, useState } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {db} from '../firebase/config';
import firebase from 'firebase/app';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
function BookDoctor(query) {
    const doctor = query.location.query.doctor;
    const hospitalTitle = query.location.query.hospitalTitle;
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState(new Date());
    const [sentData, setData] = useState([]);
    const [sentName, setName] = useState("");
    const [sentMail, setMail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const handleChanges = ({ target }) => {
      switch(target.name){
      case 'patientName':
       return setName(`${target.value}`);
        case 'patientMail':
        return setMail(`${target.value}`);
      }
    };
    
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleBooking = async()=>{
      let updateData = async()=>{
        await db.collection("patients").doc("vm1oNQ6BKyYmRnreCtGrVTf8Iwe2").update({
       booking_data : firebase.firestore.FieldValue.arrayUnion({ 
        patientName:sentName,
        patientMail:sentMail,
        date: selectedDate,
        hospitalName:hospitalTitle,
        doctorName:doctor.name,
        Time: selectedTime,
       })
     })
     .then(() => {
       console.log("Document successfully updated!");
     })
     .catch((error) => {
       // The document probably doesn't exist.
       console.error("Error updating document: ", error);
     });
    }
      setSubmitting(true);
     await updateData();
    }
    return (
        <div className='booking'>
            <div className="container">
        <Card className="d-flex flex-row card my-5 w-75 mx-auto rounded p-4 result-card">
     <CardImg top className="img-fluid photo w-25 rounded-circle" src={doctor.photo} alt="Card image cap" />
     <CardBody>
       <CardTitle className="mb-4 d-flex font-weight-bold txt">{doctor.name}
       </CardTitle>

       <CardSubtitle tag="h6" className="mb-4 text-muted sub-txt">{doctor.title}</CardSubtitle> 
       <CardSubtitle tag="h6" className="mb-4 font-weight-bold sub-txt">{hospitalTitle}</CardSubtitle> 
     </CardBody>
   </Card>
   <div className="bg-white pb-5 book-form w-75 mx-auto">
     <div className="book_title mb-5 p-2 text-white text-center">
       <h5>enter your data</h5>
     </div>
          <InputGroup className="book-input mx-auto w-75"  size="md">
        <Input placeholder="email" name="patientMail" onChange={handleChanges} />
      </InputGroup>
      <InputGroup className="book-input my-3 mx-auto w-75" size="md">
        <Input placeholder="full patient name" name="patientName"  onChange={handleChanges} />
      </InputGroup>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" className='my-5'>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Choose a date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
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
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    <div className="text-center">
      <button type="submit" className='book-btn btn px-4 py-2 text-white' onClick={handleBooking}>Book</button>
    </div>
        </div>
        </div>
        </div>
    )
}

export default BookDoctor
