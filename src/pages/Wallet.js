import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrenciesAction } from '../actions';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <div>
        <WalletHeader />
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
});

export default connect(null, mapDispatchToProps)(Wallet);
