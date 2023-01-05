import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Appcss from './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PracticeData from './PracticeData/PracticeData'
import About from './About/About';
import Contact from './Contact/Contact';
import Department from './Departments/Department';
import Doctor from './Doctors/Doctor';
import Home from './Home/Home';
import Appointment from './Appointment/Appointment';
import Layout from './Layout/Layout';


const App = () => {
  const [time, settime] = useState()
  setInterval(() => {
    settime(
      new Date().toLocaleTimeString()
    )
  } 
  );
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/departments" element={<Layout><Department /></Layout>} />
        <Route path="/doctors" element={<Layout><Doctor /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path = "/contact" element = {<Layout><Contact/></Layout>} />
        <Route path="/appointment" element = {<Appointment/>}/>
      </Routes> */}
      <h2>{time}</h2>
    </div>

  )
}

export default App