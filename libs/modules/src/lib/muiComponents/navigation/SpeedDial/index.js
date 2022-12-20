import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicSpeedDial from './BasicSpeedDial';
import BasicSpeedDialSource from '!raw-loader!./BasicSpeedDial';

import PlaygroundSpeedDial from './PlaygroundSpeedDial';
import PlaygroundSpeedDialSource from '!raw-loader!./PlaygroundSpeedDial';

import ControlledOpenSpeedDial from './ControlledOpenSpeedDial';
import ControlledOpenSpeedDialSource from '!raw-loader!./ControlledOpenSpeedDial';

import OpenIconSpeedDial from './OpenIconSpeedDial';
import OpenIconSpeedDialSource from '!raw-loader!./OpenIconSpeedDial';

import SpeedDialTooltipOpen from './SpeedDialTooltipOpen';
import SpeedDialTooltipOpenSource from '!raw-loader!./SpeedDialTooltipOpen';

const SpeedDial = () => {
  return (
    <>
      <AppComponentHeader
        title="Speed Dial"
        description="When pressed, a floating action button can display three to six related actions in the form of a speed dial."
        refUrl="https://mui.com/components/speed-dial/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic speed dial"
            component={BasicSpeedDial}
            source={BasicSpeedDialSource}
            noScrollbar
            description="The floating action button can display related actions."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Controlled Open Speed Dial"
            component={ControlledOpenSpeedDial}
            source={ControlledOpenSpeedDialSource}
            noScrollbar
            description="The floating action button can display related actions."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="OpenIcon Speed Dial"
            component={OpenIconSpeedDial}
            source={OpenIconSpeedDialSource}
            noScrollbar
            description="The floating action button can display related actions."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SpeedDial Tooltip Open"
            component={SpeedDialTooltipOpen}
            source={SpeedDialTooltipOpenSource}
            noScrollbar
            description="The floating action button can display related actions."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="PlaygroundSpeedDial"
            component={PlaygroundSpeedDial}
            source={PlaygroundSpeedDialSource}
            noScrollbar
            description="The floating action button can display related actions."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default SpeedDial;
