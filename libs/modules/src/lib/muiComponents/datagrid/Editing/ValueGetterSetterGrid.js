import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

function getFullName(params) {
  return `${params.getValue(params.id, 'firstName') || ''} ${
    params.getValue(params.id, 'lastName') || ''
  }`;
}

function setFullName(params) {
  const [firstName, lastName] = params.value.toString().split(' ');
  return {...params.row, firstName, lastName};
}

export default function ValueGetterSetterGrid() {
  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid rows={defaultRows} columns={columns} />
    </div>
  );
}

const columns = [
  {field: 'firstName', headerName: 'First name', width: 130, editable: true},
  {field: 'lastName', headerName: 'Last name', width: 130, editable: true},
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    editable: true,
    valueGetter: getFullName,
    valueSetter: setFullName,
    sortComparator: (v1, v2) => v1.toString().localeCompare(v2.toString()),
  },
];

const defaultRows = [
  {id: 1, lastName: 'Snow', firstName: 'Jon'},
  {id: 2, lastName: 'Lannister', firstName: 'Cersei'},
  {id: 3, lastName: 'Lannister', firstName: 'Jaime'},
  {id: 4, lastName: 'Stark', firstName: 'Arya'},
  {id: 5, lastName: 'Targaryen', firstName: 'Daenerys'},
];
