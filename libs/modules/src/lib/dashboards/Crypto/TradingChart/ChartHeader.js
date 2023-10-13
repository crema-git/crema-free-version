import React from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import crypto from '@crema/db/dashboard/crypto';
import CurrencyCell from '../BuySell/CurrencyCell';
import { Fonts } from '@crema/constants/AppEnums';

const ChartHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        mx: -2,
      }}
    >
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Select
          sx={{
            cursor: 'pointer',
          }}
          value={1}
        >
          {crypto.buySell.coinList.map((coin) => {
            return CurrencyCell(coin);
          })}
        </Select>
      </Box>
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Box
          component="h3"
          sx={{
            color: 'text.primary',
            fontWeight: Fonts.SEMI_BOLD,
          }}
        >
          $ 41.580
        </Box>
        <Box
          sx={{
            color: 'text.secondary',
          }}
        >
          Low Price
        </Box>
      </Box>
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Box
          component="h3"
          sx={{
            color: '#11C15B',
            fontWeight: Fonts.SEMI_BOLD,
          }}
        >
          $ 41.580
        </Box>
        <Box
          sx={{
            color: 'text.secondary',
          }}
        >
          High Price
        </Box>
      </Box>
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Box
          component="h3"
          sx={{
            color: 'text.primary',
            fontWeight: Fonts.SEMI_BOLD,
          }}
        >
          $ 41.580
        </Box>
        <Box
          sx={{
            color: 'text.secondary',
          }}
        >
          24H Volume
        </Box>
      </Box>
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Box
          component="h3"
          sx={{
            color: '#F60002',
            fontWeight: Fonts.SEMI_BOLD,
          }}
        >
          $ 41.580
        </Box>
        <Box
          sx={{
            color: 'text.secondary',
          }}
        >
          24H Change
        </Box>
      </Box>
    </Box>
  );
};

export default ChartHeader;
