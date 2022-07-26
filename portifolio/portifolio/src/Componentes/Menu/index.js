import Logo from "../Logo";
import "./Menu.css"
import { useState } from "react";

const Menu = () => {


  return (

    <div>
      <nav className="menu">
        <Logo />
        <div>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#resume">Experiencia</a></li>
            <li><a href="#formacao">Formação</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#certificacoes">Certificações</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;