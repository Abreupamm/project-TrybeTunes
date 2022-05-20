import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    artistName: '',
    disabled: true,
  }

  isButtonDisabld = () => {
    const { artistName } = this.state;
    if (artistName.length > 1) {
      return this.setState({ disabled: false });
    }
    return this.setState({ disabled: true });
  }

  handleOnChange = (event) => {
    const { value } = event.target;
    this.setState({ artistName: value }, () => {
      this.isButtonDisabld();
    });
  }

  render() {
    const { disabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Search</h1>
        <input
          data-testid="search-artist-input"
          type="text"
          onChange={ this.handleOnChange }
        />
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ disabled }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
