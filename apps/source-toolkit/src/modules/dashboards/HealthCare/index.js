import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
import {
  AppointmentCard,
  // CancelVisits,
  Activities,
  DrCard,
  HealthStatics,
  HeartRate,
  HospitalActivity,
  HospitalStatics,
  InfoWidget,
  // NewPatients,
  Notifications,
  ProfileCard,
  RecentPatients,
  TopDoctors,
  UpcomingAppointments,
  YourActivity,
} from '@crema/modules/dashboards/HealthCare';
import { useDispatch, useSelector } from 'react-redux';
import { onGetHCData } from '../../../toolkit/actions';
import AppLoader from '@crema/components/AppLoader';

const HealthCare = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetHCData());
  }, [dispatch]);

  const { healthCare } = useSelector(({ dashboard }) => dashboard);

  return healthCare ? (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppGridContainer>
        {healthCare.salesState.map((data, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <DrCard data={data} />
          </Grid>
        ))}

        <Grid item xs={12} sm={12} md={6}>
          <HospitalActivity data={healthCare.hospitalActivity} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppGridContainer>
            {healthCare.appointmentCards.map((data, index) => (
              <Grid item xs={12} key={index}>
                <AppointmentCard data={data} />
              </Grid>
            ))}
          </AppGridContainer>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <TopDoctors data={healthCare.topDoctors} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <UpcomingAppointments data={healthCare.upcomingAppointment} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Notifications data={healthCare.notifications} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HeartRate data={healthCare.heartCard} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <YourActivity data={healthCare.yourActivity} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HeartRate data={healthCare.temperatureCard} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppGridContainer>
            {healthCare.doses.map((data, index) => (
              <Grid item xs={12} key={index}>
                <HospitalStatics data={data} />
              </Grid>
            ))}
          </AppGridContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <HealthStatics data={healthCare.heathStatics} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Activities activities={healthCare.activities} />
        </Grid>

        {healthCare.hospitalStatics.map((data, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <HospitalStatics data={data} />
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={8} lg={7} xl={8}>
          <RecentPatients recentPatients={healthCare.recentPatients} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={5} xl={4}>
          <AppGridContainer>
            {healthCare.bloodCard.map((data, index) => (
              <Grid item xs={12} sm={6} key={'grid-' + index}>
                <InfoWidget data={data} />
              </Grid>
            ))}
          </AppGridContainer>
        </Grid>
      </AppGridContainer>
    </AppAnimate>
  ) : (
    <AppLoader />
  );
};

export default HealthCare;
