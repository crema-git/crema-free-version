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
        title="TimePicker"
        description="Time pickers allow the user to select a single time."
        refUrl="https://mui.com/components/time-picker/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="BasicTimePicker"
            component={BasicTimePicker}
            source={BasicTimePickerSource}
            noScrollbar
            description="The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ResponsiveTimePickers"
            component={ResponsiveTimePickers}
            source={ResponsiveTimePickersSource}
            noScrollbar
            description="The time picker component is designed and optimized for the device it runs on."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FormPropsTimePickers"
            component={FormPropsTimePickers}
            source={FormPropsTimePickersSource}
            noScrollbar
            description="The time picker component can be disabled or read-only."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="LocalizedTimePicker"
            component={LocalizedTimePicker}
            source={LocalizedTimePickerSource}
            noScrollbar
            description="Use LocalizationProvider to change the date-engine locale that is used to render the time picker. The time picker will automatically adjust to the locales time setting, i.e. the 12-hour or 24-hour format. This can be controlled with ampm prop."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="TimeValidationTimePicker"
            component={TimeValidationTimePicker}
            source={TimeValidationTimePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SecondsTimePicker"
            component={SecondsTimePicker}
            source={SecondsTimePickerSource}
            noScrollbar
            description="The seconds input can be used for selection of a precise time point."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="StaticTimePickerLandscape"
            component={StaticTimePickerLandscape}
            source={StaticTimePickerLandscapeSource}
            noScrollbar
            description=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SubComponentsTimePickers"
            component={SubComponentsTimePickers}
            source={SubComponentsTimePickersSource}
            noScrollbar
            description="Some lower-level sub-components (ClockPicker) are also exported. These are rendered without a wrapper or outer logic (masked input, date values parsing and validation, etc.)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="StaticTimePickerDemo"
            component={StaticTimePickerDemo}
            source={StaticTimePickerDemoSource}
            noScrollbar
            description="Its possible to render any time picker inline. This will enable building custom popover/modal containers."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TimePicker;
