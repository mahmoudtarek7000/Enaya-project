import React from 'react'
import PatientTable from './PatientTable'

const PatientProfile = () => {
    return (
        <div>
            <PatientTable colName = "Doctor Name" tableName = "Appointments"/>
            <PatientTable colName = "Row Number" tableName = "Room Reservations"/>
        </div>
    )
}

export default PatientProfile
