import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses, upDateExpense } from '../actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletForm extends Component {
    state = {
      ...INITIAL_STATE,
    };

  handleClick = (event) => {
    event.preventDefault();
    const { addExpenseGlobalState, editMode,
      editExpenseAction, exchangeRates } = this.props;
    if (!editMode) {
      addExpenseGlobalState(this.state);
      this.setState(({ id }) => ({ ...INITIAL_STATE, id: id + 1 }));
    } else {
      const { idEdit: id } = this.props;
      console.log(id);
      editExpenseAction({ ...this.state, id, exchangeRates });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editMode } = this.props;
    return (
      <form onSubmit={ this.handleClick }>
        <label htmlFor="Value">
          Valor:
          <input
            id="Value"
            data-testid="value-input"
            placeholder="0,00"
            type="text"
            name="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            data-testid="description-input"
            placeholder="Descrição despesas"
            type="text"
            name="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {currencies.map((element, i) => (<option key={ i }>{element}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            data-testid="method-input"
            name="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            id="tag"
            data-testid="tag-input"
            name="tag"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button
          type="submit"
          id="despesa"
        >
          { editMode ? 'Editar Despesa' : 'Adicionar despesa' }
        </button>

      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenseGlobalState: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  idEdit: PropTypes.number.isRequired,
  editExpenseAction: PropTypes.func.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.objectOf),
};
WalletForm.defaultProps = {
  exchangeRates: {},
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  editMode: wallet.editMode,
  idEdit: wallet.idEdit,
  expenses: wallet.expenses,
  exchangeRates: wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseGlobalState: (expense) => dispatch(addExpenses(expense)),
  editExpenseAction: (newExpense) => dispatch(upDateExpense(newExpense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
