import axios from 'axios';

export const createUrlRequest = (payload) => ({
  type: 'CREATEURL_REQUEST',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const loginUser = ({ username, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: 'https://yaus-api.herokuapp.com/api/auth/login/',
      method: 'post',
      data: {
        username,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `username=${data.user.username}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `token=${data.token}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('https://yaus-api.herokuapp.com/api/1.0/register/user', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const createUrl = ({ long_url, custom_url, short_url_custom }) => {
  return (dispatch) => {
    axios({
      url: 'https://yaus-api.herokuapp.com/api/1.0/register/new_url',
      method: 'post',
      data: {
        long_url,
        custom_url,
        short_url_custom,
      },
    })
      .then(({ data }) => {
        alert(`Tu nueva url acortada es yaus.xyz/${data.register_set.short_url}`);
      })
      .catch((error) => dispatch(setError(error)));
  };
};
