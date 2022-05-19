import React from 'react';
import { Link } from 'react-router-dom';

class NavLinks extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
      </nav>
    );
  }
}

export default NavLinks;
