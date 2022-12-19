import * as React from 'react';
import {DataGrid, GridOverlay} from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import {useDemoData} from '@mui/x-data-grid-generator';

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{position: 'absolute', top: 0, width: '100%'}}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

export default function CustomLoadingOverlayGrid() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        components={{
          LoadingOverlay: CustomLoadingOverlay,
        }}
        loading
        {...data}
      />
    </div>
  );
}
