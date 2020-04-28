import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Header from "./components/header";
import Main from "./components/main";
import Contact from "./components/contact";
import About from "./components/about";
import Login from "./components/login";
import Singup from "./components/signup";
import Menu from "./components/menu";
import Reserve from "./components/reserve";
import Cart from "./components/cart";

const Pagenotfound = props => {
  const { history } = props;
  return (
    <center>
      <div>
        {" "}
        <h1> 404 -page not found </h1>
        <h1>{props.match.params.id}</h1>
        {console.log(history)}
        <Link to="">go home</Link>
        {history.push("/login")}
      </div>
    </center>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={Singup} />
          <Route path="/login" component={Login} />
          <Route path="/menu" component={Menu} />
          <Route path="/reserve" component={Reserve} />
          <Route path="/cart" component={Cart} />
          <Route path="/err" component={Pagenotfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
