import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/components/TableHeader';
import { grey } from '@mui/material/colors';
import { Fonts } from '@crema/constants';

const TableHeading = () => {
  return (
    <TableHeader
      sx={{
        borderBottom: '0 none',
        color: grey[500],
        '& .tableCell': {
          fontSize: 13,
          padding: 2,
          fontWeight: Fonts.BOLD,
          backgroundColor: (theme) => theme.palette.background.paper,
          '&:first-of-type': {
            pl: 5,
          },
          '&:last-of-type': {
            pr: 5,
          },
        },
      }}
    >
      <TableCell className='tableCell'>Name</TableCell>
      <TableCell className='tableCell'>Gender</TableCell>
      <TableCell className='tableCell'>Weight</TableCell>
      <TableCell className='tableCell'>Assigned Dr</TableCell>
      <TableCell className='tableCell'>Admit Date</TableCell>
      <TableCell className='tableCell'>Status</TableCell>
      <TableCell className='tableCell' align='right'>
        Actions
      </TableCell>
    </TableHeader>
  );
};

export default TableHeading;
