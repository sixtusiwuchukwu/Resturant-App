import React, { useEffect } from "react";
import Footer from "./footer";

const Show = () => {
  const Alert = () => {
    window.confirm("you are about to leave this page");
  };
  <div>
    <h1>hello world</h1>
    <button onClick={Alert}>click me</button>
    <Footer />
  </div>;
};

export default Show;
