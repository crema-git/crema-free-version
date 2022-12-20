import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import PatientGraph from './PatientGraph';
import { Box } from '@mui/material';
import AppMenu from '@crema/components/AppMenu';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';

const NewPatients = ({ data }) => {
  const { messages } = useIntl();

  return (
    <AppCard title={messages['healthCare.newPatient']} action={<AppMenu />}>
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
            214
          </Box>
          <Box
            sx={{
              '& img': {
                height: 12,
              },
            }}
          >
            <img
              src={'/assets/images/dashboard/metrics_icon_active.png'}
              alt="down"
            />
          </Box>
        </Box>
        <Box
          sx={{
            mx: -6,
            mb: -6,
          }}
        >
          <PatientGraph data={data} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default NewPatients;

NewPatients.propTypes = {
  data: PropTypes.array,
};
