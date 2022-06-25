import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenseAction } from '../actions';

class WalletTable extends Component {
  render() {
    const { expenses, handleClickRemove } = this.props;
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            {expenses.map(({
              id, description, tag, method, value, exchangeRates, currency,
            }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{parseFloat(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    type="button"
                  >
                    EDITAR
                  </button>
                </td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => handleClickRemove(id) }
                  >
                    EXCLUIR
                  </button>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </section>

    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  handleClickRemove: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleClickRemove: (id) => dispatch(removeExpenseAction(id)),
});

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
