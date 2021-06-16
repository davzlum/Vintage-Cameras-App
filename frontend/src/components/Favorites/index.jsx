/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import favoriteSolid from '../../assets/heart-solid.svg';
import toggleFavorite from '../../redux/actions/actionCreatorsFavorites';

function Favorites({
  dispatch, user, favorites,
}) {
  // eslint-disable-next-line no-debugger
  debugger;
  return (
    <main>
      <h1 className="section-title">Favorites</h1>
      <ul className="cameras">
        {favorites.map((product) => (
          <li className="cameras__item">
            <Link to={`/${product.section}/${product._id}`}>
              <div className="item-info">
                <span>{product.productModel}</span>
                <span>
                  {product.price}
                  €
                </span>
              </div>
              <div className="item-image">
                <img src={product.images[0]} alt={product.productModel} />
              </div>
            </Link>
            <button type="button" className="favorite-button" onClick={() => dispatch(toggleFavorite(product.isFavorite, product, user, 'favorites'))}>
              <img src={favoriteSolid} alt="favorite" />
            </button>
          </li>
        ))}
      </ul>
    </main>
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

function mapStateToProps({ user, favorites: { cameras, lenses, films } }) {
  return {
    user,
    favorites: [...cameras, ...lenses, ...films].map((product) => ({
      ...product,
      isFavorite: true,
    })),
  };
}

export default connect(mapStateToProps)(Favorites);
