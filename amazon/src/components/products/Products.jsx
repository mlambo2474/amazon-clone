import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { useSearch } from "../../context/SearchContext";
import { productList } from "./ProductList";
import Product from "./Product";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Products = () => {
  const { searchTerm } = useSearch();
  const trimmedSearch = searchTerm.trim().toLowerCase()
  const filteredProducts = productList
  .filter((product) => product.description)
   .filter((product) =>
        product.description.toLowerCase().includes(trimmedSearch)
  );
  return (
    <div className="products-row">
      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          description={product.description}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
   
      ))}
    </div>
  );
};

// const Products = () => {
//   return (
//     <>
//       <div className="products-row">
//         <Product
//           id="1h"
//           image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Essencex2_Cat_Card_1x0.5x._SY304_CB794215609_.jpg"
//           description="Shop new Essence prodduct range"
//           rating={3}
//           price={77.99}
//         />

//         <Product
//           id="1i"
//           image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Homepage/gaming_cat_card_0.5._SY304_CB796557406_.jpg"
//           description=" DJI Mini 3 Fly More Combo with RC Controller"
//           rating={5}
//           price={47.99}
//         />

//         <Product
//           id="10p"
//           image="https://m.media-amazon.com/images/I/51JNhjr4McL._AC_SX522_.jpg"
//           description="DJI Mini 3 Fly More Combo with RC Controller"
//           rating={5}
//           price={69.99}
//         />

//         <Product
//           id="3b"
//           image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Homepage/Fiction0.5x._SY116_CB546222331_.jpg"
//           description="Russell Hobbs RHSP015 2000W Sandwich Press, Silver"
//           rating={3}
//           price={12.99}
//         />
//       </div>

//       <div className="products-row">
//         <Product
//           id="d4fg"
//           image="https://m.media-amazon.com/images/I/61Tt7tU1pLL._AC_SL1500_.jpg"
//           description="Samsung Galaxy S24 FE Gray -256GB "
//           rating={4}
//           price={53.99}
//         />

//         <Product
//           id="1d"
//           image="https://m.media-amazon.com/images/I/71bILgonNaL._SY342_.jpg"
//           description=" The Prayer That Changes Everything Book Of Prayers Paperback  21 December 2024"
//           rating={4}
//           price={69.99}
//         />

//         <Product
//           id="1e"
//           image="https://m.media-amazon.com/images/I/91-dHMUlerL._AC_SL1500_.jpg"
//           description="Luscious Living Duvet Cover Set with 2 Pillow Cases, Double, Green "
//           rating={5}
//           price={7.99}
//         />
//       </div>

//       <div className="products-row">
//         <Product
//           id="1f"
//           image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Homepage/Electronics_CC0.5x._SY304_CB546927220_.jpg"
//           description="  HYGAMOCC TWS Gaming Earbud/Headset, Low Latency, Touch Control
//           Headphones Microphone Excellent Sound 30 Hours Playtime with RGB"
//           rating={4}
//           price={60.99}
//         />

//         <Product
//           id="1g"
//           image="https://m.media-amazon.com/images/I/61JEN+MxiVL._AC_SL1500_.jpg"
//           description=" Mellerware Iron Steam/Dry/Spray Ceramic Emerald 250ml 1800W "
//           rating={5}
//           price={23.99}
//         />

//         <Product
//           id="1h"
//           image="https://m.media-amazon.com/images/I/61Rly6yup7L._AC_SL1500_.jpg"
//           description="Apple MacBook Air (13-inch, Apple M1 chip with 8-core CPU and 7core GPU, 8GB Unified Memory, 256GB) - Space Gray "
//           rating={3}
//           price={77.99}
//         />

//         <Product
//           id="1i"
//           image="https://m.media-amazon.com/images/I/51W6d7DY++L._AC_SL1500_.jpg"
//           description="Samsung Galaxy S10 Plus Tablet with Keyboard Cover and 45W Charger"
//           rating={5}
//           price={47.99}
//         />
//       </div>
//       <div className="products-row">
//         <Product
//           id="1d"
//           image="https://m.media-amazon.com/images/I/817pXoTsviL._AC_SL1500_.jpg"

//           description=" The Prayer That Changes Everything Book Of Prayers Paperback  21 December 2024"
//           rating={4}
//           price={69.99}
//         />
//       </div>
//        <div className="products-row">
//         <Product
//           id="1h"
//           image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Essencex2_Cat_Card_1x0.5x._SY304_CB794215609_.jpg"
//           description="Shop new Essence product range"
//           rating={3}
//           price={77.99}
//         />

//         <Product
//           id="1i"
//           image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Homepage/gaming_cat_card_0.5._SY304_CB796557406_.jpg"
//           description=" DJI Mini 3 Fly More Combo with RC Controller"
//           rating={5}
//           price={47.99}
//         /><Product
//           id="1h"
//           image="https://m.media-amazon.com/images/I/710WlWd+YwL._AC_SY300_SX300_.jpg"
//           description="Shop new Essence prodduct range"
//           rating={3}
//           price={77.99}
//         />

//          <Product
//           id="1i"
//           image="https://m.media-amazon.com/images/I/615eTO83jLL._AC_SL1080_.jpg"
//           description=" DJI Mini 3 Fly More Combo with RC Controller"
//           rating={5}
//           price={47.99}
//         />

//        </div>
//     </>
//   );
// };

export default Products;
