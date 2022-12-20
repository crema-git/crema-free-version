import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicSortingGrid from './BasicSortingGrid';
import BasicSortingGridSource from '!raw-loader!./BasicSortingGrid';

import ComparatorSortingGrid from './ComparatorSortingGrid';
import ComparatorSortingGridSource from '!raw-loader!./ComparatorSortingGrid';

import OrderSortingGrid from './OrderSortingGrid';
import OrderSortingGridSource from '!raw-loader!./OrderSortingGrid';

import DisableSortingGrid from './DisableSortingGrid';
import DisableSortingGridSource from '!raw-loader!./DisableSortingGrid';

import ServerSortingGrid from './ServerSortingGrid';
import ServerSortingGridSource from '!raw-loader!./ServerSortingGrid';

import MultiSortingGrid from './MultiSortingGrid';
import MultiSortingGridSource from '!raw-loader!./MultiSortingGrid';

const Sorting = () => {
  return (
    <>
      <AppComponentHeader
        title="Sorting"
        description="Sorting allows ordering records in the data grid."
        refUrl="https://mui.com/components/data-grid/sorting/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="BasicSortingGrid"
            component={BasicSortingGrid}
            source={BasicSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ComparatorSortingGrid"
            component={ComparatorSortingGrid}
            source={ComparatorSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="OrderSortingGrid"
            component={OrderSortingGrid}
            source={OrderSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="DisableSortingGrid"
            component={DisableSortingGrid}
            source={DisableSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ServerSortingGrid"
            component={ServerSortingGrid}
            source={ServerSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="MultiSortingGrid"
            component={MultiSortingGrid}
            source={MultiSortingGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Sorting;
