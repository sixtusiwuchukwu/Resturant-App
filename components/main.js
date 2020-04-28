import React, { useEffect } from "react";
import friedrice from "../images/friedrice.jpeg";
import Footer from "./footer";
import jellof2 from "../images/jellof 2.jpeg";
import egusi from "../images/egusi.jpeg";
import salad from "../images/salad 2.jpeg";
import yam from "../images/yam.jpeg";
import cookies from "../images/cookies.jpg";
import "../styles/main.css";
import Header from "./header";
import "../styles/header.css";

const Main = props => {
  useEffect(() => {});

  return (
    <div>
      <Header />
      <div className="main">
        <div className="div1">
          <div className="text">
            Baked: A food that was cooked in an oven, often resulting in a
            crispy outer coating. Blanched: A food that was scalded in boiling
            water and then moved to cold water to stop cooking. Results in a
            softened texture. Blackened: A food that was dipped in butter and
            coated with spices before being cooked in a hot pan, resulting in a
            blackened appearance. Braised: Food that is briefly fried in a small
            amount of fat and then is slowly stewed in a covered pot. Results in
            a seared, crispy exterior coupled with a tender interior texture.
          </div>
          <img className="image1" src={friedrice} alt="" />
        </div>

        <div className="div2">
          <img className="image2" src={jellof2} alt="" />
          <div className="text2">
            Baked: A food that was cooked in an oven, often resulting in a
            crispy outer coating. Blanched: A food that was scalded in boiling
            water and then moved to cold water to stop cooking. Results in a
            softened texture. Blackened: A food that was dipped in butter and
            coated with spices before being cooked in a hot pan, resulting in a
            blackened appearance. Braised: Food that is briefly fried in a small
            amount of fat and then is slowly stewed in a covered pot. Results in
            a seared, crispy exterior coupled with a tender interior texture.
          </div>
        </div>

        <div className="div3">
          <div className="text3">
            Baked: A food that was cooked in an oven, often resulting in a
            crispy outer coating. Blanched: A food that was scalded in boiling
            water and then moved to cold water to stop cooking. Results in a
            softened texture. Blackened: A food that was dipped in butter and
            coated with spices before being cooked in a hot pan, resulting in a
            blackened appearance. Braised: Food that is briefly fried in a small
            amount of fat and then is slowly stewed in a covered pot. Results in
            a seared, crispy exterior coupled with a tender interior texture.
          </div>
          <img className="image3" src={egusi} alt="" />
        </div>
        <div className="div4">
          <img className="image4" src={salad} alt="" />
          <div className="text4">
            Baked: A food that was cooked in an oven, often resulting in a
            crispy outer coating. Blanched: A food that was scalded in boiling
            water and then moved to cold water to stop cooking. Results in a
            softened texture. Blackened: A food that was dipped in butter and
            coated with spices before being cooked in a hot pan, resulting in a
            blackened appearance. Braised: Food that is briefly fried in a small
            amount of fat and then is slowly stewed in a covered pot. Results in
            a seared, crispy exterior coupled with a tender interior texture.
          </div>
        </div>
        <div className="div5">
          <div className="text5">
            Baked: A food that was cooked in an oven, often resulting in a
            crispy outer coating. Blanched: A food that was scalded in boiling
            water and then moved to cold water to stop cooking. Results in a
            softened texture. Blackened: A food that was dipped in butter and
            coated with spices before being cooked in a hot pan, resulting in a
            blackened appearance. Braised: Food that is briefly fried in a small
            amount of fat and then is slowly stewed in a covered pot. Results in
            a seared, crispy exterior coupled with a tender interior texture.
          </div>
          <img className="image5" src={yam} alt="" />
        </div>
        <div className="div6">
          <img className="image6" src={cookies} alt="" />
          <div className="text6">
            {" "}
            Baked: A food that was cooked in an oven, often resulting in a
            crispy outer coating. Blanched: A food that was scalded in boiling
            water and then moved to cold water to stop cooking. Results in a
            softened texture. Blackened: A food that was dipped in butter and
            coated with spices before being cooked in a hot pan, resulting in a
            blackened appearance. Braised: Food that is briefly fried in a small
            amount of fat and then is slowly stewed in a covered pot. Results in
            a seared, crispy exterior coupled with a tender interior texture.
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Main;
