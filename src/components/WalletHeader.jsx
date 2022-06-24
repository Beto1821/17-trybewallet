import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Header.css';

class Wallethead extends Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses.reduce((acc, expense) => {
      const { value, currency, exchangeRates } = expense;
      const { ask } = exchangeRates[currency];
      acc += (parseFloat(value) * ask);
      return acc;
    }, 0).toFixed(2);

    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          {total}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>

    );
  }
}

Wallethead.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallethead);
