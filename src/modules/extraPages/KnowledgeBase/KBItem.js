import React from 'react';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import AppScrollbar from '@crema/components/AppScrollbar';
import {Fonts} from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';

const KbItem = ({data}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <AppCard>
        <Box
          sx={{
            mb: 2,
            component: 'h5',
            fontSize: 16,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          {data.ques}
        </Box>
        <AppScrollbar
          sx={{
            padding: 0,
            marginBottom: 5,
            maxHeight: 130,
          }}
        >
          <Box component='p'>{data.ans}</Box>
        </AppScrollbar>
        <Box mx={-2}>
          {data.tags.map((tag, index) => {
            return (
              <Chip
                label={tag}
                variant='outlined'
                sx={{
                  margin: 2,
                  fontWeight: Fonts.MEDIUM,
                }}
                key={index}
              />
            );
          })}
        </Box>
      </AppCard>
    </Grid>
  );
};

export default KbItem;

KbItem.propTypes = {
  data: PropTypes.object,
};
