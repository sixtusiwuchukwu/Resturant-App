import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import logo from "../images/logo.png";

const Login = () => {
  const schema = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(schema);

  const Handlechange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="back">
      <center>
        <img className="logo1" src={logo} alt="" />
        <Link to="/">
          {" "}
          <button className="cancel1">x</button>
        </Link>
        <div className="login">
          <h1>Member Login</h1>
          <input
            type="text"
            autoFocus
            placeholder="UserName"
            name="username"
            onChange={Handlechange}
            value={user.username}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={Handlechange}
            value={user.password}
          />
          <a href="/#">Forgot password?</a>
          <Link to="/menu">
            {" "}
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </center>
    </div>
  );
};
export default Login;
