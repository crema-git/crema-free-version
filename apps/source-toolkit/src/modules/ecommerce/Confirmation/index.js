import React from 'react';
import {Box} from '@mui/material';
import AppAnimate from '@crema/components/AppAnimate';
import {useGetDataApi} from '@crema/utility/APIHooks';
import {AddressInfo, ItemsList, OrderPlaced} from '@crema/modules/ecommerce/Confirmation';
import {addresses} from "../../../../../../libs/mockapi/src/fakedb/ecommerce/ecommerceData";


const Confirmation = () => {
  const [{apiData: cartItems}] = useGetDataApi('/api/cart/get', []);
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <OrderPlaced cartItems={cartItems} />
        <AddressInfo address={addresses[0]} />
        <ItemsList cartItems={cartItems} />
      </Box>
    </AppAnimate>
  );
};

export default Confirmation;
