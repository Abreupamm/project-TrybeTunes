import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  state = {
    favorite: false,
    checked: false,
  }

  componentDidMount = async () => {
    const { favoritesSongs, trackId } = this.props;
    const musicList = await favoritesSongs;
    const result = musicList.some((music) => music.trackId === trackId);
    if (result) {
      this.setState({ checked: true });
    }
  }

  handleOnClick = async () => {
    const { musicFavorite, UpdateSongList } = this.props;
    const { checked } = this.state;
    const validation = checked;
    this.setState({ checked: !validation });
    if (checked) {
      this.setState({ favorite: true });
      await removeSong(musicFavorite);
      this.setState({ favorite: false });
      UpdateSongList();
    } else {
      this.setState({ favorite: true });
      await addSong(musicFavorite);
      this.setState({ favorite: false });
    }
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
            id="favorita"
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
  musicFavorite: PropTypes.shape({
    trackId: PropTypes.number,
    trackName: PropTypes.string,
  }).isRequired,
  favoritesSongs: PropTypes.func.isRequired,
  UpdateSongList: PropTypes.func.isRequired,
};

export default MusicCard;
