import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import SimpleNoSsr from './SimpleNoSsr';
import SimpleNoSsrSource from '!raw-loader!./SimpleNoSsr';

import FrameDeferring from './FrameDeferring';
import FrameDeferringSource from '!raw-loader!./FrameDeferring';

const NoSSR1 = () => {
  return (
    <>
      <AppComponentHeader
        title='NoSSR1'
        description='The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.'
        refUrl='https://mui.com/components/no-ssr/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple No Ssr'
            component={SimpleNoSsr}
            source={SimpleNoSsrSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FrameDeferring'
            component={FrameDeferring}
            source={FrameDeferringSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default NoSSR1;
