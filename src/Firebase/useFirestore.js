import { useEffect, useState } from 'react';
import {db} from './firbase';

export const useFirestore = () =>{
const [hospitals,setHospitals] =  useState([]);

useEffect(() => {
  const unsubscribe = db.collection('hospitals').onSnapshot((snap)=>{
       let data= snap.docs.map((doc)=>{
           return {...doc.data(),id:doc.id}
       })
       setHospitals(data);
   })
  
   return unsubscribe;
}, []);
return {hospitals};
}
