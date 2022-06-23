import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Header.css';

class Wallethead extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>

    );
  }
}

Wallethead.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallethead);
