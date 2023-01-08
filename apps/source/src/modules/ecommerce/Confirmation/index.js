import React from 'react';
import { Box } from '@mui/material';
import AppAnimate from '@crema/components/AppAnimate';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import {
  AddressInfo,
  ItemsList,
  OrderPlaced,
} from '@crema/modules/ecommerce/Confirmation';
import { addresses } from '@crema/fakedb/ecommerceData';
import AppLoader from '@crema/components/AppLoader';

const Confirmation = () => {
  const [{ apiData: cartItems, loading }] = useGetDataApi('/api/cart/get', []);
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <Box>
            <OrderPlaced cartItems={cartItems} />
            <AddressInfo address={addresses[0]} />
            <ItemsList cartItems={cartItems} />
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Confirmation;
