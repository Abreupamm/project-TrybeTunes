import React from 'react';
import PropTypes from 'prop-types';
import CardAlbuns from '../components/CardAlbuns';

class ResultAlbuns extends React.Component {
  render() {
    const { artist, albuns } = this.props;
    if (!albuns.length) {
      return <h1>Nenhum álbum foi encontrado</h1>;
    }
    return (
      <div>
        <h3>
          Resultado de álbuns de:
          {artist}
        </h3>
        {
          albuns.map((card) => (
            <CardAlbuns
              key={ card.collectionId }
              album={ card }
            />
          ))
        }
      </div>
    );
  }
}

ResultAlbuns.propTypes = {
  artist: PropTypes.string.isRequired,
  albuns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultAlbuns;
