import React from 'react'
import './App.css';
import randNum from './helpers'
import jobs from './jobs'
import Job from './Job'

function App() {
  return (
    <div>
      <Job id={1} title="Backend Engineer" company="Brave" city="My Ass" applicants={30} />
    </div>
  )
}

export default App;
