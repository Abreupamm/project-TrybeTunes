import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import ResultAlbuns from './ResultAlbuns';

class Search extends React.Component {
  state = {
    artistName: '',
    disabled: true,
    click: false,
    returnArtist: false,
    listAlbuns: [],
    artistAlbum: '',
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

  handleOnClick = async (event) => {
    const { name } = event.target;
    const { artistName } = this.state;
    this.setState({ click: true });
    const albuns = await searchAlbumsAPI(name);
    this.setState({ listAlbuns: albuns });
    this.setState({ click: false });
    this.setState({ returnArtist: true });
    this.setState({ artistAlbum: artistName });
    this.setState({ artistName: '' });
  }

  render() {
    const {
      disabled,
      artistName,
      click,
      returnArtist,
      artistAlbum,
      listAlbuns,
    } = this.state;
    if (click) {
      return <Loading />;
    }
    return (
      <div data-testid="page-search">
        <Header />
        <div className="container-search">
          <input
            value={ artistName }
            data-testid="search-artist-input"
            type="text"
            onChange={ this.handleOnChange }
          />
          <button
            name={ artistName }
            data-testid="search-artist-button"
            type="button"
            disabled={ disabled }
            onClick={ this.handleOnClick }
          >
            Pesquisar
          </button>
        </div>
        {
          returnArtist && <ResultAlbuns
            albuns={ listAlbuns }
            artist={ artistAlbum }
          />
        }
      </div>
    );
  }
}

export default Search;
