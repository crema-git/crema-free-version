import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
import {
  TicketsSupport,
  InfoWidget,
  ActiveVisitors,
  WelcomeCard,
  StateCard,
  SalesState,
  VisitorPageView,
  EarningByCountry,
  TopSelling,
  TrafficSource,
  OrderNTransaction,
  PageVisits,
} from '@crema/modules/dashboards/Analytics';
import { onGetAnalyticsData } from '@crema/redux-toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';
import AppLoader from '@crema/components/AppLoader';

const Analytics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAnalyticsData());
  }, [dispatch]);

  const { analyticsData } = useSelector(({ dashboard }) => dashboard);

  return analyticsData ? (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <WelcomeCard data={analyticsData.welcomeCard} />

          <AppGridContainer>
            <Grid item xs={12} sm={6}>
              <StateCard data={analyticsData.revenueCards[0]} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StateCard data={analyticsData.revenueCards[1]} />
            </Grid>
          </AppGridContainer>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SalesState
            salesState={analyticsData.salesState}
            chartData={analyticsData.salesChartData}
          />
        </Grid>
        <Grid item xs={12} md={8} xl={9}>
          <VisitorPageView data={analyticsData.visitorsPageView} />
        </Grid>
        <Grid item xs={12} md={4} xl={3}>
          <ActiveVisitors data={analyticsData.activeVisitors} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopSelling products={analyticsData.topSellingProduct} />
        </Grid>
        <Grid item xs={12} md={6}>
          <EarningByCountry earningData={analyticsData.earningData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TicketsSupport tickets={analyticsData.tickets} />

          <AppGridContainer>
            {analyticsData.infoWidgets.map((data, index) => (
              <Grid item xs={12} md={4} key={'grid-' + index}>
                <InfoWidget data={data} />
              </Grid>
            ))}
          </AppGridContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <PageVisits pageVisits={analyticsData.pageVisits} />
        </Grid>
        <Grid item xs={12} md={9}>
          <OrderNTransaction transactionData={analyticsData.transactionData} />
        </Grid>
        <Grid item xs={12} md={3}>
          <TrafficSource trafficData={analyticsData.trafficData} />
        </Grid>
      </AppGridContainer>
    </AppAnimate>
  ) : (
    <AppLoader />
  );
};

export default Analytics;
