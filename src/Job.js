import React from 'react'
import Company from './Company'

const Job = (props) => {
    return (
        <div>
          <h1>Recommended Jobs For You:</h1>
              <div>
                <h4>{props.title}</h4>
                  <Company name="Brave" city="San Francisco" employees={44} sector="Technology"/>
                  <li>Total Number of Applicants: {props.applicants}</li>
              </div>
          </div>
    )
}

export default Job