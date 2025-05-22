import React from "react";
import "./Home.css";
import Products from "../products/Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <video
          src="https://m.media-amazon.com/images/I/D1yrOqaZ4QL.mp4"
          className="home-image fade-dark"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/71ZHRT+CrPL._SX3000_.jpg"
          // src="https://m.media-amazon.com/images/I/61wV73vy6ZL._SX3000_.jpg"
          alt="product image"
        /> */}
        <Products />
      </div>
    </div>
  );
};

export default Home;
