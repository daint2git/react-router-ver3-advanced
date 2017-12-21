import * as Constants from 'Constants/ActionsType';

var initialState = {
  username: '',
  password: ''
}

var auth = (state = initialState, action) => {
  let allowLogin = false;
  switch (action.type) {
    case Constants.LOG_IN:
      if (checkAuth(action.username, action.password)) {
        state = {
          username: action.username,
          password: action.password
        };
      } else {
        state = initialState;
      }
      return { ...state
      };
    case Constants.LOG_OUT:
      return { ...state
      };
    default:
      return { ...state
      };
  }
}

var checkAuth = (username, password) => {
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}

export default auth;