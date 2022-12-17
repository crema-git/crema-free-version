import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import SimpleBackdrop from './SimpleBackdrop';
import SimpleBackdropSource from '!raw-loader!./SimpleBackdrop';

const Backdrop = () => {
  return (
    <>
      <AppComponentHeader
        title='Backdrop'
        description='The backdrop component is used to provide emphasis on a particular element or parts of it.'
        refUrl='https://mui.com/components/backdrop/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Backdrop'
            component={SimpleBackdrop}
            source={SimpleBackdropSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Backdrop;
