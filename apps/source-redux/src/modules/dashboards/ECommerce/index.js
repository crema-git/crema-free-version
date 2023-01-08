import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
import {
  Application,
  Browser,
  MarketingCampaign,
  NewCustomers,
  Notifications,
  PopularProducts,
  RecentOrders,
  ReportCard,
  Revenue,
  SalesState,
  SaleStatics,
  SiteVisitors,
} from '@crema/modules/dashboards/ECommerce';
import AppLoader from '@crema/components/AppLoader';
import { onGetECommerceData } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const ECommerce = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetECommerceData());
  }, [dispatch]);

  const ecommerceData = useSelector(({ dashboard }) => dashboard.ecommerceData);

  return (
    <>
      {ecommerceData ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppGridContainer>
            {ecommerceData.salesState.map((state, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <SalesState state={state} />
              </Grid>
            ))}
            <Grid item xs={12} md={9}>
              <SaleStatics />
            </Grid>
            <Grid item xs={12} md={3}>
              <Application />
            </Grid>
            {ecommerceData.reportCards.map((report, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ReportCard data={report} />
              </Grid>
            ))}
            <Grid item xs={12} md={9}>
              <RecentOrders recentOrders={ecommerceData.recentOrders} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Revenue />
            </Grid>

            <Grid item xs={12} md={6}>
              <MarketingCampaign
                marketingCampaign={ecommerceData.marketingCampaign}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Notifications notifications={ecommerceData.notifications} />
            </Grid>

            <Grid item xs={12} md={6}>
              <NewCustomers newCustomers={ecommerceData.newCustomers} />
            </Grid>
            <Grid item xs={12} md={6}>
              <PopularProducts
                popularProducts={ecommerceData.popularProducts}
              />
            </Grid>

            <Grid item xs={12} md={9}>
              <SiteVisitors siteVisitorsData={ecommerceData.siteVisitors} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Browser browserData={ecommerceData.browser} />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      ) : (
        <AppLoader />
      )}
    </>
  );
};

export default ECommerce;
