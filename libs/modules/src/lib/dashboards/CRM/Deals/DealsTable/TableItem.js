import React from 'react';
import TableCell from '@mui/material/TableCell';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { blue, green, red } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';

const getProgressColor = (progress) => {
  switch (progress) {
    case 'Pending':
      return `${red[600]}`;

    case 'Approved':
      return `${blue[600]}`;

    case 'Application':
      return `${green[600]}`;

    default:
      return `${red[600]}`;
  }
};

const TableItem = (props) => {
  const { row } = props;

  return (
    <TableRow
      key={row.name}
      sx={{
        borderBottom: '0 none',
        '& .tableCell': {
          borderBottom: '0 none',
          fontSize: 13,
          padding: 2,
          '&:first-of-type': {
            pl: 5,
          },
          '&:last-of-type': {
            pr: 5,
          },
        },
      }}
      className="item-hover"
    >
      <TableCell scope="row" className="tableCell">
        {row.id}.
      </TableCell>
      <TableCell
        align="left"
        sx={{
          whiteSpace: 'no-wrap',
        }}
        className="tableCell"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {row.logo ? (
            <Avatar src={row.logo} />
          ) : (
            <Avatar>{row.name[0].toUpperCase()}</Avatar>
          )}
          <Box
            component="span"
            sx={{
              ml: 3.5,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {row.name}
          </Box>
        </Box>
      </TableCell>
      <TableCell
        align="left"
        sx={{
          color: getProgressColor(row.progress),
        }}
        className="tableCell"
      >
        <Box
          component="span"
          sx={{
            fontWeight: Fonts.REGULAR,
          }}
        >
          {row.progress}
        </Box>
      </TableCell>
      <TableCell align="left" className="tableCell">
        {row.type}
      </TableCell>
      <TableCell align="left" className="tableCell" fontWeight={Fonts.MEDIUM}>
        {row.amount}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          whiteSpace: 'no-wrap',
        }}
        className="tableCell"
      >
        {row.created}
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  row: PropTypes.object.isRequired,
};
