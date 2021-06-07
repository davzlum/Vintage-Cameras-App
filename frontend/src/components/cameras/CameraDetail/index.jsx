/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { loadProduct } from '../../../redux/actions/actionCreators';
import { addToCart } from '../../../redux/actions/actionCreatorsCart';
import favoriteEmpty from '../../../assets/heart-regular.svg';
import favoriteSolid from '../../../assets/heart-solid.svg';
import { addToFavorites, deleteFromFavorites } from '../../../redux/actions/actionCreatorsFavorites';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cameraDetail.scss';

function CameraDetail({
  selectedProduct, dispatch, user, cartList, favorites,
}) {
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
        <button type="button" className="favorite-button" onClick={() => dispatch(favorites.find((favorite) => selectedProduct._id === favorite._id) ? deleteFromFavorites(selectedProduct, user, favorites) : addToFavorites(selectedProduct, user, favorites))}>
          <img src={favorites.find((favorite) => selectedProduct._id === favorite._id) ? favoriteSolid : favoriteEmpty} alt="favorite" />
        </button>
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
        <button
          type="button"
          disabled={cartList.find((cartProduct) => selectedProduct._id === cartProduct._id)}
          className="button cart"
          onClick={() => dispatch(addToCart(selectedProduct, user, cartList))}
        >
          <Link to="/cart">
            Add to cart
          </Link>
        </button>
        <button type="button" className="button info"><Link to="/cameras">Go back</Link></button>
      </div>
    </div>
  );
}

CameraDetail.propTypes = {
  selectedProduct: PropTypes.shape({
    _id: PropTypes.string,
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
  user: PropTypes.shape({}).isRequired,
  cartList: PropTypes.shape([]).isRequired,
  favorites: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({
  selectedProduct, user, cartList, favorites,
}) {
  return {
    selectedProduct,
    user,
    cartList,
    favorites,
  };
}

export default connect(mapStateToProps)(CameraDetail);
