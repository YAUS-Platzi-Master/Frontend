import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { urlUser } from '../actions';
import '../assets/styles/container/loginuser.scss';

const LoginUser = (props) => {
  const [form, setValues] = useState({
    long_url: '',
    custom_url: false,
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.urlUser(form);
  };
  return (
    <div className='home_url'>
      <form className='creating_url' onSubmit={handleSubmit}>
        <h3>Sólo ingresa tu URL y clickea Acortar</h3>
        <input
          name='long_url'
          className='inputUrl'
          type='text'
          placeholder='url'
          onChange={updateInput}
        />
        <h3>Nombre Personalizado</h3>
        <input
          name='custom_url'
          className='inputUrl'
          type='text'
          placeholder='url'
          onChange={updateInput}
        />
        <br />
        <button type='submit' className='corte'><span className='btn-text'>Acortar</span></button>
      </form>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <h3>Cantidad de Hits</h3>
          </div>
          <div className='col-sm'>
            <h3>Localizacion Geografica</h3>
          </div>
          <div className='col-sm'>
            <h3>HTTP de referencia</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapDispatchToProps = {
//   urlUser,
// };

// Home.propTypes = {
//   urlUser: PropTypes.func,
// };

export default LoginUser;
