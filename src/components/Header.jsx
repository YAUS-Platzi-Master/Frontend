import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.scss';
import yaus from '../assets/images/YAUS2.png';

const Header = () => (
  // <header>
  //   <Link to='/'>
  //     <img src={yaus} alt='yaus' className='yausImg' />
  //   </Link>
  //   <div>
  //     <Link to='/Register'>Register</Link>
  //     <Link to='/Login'>Login</Link>
  //   </div>
  // </header>
  <header className='header'>
    <Link to='/'>
      <img src={yaus} alt='yaus' className='yausImg' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to='/Login'>Iniciar Sesion</Link></li>
        <li><Link to='/Register'>registro</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
