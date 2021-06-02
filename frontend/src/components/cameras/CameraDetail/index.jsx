/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Slider from 'react-slick';
import { loadProduct } from '../../../redux/actions/actionCreators';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cameraDetail.scss';

function CameraDetail({ selectedProduct, dispatch }) {
  const { cameraId } = useParams();
  useEffect(() => {
    dispatch(loadProduct(cameraId, 'cameras'));
  }, []);
  const renderSlides = () => selectedProduct?.images?.map((img) => <div className="img-container"><img src={img} alt="images" /></div>);

  return (
    <div>
      <Slider dots>{renderSlides()}</Slider>
      <h1>{selectedProduct?.cameraModel}</h1>
    </div>
  );
}

CameraDetail.propTypes = {
  selectedProduct: PropTypes.shape({
    cameraModel: PropTypes.string,
    images: PropTypes.shape([]).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ selectedProduct }) {
  return {
    selectedProduct,
  };
}

export default connect(mapStateToProps)(CameraDetail);
