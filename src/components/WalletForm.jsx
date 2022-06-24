import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses } from '../actions';

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

  handleClick = () => {
    const { addExpenseGlobalState } = this.props;
    addExpenseGlobalState(this.state);
    this.setState(({ id }) => ({ ...INITIAL_STATE, id: id + 1 }));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
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
          type="button"
          id="despesa"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenseGlobalState: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseGlobalState: (expense) => dispatch(addExpenses(expense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
