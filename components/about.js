import React from "react";
import "../styles/about.css";
import Footer from "./footer";
import Header from "./header";

const About = props => {
  return (
    <div className="high">
      <Header />
      <h1>About Us</h1>
      <hr className="abtl" />
      <div className="flex-About">
        <div className="first">
          <h1>Our History</h1>
          <p>
            Started in 2010, Ristorant con fusion quickly established itself as
            a culinary icon par excellence in Hong Kong.With its unique brand of
            would fusion cuisine that can be found no where else, it enjoys
            patronage from the A-list clientele in hon kong.Featuring four of
            alll the best three-star Michelin chefs in the world , you never
            know wat will arrive on your plate the next time you visit us.
          </p>
          <p>
            The resturant traces its hun=mble beginings to the frying pan,
            alllsucessful chain Started by our CEo, Mr sixtus iwuchukwu,that
            Featured for the first time the world's best cuisines in a pan.
          </p>
        </div>
        <div className="second">
          <h1 className="caption">Facts At a Glance</h1>
          <p>
            {" "}
            Started <span id="left">3Feb.2013</span>
          </p>
          <p>
            {" "}
            Major Stake Holder <span>Hk Fine Foods Inc.</span>
          </p>
          <p>
            {" "}
            Last Year's TurnOver<span> $1,250,375</span>
          </p>
          <p>
            Employees <span id="left">40</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
