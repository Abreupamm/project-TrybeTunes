import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  state = {
    userName: '',
    disabled: true,
    isLoggedIn: false,
  }

  isButtonDisabled = () => {
    const { userName } = this.state;
    if (userName.length > 2) {
      return this.setState({ disabled: false });
    }
  }

  handleOnChange = (event) => {
    const { value } = event.target;
    this.setState({ userName: value }, () => {
      this.isButtonDisabled();
    });
  }

  handleOnClick = async () => {
    const { userName } = this.state;
    const { history } = this.props;
    this.setState({ isLoggedIn: true });
    await createUser({ name: userName });
    this.setState({ isLoggedIn: false });
    history.push('/search');
  }

  render() {
    const { disabled, isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Loading />;
    }
    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        <form>
          <input
            data-testid="login-name-input"
            type="text"
            onChange={ this.handleOnChange }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ disabled }
            onClick={ this.handleOnClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
