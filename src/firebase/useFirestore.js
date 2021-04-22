import { useState, useEffect } from 'react';
import { db } from '../components/firebase/config';


export const useFirestore = () => {
    const [allHospitals, setallHospitals] = useState([])

    useEffect(() => {
        const unSubscribe = db.collection('hospitals').onSnapshot((snap) => {
            let fetchedData = snap.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
            setallHospitals(fetchedData);
            console.log(allHospitals);
        })
        return unSubscribe
    }, [])
    return { allHospitals }
}