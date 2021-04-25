import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../firebase/config";
import PatientTable from "./PatientTable";

const PatientProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const unsubscribe = db
      .collection("patients")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let document = doc.data();
          setData(document);
        } else {
          console.log("no document");
        }
      });
    return unsubscribe;
  }, []);
  return (
    <div>
      <PatientTable colName="Doctor Name" tableName="Appointments" data={data.booking_data}/>
      {/* <PatientTable colName="Row Number" tableName="Room Reservations" /> */}
    </div>
  );
};

export default PatientProfile;
