import React from 'react';
import PropTypes from 'prop-types';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import PackageCard from './PackageCard';

const PackageOne = ({ billingFormat, pricing }) => {
  return (
    <AppGridContainer>
      {pricing.map((data, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <PackageCard billingFormat={billingFormat} pricing={data} />
        </Grid>
      ))}
    </AppGridContainer>
  );
};

export default PackageOne;

PackageOne.propTypes = {
  billingFormat: PropTypes.string,
  pricing: PropTypes.array,
};
