import React from 'react';
import Typography from '@mui/material/Typography';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';
import AppCardMedia from '@crema/components/AppCardMedia';

const OfficeCultureCard = ({ officeCulture }) => {
  return (
    <AppCardMedia sxStyle={{ height: '100%' }} cardMedia={officeCulture.srcImg}>
      <Typography
        component='h3'
        sx={{ fontSize: 16, fontWeight: Fonts.SEMI_BOLD, mb: { xs: 2, md: 4 } }}
      >
        {officeCulture.title}
      </Typography>
      <Typography
        sx={{ mb: 2, color: (theme) => theme.palette.text.secondary }}
      >
        {officeCulture.description}
      </Typography>
    </AppCardMedia>
  );
};

export default OfficeCultureCard;

OfficeCultureCard.propTypes = {
  officeCulture: PropTypes.object,
};
