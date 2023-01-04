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
import Layout from './Layout/Layout';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/departments" element={<Layout><Department /></Layout>} />
        <Route path="/doctors" element={<Layout><Doctor /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path = "/contact" element = {<Layout><Contact/></Layout>} />
      </Routes>
    </div>

  )
}

export default App