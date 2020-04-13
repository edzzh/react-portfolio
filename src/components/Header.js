import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted menu">
      <Link to="/" className="item">Home</Link>
      <Link to="/gallery" className="item">Gallery</Link>
      <div className="right menu item">
        React Portfolio App
      </div>
    </div>
  )
};

export default Header;
