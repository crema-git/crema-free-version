import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicFilteringGrid from './BasicFilteringGrid';
import BasicFilteringGridSource from '!raw-loader!./BasicFilteringGrid';

import FilterOperators from './FilterOperators';
import FilterOperatorsSource from '!raw-loader!./FilterOperators';

import DisableFilteringGrid from './DisableFilteringGrid';
import DisableFilteringGridSource from '!raw-loader!./DisableFilteringGrid';

import CustomRatingOperator from './CustomRatingOperator';
import CustomRatingOperatorSource from '!raw-loader!./CustomRatingOperator';

import ServerFilterGrid from './ServerFilterGrid';
import ServerFilterGridSource from '!raw-loader!./ServerFilterGrid';

import MultiFilteringGrid from './MultiFilteringGrid';
import MultiFilteringGridSource from '!raw-loader!./MultiFilteringGrid';

import MultiFilteringWithOrGrid from './MultiFilteringWithOrGrid';
import MultiFilteringWithOrGridSource from '!raw-loader!./MultiFilteringWithOrGrid';

import QuickFilteringGrid from './QuickFilteringGrid';
import QuickFilteringGridSource from '!raw-loader!./QuickFilteringGrid';

const Filtering = () => {
  return (
    <>
      <AppComponentHeader
        title='Filtering'
        description='Filtering helps to view a subset of the records based on a criteria.'
        refUrl='https://mui.com/components/data-grid/filtering/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicFilteringGrid'
            component={BasicFilteringGrid}
            source={BasicFilteringGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='FilterOperators'
            component={FilterOperators}
            source={FilterOperatorsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DisableFilteringGrid'
            component={DisableFilteringGrid}
            source={DisableFilteringGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CustomRatingOperator'
            component={CustomRatingOperator}
            source={CustomRatingOperatorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ServerFilterGrid'
            component={ServerFilterGrid}
            source={ServerFilterGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='MultiFilteringGrid'
            component={MultiFilteringGrid}
            source={MultiFilteringGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='MultiFilteringWithOrGrid'
            component={MultiFilteringWithOrGrid}
            source={MultiFilteringWithOrGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='QuickFilteringGrid'
            component={QuickFilteringGrid}
            source={QuickFilteringGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Filtering;
