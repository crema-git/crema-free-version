import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicPaginationGrid from './BasicPaginationGrid';
import BasicPaginationGridSource from '!raw-loader!./BasicPaginationGrid';

import SizePaginationGrid from './SizePaginationGrid';
import SizePaginationGridSource from '!raw-loader!./SizePaginationGrid';

import ControlledPaginationGrid from './ControlledPaginationGrid';
import ControlledPaginationGridSource from './ControlledPaginationGrid';

import AutoPaginationGrid from './AutoPaginationGrid';
import AutoPaginationGridSource from './AutoPaginationGrid';

import ServerPaginationGrid from './ServerPaginationGrid';
import ServerPaginationGridSource from './ServerPaginationGrid';

import CursorPaginationGrid from './CursorPaginationGrid';
import CursorPaginationGridSource from './CursorPaginationGrid';

import BasisPaginationGrid from './BasisPaginationGrid';
import BasisPaginationGridSource from './BasisPaginationGrid';

import ApiRefPaginationGrid from './ApiRefPaginationGrid';
import ApiRefPaginationGridSource from './ApiRefPaginationGrid';

const Pagination = () => {
  return (
    <>
      <AppComponentHeader
        title="Pagination"
        description="Through pagination, a segment of data can be viewed from the assigned data source."
        refUrl="https://mui.com/components/data-grid/pagination/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="BasicPaginationGrid"
            component={BasicPaginationGrid}
            source={BasicPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="SizePaginationGrid"
            component={SizePaginationGrid}
            source={SizePaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ControlledPaginationGrid"
            component={ControlledPaginationGrid}
            source={ControlledPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="AutoPaginationGrid"
            component={AutoPaginationGrid}
            source={AutoPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ServerPaginationGrid"
            component={ServerPaginationGrid}
            source={ServerPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="CursorPaginationGrid"
            component={CursorPaginationGrid}
            source={CursorPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="BasisPaginationGrid"
            component={BasisPaginationGrid}
            source={BasisPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ApiRefPaginationGrid"
            component={ApiRefPaginationGrid}
            source={ApiRefPaginationGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Pagination;
