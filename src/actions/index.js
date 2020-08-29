import axios from 'axios';

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

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('https://yaus-api.herokuapp.com/api/1.0/register/user', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
        alert('creado con exito');
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const loginUser = ({ username, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: 'https://yaus-api.herokuapp.com/api/auth/login/',
      method: 'post',
      auth: {
        username,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `username=${data.user.username}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `token=${data.user.token}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
        alert('creado con exito');
      })
      .catch((err) => dispatch(setError(err)));

  };
};
