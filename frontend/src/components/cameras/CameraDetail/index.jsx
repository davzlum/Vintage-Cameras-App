import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProduct } from '../../../redux/actions/actionCreators';

function CameraDetail({ selectedProduct, dispatch }) {
  const { cameraId } = useParams();
  useEffect(() => {
    dispatch(loadProduct(cameraId, 'cameras'));
  }, []);
  return (
    <div>
      <h1>{selectedProduct?.cameraModel}</h1>
    </div>
  );
}

CameraDetail.propTypes = {
  selectedProduct: PropTypes.shape({
    cameraModel: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ selectedProduct }) {
  return {
    selectedProduct,
  };
}

export default connect(mapStateToProps)(CameraDetail);
