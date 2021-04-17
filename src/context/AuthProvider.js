import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../components/firebase/config";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const handleUserProfile = async (userAuth, userRole, additionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;
    const userRef = db.doc(`${userRole}/${uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { name, email } = userAuth;
      const timestamp = new Date();

      try {
        await userRef.set({
          name,
          email,
          createdDate: timestamp,
          ...additionalData,
        });
        await userLogin(userRole);
      } catch (err) {
        // console.log(err);
      }
    }
  };

  const userLogin = (userRoleParam) => {
    setUserType(userRoleParam);
  };
  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider
      value={{ user, handleUserProfile, userLogin, userType }}
    >
      {children}
    </AuthContext.Provider>
  );
};
