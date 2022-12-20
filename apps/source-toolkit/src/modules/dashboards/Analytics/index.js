import React from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppInfoView from '@crema/components/AppInfoView';
import AppAnimate from '@crema/components/AppAnimate';
import { useGetDataApi } from '@crema/utility/APIHooks';
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

const Analytics = () => {
  const [{ apiData: analyticsData }] = useGetDataApi('/dashboard/analytics');

  return (
    <>
      {analyticsData ? (
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
              <OrderNTransaction
                transactionData={analyticsData.transactionData}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TrafficSource trafficData={analyticsData.trafficData} />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      ) : null}

      <AppInfoView />
    </>
  );
};

export default Analytics;
