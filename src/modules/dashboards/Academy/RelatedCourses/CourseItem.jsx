import React from 'react';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';

const CourseItem = ({ data }) => {
  return (
    <Box
      sx={{
        px: { sm: 3 },
      }}
    >
      <Box
        sx={{
          mb: 2,
          '& img': {
            width: '100%',
          },
        }}
      >
        <img src={data.image} alt={data.title} />
      </Box>
      <Box
        component="p"
        sx={{
          fontSize: 14,
          fontWeight: Fonts.MEDIUM,
          mb: 2,
        }}
      >
        {data.title}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'text.secondary',
        }}
      >
        <Box component="p">{data.author}</Box>
        <Box
          sx={{
            ml: 3,
            display: 'flex',
            alignItems: 'center',
            '& .MuiSvgIcon-root': {
              fontSize: 16,
            },
          }}
        >
          <VisibilityIcon />
          <Box
            component="p"
            sx={{
              ml: 2,
            }}
          >
            {data.views} views
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseItem;

CourseItem.propTypes = {
  data: PropTypes.object,
};
