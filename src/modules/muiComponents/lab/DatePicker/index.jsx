import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicDatePicker from './BasicDatePicker';
import BasicDatePickerSource from './BasicDatePicker?raw';

import StaticDatePickerDemo from './StaticDatePickerDemo';
import StaticDatePickerDemoSource from './StaticDatePickerDemo?raw';

import ResponsiveDatePickers from './ResponsiveDatePickers';
import ResponsiveDatePickersSource from './ResponsiveDatePickers?raw';

import FormPropsDatePickers from './FormPropsDatePickers';
import FormPropsDatePickersSource from './FormPropsDatePickers?raw';

import LocalizedDatePicker from './LocalizedDatePicker';
import LocalizedDatePickerSource from './LocalizedDatePicker?raw';

import ViewsDatePicker from './ViewsDatePicker';
import ViewsDatePickerSource from './ViewsDatePicker?raw';

import StaticDatePickerLandscape from './StaticDatePickerLandscape';
import StaticDatePickerLandscapeSource from './StaticDatePickerLandscape?raw';

import CustomInput from './CustomInput';
import CustomInputSource from './CustomInput?raw';

import CustomDay from './CustomDay';
import CustomDaySource from './CustomDay?raw';

import ServerRequestDatePicker from './ServerRequestDatePicker';
import ServerRequestDatePickerSource from './ServerRequestDatePicker?raw';

import HelperText from './HelperText';
import HelperTextSource from './HelperText?raw';

const DatePicker = () => {
  return (
    <>
      <AppComponentHeader
        title='DatePicker'
        description='Date pickers let the user select a date.'
        refUrl='https://material.io/components/date-pickers'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicDatePicker'
            component={BasicDatePicker}
             source={BasicDatePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ServerRequestDatePicker'
            component={ServerRequestDatePicker}
             source={ServerRequestDatePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='HelperText'
            component={HelperText}
             source={HelperTextSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomInput'
            component={CustomInput}
             source={CustomInputSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FormPropsDatePickers'
            component={FormPropsDatePickers}
             source={FormPropsDatePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='LocalizedDatePicker'
            component={LocalizedDatePicker}
             source={LocalizedDatePickerSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ResponsiveDatePickers'
            component={ResponsiveDatePickers}
             source={ResponsiveDatePickersSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ViewsDatePicker'
            component={ViewsDatePicker}
             source={ViewsDatePickerSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='StaticDatePickerDemo'
            component={StaticDatePickerDemo}
             source={StaticDatePickerDemoSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomDay'
            component={CustomDay}
             source={CustomDaySource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='StaticDatePickerLandscape'
            component={StaticDatePickerLandscape}
             source={StaticDatePickerLandscapeSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default DatePicker;
