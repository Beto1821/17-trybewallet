// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  error: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'GET_ERROR':
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
}

export default wallet;
