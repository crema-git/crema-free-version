import React from 'react';
import {Grid} from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppInfoView from '@crema/components/AppInfoView';
import AppAnimate from '@crema/components/AppAnimate';
import {useGetDataApi} from '@crema/utility/APIHooks';
import {TotalRevenue, QuickStats, Statistics, MonthlyEarning, Deals, SocialMediaAdvertise, TodayTasks, GoalProgress, WebTraffic, Reviews, TicketSupport} from '@crema/modules/dashboards/CRM';

const CRM = () => {
  const [{apiData: crmData}] = useGetDataApi('/dashboard/crm');

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
      ) : null}

      <AppInfoView />
    </>
  );
};

export default CRM;
