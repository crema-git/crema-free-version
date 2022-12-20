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
        title="DateRangePicker"
        description="Date pickers let the user select a range of dates."
        refUrl="https://mui.com/components/date-range-picker/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="BasicDateRangePicker"
            component={BasicDateRangePicker}
            source={BasicDateRangePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="MinMaxDateRangePicker"
            component={MinMaxDateRangePicker}
            source={MinMaxDateRangePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ResponsiveDateRangePicker"
            component={ResponsiveDateRangePicker}
            source={ResponsiveDateRangePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FormPropsDateRangePickers"
            component={FormPropsDateRangePickers}
            source={FormPropsDateRangePickersSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CustomDateRangePickerDay"
            component={CustomDateRangePickerDay}
            source={CustomDateRangePickerDaySource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="StaticDateRangePickerDemo"
            component={StaticDateRangePickerDemo}
            source={StaticDateRangePickerDemoSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CalendarsDateRangePicker"
            component={CalendarsDateRangePicker}
            source={CalendarsDateRangePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CustomDateRangeInputs"
            component={CustomDateRangeInputs}
            source={CustomDateRangeInputsSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default DateRangePicker;
