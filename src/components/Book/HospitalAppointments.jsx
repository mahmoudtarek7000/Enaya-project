import React, { useEffect } from "react";
import { useParams } from "react-router";

const obj = {
  special: {
    day: [{}],
  },
};

const HospitalAppointments = () => {
  const { id } = useParams();
  // const [data, setData] = useState(null);

  useEffect(() => {
    // const unsubscribe = db
    //   .collection("hospitals")
    //   .doc(id)
    //   .onSnapshot((doc) => {
    //     if (doc.exists) {
    //       let document = doc.data().booking_data.reduce((acc, item) => {
    //           return acc[item.special] ? [...acc[item.special], item] :
    //       }, {});
    //       setData(document);
    //     } else {
    //       console.log("no document");
    //     }
    //   });
    // return unsubscribe;
  }, []);
  return <div></div>;
};

export default HospitalAppointments;
