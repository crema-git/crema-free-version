import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import IntlMessages from '@crema/helpers/IntlMessages';
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
        '& .MuiInputLabel-root': {
          transform: 'translate(14px, 2px) scale(1)',
        },
        '& legend': {
          display: 'none',
        },
      }}
    >
      <InputLabel id='selected-coin-select-outlined-label'>
        <IntlMessages id='dashboard.crypto.coinName' />
      </InputLabel>
      <Select
        labelId='selected-coin-select-outlined-label'
        sx={{
          cursor: 'pointer',
          '& .MuiOutlinedInput-input': {
            pt: 6.5,
          },
        }}
        value={selectedCoinId}
        label={<IntlMessages id='dashboard.crypto.coinName' />}
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
