import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    artist: {},
    musicsList: [],
  }

  artistAlbuns = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const musics = await getMusics(id);
    console.log(musics);
    this.setState({ musicsList: musics });
    return this.setState({ artist: musics[0] });
  }

  componentDidMount = () => {
    this.artistAlbuns();
  }

  render() {
    const { artist, musicsList } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="container-artist">
          <div className="container-preview-artist">
            <img src={ artist.artworkUrl100 }/>
            <span data-testid="artist-name">{ artist.artistName }</span>
            <br />
            <span data-testid="album-name">{ artist.collectionName }</span>
          </div>
          <div className="container-preview-musics">
            {
              musicsList.map((music, index) => {
                if (index > 0) {
                  return (<MusicCard
                    musicFavorite={ music }
                    trackId={ music.trackId }
                    trackName={ music.trackName }
                    previewUrl={ music.previewUrl }
                  />);
                }
                return null;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Album;
