/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts } from '../../../redux/actions/actionCreators';
import favoriteEmpty from '../../../assets/heart-regular.svg';
import favoriteSolid from '../../../assets/heart-solid.svg';
import { addToFavorites, deleteFromFavorites } from '../../../redux/actions/actionCreatorsFavorites';

import('./index.scss');

function CamerasList({
  products, dispatch, user, favorites,
}) {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts('cameras', user));
  }, [favorites]);

  return (
    <>
      <h1>Cameras</h1>
      <ul className="cameras">
        {products.map((product) => (
          <li className="cameras__item">
            <div className={product.sold && 'sold-label'} />
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
            <button type="button" className="favorite-button" onClick={() => dispatch(favorites.find((favorite) => product._id === favorite._id) ? deleteFromFavorites(product, user, favorites) : addToFavorites(product, user, favorites))}>
              <img src={favorites.find((favorite) => product._id === favorite._id) ? favoriteSolid : favoriteEmpty} alt="favorite" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

CamerasList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    user: PropTypes.shape({
      favorites: PropTypes.shape([]),
    }),
  }).isRequired,
  favorites: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ products, user, favorites }) {
  return {
    products,
    user,
    favorites,
  };
}

export default connect(mapStateToProps)(CamerasList);
