import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Fonts } from '@crema/constants/AppEnums';

const TableItem = (props) => {
  return (
    <TableRow
      key={props.data.name}
      sx={{
        '& td': {
          borderBottomColor: '#E5E4EA',
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
      <TableCell>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              mr: 3.5,
            }}
            src={props.data.icon}
          />
          <Box
            sx={{
              fontSize: 14,
              flex: 1,
            }}
          >
            <Box
              sx={{
                mb: 0.5,
                fontWeight: Fonts.MEDIUM,
              }}
            >
              {props.data.name}
            </Box>
            <Box
              component="p"
              sx={{
                color: 'text.secondary',
              }}
            >
              {props.data.description}
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell>{props.data.spent}</TableCell>
      <TableCell>
        {props.data.growth ? (
          <img
            src={'/assets/images/dashboard/growth_icon.svg'}
            alt="growth_icon"
          />
        ) : (
          <img
            src={'/assets/images/dashboard/decries_icon.svg'}
            alt="decries_icon"
          />
        )}
        <Box
          component="span"
          sx={{
            mx: 2,
            color: props.data.growth ? '#0A8FDC' : '#F44D50',
          }}
        >
          {props.data.graph}
        </Box>
        <Box
          component="span"
          sx={{
            color: 'text.secondary',
          }}
        >
          {props.data.growth ? 'Up' : 'Down'}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
};
