import React from 'react'
import HospitalProfile from "./HospitalProfile/HospitalProfile";
function About_us(query) {
    // console.log(query)
    return (
        <div>
            {/* <HospitalProfile/> */}
            {query.location.query}
        </div>
    )
}

export default About_us
