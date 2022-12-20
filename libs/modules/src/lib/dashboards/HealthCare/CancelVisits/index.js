import React from 'react';
import { useIntl } from 'react-intl';
import AppCard from '@crema/components/AppCard';
import { Box } from '@mui/material';
import VisitsGraph from './VisitsGraph';
import AppMenu from '@crema/components/AppMenu';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';

const CancelVisits = ({ data }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      title={messages['healthCare.cancelledVisits']}
      action={<AppMenu />}
    >
      <Box>
        <Box
          sx={{
            mb: 6,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            sx={{
              mr: 2,
              fontSize: 20,
              fontWeight: Fonts.BOLD,
            }}
          >
            32
          </Box>
          <Box
            sx={{
              '& img': {
                height: 12,
              },
            }}
          >
            <img src={'/assets/images/dashboard/decries_icon.svg'} alt="down" />
          </Box>
        </Box>
        <Box
          sx={{
            mx: -6,
            mb: -6,
          }}
        >
          <VisitsGraph data={data} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default CancelVisits;

CancelVisits.propTypes = {
  data: PropTypes.array,
};
