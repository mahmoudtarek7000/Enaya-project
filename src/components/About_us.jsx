import React from 'react'

function About_us(query) {
    console.log(query)
    return (
        <div>
            {query.location.query}
        </div>
    )
}

export default About_us
