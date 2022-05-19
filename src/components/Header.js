import React from 'react';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  state = {
    userName: '',
    isUser: false,
  }
  handleRenderUser = async () => {
    const response = await getUser(); 
    this.setState({ isUser: true })
    return this.setState({userName: response.name})        
  }
  
  componentDidMount() {
   this.handleRenderUser()
  }

  render() {
    const { userName, isUser } = this.state;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">
          {isUser ? userName : "Carregando..."}
        </p>
      </header>
    );
  }
}

export default Header;
