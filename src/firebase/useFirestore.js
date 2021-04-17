import { useState, useEffect } from 'react';
import { db } from '../components/firebase/config';


export const useFirestore = () => {
    const [hospitals, setHospitals] = useState([])

    useEffect(() => {
        const unSubscribe = db.collection('hospitals').onSnapshot((snap) => {
            let fetchedData = snap.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
            setHospitals(fetchedData);
            console.log(fetchedData);
        })
        return unSubscribe
    }, [])
    return { hospitals }
}