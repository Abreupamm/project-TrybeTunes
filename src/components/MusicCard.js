import React from 'react';
import PropTypes from 'prop-types';
import Heart from 'react-heart';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  state = {
    active: false,
  }

  componentDidMount = async () => {
    const { favoritesSongs, trackId } = this.props;
    const musicList = await favoritesSongs;
    const result = musicList.some((music) => music.trackId === trackId);
    if (result) {
      this.setState({ active: true });
    }
  }

  handleOnClick = async () => {
    const { musicFavorite } = this.props;
    const { active } = this.state;
    const validation = active;
    this.setState({ active: !validation });
    if (active) {
      await removeSong(musicFavorite);
    } else {
      await addSong(musicFavorite);
    }
  }

  render() {
    const { trackName, previewUrl } = this.props;
    const { active } = this.state;
    return (
      <div className="container-music-card">
        <div className="music-name">
          <span>{ trackName }</span>
        </div>
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
        <div style={ { width: '2rem' } }>
          <Heart
            inactiveColor="aliceblue"
            activeColor="rgba(182, 114, 246, 0.855)"
            isActive={ active }
            onClick={ this.handleOnClick }
          />
        </div>
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
};

export default MusicCard;
