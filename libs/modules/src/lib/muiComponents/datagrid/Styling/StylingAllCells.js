import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {makeStyles} from '@mui/styles';

const columns = [
  {field: 'city'},
  {field: 'oct', type: 'number', valueFormatter: ({value}) => `${value} °C`},
  {field: 'nov', type: 'number', valueFormatter: ({value}) => `${value} °C`},
  {field: 'dec', type: 'number', valueFormatter: ({value}) => `${value} °C`},
];

const rows = [
  {id: 1, city: 'Amsterdam', oct: 7.1, nov: 4, dec: 10.2},
  {id: 2, city: 'Barcelona', oct: 14.9, nov: 12.3, dec: 18.2},
  {id: 3, city: 'Paris', oct: 8.1, nov: 5.4, dec: 12.3},
  {id: 4, city: 'São Paulo', oct: 20.2, nov: 21.1, dec: 19.2},
];

const useStyles = makeStyles({
  root: {
    '& .cold': {
      backgroundColor: '#b9d5ff91',
      color: '#1a3e72',
    },
    '& .hot': {
      backgroundColor: '#ff943975',
      color: '#1a3e72',
    },
  },
});

export default function StylingAllCells() {
  const classes = useStyles();

  return (
    <div style={{height: 300, width: '100%'}} className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        getCellClassName={(params) => {
          if (params.field === 'city') {
            return '';
          }
          return params.value >= 15 ? 'hot' : 'cold';
        }}
      />
    </div>
  );
}
