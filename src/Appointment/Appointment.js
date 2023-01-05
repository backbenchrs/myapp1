import React from 'react'
import { Link } from "react-router-dom";

const Appointment = () => {
  const onSubmiter = (event) => {
    event.preventDefault();
    console.log(event);
  }
  return (
    <div>

      <div>

        <section id="appointment" className="appointment">
          <div className="container">
            <div className="section-title">
              <h2>Make an Appointment</h2>
              <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
            </div>
            <form onSubmit={onSubmiter} className="php-email-form">
              <div className="row">
                <div className="col-md-4 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input type="date" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select name="department" id="department" className="form-select">
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Make an Appointment</button></div>
            </form>
          </div>
        </section>
        {/* <footer id="footer">
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
        </footer> */}
      </div>

    </div>
  )
}

export default Appointment