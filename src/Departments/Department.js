import React from 'react'
import { Link } from "react-router-dom";

const Department = () => {
  return (
    <div>
<div>
  <div className="main-header">
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
          <i className="bi bi-phone" /> +91 9988776655
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
          <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
          <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
        </div>
      </div>
    </div>
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
        <Link to="/appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
          Appointment</Link>
      </div>
    </header>
  </div>
  <section id="departments" className="departments">
    <div className="container">
      <div className="section-title">
        <h2>Departments</h2>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <ul className="nav nav-tabs flex-column">
            <li className="nav-item">
              <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">E.N.T</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Cancer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Physiotherapy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Dental</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Neurosurgery</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-9 mt-4 mt-lg-0">
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>E.N.T</h3>
                  <p className="fst-italic">Vestibulum volutpat luctus quam sed finibus. Sed luctus odio eget ex posuere
                    hendrerit. Donec iaculis nisi ut purus dapibus</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-1.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Cancer</h3>
                  <p className="fst-italic">Quisque sapien ipsum, efficitur ac dui et, fringilla viverra tellus. Proin urna
                    augue, posuere ut pellentesque quis, cursus ac neque.</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-2.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Physiotherapy</h3>
                  <p className="fst-italic">Fusce placerat ornare enim sed varius. Mauris tortor diam, molestie eget
                    vulputate a, facilisis quis nibh. Donec blandit efficitur nulla</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-3.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-4">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Dental</h3>
                  <p className="fst-italic"> sollicitudin sed est. Vestibulum volutpat luctus quam sed finibus. Sed luctus
                    odio eget ex posuere hendrerit. Donec iaculis nisi ut purus.</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-4.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-5">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Neurosurgery</h3>
                  <p className="fst-italic">Aliquam sed convallis libero. Proin in mi tempor, convallis lectus sed,
                    convallis mauris. Quisque ac nulla et lorem ultricies vulputate.</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-5.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer id="footer">
    <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-start">
        <div>
          <h4>Address</h4>
          <p>
            F-505, <br />
            Inovative Plazza<br />
            New Delhi, India<br /><br />
            <strong>Phone:</strong> +91 9988776655<br />
            <strong>Email:</strong> cityhospital@example.com<br />
          </p>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default Department