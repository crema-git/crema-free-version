import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicColumnsGrid from './BasicColumnsGrid';
import BasicColumnsGridSource from '!raw-loader!./BasicColumnsGrid';

import HeaderColumnsGrid from './HeaderColumnsGrid';
import HeaderColumnsGridSource from '!raw-loader!./HeaderColumnsGrid';

import ColumnWidthGrid from './ColumnWidthGrid';
import ColumnWidthGridSource from '!raw-loader!./ColumnWidthGrid';

import ColumnMinWidthGrid from './ColumnMinWidthGrid';
import ColumnMinWidthGridSource from '!raw-loader!./ColumnMinWidthGrid';

import ColumnFluidWidthGrid from './ColumnFluidWidthGrid';
import ColumnFluidWidthGridSource from '!raw-loader!./ColumnFluidWidthGrid';

import ColumnSizingGrid from './ColumnSizingGrid';
import ColumnSizingGridSource from '!raw-loader!./ColumnSizingGrid';

import ValueFormatterGrid from './ValueFormatterGrid';
import ValueFormatterGridSource from '!raw-loader!./ValueFormatterGrid';

import ValueParserGrid from './ValueParserGrid';
import ValueParserGridSource from '!raw-loader!./ValueParserGrid';

import RenderCellGrid from './RenderCellGrid';
import RenderCellGridSource from '!raw-loader!./RenderCellGrid';

import RenderExpandCellGrid from './RenderExpandCellGrid';
import RenderExpandCellGridSource from '!raw-loader!./RenderExpandCellGrid';

import RenderHeaderGrid from './RenderHeaderGrid';
import RenderHeaderGridSource from '!raw-loader!./RenderHeaderGrid';

import ColumnTypesGrid from './ColumnTypesGrid';
import ColumnTypesGridSource from '!raw-loader!./ColumnTypesGrid';

import CustomColumnTypesGrid from './CustomColumnTypesGrid';
import CustomColumnTypesGridSource from '!raw-loader!./CustomColumnTypesGrid';

import ColumnMenuGrid from './ColumnMenuGrid';
import ColumnMenuGridSource from '!raw-loader!./ColumnMenuGrid';

import ColumnSelectorGrid from './ColumnSelectorGrid';
import ColumnSelectorGridSource from '!raw-loader!./ColumnSelectorGrid';

import ColumnOrderingGrid from './ColumnOrderingGrid';
import ColumnOrderingGridSource from '!raw-loader!./ColumnOrderingGrid';

import ColumnOrderingDisabledGrid from './ColumnOrderingDisabledGrid';
import ColumnOrderingDisabledGridSource from '!raw-loader!./ColumnOrderingDisabledGrid';

const Columns = () => {
  return (
    <>
      <AppComponentHeader
        title='Columns'
        description='A textarea component for React which grows with content.'
        refUrl='https://mui.com/components/data-grid/columns/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Basic Columns Grid'
            component={BasicColumnsGrid}
            source={BasicColumnsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Header Columns Grid'
            component={HeaderColumnsGrid}
            source={HeaderColumnsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Column Width Grid'
            component={ColumnWidthGrid}
            source={ColumnWidthGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnMinWidthGrid'
            component={ColumnMinWidthGrid}
            source={ColumnMinWidthGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnFluidWidthGrid'
            component={ColumnFluidWidthGrid}
            source={ColumnFluidWidthGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnSizingGrid'
            component={ColumnSizingGrid}
            source={ColumnSizingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueFormatterGrid'
            component={ValueFormatterGrid}
            source={ValueFormatterGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueParserGrid'
            component={ValueParserGrid}
            source={ValueParserGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderCellGrid'
            component={RenderCellGrid}
            source={RenderCellGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderExpandCellGrid'
            component={RenderExpandCellGrid}
            source={RenderExpandCellGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderHeaderGrid'
            component={RenderHeaderGrid}
            source={RenderHeaderGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnTypesGrid'
            component={ColumnTypesGrid}
            source={ColumnTypesGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CustomColumnTypesGrid'
            component={CustomColumnTypesGrid}
            source={CustomColumnTypesGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnMenuGrid'
            component={ColumnMenuGrid}
            source={ColumnMenuGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnSelectorGrid'
            component={ColumnSelectorGrid}
            source={ColumnSelectorGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnOrderingGrid'
            component={ColumnOrderingGrid}
            source={ColumnOrderingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnOrderingDisabledGrid'
            component={ColumnOrderingDisabledGrid}
            source={ColumnOrderingDisabledGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Columns;
