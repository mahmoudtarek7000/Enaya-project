import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import About from "./About";
import Gallery from "./Gallery";
import Header from "./Header";
import Rooms from "./Rooms";
import Specialities from "./Specialities";
//     ================***** miss accordion handling **********============
const HospitalProfile = ({ match }) => {
  // let documentId = match.params.id;
  let documentId = "0aCV9wMkAsfR2zrbGa8d";
  // console.log(match.params.id)
  const [data, setData] = useState(null);
  useEffect(() => {
    db.collection("hospitals")
      .doc(documentId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let document = doc.data();
          setData(document);
          console.log(data);
        } else {
          console.log("no document");
        }
      });
  }, []);
  return (
    <div>
      {data && (
        <div key={data.id}>
          <Header
            logo={data.logo}
            name={data.name}
            coverPhoto={data.coverPhoto}
          />
          <About
            city={data.address.city}
            street={data.address.streetName}
            building={data.address.buildingNumber}
            governorate={data.address.governorate}
            phone={data.phone}
            mobile={data.mobile}
          />
          <Gallery gallery={data.gallery} />
          <Specialities specialities={data.specialities} />
          <Rooms rooms={data.rooms} />
        </div>
      )}
    </div>
  );
};

export default HospitalProfile;
