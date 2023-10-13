import React from 'react';
import {Box, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import {Fonts} from "@crema/constants";

const CardDetailItem = ({cardDetail}) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Typography
        component='h5'
        sx={{
          color: 'text.secondary',
        }}
      >
        {cardDetail.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: Fonts.MEDIUM,
        }}
      >
        {cardDetail.name}
      </Typography>
    </Box>
  );
};

export default CardDetailItem;

CardDetailItem.propTypes = {
  cardDetail: PropTypes.object.isRequired,
};
