import React, { useState, useEffect } from "react";
import Footer from "./footer";
import "../styles/cart.css";

const Cart = (props) => {
  const { history } = props;
  const [Item, setItem] = useState([]);
  const [Total] = useState(0);
  const [Quantityprice, setQuantityprice] = useState(0);

  const Handledelete = (del) => {
    const deletingitem = Item[del];
    const itemsremained = Item.filter((item) => item !== deletingitem);
    setItem(itemsremained);
    localStorage.setItem("cart", JSON.stringify(itemsremained));
  };

  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("cart"));
    setItem(item);
  }, []);
  return (
    <div>
      <div className="title">
        <h3>SpeedyResturant Cart</h3>
      </div>
      <button
        className="back_btn"
        onClick={() => {
          history.push("/menu");
        }}
      >
        Back to Shopping
      </button>
      <div className="contain">
        <div className="container">
          <div className="item_subheading">
            <li className="product">Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </div>
          <hr />
          <div>
            {Item === null || Item.length === 0 ? (
              <center>
                <h2>your cart is currently empty</h2>
              </center>
            ) : (
              Item.map((items, index) => (
                <div key={index}>
                  <div className="items">
                    <button
                      className="cancel_item"
                      title="remove item from cart"
                      onClick={() => {
                        Handledelete(index);
                      }}
                    >
                      x
                    </button>
                    <img className="image-cart" src={items.image} alt="" />
                    <li>{`$${items.amount}`}</li>
                    <input
                      className="quantity"
                      type="number"
                      min="1"
                      onChange={(e) => {
                        let value = e.target.value;
                        let cost = parseFloat(items.amount) * parseFloat(value);
                        items.total = cost;
                        console.log(items.total);
                      }}
                    />
                    <li>{`$${items.total}`}</li>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>

          {Item === null || Item.length === 0 ? (
            ""
          ) : (
            <button className="update_btn" onClick={() => {}}>
              Update cart
            </button>
          )}
        </div>
        {/* bellow showing total items */}
        <div className="contain_total">
          <div className="total">
            <h1>Cart totals</h1>
            <h2>{`$${Total}`}</h2>
            <hr />
            <h2>{`$${Total}`}</h2>
          </div>
          {/* a checkout button */}

          <button className="checkout_btn">Proceed to checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
