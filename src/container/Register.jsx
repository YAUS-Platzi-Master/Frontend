import React from 'react';
import '../assets/styles/container/register.scss';
import { Link } from 'react-router-dom';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre Usuario' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Apellido' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Registrarme</button>
      </form>
      <Link to='/login'>Iniciar sesión</Link>
    </section>
  </section>
);

export default Register;
