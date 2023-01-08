import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
import {
  Deals,
  GoalProgress,
  MonthlyEarning,
  QuickStats,
  Reviews,
  SocialMediaAdvertise,
  Statistics,
  TicketSupport,
  TodayTasks,
  TotalRevenue,
  WebTraffic,
} from '@crema/modules/dashboards/CRM';
import AppLoader from '@crema/components/AppLoader';
import { onGetCrmData } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const CRM = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetCrmData());
  }, [dispatch]);

  const crmData = useSelector(({ dashboard }) => dashboard.crmData);

  return (
    <>
      {crmData ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppGridContainer>
            <Grid item xs={12} md={5}>
              <TotalRevenue revenueData={crmData.revenueData} />
            </Grid>
            <Grid item xs={12} md={7}>
              <QuickStats quickStatsData={crmData.quickStatsData} />
            </Grid>

            <Grid item xs={12} md={8}>
              <Statistics
                clientsData={crmData.statisticsGraph.clientsData}
                incomeData={crmData.statisticsGraph.incomeData}
                projectData={crmData.statisticsGraph.projectData}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <MonthlyEarning earningGraphData={crmData.earningGraphData} />
            </Grid>

            <Grid item xs={12} md={4}>
              <SocialMediaAdvertise socialMediaData={crmData.socialMediaData} />
            </Grid>

            <Grid item xs={12} md={8}>
              <TodayTasks todayTaskData={crmData.todayTaskData} />
            </Grid>

            <Grid item xs={12} md={8}>
              <Deals dealsTableData={crmData.dealsTableData} />
            </Grid>

            <Grid item xs={12} md={4}>
              <GoalProgress progressGraphData={crmData.progressGraphData} />
            </Grid>

            <Grid item xs={12} md={5}>
              <WebTraffic websiteTrafficData={crmData.websiteTrafficData} />
              <Reviews reviewGraphData={crmData.reviewGraphData} />
            </Grid>

            <Grid item xs={12} md={7}>
              <TicketSupport ticketSupportData={crmData.ticketSupportData} />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      ) : (
        <AppLoader />
      )}
    </>
  );
};

export default CRM;
