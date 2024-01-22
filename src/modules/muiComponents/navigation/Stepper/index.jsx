import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import HorizontalLinearStepper from "./HorizontalLinearStepper";
import HorizontalLinearStepperSource from "./HorizontalLinearStepper?raw";

import HorizontalNonLinearStepper from "./HorizontalNonLinearStepper";
import HorizontalNonLinearStepperSource from "./HorizontalNonLinearStepper?raw";

import HorizontalLabelPositionBelowStepper from "./HorizontalLabelPositionBelowStepper";
import HorizontalLabelPositionBelowStepperSource from "./HorizontalLabelPositionBelowStepper?raw";

import HorizontalStepperWithError from "./HorizontalStepperWithError";
import HorizontalStepperWithErrorSource from "./HorizontalStepperWithError?raw";

import CustomizedSteppers from "./CustomizedSteppers";
import CustomizedSteppersSource from "./CustomizedSteppers?raw";

import VerticalLinearStepper from "./VerticalLinearStepper";
import VerticalLinearStepperSource from "./VerticalLinearStepper?raw";

import TextMobileStepper from "./TextMobileStepper";
import TextMobileStepperSource from "./TextMobileStepper?raw";

import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SwipeableTextMobileStepperSource from "./SwipeableTextMobileStepper?raw";

import DotsMobileStepper from "./DotsMobileStepper";
import DotsMobileStepperSource from "./DotsMobileStepper?raw";

import ProgressMobileStepper from "./ProgressMobileStepper";
import ProgressMobileStepperSource from "./ProgressMobileStepper?raw";

const Stepper = () => {
  return (
    <>
      <AppComponentHeader
        title="Stepper"
        description="Steppers convey progress through numbered steps. It provides a wizard-like workflow."
        refUrl="https://mui.com/components/steppers/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Horizontal stepper"
            component={HorizontalLinearStepper}
            source={HorizontalLinearStepperSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="HorizontalNonLinearStepper"
            component={HorizontalNonLinearStepper}
            source={HorizontalNonLinearStepperSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="HorizontalLabelPositionBelowStepper"
            component={HorizontalLabelPositionBelowStepper}
            source={HorizontalLabelPositionBelowStepperSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="HorizontalStepperWithError"
            component={HorizontalStepperWithError}
            source={HorizontalStepperWithErrorSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CustomizedSteppers"
            component={CustomizedSteppers}
            source={CustomizedSteppersSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="VerticalLinearStepper"
            component={VerticalLinearStepper}
            source={VerticalLinearStepperSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="TextMobileStepper"
            component={TextMobileStepper}
            source={TextMobileStepperSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SwipeableTextMobileStepper"
            component={SwipeableTextMobileStepper}
            source={SwipeableTextMobileStepperSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="DotsMobileStepper"
            component={DotsMobileStepper}
            source={DotsMobileStepperSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ProgressMobileStepper"
            component={ProgressMobileStepper}
            source={ProgressMobileStepperSource}
            noScrollbar
            description="Horizontal steppers are ideal when the contents of one step depend on an earlier step."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Stepper;
