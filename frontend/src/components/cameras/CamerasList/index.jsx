import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts } from '../../../redux/actions/actionCreators';

import('./index.scss');

function CamerasList({ products, dispatch }) {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts('cameras'));
  }, []);

  return (
    <>
      <h1>Cameras</h1>
      <ul className="cameras">
        {products.map((product) => (
          <li className="cameras__item">
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
          </li>
        ))}
      </ul>
    </>
  );
}

CamerasList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    products: store.products,
  };
}

export default connect(mapStateToProps)(CamerasList);
