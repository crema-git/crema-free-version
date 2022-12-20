import React from 'react';
import AppCard from '@crema/components/AppCard';
import { Box } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';

const InfoWidget = ({ data }) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      className="card-hover"
      contentStyle={{ px: 2 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            mt: 1,
            mb: 3,
          }}
        >
          <img src={data.icon} alt="icon" style={{ height: 60, width: 60 }} />
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              color: 'text.secondary',
              mb: 3,
            }}
          >
            {data.name}
          </Box>
          <Box
            component="p"
            sx={{
              color: data.color,
              fontSize: 14,
              fontWeight: Fonts.BOLD,
            }}
          >
            {data.measurement}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default InfoWidget;

InfoWidget.propTypes = {
  data: PropTypes.object,
};
