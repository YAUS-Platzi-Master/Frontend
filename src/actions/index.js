import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

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

export const urlUser = () => {
  return (dispatch) => {
    axios({
      url: 'https://yaus-api.herokuapp.com/api/1.0/register/new_url',
      method: 'post',
      data: {
        long_url: 'http://www.hola.com/',
        custom_url: false,
      },
    })
      .then(({ data }) => {
        console.log(JSON.stringify(response.data));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('https://yaus-andrescendales-pat-x75wee.herokuapp.com/api/1.0/register/user', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
        alert('creado con exito');
      })
      .catch((error) => dispatch(setError(error)));
  };
};

// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       // Does this cookie string begin with the name we want?
//       if (cookie.substring(0, name.length + 1) === (`${name}=`)) {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }
// const csrftoken = getCookie('csrftoken');

export const loginUser = ({ username, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'X-CSRFTOKEN=i9Ob161wumm2tzQPQrlnosZu8vYsSk80j0ZbCnOAkk9J2pEwvIWx4AzCJzHSMDH8',
      },
      url: 'https://yaus-andrescendales-pat-x75wee.herokuapp.com/api/auth/login/',
      method: 'post',
      data: {
        username,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `password=${data.user.password}`;
        document.cookie = `name=${data.user.username}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};
