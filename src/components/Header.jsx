import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.scss';

const Header = () => (
  <header>
    <Link to='/'>
      <h1>YAUS</h1>
    </Link>
    <div>
      <Link to='/Register'>Register</Link>
      <Link to='/Login'>Login</Link>

    </div>
  </header>
);

export default Header;
