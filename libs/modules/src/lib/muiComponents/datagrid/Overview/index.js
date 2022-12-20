import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import DataGridDemo from './DataGridDemo';
import DataGridDemoSource from '!raw-loader!./DataGridDemo';

import DataGridProDemo from './DataGridProDemo';
import DataGridProDemoSource from '!raw-loader!./DataGridProDemo';

const Overview = () => {
  return (
    <>
      <AppComponentHeader
        title="Overview"
        description="Data tables display information in a grid-like format of rows and columns. They organize information in a way that’s easy to scan so that users can look for patterns and insights. The data grid comes in 2 versions, both in MUI X:"
        refUrl="hhttps://mui.com/components/data-grid/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="DataGridDemo"
            component={DataGridDemo}
            source={DataGridDemoSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="DataGridProDemo"
            component={DataGridProDemo}
            source={DataGridProDemoSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Overview;
