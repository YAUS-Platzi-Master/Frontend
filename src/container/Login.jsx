import React from 'react';
import '../assets/styles/container/login.scss';
import { Link } from 'react-router-dom';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <h1>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdame
          </h1>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      {/* <section class="login__container--social-media">
        <div><img src="../assets/google-icon.png"> Inicia sesión con Google</div>
        <div><img src="../assets/twitter-icon.png"> Inicia sesión con Twitter</div>
      </section> */}
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <br></br>
        <Link to='/registro'>Regístrate</Link>
      </p>
    </section>
  </section>
);

export default Login;
