import React, { useEffect } from 'react';
import AppCard from '@crema/components/AppCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import AppAnimate from '@crema/components/AppAnimate';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AppInfoView from '@crema/components/AppInfoView';
import {
  Header,
  ProductView,
  SimilarProduct,
} from '@crema/modules/ecommerce/ProductDetail';
import AppLoader from '@crema/components/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../redux/actions';
import ProductImageSlide from './ProductImageSlide';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentProduct = useSelector(
    ({ ecommerce }) => ecommerce.currentProduct,
  );
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <>
      {currentProduct ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppCard>
            <Header product={currentProduct} />
            <AppGridContainer>
              <ProductImageSlide product={currentProduct} />
              <ProductView product={currentProduct} />
            </AppGridContainer>
            <SimilarProduct />
          </AppCard>
        </AppAnimate>
      ) : (
        <AppLoader />
      )}
      <AppInfoView />
    </>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  match: PropTypes.object,
};
