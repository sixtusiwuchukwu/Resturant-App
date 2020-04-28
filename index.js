const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// .......importing Routing Apis.....
// for userApi, 
//   orderApi,
//   productApi
const userApi = require("./Api/Routes/userApi")
const orderApi = require("./Api/Routes/orderApi")
const productApi = require("./Api/Routes/productsApi")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/order", orderApi)
app.use("/user", userApi)
app.use("/productApi",productApi)

mongoose
  .connect("mongodb://localhost:27017/speedy", { useUnifiedTopology: true })
  .then(res => console.log("database connected!!"))
  .catch(err => console.log(err));

app.listen(2080, () => {
  console.log("App is running on port 2080");
});

app.get("/users", (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
});

app.post("/register", (req, res) => {
  const { fullname, gmail, username, password } = req.body;
  User.find({ gmail })
    .then(user => {
      if (user) {
        return res.status(400).send(`user with ${gmail} already exits`);
      }
      User.create({
        fullname: fullname,
        gmail: gmail,
        username: username,
        password: password,
        averter: averter
      })
        .then(res => console.log("new user created"))
        .catch(err => console.log(err));
    })
    .catch(err => res.send(err));
});

app.post("/order", (req, res) => {
  const { image, amount } = req.body;
  Order.create({
    image: image,
    amount: amount
  })
    .then(res => console.log("new user order"))
    .catch(err => console.log(err));
});

app.get("/cart", (req, res) => {
  Order.find({}, (err, cart) => {
    if (err) {
      return console.log(err);
    } else if (cart.length <= 0) {
      console.log("cart is empty");
      return res.send("cart is empty");
    } else {
      console.log(cart);
      return res.send(cart);
    }
  });
});

app.put("/cart/update/:id", (req, res) => {
  Order.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
    if (err) {
      console.log(err);
    } else {
      console.log("updated", updated);
      res.send(updated);
    }
  });
});
app.delete("/cart/delete/:id", (req, res) => {
  Order.findByIdAndDelete(req.params.id, req.body, (err, deletedcart) => {
    if (err) {
      console.log(err);
    } else {
      console.log(deletedcart);
      res.send(deletedcart);
    }
  });
});
