import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Product from "./Product";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Products = () => {
  return (
    <>
      <div className="products-row">
        <Product
          id="1h"
          image="https://m.media-amazon.com/images/I/418+un+bDqL._AC_UL320_.jpg"
          description="  HYGAMOCC TWS Gaming Earbud/Headset, Low Latency, Touch Control
          Headphones Microphone Excellent Sound 30 Hours Playtime with RGB"
          rating={3}
          price={77.99}
        />

        <Product
          id="1i"
          image="https://m.media-amazon.com/images/I/61qdmR8W27L._AC_SL1500_.jpg"
          description=" DJI Mini 3 Fly More Combo with RC Controller"
          rating={5}
          price={47.99}
        />

        <Product
          id="10p"
          image="https://m.media-amazon.com/images/I/51JNhjr4McL._AC_SX522_.jpg"
          description="DJI Mini 3 Fly More Combo with RC Controller"
          rating={5}
          price={69.99}
        />

        <Product
          id="3b"
          image="https://m.media-amazon.com/images/I/71xFwo8MP7L._AC_SX522_.jpg"
          description="Russell Hobbs RHSP015 2000W Sandwich Press, Silver"
          rating={3}
          price={12.99}
        />
      </div>

      <div className="products-row">
        <Product
          id="d4fg"
          image="https://m.media-amazon.com/images/I/61Tt7tU1pLL._AC_SL1500_.jpg"
          description="Samsung Galaxy S24 FE Gray -256GB "
          rating={4}
          price={53.99}
        />

        <Product
          id="1d"
          image="https://m.media-amazon.com/images/I/71bILgonNaL._SY342_.jpg"
          description=" The Prayer That Changes Everything Book Of Prayers Paperback  21 December 2024"
          rating={4}
          price={69.99}
        />

        <Product
          id="1e"
          image="https://m.media-amazon.com/images/I/91-dHMUlerL._AC_SL1500_.jpg"
          description="Luscious Living Duvet Cover Set with 2 Pillow Cases, Double, Green "
          rating={5}
          price={7.99}
        />
      </div>

      <div className="products-row">
        <Product
          id="1f"
          image="https://m.media-amazon.com/images/I/418+un+bDqL._AC_UL320_.jpg"
          description="  HYGAMOCC TWS Gaming Earbud/Headset, Low Latency, Touch Control
          Headphones Microphone Excellent Sound 30 Hours Playtime with RGB"
          rating={4}
          price={60.99}
        />

        <Product
          id="1g"
          image="https://m.media-amazon.com/images/I/61JEN+MxiVL._AC_SL1500_.jpg"
          description=" Mellerware Iron Steam/Dry/Spray Ceramic Emerald 250ml 1800W "
          rating={5}
          price={23.99}
        />

        <Product
          id="1h"
          image="https://m.media-amazon.com/images/I/61Rly6yup7L._AC_SL1500_.jpg"
          description="Apple MacBook Air (13-inch, Apple M1 chip with 8-core CPU and 7core GPU, 8GB Unified Memory, 256GB) - Space Gray "
          rating={3}
          price={77.99}
        />

        <Product
          id="1i"
          image="https://m.media-amazon.com/images/I/51W6d7DY++L._AC_SL1500_.jpg"
          description="Samsung Galaxy S10 Plus Tablet with Keyboard Cover and 45W Charger"
          rating={5}
          price={47.99}
        />
      </div>
    </>
  );
};

export default Products;
