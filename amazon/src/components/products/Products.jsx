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


export default Products;
