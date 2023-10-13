import React from 'react';
import AppCard from '@crema/components/AppCard';
import CardDetailItem from './CardDetailItem';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MonthlyLimitItem from './MonthlyLimitItem';
import {Typography} from '@mui/material';
import {useIntl} from 'react-intl';

const CardDetails = ({cardDetails}) => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['dashboard.crypto.cardDetails']}>
      <Box
        sx={{
          borderBottom: (theme) => `solid 2px ${theme.palette.divider}`,
          pb: 1,
          mb: 2.5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            mx: -2.5,
          }}
        >
          {cardDetails.cardDetail.map((data, index) => (
            <Box
              sx={{
                px: 2.5,
                pb: 1.5,
              }}
              key={index}
            >
              <CardDetailItem cardDetail={data} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            color: 'text.secondary',
            mb: 2.5,
          }}
        >
          Monthly Limits
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            mx: -2.5,
          }}
        >
          {cardDetails.monthlyLimit.map((data, index) => (
            <Box
              sx={{
                px: 2.5,
                pb: 2.5,
              }}
              key={index}
            >
              <MonthlyLimitItem monthlyLimit={data} />
            </Box>
          ))}
        </Box>
      </Box>
    </AppCard>
  );
};

export default CardDetails;

CardDetails.propTypes = {
  cardDetails: PropTypes.object.isRequired,
};
