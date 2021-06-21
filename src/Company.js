import React from 'react'

const Company = ({ name, city, logo, employees, sector }) => {
    return (
        <ul>
            <li>Company: {name}</li>
            <li>Location: {city}</li>
            <li>Current Number of Employees: {employees}</li>
            <li>Sector: {sector}</li>
            <img src={logo}></img>
        </ul>
    )
}

export default Company