import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Search</h1>
        <input
          data-testid="search-artist-input"
          type="text"
        />
        <button
          data-testid="search-aetist-button"
          type="button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
