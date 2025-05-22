import React from "react";
import "./Footer.css";
import logo2 from "./logo2.png"

const Footer = () => {
  return (
    <>
    
      <div className="footer">
      
        <div className="section">
          <p>Get To know us</p>
          <span>Careers</span>
          <span>Legal Notice</span>
          <span>Welcome to Amazon.co.za</span>
        </div>

        <div className="section">
         <p>Make Money with Us</p>
          <span>Advertise Your Products</span>
          <span>Sell on Amazon</span>
          <span>Supply to Amazon</span>
        </div>

        <div className="section">
        <p>Amazon Payment Methods</p>
          <span>Payment Methods Help</span>
        </div>

        <div className="section"> 
                  <p>Let Us Help You</p>
          <span>Track Packages or View Orders</span>
          <span>Shipping & delivery</span>
          <span>Returns & Replacements</span>
          <span>Recalls and Product Safety Alerts</span>
          <span>Customer Service</span>
          <span>Amazon Mobile App</span>
        </div>
    </div>
      <div className="disclaimer">
        <p>Disclaimer: This website is an independent project and is not affiliated with, endorsed by, or in any way officially connected with Amazon.com, Inc. or any of its subsidiaries or affiliates. The name “Amazon” as well as related names, marks, emblems, and images are registered trademarks of their respective owners. This site is for educational/demo purposes only.</p>
      </div>
        <div className="logos">
         <img src={logo2} className="amazon-logo" alt="" />
         <div className="country">
         <img  className="flag" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" alt="" />
              <span>South Africa</span>
         </div>
    
    
      </div>
    
    </>
  
  );
};

export default Footer;
