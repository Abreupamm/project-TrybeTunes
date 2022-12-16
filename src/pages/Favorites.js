import React from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

class Favorites extends React.Component {
  state = {
    loading: false,
    musicsList: [],
  }

  handleUpdateSongsList = async () => {
    this.setState({ loading: true });
    const result = await getFavoriteSongs();
    this.setState({ loading: false });
    this.setState({ musicsList: result });
  }

  componentDidMount = async () => {
    await this.handleUpdateSongsList();
  }

  render() {
    const { loading, musicsList } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="page-favorites">
        <Header isUser="true" />
        {
          musicsList.map((music) => (
            <MusicCard
              key={ music.trackId }
              musicFavorite={ music }
              trackId={ music.trackId }
              trackName={ music.trackName }
              previewUrl={ music.previewUrl }
              favoritesSongs={ musicsList }
              UpdateSongList={ this.handleUpdateSongsList }
            />
          ))
        }
      </div>
    );
  }
}

export default Favorites;
