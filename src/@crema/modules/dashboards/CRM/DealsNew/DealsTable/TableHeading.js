import React from 'react';
import TableCell from '@mui/material/TableCell';
import IntlMessages from '@crema/helpers/IntlMessages';
import TableHeader from '@crema/components/AppTable/TableHeader';
import {grey} from '@mui/material/colors';
import {Fonts} from '@crema/constants/AppEnums';

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
      <TableCell className='tableCell'>
        <IntlMessages id='common.num' />
      </TableCell>
      <TableCell className='tableCell'>
        <IntlMessages id='common.name' />
      </TableCell>
      <TableCell className='tableCell'>
        <IntlMessages id='common.type' />
      </TableCell>
      <TableCell className='tableCell'>
        <IntlMessages id='common.amount' />
      </TableCell>
      <TableCell className='tableCell'>
        <IntlMessages id='common.progress' />
      </TableCell>
      <TableCell className='tableCell'>
        <IntlMessages id='common.created' />
      </TableCell>
    </TableHeader>
  );
};

export default TableHeading;
