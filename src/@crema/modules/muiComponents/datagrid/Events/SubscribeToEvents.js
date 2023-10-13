import * as React from 'react';
import {DataGridPro, useGridApiRef} from '@mui/x-data-grid-pro';
import Alert from '@mui/material/Alert';
import {useDemoData} from '@mui/x-data-grid-generator';

export default function SubscribeToEvents() {
  const apiRef = useGridApiRef();
  const [message, setMessage] = React.useState('');
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1,
    maxColumns: 6,
  });

  React.useEffect(() => {
    return apiRef.current.subscribeEvent('columnResize', (params) => {
      setMessage(
        `Column ${params.colDef.headerName} resized to ${params.width}px.`,
      );
    });
  }, [apiRef]);

  return (
    <div style={{width: '100%'}}>
      <div style={{height: 180, width: '100%'}}>
        <DataGridPro apiRef={apiRef} {...data} />
      </div>
      {message && (
        <Alert severity='info' style={{marginTop: 8}}>
          {message}
        </Alert>
      )}
    </div>
  );
}
