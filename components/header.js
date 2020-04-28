import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = props => {
  const fixedHeaderOnScroll = () => {
    const distanceY = window.pageYOffset,
      shrinkOn = 80,
      headerEl = document.querySelector(".background");
    if (distanceY > shrinkOn) {
      headerEl.classList.add("small");
    } else {
      headerEl.classList.remove("small");
    }
  };
  useEffect(() => {
    // console.log(history);
    // if (history.location)
    // window.addEventListener("scroll", fixedHeaderOnScroll);
  });

  return (
    <div>
      <div className="background">
        <div className="nav">
          <h1>
            <Link className="logo" to="/">
              SPEEDY FOOD
            </Link>
          </h1>
          <Link className="link2" to="/login">
            Menu
          </Link>
          <Link className="link2" to="/about">
            About
          </Link>
          <Link className="link2" to="/contact">
            Contact
          </Link>
          {/* signup page */}
          <Link className="link2" to="signup">
            Be a customer
          </Link>
          {/* login page */}
          <Link className="link2" to="/login">
            Order Food
          </Link>
        </div>
      </div>
      {/* <div className="search">
        <input className="input" type="text" />
        
        <button className="button">Search</button>
      </div> */}
    </div>
  );
};
export default Header;
