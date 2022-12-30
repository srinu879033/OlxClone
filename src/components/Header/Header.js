import React from "react";
import "./Header.css";
import OlxLogo from "../../assets/icons/OlxLogo";
import Search from "../../assets/icons/Search";
import Arrow from "../../assets/icons/Arrow";
import SellButton from "../../assets/icons/SellButton";
import SellButtonPlus from "../../assets/icons/SellButtonPlus";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <Link to="/login">
            <span>Login</span>
          </Link>
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
