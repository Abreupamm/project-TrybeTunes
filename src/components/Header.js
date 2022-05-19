import React from 'react';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  state = {
    userName: '',
  }

  render() {
    const { userName } = this.state;
    // const user = getUser();
    // this.setState({userName: user})
    return (
      <header data-testid="header-component">
        <p data-testid="user-name">
          {userName !== '' ? userName : "carregando..."}
        </p>
      </header>
    );
  }
}

export default Header;
