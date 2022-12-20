import React from 'react';
import ContactUs from './ContactUs';
import PackageItem from './PackageItem';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import AppCard from '@crema/components/AppCard';
import AppGridContainer from '@crema/components/AppGridContainer';

const PackageExtra = ({ pricing }) => {
  return (
    <AppCard title="Pricing Package Style 2" sxStyle={{ alignItems: 'center' }}>
      <AppGridContainer
        spacing={0}
        sx={{
          maxWidth: 1000,
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12} md={4}>
          <ContactUs contactList={pricing.contactList} />
        </Grid>
        <Grid item xs={12} md={8}>
          <AppGridContainer spacing={0}>
            {pricing.package.map((pricing, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <PackageItem pricing={pricing} />
              </Grid>
            ))}
          </AppGridContainer>
        </Grid>
      </AppGridContainer>
    </AppCard>
  );
};

export default PackageExtra;

PackageExtra.propTypes = {
  pricing: PropTypes.object,
};
