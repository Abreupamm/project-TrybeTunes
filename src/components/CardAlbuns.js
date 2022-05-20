import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardAlbuns extends React.Component {
  render() {
    const { album } = this.props;
    const { collectionId, artistName, collectionName, artworkUrl100 } = album;
    return (
      <div>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <img src={ artworkUrl100 } alt={ artistName } />
          <h4>{ collectionName }</h4>
          <h5>{ artistName }</h5>
        </Link>
      </div>
    );
  }
}

CardAlbuns.propType = {
  album: PropTypes.shape({
    collectionId: PropTypes.number.isRequired,
    artistName: PropTypes.string,
    collectionName: PropTypes.string,
    artworkUrl100: PropTypes.string,
  }),
};

export default CardAlbuns;
