import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <div className="logo">
            <a href="../index.html">
              <h1 className="logo me-auto">City</h1><br />
              <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
            </a>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link className="nav-link scrollto" to="/">Home</Link></li>
              <li><Link className="nav-link scrollto" to="/departments">Departments</Link></li>
              <li><Link className="nav-link scrollto" to="/doctors">Doctors</Link></li>
              <li><Link className="nav-link scrollto" to="/about">About</Link></li>
              <li><Link className="nav-link scrollto active" to="/contact">Contact</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <a href="./appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
            Appointment</a>
            <Link to="/login" className="appointment-btn scrollto">
              <span className="d-none d-md-inline">Login/Signup</span>
            </Link>
        </div>
      </header>
    </div>
  )
}

export default Header