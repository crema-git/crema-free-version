import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Fonts } from '@crema/constants/AppEnums';
import { Typography } from '@mui/material';
import AppCard from '@crema/components/AppCard';

const Sections = ({ data }) => {
  return (
    <AppCard sx={{ height: '100%' }}>
      <Box
        sx={{
          mb: 3,
        }}
      >
        <Avatar
          sx={{
            backgroundColor: data.avatarColor,
            color: (theme) => theme.palette.common.white,
          }}
        >
          {data.icon}
        </Avatar>
      </Box>

      <Typography
        component='h3'
        sx={{
          mb: 2.5,
          fontWeight: Fonts.SEMI_BOLD,
          fontSize: 16,
        }}
      >
        {data.title}
      </Typography>

      <Typography
        sx={{
          mb: 2,
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        {data.content}
      </Typography>
    </AppCard>
  );
};

export default Sections;

Sections.propTypes = {
  data: PropTypes.object,
};
