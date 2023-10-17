import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import RadioButtonsGroup from './RadioButtonsGroup';
import RadioButtonsGroupSource from '!raw-loader!./RadioButtonsGroup';
import RowRadioButtonsGroup from './Direction';
import RowRadioButtonsGroupSource from '!raw-loader!./Direction';
import ControlledRadioButtonsGroup from './Controlled';
import ControlledRadioButtonsGroupSource from '!raw-loader!./Controlled';
import RadioButtons from './StandaloneRadioButtons';
import RadioButtonsSource from '!raw-loader!./StandaloneRadioButtons';
import SizeRadioButtons from './Size';
import SizeRadioButtonsSource from '!raw-loader!./Size';
import ColorRadioButtons from './Color';
import ColorRadioButtonsSource from '!raw-loader!./Color';
import FormControlLabelPlacement from './LabelPlacement';
import FormControlLabelPlacementSource from '!raw-loader!./LabelPlacement';
import ErrorRadios from './ShowError';
import ErrorRadiosSource from '!raw-loader!./ShowError';
import CustomizedRadios from './Customization';
import CustomizedRadiosSource from '!raw-loader!./Customization';

const Radio = () => {
  return (
    <>
      <AppComponentHeader
        title='Radio'
        description='Radio buttons allow the user to select one option from a set.'
        refUrl='https://mui.com/components/radio-buttons/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Radio group'
            component={RadioButtonsGroup}
            source={RadioButtonsGroupSource}
            noScrollbar
            description='RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard accessibility to the group.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Show error'
            component={ErrorRadios}
            source={ErrorRadiosSource}
            noScrollbar
            description='In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controlled'
            component={ControlledRadioButtonsGroup}
            source={ControlledRadioButtonsGroupSource}
            noScrollbar
            description='You can control the radio with the value and onChange props:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Label placement'
            component={FormControlLabelPlacement}
            source={FormControlLabelPlacementSource}
            noScrollbar
            description='You can change the placement of the label with the FormControlLabel component labelPlacement prop:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Direction'
            component={RowRadioButtonsGroup}
            source={RowRadioButtonsGroupSource}
            noScrollbar
            description='To lay out the buttons horizontally, set the row prop:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Standalone radio buttons'
            component={RadioButtons}
            source={RadioButtonsSource}
            noScrollbar
            description='Radio can also be used standalone, without the RadioGroup wrapper.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Size'
            component={SizeRadioButtons}
            source={SizeRadioButtonsSource}
            noScrollbar
            description='Use the size prop or customize the font size of the svg icons to change the size of the radios.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color'
            component={ColorRadioButtons}
            source={ColorRadioButtonsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomizedRadios}
            source={CustomizedRadiosSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Radio;
