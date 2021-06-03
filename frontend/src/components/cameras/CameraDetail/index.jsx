/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
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
      <h1>Camera detail</h1>
      <div className="camera-detail">
        <Slider dots>{renderSlides()}</Slider>
        <div className="model-price">
          <h2>{selectedProduct?.cameraModel}</h2>
          <h2>
            {selectedProduct?.price}
            €
          </h2>
        </div>
        <div className="arsenal-year">
          <span>
            {selectedProduct?.arsenalFactory}
            {' '}
          </span>
          <span>
            (
            {selectedProduct?.year}
            )
          </span>
        </div>
        <div className="information-container">
          <div className="information-container__history-title">History</div>
          <div className="information-container__history-info">{selectedProduct?.history}</div>
          <div className="information-container__specs-title">Specifications</div>
          <div className="information-container__specs-info">
            <p>
              Lens:
              {' '}
              {selectedProduct?.specifications?.lens}
            </p>
            <p>
              Mount:
              {' '}
              {selectedProduct?.specifications?.mount}
            </p>
            <p>
              Focus:
              {' '}
              {selectedProduct?.specifications?.focus}
            </p>
            <p>
              Aperture:
              {' '}
              {selectedProduct?.specifications?.aperture}
            </p>
            <p>
              Speed:
              {' '}
              {selectedProduct?.specifications?.speed}
            </p>
            <p>
              Weight:
              {' '}
              {selectedProduct?.specifications?.weight}
            </p>
            <p>
              Film:
              {' '}
              {selectedProduct?.specifications?.film}
            </p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="button cart">Add to cart</button>
        <button type="button" className="button info"><Link to="/cameras">Go back</Link></button>
      </div>
    </div>
  );
}

CameraDetail.propTypes = {
  selectedProduct: PropTypes.shape({
    cameraModel: PropTypes.string,
    images: PropTypes.shape([]).isRequired,
    history: PropTypes.string,
    price: PropTypes.number,
    arsenalFactory: PropTypes.string,
    year: PropTypes.string,
    specifications: PropTypes.shape({
      lens: PropTypes.string,
      mount: PropTypes.string,
      focus: PropTypes.string,
      aperture: PropTypes.string,
      speed: PropTypes.string,
      weight: PropTypes.string,
      film: PropTypes.string,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ selectedProduct }) {
  return {
    selectedProduct,
  };
}

export default connect(mapStateToProps)(CameraDetail);
