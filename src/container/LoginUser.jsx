import React, { useState, Component } from 'react';
import axios from 'axios';
import '../assets/styles/container/loginuser.scss';

class LoginUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      longUrl: '',
      customName: '',
      token: this.getCookie('token'),
      shortUrls: [],
    };
    this.longUrlChange = this.longUrlChange.bind(this);
    this.customNameChange = this.customNameChange.bind(this);
    this.createURL = this.createURL.bind(this);
    this.getShortUrls = this.getShortUrls.bind(this);
  }

  componentDidMount() {
    this.getShortUrls();
  }

  longUrlChange(event) {
    this.setState({ longUrl: event.target.value });
  }

  customNameChange(event) {
    this.setState({ customName: event.target.value });
  }

  getCookie(name) {
    const match = document.cookie.match(RegExp('(?:^|;\\s*)' + name.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1') + '=([^;]*)'));
    return match ? match[1] : null;
  }

  createURL(event) {
    event.preventDefault();
    const { token, longUrl, customName } = this.state;
    axios({
      url: 'https://yaus-api.herokuapp.com/api/1.0/register/new_url',
      method: 'post',
      headers: {
        'Authorization': `Token ${token}`,
      },
      data: {
        'long_url': longUrl,
        'custom_url': false,
        'short_url_custom': 'hola-mundo2',
      },
    })
      .then(({ data }) => {
        console.log(data);
        this.getShortUrls();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getShortUrls() {
    const { token } = this.state;
    axios({
      url: 'https://yaus-api.herokuapp.com/api/1.0/set_of_urls/',
      method: 'get',
      headers: {
        'Authorization': `Token ${token}`,
      },
    })
      .then(({ data }) => {
        this.setState({ shortUrls: data.data });
        console.log(this.state.shortUrls);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { longUrl } = this.state;
    const { customName } = this.state;
    const { shortUrls } = this.state;

    const items = shortUrls.map((item) => <a role='button' className='list-group-item list-group-item-action' key={item.id}>https://yaus.xyz/{item.short_url}</a>);

    return (
      <div className='home_url'>
        <form className='creating_url' onSubmit={this.createURL}>
          <h3 className='text-dark mt-2'>Create URL</h3>
          <input
            name='long_url'
            className='form-control mt-4'
            type='url'
            placeholder='https://example.com/test'
            value={longUrl}
            onChange={this.longUrlChange}
          />
          <input
            name='custom_url'
            className='form-control mt-2'
            type='text'
            placeholder='Custom name'
            value={customName}
            onChange={this.customNameChange}
          />
          <br />
          <button type='submit' className='btn btn-block btn-outline-secondary w-75 mx-auto mb-2'>CREATE</button>
        </form>
        <div className='container mt-4'>
          <div className='row mt-3'>
            <div className='col-4'>
              <ul className='list-group'>
                {items}
              </ul>
            </div>
            <div className='col-8 border'>
              <p className='text-secondary text-left'>Created: </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginUser;
