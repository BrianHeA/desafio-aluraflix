import React from "react";


const Videos = () => {
  return (
        <div className="video">
          <video src="https://www.youtube.com/watch?v=8lMIdrlIWOQ" className="url__video">
            <a className="link_a" href="https://www.youtube.com/watch?v=8lMIdrlIWOQ">""</a>
            <img src="miniatura" alt="miniatura" className="miniatura__img"></img>
          </video>
          <h3 className="titulo__video">¿Qué es la inteligencia artificial?</h3>
        </div>        
  );
};

const Barra = () => {
  return (
    <div className="barra__videos">
      <h1 className="titulo__categoria">Categoria IA</h1>
      <div className="contenedor__videos"> 
        <Videos />
             
      </div>
    </div>

  );
};



export default Barra
