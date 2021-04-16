import { useState, useEffect } from 'react';
import { dataBase } from './firebase';


export const useFirestore = () => {
    const [hospitals, setHospitals] = useState([])

    useEffect(() => {
        const unSubscribe = dataBase.collection('hospitals').onSnapshot((snap) => {
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