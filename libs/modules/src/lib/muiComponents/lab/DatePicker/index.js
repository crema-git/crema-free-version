import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicDatePicker from './BasicDatePicker';
import BasicDatePickerSource from '!raw-loader!./BasicDatePicker';

import StaticDatePickerDemo from './StaticDatePickerDemo';
import StaticDatePickerDemoSource from '!raw-loader!./StaticDatePickerDemo';

import ResponsiveDatePickers from './ResponsiveDatePickers';
import ResponsiveDatePickersSource from '!raw-loader!./ResponsiveDatePickers';

import FormPropsDatePickers from './FormPropsDatePickers';
import FormPropsDatePickersSource from '!raw-loader!./FormPropsDatePickers';

import LocalizedDatePicker from './LocalizedDatePicker';
import LocalizedDatePickerSource from '!raw-loader!./LocalizedDatePicker';

import ViewsDatePicker from './ViewsDatePicker';
import ViewsDatePickerSource from '!raw-loader!./ViewsDatePicker';

import StaticDatePickerLandscape from './StaticDatePickerLandscape';
import StaticDatePickerLandscapeSource from '!raw-loader!./StaticDatePickerLandscape';

import SubComponentsPickers from './SubComponentsPickers';
import SubComponentsPickersSource from '!raw-loader!./SubComponentsPickers';

import CustomInput from './CustomInput';
import CustomInputSource from '!raw-loader!./CustomInput';

import CustomDay from './CustomDay';
import CustomDaySource from '!raw-loader!./CustomDay';

import ServerRequestDatePicker from './ServerRequestDatePicker';
import ServerRequestDatePickerSource from '!raw-loader!./ServerRequestDatePicker';

import HelperText from './HelperText';
import HelperTextSource from '!raw-loader!./HelperText';

const DatePicker = () => {
  return (
    <>
      <AppComponentHeader
        title="DatePicker"
        description="Date pickers let the user select a date."
        refUrl="https://material.io/components/date-pickers"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="BasicDatePicker"
            component={BasicDatePicker}
            source={BasicDatePickerSource}
            noScrollbar
            description="The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ServerRequestDatePicker"
            component={ServerRequestDatePicker}
            source={ServerRequestDatePickerSource}
            noScrollbar
            description="Sometimes it may be necessary to display additional info right in the calendar. Heres an example of prefetching and displaying server-side data using the onMonthChange, loading, and renderDay props. "
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="HelperText"
            component={HelperText}
            source={HelperTextSource}
            noScrollbar
            description="You can show a helper text with the date format accepted."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CustomInput"
            component={CustomInput}
            source={CustomInputSource}
            noScrollbar
            description="You can customize the rendering of the input with the renderInput prop. Make sure to spread ref and inputProps correctly to the custom input component."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FormPropsDatePickers"
            component={FormPropsDatePickers}
            source={FormPropsDatePickersSource}
            noScrollbar
            description="The date picker component can be disabled or read-only."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="LocalizedDatePicker"
            component={LocalizedDatePicker}
            source={LocalizedDatePickerSource}
            noScrollbar
            description="Use LocalizationProvider to change the date-engine locale that is used to render the date picker. Here is an example of changing the locale for the date-fns adapter:"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ResponsiveDatePickers"
            component={ResponsiveDatePickers}
            source={ResponsiveDatePickersSource}
            noScrollbar
            description="By default, the DatePicker component renders the desktop version if the media query @media (pointer: fine) matches. This can be customized with the desktopModeMediaQuery prop."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ViewsDatePicker"
            component={ViewsDatePicker}
            source={ViewsDatePickerSource}
            noScrollbar
            description="Its possible to combine year, month, and date selection views. Views will appear in the order theyre included in the views array. "
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="StaticDatePickerDemo"
            component={StaticDatePickerDemo}
            source={StaticDatePickerDemoSource}
            noScrollbar
            description="Its possible to render any date picker without the modal/popover and text field. This can be helpful when building custom popover/modal containers."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CustomDay"
            component={CustomDay}
            source={CustomDaySource}
            noScrollbar
            description="The displayed days are customizable with the renderDay function prop. You can take advantage of the PickersDay component."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="StaticDatePickerLandscape"
            component={StaticDatePickerLandscape}
            source={StaticDatePickerLandscapeSource}
            noScrollbar
            description="For ease of use, the date picker will automatically change the layout between portrait and landscape by subscription to the window.orientation change. You can force a specific layout using the orientation prop."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SubComponentsPickers"
            component={SubComponentsPickers}
            source={SubComponentsPickersSource}
            noScrollbar
            description="Some lower-level sub-components (CalendarPicker, MonthPicker, and YearPicker) are also exported. These are rendered without a wrapper or outer logic (masked input, date values parsing and validation, etc.)."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default DatePicker;
