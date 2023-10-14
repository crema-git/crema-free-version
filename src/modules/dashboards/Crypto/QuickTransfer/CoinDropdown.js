import React from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';
import CurrencyCell from './CurrencyCell';

const CoinDropdown = ({handleCoinChange, coinList, selectedCoinId}) => {
  return (
    <FormControl
      variant='outlined'
      sx={{
        minWidth: 100,
        width: '100%',
      }}
    >
      <Select
        labelId='selected-coin-select-outlined-label'
        sx={{
          cursor: 'pointer',
          '& .MuiSelect-select': {
            py: 1.25,
            pl: 2,
          },
          '&.MuiInputBase-root': {
            backgroundColor: (theme) => theme.palette.background.default,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '0 none',
          },
        }}
        value={selectedCoinId}
        onChange={handleCoinChange}
      >
        {coinList.map((coin) => {
          return CurrencyCell(coin);
        })}
      </Select>
    </FormControl>
  );
};

export default CoinDropdown;

CoinDropdown.propTypes = {
  selectedCoinId: PropTypes.number,
  handleCoinChange: PropTypes.func,
  coinList: PropTypes.array,
};
