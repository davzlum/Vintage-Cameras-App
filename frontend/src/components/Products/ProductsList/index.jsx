/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts } from '../../../redux/actions/actionCreators';
import favoriteEmpty from '../../../assets/heart-regular.svg';
import favoriteSolid from '../../../assets/heart-solid.svg';
import toggleFavorite from '../../../redux/actions/actionCreatorsFavorites';

import('./index.scss');

function CamerasList({
  products, dispatch, user,
}) {
  const { section } = useParams();

  useEffect(() => {
    dispatch(loadProducts(section, user));
  }, [section]);
  return (
    <>
      <h1>{section}</h1>
      <ul className="cameras">
        {products.map((product) => (
          <li className="cameras__item">
            <div className={product.sold && 'sold-label'} />
            <Link to={`/${section}/${product._id}`}>
              <div className="item-info">
                <span>{product.productModel}</span>
                <span>{product.isFavorite ? 'true' : 'false'}</span>
                <span>
                  {product.price}
                  €
                </span>
              </div>
              <div className="item-image">
                <img src={product.images[0]} alt={product.productModel} />
              </div>
            </Link>
            <button
              type="button"
              className="favorite-button"
              onClick={() => {
                dispatch(toggleFavorite(product.isFavorite, product, user, 'favorites'));
              }}
            >
              <img
                src={product.isFavorite
                  ? favoriteSolid : favoriteEmpty}
                alt="favorite"
              />
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
  favorites: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
};

function mapStateToProps({ products, user, favorites }) {
  return {
    products: products.map((product) => ({
      ...product,
      isFavorite: favorites[product.section]?.some((fav) => fav._id === product._id),
    })),
    user,
  };
}

export default connect(mapStateToProps)(CamerasList);
