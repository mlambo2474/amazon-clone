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
        <div className="products-grid">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
