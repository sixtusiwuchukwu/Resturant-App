import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "../styles/menu.css";
import image from "../images/jellof 2.jpeg";
import image1 from "../images/salad3.jpeg";

const Menu = () => {
  const [cart, SetCart] = useState([]);

  const [Data] = useState([
    {
      image: image1,
      amount: "120",
      quantity: 1,
      total: 120,
    },
    {
      image: image,
      amount: "160",
      quantity: 1,
      total: 160,
    },
    {
      image: image1,
      amount: "260",
      quantity: 1,
      total: 260,
    },
    {
      image: image1,
      amount: "160",
      quantity: 1,
      total: 160,
    },
    {
      image: image,
      amount: "160",
      quantity: 1,
      total: 160,
    },
    {
      image: image1,
      amount: "160",
      quantity: 1,
      total: 160,
    },
  ]);
  const Sendtocart = (item) => {
    const each = Data[item];
    SetCart([...cart, each]);
    const prev = JSON.parse(localStorage.getItem("cart"));
    if (prev === null || prev.length === 0) {
      return localStorage.setItem("cart", JSON.stringify(cart));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem("cart"));
    if (prev === null || prev.length === 0) {
      return "";
    }
    SetCart(prev);
  }, []);

  return (
    <div>
      <div className="header">
        <div>
          <Link className="logo" to="/menu">
            SPEEDY FOOD
          </Link>
        </div>
        <div className="nav">
          <Link to="/login">
            <h2 className="btn">Logout</h2>
          </Link>
          <Link to="/reserve">
            <h2 className="btn">Reserve</h2>
          </Link>
          <Link to="/cart">
            <button className="cart">
              <span role="img" aria-labelledby="cart">
                🛒
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="holder">
        {Data.map((item, index) => (
          <div key={index} className="hold">
            <img className="image" src={item.image} alt="" />
            <h3>{`$${item.amount}`}</h3>
            <button
              className="order"
              onClick={() => {
                Sendtocart(index);
              }}
            >
              Order
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
export default Menu;
