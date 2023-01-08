import React from 'react';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import { blue, green, grey, indigo, red } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';
import AppAnimate from '@crema/components/AppAnimate';
import { useIntl } from 'react-intl';
import AppLoader from '@crema/components/AppLoader';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import {
  ComparisonCard,
  EarningInMonth,
  FloatingGraphs,
  MetricTitleLineGraphCard,
  Orders,
  ProfileViews,
  Sales,
  Share,
  SocialDataCard,
  SocialVisitors,
  Stats,
  StatsCard,
  StatsCardSecond,
  StatsCardWithGraph,
  Subscriptions,
  Visits,
  WorkViews,
  YourAccount,
} from '@crema/modules/dashboards/Metrics';

const Metrics = () => {
  const [{ apiData: metricsData, loading }] =
    useGetDataApi('/dashboard/metrics');
  const { messages } = useIntl();

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate>
          <>
            <Box
              component='h2'
              sx={{
                color: 'text.primary',
                mb: { xs: 4, sm: 4, xl: 6 },
                fontSize: 16,
                fontWeight: Fonts.BOLD,
              }}
            >
              <IntlMessages id='dashboard.metrics' />
            </Box>

            <AppGridContainer>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  text={messages['dashboard.ordersThisYear']}
                  value={metricsData.ordersThisYear}
                  bgColor={red[500]}
                  icon={'/assets/images/metricsIcons/order.svg'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  text={messages['dashboard.revenueThisYear']}
                  value={metricsData.revenueThisYear}
                  bgColor={blue[300]}
                  icon={'/assets/images/metricsIcons/revenue.svg'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  text={messages['dashboard.visitsThisYear']}
                  value={metricsData.visitsThisYear}
                  bgColor={indigo[400]}
                  icon={'/assets/images/metricsIcons/visits.svg'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  text={messages['dashboard.queriesThisYear']}
                  value={metricsData.queriesThisYear}
                  bgColor={green[500]}
                  icon={'/assets/images/metricsIcons/querries.svg'}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <StatsCardWithGraph
                  text={messages['dashboard.incomeLastYear']}
                  data={metricsData.incomeLastYear}
                  type='incomeGraph'
                  headingColor='text.primary'
                  valueColor='#FFA940'
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <StatsCardWithGraph
                  text={messages['dashboard.webTraffic']}
                  data={metricsData.websiteTrafficData}
                  bgColor='background.paper'
                  type='trafficGraph'
                  headingColor='text.primary'
                  valueColor={red[600]}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <StatsCardWithGraph
                  text={messages['dashboard.growthInRevenue']}
                  data={metricsData.revenueGrowthData}
                  bgColor='background.paper'
                  type='revenueGrowth'
                  headingColor='text.primary'
                  valueColor={blue[500]}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <ComparisonCard
                  text={messages['dashboard.incrementInUsers']}
                  data={metricsData.incrementActiveUsers}
                  bgColor='background.paper'
                  type='activeUsers'
                  headingColor='text.primary'
                  valueColor='#4299E1'
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <ComparisonCard
                  text={messages['dashboard.extraRevenue']}
                  data={metricsData.extraRevenue}
                  bgColor='background.paper'
                  type='extraRevenue'
                  headingColor='text.primary'
                  valueColor='#4C51BF'
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <ComparisonCard
                  text={messages['dashboard.trafficRaise']}
                  data={metricsData.trafficRaise}
                  bgColor='background.paper'
                  type='trafficRaise'
                  headingColor='text.primary'
                  valueColor={blue[500]}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <ComparisonCard
                  text={messages['dashboard.lessOrders']}
                  data={metricsData.lessOrders}
                  bgColor='background.paper'
                  type='lessOrders'
                  headingColor='text.primary'
                  valueColor={red[500]}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Sales data={metricsData.salesData} />
              </Grid>

              <Grid item xs={12} md={4}>
                <YourAccount data={metricsData.accountData} />
              </Grid>

              <Grid item xs={12} md={4}>
                <EarningInMonth data={metricsData.earningInMonth} />
              </Grid>

              <Grid item xs={12} md={7}>
                <Subscriptions data={metricsData.subscriptionData} />
              </Grid>

              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    mb: 8,
                  }}
                >
                  <MetricTitleLineGraphCard
                    data={metricsData.metricsLineGraphData}
                    title={messages['dashboard.rides']}
                    titleColor='rgb(73, 80, 87)'
                    valueColor={grey[500]}
                    differenceColor={red[500]}
                    bgColor='white'
                    graphColor='#4299E1'
                  />
                </Box>

                <Box>
                  <MetricTitleLineGraphCard
                    data={metricsData.metricsLineGraphData}
                    title={messages['dashboard.visits']}
                    titleColor='white'
                    valueColor={indigo[300]}
                    differenceColor='white'
                    bgColor={indigo[500]}
                    graphColor='#FFFFFF'
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StatsCardSecond
                  text={messages['dashboard.revenueThisYear']}
                  value={metricsData.revenueThisYear}
                  bgColor={blue[500]}
                  icon={'/assets/images/metricsIcons/revenue.svg'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StatsCardSecond
                  text={messages['dashboard.ordersThisYear']}
                  value={metricsData.ordersThisYear}
                  bgColor={red[500]}
                  icon={'/assets/images/metricsIcons/order.svg'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StatsCardSecond
                  text={messages['dashboard.visitsThisYear']}
                  value={metricsData.visitsThisYear}
                  bgColor={indigo[500]}
                  icon={'/assets/images/metricsIcons/visits.svg'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StatsCardSecond
                  text={messages['dashboard.queriesThisYear']}
                  value={metricsData.queriesThisYear}
                  bgColor={green[500]}
                  icon={'/assets/images/metricsIcons/querries.svg'}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <FloatingGraphs
                  title={messages['dashboard.sales']}
                  data={metricsData.metricsFloatingGraphData.salesData}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <FloatingGraphs
                  title={messages['dashboard.clients']}
                  data={metricsData.metricsFloatingGraphData.clientsData}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <FloatingGraphs
                  title={messages['dashboard.revenue']}
                  data={metricsData.metricsFloatingGraphData.revenueData}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <FloatingGraphs
                  title={messages['dashboard.newUser']}
                  data={metricsData.metricsFloatingGraphData.newUserData}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Visits data={metricsData.visitsData} />
              </Grid>

              <Grid item xs={12} md={6}>
                <Orders data={metricsData.ordersData} />
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <ProfileViews data={metricsData.profileViewsData} />
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <WorkViews data={metricsData.workViewsData} />
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <SocialDataCard data={metricsData.socialData} />
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Share data={metricsData.shareData} />
              </Grid>

              <Grid item xs={12} md={6}>
                <Stats data={metricsData.statsGraph} />
              </Grid>

              <Grid item xs={12} md={6}>
                <SocialVisitors data={metricsData.socialVisitorsData} />
              </Grid>
            </AppGridContainer>
          </>
        </AppAnimate>
      )}
    </>
  );
};

export default Metrics;
