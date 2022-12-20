import React from 'react';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import AppCircularProgress from '@crema/components/AppCircularProgress';
import { alpha, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const LearningItem = ({ course }) => {
  const theme = useTheme();
  return (
    <Box
      className="item-hover"
      key={course.id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 2,
        px: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mr: 2,
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.12),
            borderRadius: 1,
            padding: 1.5,
          }}
        >
          <img alt="" src={course.icon} />
        </Box>
        <Box
          sx={{
            flex: 1,
            ml: 4,
          }}
        >
          <Box
            sx={{
              mb: 0.5,
              display: 'inline-block',
              fontWeight: Fonts.MEDIUM,
              fontSize: 14,
            }}
            component="h3"
          >
            {course.title}
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              mb: 1,
            }}
          >
            {course.desc}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          ml: 'auto',
        }}
      >
        <AppCircularProgress
          minWidth={42}
          maxWidth={45}
          activeColor="#0A8FDC"
          value={course.percentage}
          valueStyle={{
            fontSize: 12,
            color: theme.palette.text.primary,
            fontWeight: Fonts.MEDIUM,
          }}
          thickness={3}
        />
      </Box>
    </Box>
  );
};

export default LearningItem;

LearningItem.propTypes = {
  course: PropTypes.object,
};
