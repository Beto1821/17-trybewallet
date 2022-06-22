import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserInfoAction } from '../actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  onSubmit = () => {
    const { history, dispatchUserInfo } = this.props;
    const { email } = this.state;
    dispatchUserInfo(email);
    history.push('/carteira');
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  emailValidation = () => {
    const { email } = this.state;
    const regex = /\w+@[a-z]+.com/g;
    return regex.test(String(email).toLowerCase());
  }

  render() {
    const minPasswordLength = 6;
    const { password } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="text"
              data-testid="password-input"
              name="password"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ !this.emailValidation() || password.length < minPasswordLength }
            onClick={ this.onSubmit }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserInfo: (email) => dispatch(setUserInfoAction(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchUserInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
