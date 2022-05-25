import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  state = {
    artist: {},
    musicsList: [],
    loading: true,
    favoritesSongs: [],
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

  recoverFavoriteSongs = async () => {
    const result = await getFavoriteSongs();
    this.setState({ loading: false });
    this.setState({ favoritesSongs: result });
    return result;
  }

  componentDidMount = () => {
    this.artistAlbuns();
    const favorites = this.recoverFavoriteSongs();
    this.setState({ favoritesSongs: favorites });
  }

  render() {
    const { artist, musicsList, loading, favoritesSongs } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="page-album">
        <Header />
        <div className="container-artist">
          <div className="container-preview-artist">
            <img src={ artist.artworkUrl100 } alt={ artist.collectionName } />
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
                    favoritesSongs={ favoritesSongs }
                    UpdateSongList={ () => {} }
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
