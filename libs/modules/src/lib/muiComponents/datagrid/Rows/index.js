import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import RowsGrid from './RowsGrid';
import RowsGridSource from '!raw-loader!./RowsGrid';

import InfiniteLoadingGrid from './InfiniteLoadingGrid';
import InfiniteLoadingGridSource from '!raw-loader!./InfiniteLoadingGrid';

// import ApiRefRowsGrid from './ApiRefRowsGrid';
// import ApiRefRowsGridSource from '!raw-loader!./ApiRefRowsGrid';

import ThrottledRowsGrid from './ThrottledRowsGrid';
import ThrottledRowsGridSource from '!raw-loader!./ThrottledRowsGrid';

import DenseHeightGrid from './DenseHeightGrid';
import DenseHeightGridSource from '!raw-loader!./DenseHeightGrid';

const Rows = () => {
  return (
    <>
      <AppComponentHeader
        title="Rows"
        description='The portal component renders its children into a new "subtree" outside of current DOM hierarchy.'
        refUrl="https://mui.com/components/portal/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="InfiniteLoadingGrid"
            component={InfiniteLoadingGrid}
            source={InfiniteLoadingGridSource}
            noScrollbar
          />
        </Grid>
        {/*<Grid item xs={12}>*/}
        {/*  <AppComponentCard*/}
        {/*    title="ApiRefRowsGrid"*/}
        {/*    component={ApiRefRowsGrid}*/}
        {/*    source={ApiRefRowsGridSource}*/}
        {/*    noScrollbar*/}
        {/*  />*/}
        {/*</Grid>*/}
        <Grid item xs={12}>
          <AppComponentCard
            title="ThrottledRowsGrid"
            component={ThrottledRowsGrid}
            source={ThrottledRowsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="DenseHeightGrid"
            component={DenseHeightGrid}
            source={DenseHeightGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="RowsGrid"
            component={RowsGrid}
            source={RowsGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Rows;
