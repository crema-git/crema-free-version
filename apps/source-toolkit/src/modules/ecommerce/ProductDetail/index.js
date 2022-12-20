import React, { useEffect } from 'react';
import AppCard from '@crema/components/AppCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import AppAnimate from '@crema/components/AppAnimate';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AppInfoView from '@crema/components/AppInfoView';
import { useGetDataApi } from '@crema/utility/APIHooks';
import {
  Header,
  ProductImageSlide,
  ProductView,
  SimilarProduct,
} from '@crema/modules/ecommerce/ProductDetail';

const ProductDetail = () => {
  const { id } = useParams();
  const [{ apiData: currentProduct }, { setQueryParams }] =
    useGetDataApi('/api/ecommerce/get');

  useEffect(() => {
    setQueryParams({ id: id });
  }, [id]);

  return (
    <>
      {currentProduct ? (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppCard>
            <Header product={currentProduct} />
            <AppGridContainer>
              <ProductImageSlide product={currentProduct} />
              <ProductView product={currentProduct} />
            </AppGridContainer>
            <SimilarProduct />
          </AppCard>
        </AppAnimate>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  match: PropTypes.object,
};
