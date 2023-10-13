import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

const CurrencyCell = (coin) => {
  return (
    <MenuItem
      key={coin.id}
      value={coin.id}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Box display='flex' alignItems='center'>
        {coin.icon ? (
          <Avatar
            sx={{
              marginRight: 1.25,
              height: 20,
              width: 20,
            }}
            src={coin.icon}
          />
        ) : (
          <Avatar
            sx={{
              marginRight: 1.25,
              height: 20,
              width: 20,
            }}
          >
            {coin.name.toUpperCase()}
          </Avatar>
        )}
        <Box component='span'>{coin.value}</Box>
        <Box
          component='span'
          sx={{
            ml: 3,
            color: 'text.secondary',
          }}
        >
          {coin.shortName}
        </Box>
      </Box>
    </MenuItem>
  );
};

export default CurrencyCell;

CurrencyCell.propTypes = {
  coin: PropTypes.object,
};
