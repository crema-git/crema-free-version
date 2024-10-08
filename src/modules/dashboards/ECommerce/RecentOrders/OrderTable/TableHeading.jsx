import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/components/AppTable/TableHeader';
import { grey } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';

const TableHeading = () => {
  return (
    (<TableHeader
      sx={theme => ({
        borderBottom: '0 none',
        color: grey[500],

        '& .tableCell': {
          fontSize: 13,
          padding: 2,
          fontWeight: Fonts.BOLD,
          backgroundColor: theme.palette.background.paper,
          '&:first-of-type': {
            pl: 5,
          },
          '&:last-of-type': {
            pr: 5,
          },
        }
      })}
    >
      <TableCell className='tableCell'>Order ID</TableCell>
      <TableCell className='tableCell'>Product</TableCell>
      <TableCell className='tableCell'>Customer</TableCell>
      <TableCell className='tableCell'>Delivery Date</TableCell>
      <TableCell className='tableCell'>Price</TableCell>
      <TableCell className='tableCell'>Status</TableCell>
      <TableCell className='tableCell' align='right'>
        Actions
      </TableCell>
    </TableHeader>)
  );
};

export default TableHeading;
