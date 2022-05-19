import React from 'react';
import { getUser } from '../services/userAPI';
import NavLinks from './NavLinks';

class Header extends React.Component {
  state = {
    userName: '',
    isUser: false,
  }

  componentDidMount() {
    this.handleRenderUser();
  }

  handleRenderUser = async () => {
    const response = await getUser();
    this.setState({ isUser: true });
    return this.setState({ userName: response.name });
  }

  render() {
    const { userName, isUser } = this.state;
    return (
      <header data-testid="header-component">
        <NavLinks />
        <p data-testid="header-user-name">
          { isUser ? userName : 'Carregando...' }
        </p>
      </header>
    );
  }
}

export default Header;
