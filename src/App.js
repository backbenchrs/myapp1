import React from 'react';
import ReactDOM from 'react-dom';
import Appcss from './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PracticeData from './PracticeData/PracticeData'
import About from './About/About';
import Appointment from './Appointment/Appointment';
import Contact from './Contact/Contact';
import Department from './Departments/Department';
import Doctor from './Doctors/Doctor';
import Home from './Home/Home';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/about " element={<About />} />
        <Route path = "/ontact" element = {<Contact/>} />
      </Routes>
    </div>

  )
}

export default App