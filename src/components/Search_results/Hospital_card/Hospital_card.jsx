import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt,FaMobileAlt } from "react-icons/fa";
import { BiHealth } from "react-icons/bi";
import { MdTitle } from "react-icons/md";
import {db} from '../../../Firebase/firbase';
import "./Hospital_card.scss";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { useState,useEffect } from 'react';
function Hospital_card({results}) {
  const [hospitals, sethospitals] = useState([]);
  const [doctors,setDoctors] = useState([]);
    useEffect(() => {
     db.collection("hospitals").where('address.governorate' , "==", `${results[0]}`)
      .get()
      .then((querySnapshot) => {
      let unsubscribe =  querySnapshot.docs.map((doc) => {
              // doc.data() is never undefined for query doc snapshots
                console.log(doc.data().specialities);
              return {...doc.data(),id:doc.id} 
              
          });
          sethospitals(unsubscribe)
      }) 
     
      db.collection("hospitals")
      .get()
      .then((querySnapshot) => {
        let searchResults=querySnapshot.docs.reduce((acc,doc) => {
              // doc.data() is never undefined for query doc snapshots
                console.log([doc.data()]);
              return  [...acc,...doc.data().specialities[results[1]]]
              
          },[]); 
          
          setDoctors(searchResults)
      }) 
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
    }, []);
    console.log(hospitals)

    return (
     <div>
        {results[0]
        ? hospitals.map((hospital)=>{ return <div key={hospital.id}>
        <Card className="d-flex flex-row card my-5 rounded p-4 mahmoud">
     <CardImg top className="img-fluid photo w-25 rounded-circle" src={hospital.logo} alt="Card image cap" />
     <CardBody>
       <CardTitle className="mb-4 d-flex txt" tag="h6">{hospital.name}
       <div className="btn-group ml-auto d-none d-xl-block">
       <Button className="mr-4" color="info">View Hospital</Button>
       <Button className="mr-4" color="info">Book</Button> 
       </div>
       </CardTitle>

       <CardSubtitle tag="h6" className="mb-4 text-muted"><FaPhoneAlt className="text-info ml-4"/>{hospital.phone}</CardSubtitle>
       <CardSubtitle tag="h6" className="mb-4 text-muted"><HiLocationMarker className="text-info ml-4"/> {hospital.address.city}</CardSubtitle>
       <CardSubtitle tag="h6" className="mb-4 text-muted"><FaMobileAlt className="text-info ml-4"/> {hospital.mobile} </CardSubtitle>
       <CardSubtitle tag="h6" className="mb-4 text-muted"><BiHealth className="text-info ml-4"/>avilable intensive care rooms: {hospital.intensiveCares} </CardSubtitle>
       
       <div className="btn-group d-md-block d-xl-none mt-4 mr-auto">
       <Button className="btn-sm mr-2" color="info">View Hospital</Button>
       <Button className="btn-sm mr-2" color="info">Book</Button>
       </div>
     </CardBody>
   </Card>
   </div>
     })  
        :  doctors.map((doctor)=>{ return <div key={doctor.id}>
        <Card className="d-flex flex-row card my-5 rounded p-4 mahmoud">
     <CardImg top className="img-fluid photo w-25 rounded-circle" src={doctor.photo} alt="Card image cap" />
     <CardBody>
       <CardTitle className="mb-4 d-flex txt" tag="h6">{doctor.name}
       <div className="btn-group ml-auto d-none d-xl-block">
       <Button className="mr-4" color="info">View doctor</Button>
       <Button className="mr-4" color="info">Book</Button> 
       </div>
       </CardTitle>

       <CardSubtitle tag="h6" className="mb-4 text-muted">{doctor.title}</CardSubtitle>
       
       <div className="btn-group d-md-block d-xl-none mt-4 mr-auto">
       <Button className="btn-sm mr-2" color="info">View doctor</Button>
       <Button className="btn-sm mr-2" color="info">Book</Button>
       </div>
     </CardBody>
   </Card>
   </div>
     })  }
        </div>
    )
    
}

export default Hospital_card
