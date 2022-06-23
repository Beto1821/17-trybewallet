import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input
            id="Valor"
            data-testid="value-input"
            placeholder="Valor a ser gasto"
            type="text"
          />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input
            id="Descrição"
            data-testid="description-input"
            placeholder="Descrição despesas"
            type="text"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
          >
            {currencies.map((element, i) => (<option key={ i }>{element}</option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select id="metodo" data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria
          <select id="categoria" data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(WalletForm);
