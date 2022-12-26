import React from 'react';
import { Card } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';

const Sections = ({ data }) => {
  return (
    <Card
      sx={{
        padding: 5,
        textAlign: 'center',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Avatar
          sx={{
            height: { xs: 60, xl: 80 },
            width: { xs: 60, xl: 80 },
            backgroundColor: data.avatarColor,
            display: 'inline-flex',
          }}
        >
          {data.icon}
        </Avatar>
      </Box>

      <Box
        component="h2"
        sx={{
          mb: 4,
          fontWeight: Fonts.BOLD,
          fontSize: 16,
        }}
      >
        {data.title}
      </Box>

      <Box component="p" sx={{ mb: 5 }}>
        {data.content}
      </Box>

      <Button
        variant="contained"
        sx={{
          fontWeight: Fonts.MEDIUM,
          fontSize: 14,
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <IntlMessages id="dashboard.readMore" />
      </Button>
    </Card>
  );
};

export default Sections;

Sections.propTypes = {
  data: PropTypes.object.isRequired,
};
