import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import SubscribeToEvents from './SubscribeToEvents';
import SubscribeToEventsSource from '!raw-loader!./SubscribeToEvents';

import DoubleClickWithCtrlToEdit from './DoubleClickWithCtrlToEdit';
import DoubleClickWithCtrlToEditSource from '!raw-loader!./DoubleClickWithCtrlToEdit';

const Events = () => {
  return (
    <>
      <AppComponentHeader
        title='Events'
        description='The data grid emits events that can be subscribed to attach custom behavior.'
        refUrl='https://mui.com/components/data-grid/events/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='SubscribeToEvents'
            component={SubscribeToEvents}
            source={SubscribeToEventsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DoubleClickWithCtrlToEdit'
            component={DoubleClickWithCtrlToEdit}
            source={DoubleClickWithCtrlToEditSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Events;
