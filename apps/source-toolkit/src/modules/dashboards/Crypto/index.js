import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
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
import { useDispatch, useSelector } from 'react-redux';
import { onGetCryptoData } from '../../../toolkit/actions';
import AppLoader from '@crema/components/AppLoader';

const Crypto = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetCryptoData());
  }, [dispatch]);

  const { cryptoData } = useSelector(({ dashboard }) => dashboard);
  return cryptoData ? (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
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
          <CryptoMarketActivity marketGraphData={cryptoData.marketGraphData} />
        </Grid>
      </AppGridContainer>
    </AppAnimate>
  ) : (
    <AppLoader />
  );
};

export default Crypto;
