import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicPopover from './BasicPopover';
import BasicPopoverSource from '!raw-loader!./BasicPopover';

import MouseOverPopover from './MouseOverPopover';
import MouseOverPopoverSource from '!raw-loader!./MouseOverPopover';

const Popover = () => {
  return (
    <>
      <AppComponentHeader
        title="Popover"
        description="A Popover can be used to display some content on top of another."
        refUrl="https://mui.com/components/popover/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="BasicPopover"
            component={BasicPopover}
            source={BasicPopoverSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Mouse Over Popover"
            component={MouseOverPopover}
            source={MouseOverPopoverSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Popover;
