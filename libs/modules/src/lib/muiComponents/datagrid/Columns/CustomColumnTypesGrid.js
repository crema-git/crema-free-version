import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {DataGrid} from '@mui/x-data-grid';
import {randomStatusOptions, randomPrice} from '@mui/x-data-grid-generator';

const rows = [
  {
    id: 1,
    status: randomStatusOptions(),
    subTotal: randomPrice(),
    total: randomPrice(),
  },
  {
    id: 2,
    status: randomStatusOptions(),
    subTotal: randomPrice(),
    total: randomPrice(),
  },
  {
    id: 3,
    status: randomStatusOptions(),
    subTotal: randomPrice(),
    total: randomPrice(),
  },
];

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const usdPrice = {
  type: 'number',
  width: 130,
  valueFormatter: ({value}) => currencyFormatter.format(Number(value)),
  cellClassName: 'font-tabular-nums',
};

const useStyles = makeStyles({
  root: {
    '& .font-tabular-nums': {
      fontVariantNumeric: 'tabular-nums',
    },
  },
});

export default function CustomColumnTypesGrid() {
  const classes = useStyles();

  return (
    <div style={{height: 300, width: '100%'}} className={classes.root}>
      <DataGrid
        columns={[
          {field: 'status', width: 130},
          {field: 'subTotal', ...usdPrice},
          {field: 'total', ...usdPrice},
        ]}
        rows={rows}
      />
    </div>
  );
}
