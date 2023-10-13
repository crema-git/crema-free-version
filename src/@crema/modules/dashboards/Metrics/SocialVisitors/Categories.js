import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/constants/AppEnums';

const Categories = ({data}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {data.map((item) => {
        return (
          <Box
            sx={{
              px: 4.5,
              mb: 2,
            }}
            key={item.id}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                component='span'
                sx={{
                  height: {xs: 12, xl: 16},
                  width: {xs: 12, xl: 16},
                  borderRadius: '50%',
                  display: 'block',
                  bgcolor: item.color,
                  p: 1,
                  mr: 2,
                }}
              />
              <Box
                component='p'
                sx={{
                  mb: 1,
                  fontWeight: Fonts.MEDIUM,
                  fontSize: 16,
                }}
              >
                {item.visitors}
              </Box>
            </Box>
            <Box
              component='p'
              sx={{
                textTransform: 'capitalize',
                color: 'text.secondary',
                fontSize: 14,
              }}
            >
              {item.name}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Categories;

Categories.defaultProps = {
  data: [],
};

Categories.propTypes = {
  data: PropTypes.array,
};
