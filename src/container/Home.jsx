import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { urlUser } from '../actions';
import '../assets/styles/container/home.scss';

const Home = (props) => {
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
        <input
          name='long_url'
          className='input'
          type='text'
          placeholder='url'
          onChange={updateInput}
        />
        <br />
        <input type='submit' value='Submit' />
      </form>
      <div className='infoYAUS'>
        <p>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  urlUser,
};

Home.propTypes = {
  urlUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Home);
