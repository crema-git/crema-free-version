import React from 'react';
import { Box, Grid } from '@mui/material';
import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Fonts } from '@crema/constants/AppEnums';

import AppAnimate from '@crema/components/AppAnimate';
import AppGridContainer from '@crema/components/AppGridContainer';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import {
  DeliveryAddress,
  OrderSummary,
  PaymentInfo,
} from '@crema/modules/ecommerce/Checkout';
import AppLoader from '@crema/components/AppLoader';

const Checkout = () => {
  const [{ apiData: cartItems, loading }] = useGetDataApi('/api/cart/get', []);

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <Box>
            <Box
              sx={{
                component: 'h2',
                color: 'text.primary',
                fontWeight: Fonts.BOLD,
                mb: 6,
                fontSize: 16,
              }}
            >
              <IntlMessages id='sidebar.ecommerce.checkout' />
            </Box>
            <AppGridContainer>
              <Grid item xs={12} md={8}>
                <AppCard
                  title={
                    <Box sx={{ fontSize: 16, fontWeight: Fonts.BOLD }}>
                      Delivery Address
                    </Box>
                  }
                >
                  <DeliveryAddress />
                </AppCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <OrderSummary cartItems={cartItems} />
                <PaymentInfo />
              </Grid>
            </AppGridContainer>
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Checkout;
