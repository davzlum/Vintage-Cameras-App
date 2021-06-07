/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import favoriteSolid from '../../assets/heart-solid.svg';
import { deleteFromFavorites } from '../../redux/actions/actionCreatorsFavorites';

function Favorites({
  dispatch, user, favorites,
}) {
  return (
    <>
      <h1>Favorites</h1>
      <ul className="cameras">
        {favorites.map((product) => (
          <li className="cameras__item">
            <Link to={`/cameras/${product._id}`}>
              <div className="item-info">
                <span>{product.cameraModel}</span>
                <span>
                  {product.price}
                  €
                </span>
              </div>
              <div className="item-image">
                <img src={product.images[0]} alt={product.cameraModel} />
              </div>
            </Link>
            <button type="button" className="favorite-button" onClick={() => dispatch(deleteFromFavorites(product, user, favorites))}>
              <img src={favoriteSolid} alt="favorite" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

Favorites.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    user: PropTypes.shape({
      favorites: PropTypes.shape([]),
    }),
  }).isRequired,
  favorites: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ user, favorites }) {
  return {
    user,
    favorites,
  };
}

export default connect(mapStateToProps)(Favorites);
