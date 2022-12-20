import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicDateTimePicker from './BasicDateTimePicker';
import BasicDateTimePickerSource from '!raw-loader!./BasicDateTimePicker';

import ResponsiveDateTimePickers from './ResponsiveDateTimePickers';
import ResponsiveDateTimePickersSource from '!raw-loader!./ResponsiveDateTimePickers';

import FormPropsDateTimePickers from './FormPropsDateTimePickers';
import FormPropsDateTimePickersSource from '!raw-loader!./FormPropsDateTimePickers';

import DateTimeValidation from './DateTimeValidation';
import DateTimeValidationSource from '!raw-loader!./DateTimeValidation';

import StaticDateTimePickerDemo from './StaticDateTimePickerDemo';
import StaticDateTimePickerDemoSource from '!raw-loader!./StaticDateTimePickerDemo';

import CustomDateTimePicker from './CustomDateTimePicker';
import CustomDateTimePickerSource from '!raw-loader!./CustomDateTimePicker';

const DateTimePicker = () => {
  return (
    <>
      <AppComponentHeader
        title="DateTimePicker"
        description="Combined date & time picker."
        refUrl="https://mui.com/components/date-time-picker/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="BasicDateTimePicker"
            component={BasicDateTimePicker}
            source={BasicDateTimePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ResponsiveDateTimePickers"
            component={ResponsiveDateTimePickers}
            source={ResponsiveDateTimePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FormPropsDateTimePickers"
            component={FormPropsDateTimePickers}
            source={FormPropsDateTimePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="DateTimeValidation"
            component={DateTimeValidation}
            source={DateTimeValidationSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="StaticDateTimePickerDemo"
            component={StaticDateTimePickerDemo}
            source={StaticDateTimePickerDemoSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CustomDateTimePicker"
            component={CustomDateTimePicker}
            source={CustomDateTimePickerSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default DateTimePicker;
