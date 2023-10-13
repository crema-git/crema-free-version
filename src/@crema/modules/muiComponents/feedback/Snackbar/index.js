import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import SimpleSnackbar from './SimpleSnackbar';
import SimpleSnackbarSource from '!raw-loader!./SimpleSnackbar';

import CustomizedSnackbars from './CustomizedSnackbars';
import CustomizedSnackbarsSource from '!raw-loader!./CustomizedSnackbars';

import PositionedSnackbar from './PositionedSnackbar';
import PositionedSnackbarSource from '!raw-loader!./PositionedSnackbar';

import LongTextSnackbar from './LongTextSnackbar';
import LongTextSnackbarSource from '!raw-loader!./LongTextSnackbar';

import ConsecutiveSnackbars from './ConsecutiveSnackbars';
import ConsecutiveSnackbarsSource from '!raw-loader!./ConsecutiveSnackbars';

import FabIntegrationSnackbar from './FabIntegrationSnackbar';
import FabIntegrationSnackbarSource from '!raw-loader!./FabIntegrationSnackbar';

import TransitionsSnackbar from './TransitionsSnackbar';
import TransitionsSnackbarSource from '!raw-loader!./TransitionsSnackbar';

import DirectionSnackbar from './DirectionSnackbar';
import DirectionSnackbarSource from '!raw-loader!./DirectionSnackbar';

import IntegrationNotistack from './IntegrationNotistack';
import IntegrationNotistackSource from '!raw-loader!./IntegrationNotistack';

const Snackbar = () => {
  return (
    <>
      <AppComponentHeader
        title='Snackbar'
        description='Snackbars provide brief notifications. The component is also known as a toast.'
        refUrl='https://mui.com/components/snackbars/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Snackbar'
            component={SimpleSnackbar}
            source={SimpleSnackbarSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Consecutive Snackbars'
            component={ConsecutiveSnackbars}
            source={ConsecutiveSnackbarsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Snackbars'
            component={CustomizedSnackbars}
            source={CustomizedSnackbarsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Long Text Snackbar'
            component={LongTextSnackbar}
            source={LongTextSnackbarSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Positioned Snackbar'
            component={PositionedSnackbar}
            source={PositionedSnackbarSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FabIntegration Snackbar'
            component={FabIntegrationSnackbar}
            source={FabIntegrationSnackbarSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Transitions Snackbar'
            component={TransitionsSnackbar}
            source={TransitionsSnackbarSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Direction Snackbar'
            component={DirectionSnackbar}
            source={DirectionSnackbarSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='IntegrationNotistack'
            component={IntegrationNotistack}
            source={IntegrationNotistackSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Snackbar;
