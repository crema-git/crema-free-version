import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

export default function BasicColumnsGrid() {
  return (
    <div style={{height: 250, width: '100%'}}>
      <DataGrid
        columns={[{field: 'username'}, {field: 'age'}]}
        rows={[
          {
            id: 1,
            username: '@MUI',
            age: 20,
          },
        ]}
      />
    </div>
  );
}
