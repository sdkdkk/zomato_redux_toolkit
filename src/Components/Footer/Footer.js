import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="col-md-12 footer ">
      <div class="row">
        <div class="col-md-4"><h1 style={{fontWeight:"800" }}>zomato</h1></div>
        <div class="col-md-3"></div>
        <div
          class="col-md-4"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="city">India</div>
          <div className="language">English</div>
        </div>
      </div>
      <div class="row footer-down">
        <div class="col-md-2"></div>
        <div class="col-md-2">
          <h3>ABOUT ZOMATO</h3>
          <p>Who We Are</p>
          <p>Blog</p>
          <p>Work With Us</p>
          <p>Investor Relations</p>
          <p>Report Fraud</p>
          <p>Contact Us</p>
        </div>
        <div class="col-md-2">  
          <h3>ZOMAVERSE</h3>
          <p>zomato</p>
          <p>Blinkit</p>
          <p>Feeding India</p>
          <p>Hyperpure</p>
          <p>zomaland</p>
        </div>
        <div class="col-md-2">
          <h3>FOR RESTAURANTS</h3>
          <p>Partner with us</p>
          <p>Apps For You</p>
          <h3>FOR ENTERPRISES</h3>
          <p>zomato for work</p>
        </div>
        <div class="col-md-2">
          <h3>LEARN MORE</h3>
          <p>Privacy</p>
          <p>Security</p>
          <p>Terms</p>
          <p>Sitemap</p>
        </div>
        <div class="col-md-2">
          <h3>SOCIAL LINKS</h3>
          <span className="d-flex" style={{ justifyContent: "space-evenly" }}>
            <p>
              {" "}
              <BsLinkedin />
            </p>
            <p>
              {" "}
              <BsInstagram />
            </p>
            <p>
              {" "}
              <BsTwitter />
            </p>
            <p>
              {" "}
              <BsYoutube />
            </p>
            <p>
              {" "}
              <BsFacebook />
            </p>
          </span>
          <p>
            <img
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              style={{ height: "50px", width: "200" }}
              alt=""
            />
          </p>
          <p>
            <img
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              style={{ height: "50px", width: "200" }}
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
