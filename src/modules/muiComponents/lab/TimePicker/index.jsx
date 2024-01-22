import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicTimePicker from "./BasicTimePicker";
import BasicTimePickerSource from "./BasicTimePicker?raw";

import StaticTimePickerDemo from "./StaticTimePickerDemo";
import StaticTimePickerDemoSource from "./StaticTimePickerDemo?raw";

import ResponsiveTimePickers from "./ResponsiveTimePickers";
import ResponsiveTimePickersSource from "./ResponsiveTimePickers?raw";

import FormPropsTimePickers from "./FormPropsTimePickers";
import FormPropsTimePickersSource from "./FormPropsTimePickers?raw";

import LocalizedTimePicker from "./LocalizedTimePicker";
import LocalizedTimePickerSource from "./LocalizedTimePicker?raw";

import TimeValidationTimePicker from "./TimeValidationTimePicker";
import TimeValidationTimePickerSource from "./TimeValidationTimePicker?raw";

import StaticTimePickerLandscape from "./StaticTimePickerLandscape";
import StaticTimePickerLandscapeSource from "./StaticTimePickerLandscape?raw";

import SubComponentsTimePickers from "./SubComponentsTimePickers";
import SubComponentsTimePickersSource from "./SubComponentsTimePickers?raw";

import SecondsTimePicker from "./SecondsTimePicker";
import SecondsTimePickerSource from "./SecondsTimePicker?raw";

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
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ResponsiveTimePickers"
            component={ResponsiveTimePickers}
            source={ResponsiveTimePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FormPropsTimePickers"
            component={FormPropsTimePickers}
            source={FormPropsTimePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="LocalizedTimePicker"
            component={LocalizedTimePicker}
            source={LocalizedTimePickerSource}
            noScrollbar
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
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="StaticTimePickerLandscape"
            component={StaticTimePickerLandscape}
            source={StaticTimePickerLandscapeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SubComponentsTimePickers"
            component={SubComponentsTimePickers}
            source={SubComponentsTimePickersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="StaticTimePickerDemo"
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
