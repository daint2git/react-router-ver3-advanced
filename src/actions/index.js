import * as Constants from 'Constants/ActionsType';

export const actionLogin = (username, password) => {
  return {
    type: Constants.LOGIN,
    username,
    password
  }
}