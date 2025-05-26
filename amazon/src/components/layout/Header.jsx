import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo2 from "./logo2.png";
import colorlogo from "./colorlogo.png"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import AuthContext from "../../context/authContext";
import ShoppingContext from "../../context/shopping/shoppingContext";
import { useSearch } from "../../context/SearchContext";

import { auth } from "../../firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, emptyBasket } = shoppingContext;
  // const ctx = useContext(AuthContext);
  const { setSearchTerm } = useSearch();
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      emptyBasket();
    }
  };

  return (
    <>
      <div
        className="header"
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: "400 " }}
      >
          <div className="header-container">
        <div className="logo hover">
          <Link to="/home">
            <img src={colorlogo} alt="amazon logo" />
          </Link>
          <span>.co.za</span>
        </div>

        <div className="location hover">
          <LocationOnOutlinedIcon />
          <span className="menu">
            <p>Delivering to Delareyville2718</p>
            <h4>Update location</h4>
          </span>
        </div>

        <div className="search-bar">
          <div className="drop">
            <span>All </span>
            <ArrowDropDownIcon />
          </div>
          <input type="search" placeholder="Search Amazon.co.za" onChange={(e) =>setSearchTerm(e.target.value)}/>
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>

        <div className="header-nav">
          <Link to={!user && "/login"}>
            <div className="menu hover user-email " onClick={handleAuthentication}>
              <p> {!user ? "Hello, sign in" : `Hi, ${user.email}! signOut`} </p>
              <span className="dropdown">
                <h4 className="h4">Accounts & Lists</h4>
                <ArrowDropDownIcon />
              </span>
            </div>
          </Link>

         <Link to="/orders">
         <div className="menu return hover user-email ">
              <p className="returns">Returns</p>
              <h4 >& Orders</h4>
            </div>
         </Link>
      
     

          <Link to="/checkout">
          <div className="cart hover">
            <ShoppingCartIcon />
            <span className="basket-count">{basket?.length}</span>
          </div>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
