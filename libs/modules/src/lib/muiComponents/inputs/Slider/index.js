import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import ContinuousSlider from './ContinuousSliders';
import ContinuousSliderSource from '!raw-loader!./ContinuousSliders';
import SliderSizes from './Sizes';
import SliderSizesSource from '!raw-loader!./Sizes';
import DiscreteSlider from './DiscreteSliders';
import DiscreteSliderSource from '!raw-loader!./DiscreteSliders';
import DiscreteSliderSteps from './SmallSteps';
import DiscreteSliderStepsSource from '!raw-loader!./SmallSteps';
import DiscreteSliderMarks from './CustomMarks';
import DiscreteSliderMarksSource from '!raw-loader!./CustomMarks';
import DiscreteSliderValues from './RestrictedValues';
import DiscreteSliderValuesSource from '!raw-loader!./RestrictedValues';
import DiscreteSliderLabel from './LabelAlwaysVisible';
import DiscreteSliderLabelSource from '!raw-loader!./LabelAlwaysVisible';
import RangeSlider from './RangeSlider';
import RangeSliderSource from '!raw-loader!./RangeSlider';
import MinimumDistanceSlider from './MinimumDistance';
import MinimumDistanceSliderSource from '!raw-loader!./MinimumDistance';
import InputSlider from './InputSlider';
import InputSliderSource from '!raw-loader!./InputSlider';
import ColorSlider from './Color';
import ColorSliderSource from '!raw-loader!./Color';
import CustomizedSlider from './Customization';
import CustomizedSliderSource from '!raw-loader!./Customization';
import MusicPlayerSlider from './MusicPlayer';
import MusicPlayerSliderSource from '!raw-loader!./MusicPlayer';
import VerticalSlider from './VerticalSliders';
import VerticalSliderSource from '!raw-loader!./VerticalSliders';
import TrackFalseSlider from './RemovedTrack';
import TrackFalseSliderSource from '!raw-loader!./RemovedTrack';
import TrackInvertedSlider from './InvertedTrack';
import TrackInvertedSliderSource from '!raw-loader!./InvertedTrack';
import NonLinearSlider from './NonLinearScale';
import NonLinearSliderSource from '!raw-loader!./NonLinearScale';

const Slider = () => {
  return (
    <>
      <AppComponentHeader
        title='Slider'
        description='Sliders allow users to make selections from a range of values.'
        refUrl='https://mui.com/components/slider/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic select'
            component={ContinuousSlider}
            source={ContinuousSliderSource}
            noScrollbar
            description='Continuous sliders allow users to select a value along a subjective range.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Sizes'
            component={SliderSizes}
            source={SliderSizesSource}
            noScrollbar
            description='For smaller slider, use the prop size="small".'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Discrete Slider'
            component={DiscreteSlider}
            source={DiscreteSliderSource}
            noScrollbar
            description='Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with marks={true}.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Small steps'
            component={DiscreteSliderSteps}
            source={DiscreteSliderStepsSource}
            noScrollbar
            description='You can change the default step increment.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom marks'
            component={DiscreteSliderMarks}
            source={DiscreteSliderMarksSource}
            noScrollbar
            description='You can have custom marks by providing a rich array to the marks prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Restricted values'
            component={DiscreteSliderValues}
            source={DiscreteSliderValuesSource}
            noScrollbar
            description='You can restrict the selectable values to those provided with the marks prop with step={null}.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Label always visible'
            component={DiscreteSliderLabel}
            source={DiscreteSliderLabelSource}
            noScrollbar
            description='You can force the thumb label to be always visible with valueLabelDisplay="on".'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Range Slider'
            component={RangeSlider}
            source={RangeSliderSource}
            noScrollbar
            description='The slider can be used to set the start and end of a range by supplying an array of values to the value prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Minimum Distance'
            component={MinimumDistanceSlider}
            source={MinimumDistanceSliderSource}
            noScrollbar
            description='You can enforce a minimum distance between values in the onChange event handler.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Slider with input field'
            component={InputSlider}
            source={InputSliderSource}
            noScrollbar
            description='In this example, an input allows a discrete value to be set.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Slider'
            component={CustomizedSlider}
            source={CustomizedSliderSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Music Player Slider'
            component={MusicPlayerSlider}
            source={MusicPlayerSliderSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Vertical Slider'
            component={VerticalSlider}
            source={VerticalSliderSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Removed track'
            component={TrackFalseSlider}
            source={TrackFalseSliderSource}
            noScrollbar
            description='The track can be turned off with track={false}.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Inverted track'
            component={TrackInvertedSlider}
            source={TrackInvertedSliderSource}
            noScrollbar
            description='The track can be inverted with track="inverted".'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Non-linear scale'
            component={NonLinearSlider}
            source={NonLinearSliderSource}
            noScrollbar
            description='You can use the scale prop to represent the value on a different scale.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color'
            component={ColorSlider}
            source={ColorSliderSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Slider;
