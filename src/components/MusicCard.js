import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  state = {
    favorite: false,
  }
  handleOnClick = async () => {
    const { musicFavorite } = this.props;
    this.setState({ favorite: true });
    const addMusic = await addSong(musicFavorite);
    this.setState({ favorite: false });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { favorite } = this.state;
    return (
      <div>
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
          { favorite ? 'Carregando...' : 'Favorita' }
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            onClick={this.handleOnClick}
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
  musicFavorite: PropTypes.object.isRequired,
};

export default MusicCard;
