// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  error: '',
  expenses: [],
  editMode: false,
  idEdit: 0,
  exchangeRates: {},
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
  case 'EDIT_EXPENSE':
    return {
      ...state,
      editMode: action.editMode,
      idEdit: action.id,
      exchangeRates: action.exchangeRates,
    };
  case 'UPDATE_EXPENSE':
    return { ...state,
      editMode: false,
      expenses: state.expenses.map((item) => {
        if (item.id === action.newExpense.id) {
          return action.newExpense;
        }
        return item;
      }) };
  default:
    return state;
  }
}

export default wallet;
