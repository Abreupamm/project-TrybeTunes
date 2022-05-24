import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  state = {
    favorite: false,
    checked: false,
  }

  // componentDidMount = () => {
  //   const { favoritesSongs, trackId } = this.props;
  //   const result = favoritesSongs.some((music) => {
  //     return music.trackId === trackId;
  //   });
  //   if (result) {
  //    this.setState({ checked: true });
  //   }
  // }

  handleOnClick = async () => {
    const { musicFavorite } = this.props;
    const { checked } = this.state;
    const validation = checked;
    this.setState({ checked: !validation })
    this.setState({ favorite: true });
    await addSong(musicFavorite);
    this.setState({ favorite: false });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { favorite, checked } = this.state;
    return (
      <div className="container-music-card">
        <span>{ trackName }</span>
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label
          htmlFor="favorita"
        >
          {favorite ? 'Carregando...' : 'Favorita'}
          <input
            checked={ checked }
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            onClick={ this.handleOnClick }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  musicFavorite: PropTypes.objectOf(PropTypes.string).isRequired,
  favoritesSongs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MusicCard;
