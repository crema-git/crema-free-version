import React, {useState} from 'react';
import AppCard from '@crema/components/AppCard';
import RecentContact from './RecentContact';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import AppScrollbar from '@crema/components/AppScrollbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CoinDropdown from './CoinDropdown';
import {useIntl} from 'react-intl';

const QuickTransfer = ({quickTransfer}) => {
  const [selectedCoinId, setSelectedCoinID] = useState(
    quickTransfer.coinList[0].id,
  );

  const selectedCoin = () => {
    return quickTransfer.coinList.find((coin) => coin.id === selectedCoinId);
  };
  const handleCoinChange = (event) => {
    setSelectedCoinID(event.target.value);
  };
  const coin = selectedCoin();
  const {messages} = useIntl();
  return (
    <AppCard
      title={messages['dashboard.crypto.quickTransfer']}
      action={
        <CoinDropdown
          coinList={quickTransfer.coinList}
          selectedCoinId={selectedCoinId}
          handleCoinChange={handleCoinChange}
        />
      }
    >
      <Box
        sx={{
          position: 'relative',
          mb: 5,
        }}
      >
        <TextField
          sx={{
            '& .MuiInputBase-input': {
              pl: 40,
              textAlign: 'right',
              color: 'text.secondary',
            },
          }}
          fullWidth
          id='outlined-basic'
          variant='outlined'
        />
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 150,
            height: 52,
            backgroundColor: 'primary.main',
            color: 'common.white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
          component='span'
        >
          Amount {coin.shortName}
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          mb: 3,
        }}
      >
        <Typography
          sx={{
            color: 'text.secondary',
            mb: 4,
          }}
        >
          Recent Contact
        </Typography>
        <AppScrollbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mx: -4,
            }}
          >
            {quickTransfer.recentContact.map((contact, index) => (
              <Box
                key={index}
                sx={{
                  px: 4,
                  pb: 2.5,
                }}
              >
                <RecentContact recentContact={contact} />
              </Box>
            ))}
          </Box>
        </AppScrollbar>
      </Box>
      <Box
        sx={{
          textAlign: 'right',
        }}
      >
        <Button variant='contained'>TRANSFER NOW</Button>
      </Box>
    </AppCard>
  );
};

export default QuickTransfer;

QuickTransfer.propTypes = {
  quickTransfer: PropTypes.object.isRequired,
};
