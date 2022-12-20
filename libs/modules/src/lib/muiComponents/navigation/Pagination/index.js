import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicPagination from './BasicPagination';
import BasicPaginationSource from '!raw-loader!./BasicPagination';

import PaginationOutlined from './PaginationOutlined';
import PaginationOutlinedSource from '!raw-loader!./PaginationOutlined';

import PaginationRounded from './PaginationRounded';
import PaginationRoundedSource from '!raw-loader!./PaginationRounded';

import PaginationSize from './PaginationSize';
import PaginationSizeSource from '!raw-loader!./PaginationSize';

import PaginationButtons from './PaginationButtons';
import PaginationButtonsSource from '!raw-loader!./PaginationButtons';

import CustomIcons from './CustomIcons';
import CustomIconsSource from '!raw-loader!./CustomIcons';

import PaginationRanges from './PaginationRanges';
import PaginationRangesSource from '!raw-loader!./PaginationRanges';

import PaginationControlled from './PaginationControlled';
import PaginationControlledSource from '!raw-loader!./PaginationControlled';

import UsePagination from './UsePagination';
import UsePaginationSource from '!raw-loader!./UsePagination';

import TablePaginationDemo from './TablePaginationDemo';
import TablePaginationDemoSource from '!raw-loader!./TablePaginationDemo';

const Pagination = () => {
  return (
    <>
      <AppComponentHeader
        title="Pagination"
        description="The Pagination component enables the user to select a specific page from a range of pages."
        refUrl="https://mui.com/components/pagination/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic pagination"
            component={BasicPagination}
            source={BasicPaginationSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="PaginationOutlined"
            component={PaginationOutlined}
            source={PaginationOutlinedSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Pagination Rounded"
            component={PaginationRounded}
            source={PaginationRoundedSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Pagination Buttons"
            component={PaginationButtons}
            source={PaginationButtonsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Custom Icons"
            component={CustomIcons}
            source={CustomIconsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Pagination Controlled"
            component={PaginationControlled}
            source={PaginationControlledSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="TablePaginationDemo"
            component={TablePaginationDemo}
            source={TablePaginationDemoSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Pagination Size"
            component={PaginationSize}
            source={PaginationSizeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Pagination Ranges"
            component={PaginationRanges}
            source={PaginationRangesSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="UsePagination"
            component={UsePagination}
            source={UsePaginationSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Pagination;
