import React, { useEffect } from 'react';
import AppCard from '@crema/components/AppCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import AppAnimate from '@crema/components/AppAnimate';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AppInfoView from '@crema/components/AppInfoView';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import {
  Header,
  ProductView,
  SimilarProduct,
} from '@crema/modules/ecommerce/ProductDetail';
import AppLoader from '@crema/components/AppLoader';
import { isEmptyObject } from '@crema/helpers';
import ProductImageSlide from './ProductImageSlide';

const ProductDetail = () => {
  const { id } = useParams();
  const [{ apiData: currentProduct, loading }, { setQueryParams }] =
    useGetDataApi('/api/ecommerce/get', {}, {}, false);

  useEffect(() => {
    setQueryParams({ id: id });
  }, [id]);

  return (
    <>
      {loading || isEmptyObject(currentProduct) ? (
        <AppLoader />
      ) : (
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
      )}
      <AppInfoView />
    </>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  match: PropTypes.object,
};
