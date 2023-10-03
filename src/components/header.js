import React from "react";
import logo from "../images/image1.png";
import '../components/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo__img"/>
      </div>
      <div className="button__contenedor">
        <button className="button">Nuevo video</button>
      </div>
    </div>
  );
};

export default Header;
