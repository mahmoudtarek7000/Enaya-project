import React from 'react'
import Hospital_card from './Hospital_card/Hospital_card';
import Filter_container from "./Filter_component/Filter_container";
import Pagination_component from './Pagination/Pagination_component';
import Sort from './Sort_component/Sort';
import "./Search_results.scss"
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
import SearchBox from '../Search/SearchBox';
import Fuse from 'fuse.js';
import {useFirestore} from "../../Firebase/useFirestore";
function Search_results({ match }) {
  const results = match.params;
  const [hospitals, sethospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [allHospitals, setallHospitals] = useState([]);

  //useEffect for fuse
  useEffect(()=>{
  if (allHospitals.length > 0) {
    const options = {
      includeScore: true,
      // Search in `author` and in `tags` array
      keys: ['name']
    }
    const fuse = new Fuse(allHospitals, options);
    const fuseResults = fuse.search(`${results.name}`)

     // search by name
   if (results.city == "none" && results.name !== "none" && results.special == "none") {
    console.log(allHospitals)
   const nameResults = fuseResults.map((result)=>result.item)
      sethospitals(nameResults)
    
   }
   // search by name and city
   else if (results.city !== "none" && results.name !== "none" && results.special == "none") {
    console.log(allHospitals)
   const nameResults = fuseResults.reduce((acc, result) => {
    // doc.data() is never undefined for query doc snapshots
   if (result.item.address.governorate == `${results.city}`) {
    return [...acc,result.item]
   }
   else {
     return acc
   }
  }, []);
      sethospitals(nameResults)
   } 
   // search by speciality and name
   else if (results.city == "none" && results.name !== "none" && results.special !== "none") {
    console.log(allHospitals)
   const nameResults = fuseResults.reduce((acc, result) => {
    // doc.data() is never undefined for query doc snapshots
   if (result.item.specialities.hasOwnProperty(`${results.special}`) === true) {
    return [...acc,result.item]
   }
   else {
     return acc
   }
  }, []);
      sethospitals(nameResults)
   }
  }
   
  },[allHospitals])

// useEffect for remain 
  useEffect(() => {
    db.collection('hospitals').onSnapshot((snap) => {
      let fetchedData = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
      })
      setallHospitals(fetchedData);
      
  })

  // search for available intensive care with city
    if (results.searchType == "care"){
      db.collection('hospitals').onSnapshot((snap) => {
        let data = snap.docs.reduce((acc,doc) => {
          if (doc.data().address.governorate==`${results.city}`&&(doc.data().hasOwnProperty("intensiveCares") === true && (doc.data().intensiveCares > 0))){
            return  [...acc,{...doc.data(),id: doc.id}]
          }
          else {
            return acc ;
          }
        },[])
        sethospitals(data)
      }) 
    }

    // search for hospitals
    else if (results.searchType == "hospitals") {
      // search by governorate only 
      if (results.city !== "none" && results.name == "none" && results.special == "none") {
        db.collection("hospitals").where("address.governorate", "==", `${results.city}`)
            .get()
            .then((querySnapshot) => {
              let data = querySnapshot.docs.map((doc) => {
                // doc.data() is never undefined for query doc snapshots
                
                return { ...doc.data(), id: doc.id }

              });
              sethospitals(data)
            })
      }
       // search by speciality only 
   else if (results.city == "none" && results.name == "none" && results.special !== "none"){
    db.collection("hospitals")
    .get()
    .then((querySnapshot) => {
      let searchResults = querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
       if (doc.data().specialities.hasOwnProperty(`${results.special}`) === true){
         return { ...doc.data(), id: doc.id }
       }
      });
      sethospitals(searchResults)
    })
   }
  
   // search by speciality and city 

   else if (results.city !== "none" && results.name == "none" && results.special !== "none"){
    db.collection("hospitals")
    .get()
    .then((querySnapshot) => {
      let searchResults = querySnapshot.docs.reduce((acc,doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data().specialities.hasOwnProperty(`${results.special}`) == true && (doc.data().address.governorate ==`${results.city}`)==true);
       if (doc.data().specialities.hasOwnProperty(`${results.special}`) == true && (doc.data().address.governorate ==`${results.city}`)==true){
         return [...acc, {...doc.data(), id:doc.data().id}];
       }
       else {
         return acc;
       }
      },[]);
      console.log(searchResults)
      sethospitals(searchResults)
    })
   } 
      }

      // search for doctors
    else {
      db.collection("hospitals")
        .get()
        .then((querySnapshot) => {
          let searchResults = querySnapshot.docs.reduce((acc, doc) => {
            // doc.data() is never undefined for query doc snapshots
           console.log(doc.data().specialities[results.special])
           // search for doctors by speciality only
           if ((results.city == "none" && results.name == "none" && results.special !== "none") && doc.data().specialities[results.special]) {
             console.log(doc.id)
            return [...acc, { results: [...doc.data().specialities[results.special]], hospitalTitle: doc.data().name, hospitalCity: doc.data().address.governorate, hospitalId:doc.id, speciality:`${results.special}`}]
           }
           // search for doctors by city and speciality
           else if ((results.city !== "none" && results.name == "none" && results.special !== "none") &&( doc.data().specialities[results.special])&& doc.data().address.governorate==`${results.city}`){
            return [...acc, { results: [...doc.data().specialities[results.special]], hospitalTitle: doc.data().name, hospitalCity: doc.data().address.governorate, hospitalId:doc.id ,speciality:`${results.special}`}]
           }
           else {
             return acc
           }
          }, []);

          setDoctors(searchResults)
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    
      }
  }, []);


// pagination
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const pervPage = () => setCurrentPage(currentPage - 1);
  const paginate = (pageNum) => { setCurrentPage(pageNum); }
  const resultsPerPage = 2;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentHospitalResults = hospitals.slice(indexOfFirstResult, indexOfLastResult);
  const currentDoctorResults = doctors.slice(indexOfFirstResult, indexOfLastResult);


  return (
    <div className="search-results">

      <div className="container">

        <div className="row">
          <div className="col">
            <Hospital_card results={results} hospitals={currentHospitalResults} doctors={currentDoctorResults} />
            {((hospitals.length/resultsPerPage || doctors.length/resultsPerPage) > 1) &&
              <Pagination_component resultsPerPage={resultsPerPage} paginate={paginate} nextPage={nextPage} pervPage={pervPage} totalHospitals={hospitals.length} totalDoctors={doctors.length} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search_results