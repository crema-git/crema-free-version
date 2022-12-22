import React from 'react';
import { Box } from '@mui/material';
import AppAnimate from '@crema/components/AppAnimate';
import {
  AddressInfo,
  ItemsList,
  OrderPlaced,
} from '@crema/modules/ecommerce/Confirmation';
import { addresses } from '@crema/fakedb/ecommerceData';
import { useSelector } from 'react-redux';

const Confirmation = () => {
  const cartItems = useSelector(({ ecommerce }) => ecommerce.cartItems);
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <Box>
        <OrderPlaced cartItems={cartItems} />
        <AddressInfo address={addresses[0]} />
        <ItemsList cartItems={cartItems} />
      </Box>
    </AppAnimate>
  );
};

export default Confirmation;
