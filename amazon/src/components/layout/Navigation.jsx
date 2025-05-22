import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./navigation.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-spans">
        <div className="all-icon">
          <i>
            <MenuIcon />
          </i>
          <p>All</p>
        </div>

        <span>Sell</span>
        <span>Today's Deals</span>
        <span>Keep Shopping for</span>
        <span>Everyday Essentials</span>
        <span>Customer Service</span>
        <span>Best Sellers</span>
        <span>Buy Again</span>
      </div>
      <div className="essentials">
        <p>Everyday Essentials</p>
      </div>
    </div>
  );
};

export default Navigation;
