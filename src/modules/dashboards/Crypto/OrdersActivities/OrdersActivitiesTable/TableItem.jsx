import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const TableCellWrapper = styled(TableCell)(() => {
  return {
    fontSize: 14,
    padding: '9.5px 8px',
    '&:first-of-type': {
      paddingLeft: 20,
    },
    '&:last-child': {
      paddingRight: 20,
    },
  };
});

const TableItem = ({ data }) => {
  return (
    <TableRow key={data.name} className='item-hover'>
      <TableCellWrapper align='left'>{data.transactionID}</TableCellWrapper>
      <TableCellWrapper align='left'>
        <Box sx={{ display: 'flex' }}>
          <AvatarGroup max={2}>
            {data.type.map((item, index) => (
              <Avatar
                sx={{ border: '0 none !important', width: 30, height: 30 }}
                alt={item.title}
                key={index}
                src={item.icon}
              />
            ))}
          </AvatarGroup>
        </Box>
      </TableCellWrapper>
      <TableCellWrapper align='left'>{data.description}</TableCellWrapper>
      <TableCellWrapper align='left'>{data.date}</TableCellWrapper>
      <TableCellWrapper align='left'>{data.usdAmount} USD</TableCellWrapper>
      <TableCellWrapper align='right'>{data.amount} BTC</TableCellWrapper>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
};
