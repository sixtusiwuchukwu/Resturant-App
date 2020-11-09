import React from 'react'
import "../styles/footer.css";
import instagram from "../images/instagram.JPG";
import facebook from "../images/facebook.JPG";
import message from "../images/mesasge.png";
import twitter from "../images/twitter.png";



const Footer = () => {
    return (
      <div className="footer">
        <div className="flex">
          <div className="address">
            <h1>Our Address</h1>
            <p> 40,brass junction, umugasi aba, abia state</p>
            <p>08100371154</p>
            <p>07066044209</p>
          </div>
          <div className="address">
            <h1>Our Address</h1>
            <p> 40,brass junction, umugasi aba, abia state</p>
            <p>08100371154</p>
            <p>07066044209</p>
          </div>
          <div className="media">
            <img className="message" src={message} alt="" />
            <img className="facebook" src={facebook} alt="" />
            <img className="instagram" src={instagram} alt="" />
            <img className="twitter" src={twitter} alt="" />
          </div>
        </div>
        <div className="copy"> @copyright 2019 learnfactory</div>
      </div>
    );
}
export default Footer;