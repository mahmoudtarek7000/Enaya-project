import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../components/firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      localStorage.setItem("userDoc", JSON.stringify(user));
      setUser(JSON.parse(localStorage.getItem("userDoc")));
      setUserType(localStorage.getItem("user"));
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   localStorage.getItem("user") && setUserType(localStorage.getItem("user"));
  // }, [userType])
  const handleUserProfile = async (userAuth, userRole, additionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;
    const userRef = db.doc(`${userRole}/${uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { name, email } = userAuth;
      const timestamp = new Date();
      try {
        await userRef.set(
          userRole == "hospitals"
            ? {
                name,
                email,
                createdDate: timestamp,
                gallery: [],
                specialities: {},
                intensiveCares: "",
                booking_data : [],
                address: {
                  buildingNumber:"",
                  governorate:"",
                  streetName:""
                },
                ...additionalData,
              }
            : {
                name,
                email,
                createdDate: timestamp,
                booking_data : [],
                ...additionalData,
              }
        );
        localStorage.setItem("user", `${userRole}`);
        // userLogin();
      } catch (err) {
        // console.log(err);
      }
    }
  };
  const userLogin = () => {
    // const user = localStorage.getItem("data");
    // setUserType(user);
  };
  // if (loading) return <p>Loading...</p>;
  return (
    <AuthContext.Provider
      value={{ user, handleUserProfile, userLogin, userType, setUserType }}
    >
      {children}
    </AuthContext.Provider>
  );
};
