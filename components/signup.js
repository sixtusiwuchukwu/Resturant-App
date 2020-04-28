import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import logo from "../images/logo.png";
const Axios = require("axios");

const Signup = props => {
  const { history } = props;
  const Schema = {
    fullname: "",
    gmail: "",
    username: "",
    password: ""
  };
  const [details, setDetails] = useState(Schema);

  const Handlechange = e => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const Handlesubmit = e => {
    e.preventDefault();
    Axios.post("http://localhost:2080/register", {
      fullname: details.fullname,
      gmail: details.gmail,
      username: details.username,
      password: details.password
    })
      .then(res => {
        if (res.status === 200) {
          setDetails(Schema);
          setTimeout(() => {
            history.push("/login");
          }, 2000);
        } else {
          return console.log(res.details[0].message);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <center>
      <div className="detail">
        <img className="logo2" src={logo} alt="" />
        <Link to="/">
          {" "}
          <button className="cancel2 ">x</button>
        </Link>
        <div className="details">
          <div className="name">
            <input
              type="text"
              placeholder="FULLNAME"
              name="fullname"
              value={details.fullname}
              onChange={Handlechange}
            />
            <input
              type="gmail"
              placeholder="GMAIL"
              name="gmail"
              value={details.gmail}
              onChange={Handlechange}
            />
          </div>
          <div className="name2">
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              value={details.username}
              onChange={Handlechange}
            />
            <div className="phone">
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={details.password}
                onChange={Handlechange}
              />
            </div>
          </div>
          <button onClick={Handlesubmit} className="button">
            Signup
          </button>
        </div>
      </div>
    </center>
  );
};
// <div className="check">
//   <label>
//     <input className="male" type="checkbox" />
//     Male
//   </label>
//   <label>
//     <input className="female" type="checkbox" />
//     Female
//   </label>
//   <br />
// </div>

export default Signup;
