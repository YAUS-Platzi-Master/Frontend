import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import '../assets/styles/components/header.scss';
import yaus from '../assets/images/YAUS2.png';

const Header = (props) => {

  return (
    <header className='header'>
      <Link to='/'>
        <img src={yaus} alt='yaus' className='yausImg' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to='/'>Cuenta</Link></li>
          <li><a href='#logout'>Cerrar Sesion</a></li>
          <li><Link to='/Login'>Iniciar Sesion</Link></li>
        </ul>
      </div>
    </header>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     username: state.username,
//   };
// };

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(null, mapDispatchToProps)(Header);
