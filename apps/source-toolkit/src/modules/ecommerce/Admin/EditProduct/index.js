import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import AddEditProduct from '../AddEditProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../../toolkit/actions';

const ProductEditPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentProduct = useSelector(
    ({ ecommerce }) => ecommerce.currentProduct,
  );
  const loading = useSelector(({ common }) => common.loading);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return loading ? (
    <AppLoader />
  ) : (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AddEditProduct selectedProd={currentProduct} />
    </AppAnimate>
  );
};
export default ProductEditPage;
