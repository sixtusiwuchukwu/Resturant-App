import React from "react";
import Footer from './footer';
import Header from './header';
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="high">
    <Header/>
    <div className="contact2">
      <h1>Contact Us</h1>
      <hr />
      <div className="flex">
        <div>
          <h1>Location Information</h1>
          <address>
            <h1>Our Address</h1>
            <p>140, Brass Road</p>
            <p>Off umugasi Aba Abia State Nigeria</p>
            <p>08100371154</p>
            <p>08122419984</p>
            <p>sixtusiwuchukwu21@gmail.com</p>
          </address>
        </div>
        <div className="sample-img"></div>
      </div>
      <hr />
      <div className="shift">
        <h1>Send US your feedback</h1>
        <label>FirstName</label>
        <input className="input1" type="text" placeholder="FirstName" />
        <br />
        <label>LastName</label>
        <input className="input2" type="text" placeholder="LastName" />
        <br />
        <label>phone</label>
        <input className="input3" type="text" placeholder="phone" />
        <br />
        <label>Email</label>
        <input className="input4" type="text" placeholder="Email" />
        <div className="contact">
          <label>
            <input type="checkbox" />
            May we contact you?
          </label>
          <select>
            <option>Email</option>
            <option>Phone</option>
          </select>
        </div><br/>
        <label>Your feedback</label>
        <textarea placeholder="Your Message" />
        <br />
        <button className="feed">Send Feedback</button>
          </div>
          <Footer/>
      </div>
      </div>
  );
};
export default Contact;
