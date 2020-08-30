import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

const Register = (props) => {
  const [form, setValues] = useState({
    username: '',
    email: '',
    firts_name: '',
    last_name: '',
    password: '',
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/Login');
  };
  return (
    <>
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='username'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={updateInput}
            />
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={updateInput}
            />
            <input
              name='firtsname'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={updateInput}
            />
            <input
              name='lastname'
              className='input'
              type='text'
              placeholder='Apellido'
              onChange={updateInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={updateInput}
            />
            <button className='button' type='submit'>Registrarme</button>
          </form>
          <Link to='/login' className='register__container--login'>
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);
