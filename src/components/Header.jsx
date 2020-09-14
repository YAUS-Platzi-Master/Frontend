import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.scss';

const Header = () => (
  <header class="header">
    <img class="header__img" src="https://img.icons8.com/wired/64/000000/scissors.png"/>
    <div class="header__menu"> 
    <div class="header__menu--profile"> 
    <img src="https://img.icons8.com/fluent/64/000000/user-male-circle.png"/>
<p>Perfil</p>
    </div>
    <ul>
      <li><a href="/Login">Iniciar sesión</a></li>
<li><a href="/Register">Registro</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
