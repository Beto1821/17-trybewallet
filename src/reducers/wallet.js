// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  error: '',
  expenses: [],
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
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case 'REM_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    };
  default:
    return state;
  }
}

export default wallet;
