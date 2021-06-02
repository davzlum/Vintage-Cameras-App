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
      <h2>Cameras</h2>
      <ul className="cameras">
        {products.map((product) => (
          <li className="cameras__item">
            <p>{product.cameraModel}</p>
            <img src={product.images[0]} alt={product.cameraModel} />
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
