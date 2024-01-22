import React from 'react';
import PropTypes from 'prop-types';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import PackageCard from './PackageCard';

const GitPackage = ({ pricing }) => {
  return (
    <AppGridContainer>
      {pricing.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <PackageCard pricing={data} />
        </Grid>
      ))}
    </AppGridContainer>
  );
};

export default GitPackage;

GitPackage.propTypes = {
  pricing: PropTypes.array,
};
