// Coloque aqui suas actions
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const GET_ERROR = 'GET_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REM_EXPENSE = 'REM_EXPENSE';

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
    dispatch(setCurrenciesAction(Object.keys(response)
      .filter((res) => res !== 'USDT')));
  } catch (error) {
    dispatch(getErrorAction(error));
  }
};

export const addExpenses = (expenses) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await (await fetch(URL)).json();
  dispatch({
    type: ADD_EXPENSE,
    expenses: {
      ...expenses,
      exchangeRates: response,
    },
  });
};

export const removeExpenseAction = (id) => ({
  type: REM_EXPENSE,
  id,
});
