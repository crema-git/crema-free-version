import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicTimePicker from './BasicTimePicker';
import BasicTimePickerSource from '!raw-loader!./BasicTimePicker';

import StaticTimePickerDemo from './StaticTimePickerDemo';
import StaticTimePickerDemoSource from '!raw-loader!./StaticTimePickerDemo';

import ResponsiveTimePickers from './ResponsiveTimePickers';
import ResponsiveTimePickersSource from '!raw-loader!./ResponsiveTimePickers';

import FormPropsTimePickers from './FormPropsTimePickers';
import FormPropsTimePickersSource from '!raw-loader!./FormPropsTimePickers';

import LocalizedTimePicker from './LocalizedTimePicker';
import LocalizedTimePickerSource from '!raw-loader!./LocalizedTimePicker';

import TimeValidationTimePicker from './TimeValidationTimePicker';
import TimeValidationTimePickerSource from '!raw-loader!./TimeValidationTimePicker';

import StaticTimePickerLandscape from './StaticTimePickerLandscape';
import StaticTimePickerLandscapeSource from '!raw-loader!./StaticTimePickerLandscape';

import SubComponentsTimePickers from './SubComponentsTimePickers';
import SubComponentsTimePickersSource from '!raw-loader!./SubComponentsTimePickers';

import SecondsTimePicker from './SecondsTimePicker';
import SecondsTimePickerSource from '!raw-loader!./SecondsTimePicker';

const TimePicker = () => {
  return (
    <>
      <AppComponentHeader
        title='TimePicker'
        description='Time pickers allow the user to select a single time.'
        refUrl='https://mui.com/components/time-picker/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicTimePicker'
            component={BasicTimePicker}
            source={BasicTimePickerSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ResponsiveTimePickers'
            component={ResponsiveTimePickers}
            source={ResponsiveTimePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FormPropsTimePickers'
            component={FormPropsTimePickers}
            source={FormPropsTimePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='LocalizedTimePicker'
            component={LocalizedTimePicker}
            source={LocalizedTimePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TimeValidationTimePicker'
            component={TimeValidationTimePicker}
            source={TimeValidationTimePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SecondsTimePicker'
            component={SecondsTimePicker}
            source={SecondsTimePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='StaticTimePickerLandscape'
            component={StaticTimePickerLandscape}
            source={StaticTimePickerLandscapeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SubComponentsTimePickers'
            component={SubComponentsTimePickers}
            source={SubComponentsTimePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='StaticTimePickerDemo'
            component={StaticTimePickerDemo}
            source={StaticTimePickerDemoSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TimePicker;
