import React from 'react';
import Grid from '@mui/material/Grid';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import TotalBalance from './TotalBalance';
import Coins from './Coins';
import BuySell from './BuySell';
import TradingChart from './TradingChart';
import OrdersActivities from './OrdersActivities';
import TopStories from './TopStories';
import GainerLooser from './GainerLooser';
import ATCStatics from './ATCStatics';
import CardDetails from './CardDetails';
import QuickTransfer from './QuickTransfer';
import AppLoader from '@crema/components/AppLoader';

const Crypto = () => {
  const [{ apiData: cryptoData, loading }] = useGetDataApi('/dashboard/crypto');

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppGridContainer>
            <Grid item xs={12} md={5}>
              <TotalBalance totalBalanceData={cryptoData.totalBalanceData} />
            </Grid>

            <Grid item xs={12} md={7}>
              <Coins coinsData={cryptoData.coinsData} />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <TradingChart />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <BuySell buySell={cryptoData.buySell} />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <OrdersActivities
                ordersActivities={cryptoData.ordersActivities}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TopStories stories={cryptoData.stories} />
            </Grid>
            <Grid item xs={12} md={6}>
              <GainerLooser data={cryptoData.gainerLooser} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ATCStatics data={cryptoData.atcStatics} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardDetails cardDetails={cryptoData.cardDetails} />
            </Grid>
            <Grid item xs={12} md={6}>
              <QuickTransfer quickTransfer={cryptoData.quickTransfer} />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      )}
    </>
  );
};

export default Crypto;
