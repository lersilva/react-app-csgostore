import React from "react";
import "./header.styless.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons8-counter-strike.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;