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
      shortUrl: [],
    };
    this.longUrlChange = this.longUrlChange.bind(this);
    this.customNameChange = this.customNameChange.bind(this);
    this.createURL = this.createURL.bind(this);
    this.getShortUrls = this.getShortUrls.bind(this);
    this.showStats = this.showStats.bind(this);
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

  showStats(event) {
    const { token } = this.state;
    const id = event.target.dataset.key;

    axios({
      url: `https://yaus-api.herokuapp.com/api/1.0/set_of_urls/${id}`,
      method: 'get',
      headers: {
        'Authorization': `Token ${token}`,
      },
    })
      .then(({ data }) => {
        this.setState({ shortUrl: [data] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createURL(event) {
    event.preventDefault();
    const { token, longUrl, customName } = this.state;
    const isCustomName = customName.length > 0;

    axios({
      url: 'https://yaus-api.herokuapp.com/api/1.0/register/new_url',
      method: 'post',
      headers: {
        'Authorization': `Token ${token}`,
      },
      data: {
        'long_url': longUrl,
        'custom_url': isCustomName,
        'short_url_custom': customName,
      },
    })
      .then(({ data }) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { longUrl } = this.state;
    const { customName } = this.state;
    const { shortUrls } = this.state;
    const { shortUrl } = this.state;

    const items = shortUrls.map((item) => <a onClick={this.showStats} role='button' className='list-group-item list-group-item-action text-info' key={item.id} data-key={item.id}>https://yaus.xyz/{item.short_url}</a>);

    const summary = shortUrl.map((item) => 
      <table className='table table-hover' key={item.id}>
        <thead>
          <tr>
            <th colSpan='2'>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Status: </td>
            <td className='text-success'>{item.status}</td>
          </tr>
          <tr>
            <td>Created: </td>
            <td>{Date(item.created)}</td>
          </tr>
          <tr>
            <td>Link: </td>
            <td><a href={item.long_url}>{item.long_url}</a></td>
          </tr>
          <tr>
            <td>Total Clicks: </td>
            <td>{item.total_hits}</td>
          </tr>
        </tbody>
      </table>
    );

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
              <ul className='list-group'>
                {summary}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginUser;
