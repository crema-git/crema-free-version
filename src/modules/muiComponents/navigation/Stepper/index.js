import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import HorizontalLinearStepper from './HorizontalLinearStepper';
import HorizontalLinearStepperSource from '!raw-loader!./HorizontalLinearStepper';

import HorizontalNonLinearStepper from './HorizontalNonLinearStepper';
import HorizontalNonLinearStepperSource from '!raw-loader!./HorizontalNonLinearStepper';

import HorizontalLabelPositionBelowStepper from './HorizontalLabelPositionBelowStepper';
import HorizontalLabelPositionBelowStepperSource from '!raw-loader!./HorizontalLabelPositionBelowStepper';

import HorizontalStepperWithError from './HorizontalStepperWithError';
import HorizontalStepperWithErrorSource from '!raw-loader!./HorizontalStepperWithError';

import CustomizedSteppers from './CustomizedSteppers';
import CustomizedSteppersSource from '!raw-loader!./CustomizedSteppers';

import VerticalLinearStepper from './VerticalLinearStepper';
import VerticalLinearStepperSource from '!raw-loader!./VerticalLinearStepper';

import TextMobileStepper from './TextMobileStepper';
import TextMobileStepperSource from '!raw-loader!./TextMobileStepper';

import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
import SwipeableTextMobileStepperSource from '!raw-loader!./SwipeableTextMobileStepper';

import DotsMobileStepper from './DotsMobileStepper';
import DotsMobileStepperSource from '!raw-loader!./DotsMobileStepper';

import ProgressMobileStepper from './ProgressMobileStepper';
import ProgressMobileStepperSource from '!raw-loader!./ProgressMobileStepper';

const Stepper = () => {
  return (
    <>
      <AppComponentHeader
        title='Stepper'
        description='Steppers convey progress through numbered steps. It provides a wizard-like workflow.'
        refUrl='https://mui.com/components/steppers/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Horizontal stepper'
            component={HorizontalLinearStepper}
            source={HorizontalLinearStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='HorizontalNonLinearStepper'
            component={HorizontalNonLinearStepper}
            source={HorizontalNonLinearStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='HorizontalLabelPositionBelowStepper'
            component={HorizontalLabelPositionBelowStepper}
            source={HorizontalLabelPositionBelowStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='HorizontalStepperWithError'
            component={HorizontalStepperWithError}
            source={HorizontalStepperWithErrorSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomizedSteppers'
            component={CustomizedSteppers}
            source={CustomizedSteppersSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='VerticalLinearStepper'
            component={VerticalLinearStepper}
            source={VerticalLinearStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TextMobileStepper'
            component={TextMobileStepper}
            source={TextMobileStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SwipeableTextMobileStepper'
            component={SwipeableTextMobileStepper}
            source={SwipeableTextMobileStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DotsMobileStepper'
            component={DotsMobileStepper}
            source={DotsMobileStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ProgressMobileStepper'
            component={ProgressMobileStepper}
            source={ProgressMobileStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Stepper;
