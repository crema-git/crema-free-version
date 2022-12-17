import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicDateRangePicker from './BasicDateRangePicker';
import BasicDateRangePickerSource from '!raw-loader!./BasicDateRangePicker';

import StaticDateRangePickerDemo from './StaticDateRangePickerDemo';
import StaticDateRangePickerDemoSource from '!raw-loader!./StaticDateRangePickerDemo';

import ResponsiveDateRangePicker from './ResponsiveDateRangePicker';
import ResponsiveDateRangePickerSource from '!raw-loader!./ResponsiveDateRangePicker';

import FormPropsDateRangePickers from './FormPropsDateRangePickers';
import FormPropsDateRangePickersSource from '!raw-loader!./FormPropsDateRangePickers';

import CalendarsDateRangePicker from './CalendarsDateRangePicker';
import CalendarsDateRangePickerSource from '!raw-loader!./CalendarsDateRangePicker';

import MinMaxDateRangePicker from './MinMaxDateRangePicker';
import MinMaxDateRangePickerSource from '!raw-loader!./MinMaxDateRangePicker';

import CustomDateRangeInputs from './CustomDateRangeInputs';
import CustomDateRangeInputsSource from '!raw-loader!./CustomDateRangeInputs';

import CustomDateRangePickerDay from './CustomDateRangePickerDay';
import CustomDateRangePickerDaySource from '!raw-loader!./CustomDateRangePickerDay';

const DateRangePicker = () => {
  return (
    <>
      <AppComponentHeader
        title='DateRangePicker'
        description='Date pickers let the user select a range of dates.'
        refUrl='https://mui.com/components/date-range-picker/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicDateRangePicker'
            component={BasicDateRangePicker}
            source={BasicDateRangePickerSource}
            noScrollbar
            description='Note that you can pass almost any prop from DatePicker.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='MinMaxDateRangePicker'
            component={MinMaxDateRangePicker}
            source={MinMaxDateRangePickerSource}
            noScrollbar
            description='Disabling dates behaves the same as the simple DatePicker.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ResponsiveDateRangePicker'
            component={ResponsiveDateRangePicker}
            source={ResponsiveDateRangePickerSource}
            noScrollbar
            description='The date range picker component is designed to be optimized for the device it runs on.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FormPropsDateRangePickers'
            component={FormPropsDateRangePickers}
            source={FormPropsDateRangePickersSource}
            noScrollbar
            description='The date range picker component can be disabled or read-only.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomDateRangePickerDay'
            component={CustomDateRangePickerDay}
            source={CustomDateRangePickerDaySource}
            noScrollbar
            description='The displayed days are customizable with the renderDay function prop. You can take advantage of the internal DateRangePickerDay component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='StaticDateRangePickerDemo'
            component={StaticDateRangePickerDemo}
            source={StaticDateRangePickerDemoSource}
            noScrollbar
            description='Its possible to render any picker inline. This will enable building custom popover/modal containers.
            '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CalendarsDateRangePicker'
            component={CalendarsDateRangePicker}
            source={CalendarsDateRangePickerSource}
            noScrollbar
            description='Note that the calendars prop only works in desktop mode.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomDateRangeInputs'
            component={CustomDateRangeInputs}
            source={CustomDateRangeInputsSource}
            noScrollbar
            description='You can customize the rendered input with the renderInput prop. For DateRangePicker it takes 2 parameters – for start and end input respectively. If you need to render custom inputs make sure to spread ref and inputProps correctly to the input components.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default DateRangePicker;
