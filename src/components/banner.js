import React from "react";
import imgBanner from "../images/8058.jpg"
import "../components/banner.css"


const Banner = ({ title, image }) => {
  return (
    <div className="banner">
      <div className="banner__contenedor">
        <img src={imgBanner} alt={title} className="banner__img" />
      </div>      
    </div>
  );
};
export default Banner;