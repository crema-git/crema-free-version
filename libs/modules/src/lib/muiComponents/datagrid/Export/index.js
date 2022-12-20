import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import ExportSelectorGrid from './ExportSelectorGrid';
import ExportSelectorGridSource from '!raw-loader!./ExportSelectorGrid';

import ExportSelectorGridPrint from './ExportSelectorGridPrint';
import ExportSelectorGridPrintSource from '!raw-loader!./ExportSelectorGridPrint';

const Export = () => {
  return (
    <>
      <AppComponentHeader
        title="Export"
        description="Easily export the rows in various file formats such as CSV, Excel, or PDF."
        refUrl="https://mui.com/components/data-grid/export/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="ExportSelectorGrid"
            component={ExportSelectorGrid}
            source={ExportSelectorGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ExportSelectorGridPrint"
            component={ExportSelectorGridPrint}
            source={ExportSelectorGridPrintSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Export;
