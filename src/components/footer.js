import React from "react";
import logo from "../images/image1.png";
import '../components/footer.css'

 const Footer = () => {
  return (
    <div className="footer" >
      <div className="logo__contenedor">
        <img src={logo} alt="Logo" className="logoF"/>
      </div>
      <div className="text__contenedor"><h3 className="textF">Desarrolador por Brayan Arciniegas</h3></div>
    </div>
  );
};


export default Footer;
