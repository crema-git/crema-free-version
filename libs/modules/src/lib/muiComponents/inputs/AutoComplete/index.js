import React from 'react';

import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import ComboBox from './ComboBox';
import ComboBoxSource from '!raw-loader!./ComboBox';
import CountrySelectSource from '!raw-loader!./ComboBox';

import CountrySelect from './CountrySelect';

import ControllableStates from './ControlledStates';
import ControlledStatesSource from '!raw-loader!./ControlledStates';

import Grouped from './Grouped';
import GroupedSource from '!raw-loader!./Grouped';

import Asynchronous from './Asynchronous';
import AsynchronousSource from '!raw-loader!./Asynchronous';

import Multiple from './Multiple';
import MultipleSource from '!raw-loader!./Multiple';

import CheckboxesTags from './Checkboxes';
import CheckboxesTagsSource from '!raw-loader!./Checkboxes';

import Sizes from './Sizes';
import SizesSource from '!raw-loader!./Sizes';

import CustomInputAutocomplete from './Customization';
import CustomInputAutocompleteSource from '!raw-loader!./Customization';

const AutoComplete = () => {
  return (
    <>
      <AppComponentHeader
        title='Autocomplete'
        description='The autocomplete is a normal text input enhanced by a panel of suggested options.'
        refUrl='https://mui.com/components/autocomplete/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Combo Box'
            component={ComboBox}
            source={ComboBoxSource}
            noScrollbar
            description='The value must be chosen from a predefined set of allowed values.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Country Select'
            component={CountrySelect}
            source={CountrySelectSource}
            description='Choose one of the 248 countries.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controllable States'
            component={ControllableStates}
            source={ControlledStatesSource}
            description='The component has two states that can be controlled.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Grouped'
            component={Grouped}
            source={GroupedSource}
            description='You can group the options with the groupBy prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise you will notice duplicate headers.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Asynchronous'
            component={Asynchronous}
            source={AsynchronousSource}
            description='The component supports two different asynchronous use-cases'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CheckboxesTags'
            component={CheckboxesTags}
            source={CheckboxesTagsSource}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multiple'
            component={Multiple}
            source={MultipleSource}
            description='Also known as tags, the user is allowed to enter more than one value.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Sizes'
            component={Sizes}
            source={SizesSource}
            description='Fancy smaller inputs? Use the size prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomInput Autocomplete'
            component={CustomInputAutocomplete}
            source={CustomInputAutocompleteSource}
            description='Fancy smaller inputs? Use the size prop.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default AutoComplete;
