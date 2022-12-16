import React from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../services/userAPI';
import NavLinks from './NavLinks';

class Header extends React.Component {
  state = {
    userName: 'Carregando...',
  }

  componentDidMount() {
    this.handleRenderUser();
  }

  handleRenderUser = async () => {
    const response = await getUser();
    this.setState({ userName: response.name });
  }

  render() {
    const { userName } = this.state;
    const { isUser } = this.props;
    if (!isUser) {
      return '';
    }
    return (
      <header data-testid="header-component">
        <div className="title-header">
          <h1>Trybe</h1>
          <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/5885/5885170.png" />
          <h2>Tunes</h2>
        </div>
        <NavLinks />
        <div className="container-usuario">
          <img
            className="icone"
            src="https://cdn-icons-png.flaticon.com/512/2522/2522050.png"
            alt="icone de usuário"
          />
          { userName }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isUser: PropTypes.string.isRequired,
};

export default Header;
