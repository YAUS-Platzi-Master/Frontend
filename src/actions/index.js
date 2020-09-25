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
      // TODO:
      // The URL should be a 'const' to avoid changes in multiples lines
      url: 'https://yaus-api.herokuapp.com/api/auth/login/',
      method: 'post',
      data: {
        username,
        password,
      },
    })
      .then(({ data }) => {
        // TODO:
        // Only the token should be saved in a cookie the missing data about the user could be saved in sessionStorage or LocalStorage.
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
    // TODO:
    // The URL should be a 'const' to avoid changes in multiples lines
    axios.post('https://yaus-api.herokuapp.com/api/1.0/register/user', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        // TODO:
        // When using this way to redirect, the app is reloaded, is bad practice in SPA you could use the redirect with `history.push("/somePath")` from react-router.
        // https://dev.to/projectescape/programmatic-navigation-in-react-3p1l
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

// export const createUrl = ({ long_url, custom_url, short_url_custom }) => {
//   return (dispatch) => {
//     axios({
//       url: 'https://yaus-api.herokuapp.com/api/1.0/register/new_url',
//       method: 'post',
//       data: {
//         long_url,
//         custom_url,
//         short_url_custom,
//       },
//     })
//       .then(({ data }) => {
//         return data.register_set.short_url;
//       })
//       .catch((error) => dispatch(setError(error)));
//   };
// };
export const useCreateUrl = ({ long_url, custom_url, short_url_custom }) => {
  const setError = (payload) => ({
    type: 'SET_ERROR',
    payload,
  });

  const createUrl = async (dispatch) => {
    const result = await axios({
      // TODO:
    // The URL should be a 'const' to avoid changes in multiples lines
      url: 'https://yaus-api.herokuapp.com/api/1.0/register/new_url',
      method: 'post',
      data: {
        long_url,
        custom_url,
        short_url_custom,
      },
    })
      .then(({ data }) => {
        return data.register_set.short_url;
      })
      .catch((error) => (setError(error)));

    return result;
  };

  return {
    createUrl,
  };
};
