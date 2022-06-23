// Coloque aqui suas actions
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const GET_ERROR = 'GET_ERROR';

export const setUserInfoAction = (email) => ({
  type: SAVE_USER_INFO,
  email,
});

export const setCurrenciesAction = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const getErrorAction = (error) => ({
  type: GET_ERROR,
  error,
});

export const fetchCurrenciesAction = () => async (dispatch) => {
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await (await fetch(URL)).json();
    delete response.USDT;
    dispatch(setCurrenciesAction(Object.key(response)));
  } catch (error) {
    dispatch(getErrorAction(error));
  }
};
