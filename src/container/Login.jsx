import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import '../assets/styles/container/login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    username: '',
    id: '',
    name: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    props.loginUser(form, '/');

  };

  return (
    <>
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='username'
              className='input'
              type='text'
              placeholder='Nombre Usuario'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button type='submit' className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <label htmlFor='cbox1'>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            {' '}
            <Link to='/Register'>
              Regístrate
            </Link>

          </p>
        </section>
      </section>
    </>
  );
};
const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
};
export default connect(null, mapDispatchToProps)(Login);
