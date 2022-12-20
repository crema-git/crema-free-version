import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import SimplePopper from './SimplePopper';
import SimplePopperSource from '!raw-loader!./SimplePopper';

import TransitionsPopper from './TransitionsPopper';
import TransitionsPopperSource from '!raw-loader!./TransitionsPopper';

import PositionedPopper from './PositionedPopper';
import PositionedPopperSource from '!raw-loader!./PositionedPopper';

import VirtualElementPopper from './VirtualElementPopper';
import VirtualElementPopperSource from '!raw-loader!./VirtualElementPopper';

const Popper = () => {
  return (
    <>
      <AppComponentHeader
        title="Popper"
        description="A Popper can be used to display some content on top of another. Its an alternative to react-popper."
        refUrl="https://mui.com/components/popper/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Simple Popper"
            component={SimplePopper}
            source={SimplePopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Transitions Popper"
            component={TransitionsPopper}
            source={TransitionsPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="PositionedPopper"
            component={PositionedPopper}
            source={PositionedPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="VirtualElementPopper"
            component={VirtualElementPopper}
            source={VirtualElementPopperSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Popper;
