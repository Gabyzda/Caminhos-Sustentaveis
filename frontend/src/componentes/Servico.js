import React from "react";
/*import SobreNos from "./SobreNos";*/
import { Link } from 'react-router-dom';
/*import { useState } from "react";*/
import '../Apprutas.css';

export default function Servico() {
  return (
    <div>
      <form className="presenta_css">
        <div>
          <h3> Caminhos Sustentáveis </h3>
          <h1 className="centrasobrenos">
            Pagina Serviço En construccion </h1>
          <Link to="/" style={{ textDecoration: 'none', color: "red" }} > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
        </div>
      </form>
    </div>
  );
}