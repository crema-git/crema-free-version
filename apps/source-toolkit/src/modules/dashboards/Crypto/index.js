import React from 'react';
import Grid from '@mui/material/Grid';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppInfoView from '@crema/components/AppInfoView';
import AppAnimate from '@crema/components/AppAnimate';
import { useGetDataApi } from '@crema/utility/APIHooks';
import {
  Bitcoin,
  BtcVolumeCurrency,
  BuySell,
  Coins,
  CryptoMarketActivity,
  LatestNews,
  PopularCoins,
  TotalBalance,
} from '@crema/modules/dashboards/Crypto';

const Crypto = () => {
  const [{ apiData: cryptoData }] = useGetDataApi('/dashboard/crypto');

  return (
    <>
      {cryptoData ? (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppGridContainer>
            <Grid item xs={12} md={5}>
              <TotalBalance totalBalanceData={cryptoData.totalBalanceData} />
            </Grid>

            <Grid item xs={12} md={7}>
              <Coins coinsData={cryptoData.coinsData} />
            </Grid>

            <Grid item xs={12} md={8}>
              <Bitcoin coinGraphData={cryptoData.coinGraphData} />
            </Grid>

            <Grid item xs={12} md={4}>
              <BuySell buySell={cryptoData.buySell} />
            </Grid>

            <Grid item xs={12} md={4}>
              <BtcVolumeCurrency data={cryptoData.btcChartData} />
            </Grid>

            <Grid item xs={12} md={8}>
              <PopularCoins popularCoins={cryptoData.popularCoins} />
            </Grid>

            <Grid item xs={12} md={6}>
              <LatestNews newsData={cryptoData.newsData} />
            </Grid>

            <Grid item xs={12} md={6}>
              <CryptoMarketActivity
                marketGraphData={cryptoData.marketGraphData}
              />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      ) : null}

      <AppInfoView />
    </>
  );
};

export default Crypto;
