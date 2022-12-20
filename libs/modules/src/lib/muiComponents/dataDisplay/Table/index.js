import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicTable from './BasicTable';
import BasicTableSource from '!raw-loader!./BasicTable';

import DataTable from './DataTable';
import DataTableSource from '!raw-loader!./DataTable';

import DenseTable from './DenseTable';
import DenseTableSource from '!raw-loader!./DenseTable';

import EnhancedTable from './EnhancedTable';
import EnhancedTableSource from '!raw-loader!./EnhancedTable';

import ColumnGrouping from './ColumnGrouping';
import ColumnGroupingSource from '!raw-loader!./ColumnGrouping';

import CustomPaginationActionsTable from './Custompaginationactions';
import CustomPaginationActionsTableSource from '!raw-loader!./Custompaginationactions';

import StickyHeadTable from './StickyHeadTable';
import StickyHeadTableSource from '!raw-loader!./StickyHeadTable';

import ColumnGroupingTable from './ColumnGroupingTable';
import ColumnGroupingTableSource from '!raw-loader!./ColumnGroupingTable';

import CollapsibleTable from './CollapsibleTable';
import CollapsibleTableSource from '!raw-loader!./CollapsibleTable';

import SpanningTable from './SpanningTable';
import SpanningTableSource from '!raw-loader!./SpanningTable';

import AcccessibleTable from './AcccessibleTable';
import AcccessibleTableSource from '!raw-loader!./AcccessibleTable';

const Table = () => {
  return (
    <>
      <AppComponentHeader
        title="Table"
        description="Tables display sets of data. They can be fully customized."
        refUrl="https://mui.com/components/tables/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="Basic table"
            component={BasicTable}
            source={BasicTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Data Table"
            component={DataTable}
            source={DataTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Dense Table"
            component={DenseTable}
            source={DenseTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Enhanced Table"
            component={EnhancedTable}
            source={EnhancedTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ColumnGrouping"
            component={ColumnGrouping}
            source={ColumnGroupingSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="CustomPaginationActionsTable"
            component={CustomPaginationActionsTable}
            source={CustomPaginationActionsTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Sticky Head Table"
            component={StickyHeadTable}
            source={StickyHeadTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Column Grouping Table"
            component={ColumnGroupingTable}
            source={ColumnGroupingTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="CollapsibleTable"
            component={CollapsibleTable}
            source={CollapsibleTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Spanning Table"
            component={SpanningTable}
            source={SpanningTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Acccessible Table"
            component={AcccessibleTable}
            source={AcccessibleTableSource}
            noScrollbar
            description="A simple example with no frills."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Table;
