import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import ExclusiveSelection from './ExclusiveSelection';
import ExclusiveSelectionSource from '!raw-loader!./ExclusiveSelection';
import ToggleButtonsMultiple from './MultipleSelection';
import ToggleButtonsMultipleSource from '!raw-loader!./MultipleSelection';
import ColorToggleButton from './Color';
import ColorToggleButtonSource from '!raw-loader!./Color';
import VerticalToggleButtons from './VerticalButtons';
import VerticalToggleButtonsSource from '!raw-loader!./VerticalButtons';
import ToggleButtonNotEmpty from './EnforceValueSet';
import ToggleButtonNotEmptySource from '!raw-loader!./EnforceValueSet';
import StandaloneToggleButton from './StandaloneToggleButton';
import StandaloneToggleButtonSource from '!raw-loader!./StandaloneToggleButton';
import CustomizedDividers from './Customization';
import CustomizedDividersSource from '!raw-loader!./Customization';

const ToggleButtons = () => {
  return (
    <>
      <AppComponentHeader
        title="Toggle Buttons"
        description="Toggle buttons can be used to group related options."
        refUrl="https://mui.com/components/toggle-button/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Exclusive selection"
            component={ExclusiveSelection}
            source={ExclusiveSelectionSource}
            noScrollbar
            description="With exclusive selection, selecting one option deselects any other."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Multiple selection"
            component={ToggleButtonsMultiple}
            source={ToggleButtonsMultipleSource}
            noScrollbar
            description="Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Color"
            component={ColorToggleButton}
            source={ColorToggleButtonSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Standalone toggle button"
            component={StandaloneToggleButton}
            source={StandaloneToggleButtonSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Enforce value sets"
            component={ToggleButtonNotEmpty}
            source={ToggleButtonNotEmptySource}
            noScrollbar
            description="If you want to enforce that at least one button must be active, you can adapt your handleChange function."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customization"
            component={CustomizedDividers}
            source={CustomizedDividersSource}
            noScrollbar
            description="Here is an example of customizing the component. You can learn more about this in the overrides documentation page."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Vertical buttons"
            component={VerticalToggleButtons}
            source={VerticalToggleButtonsSource}
            noScrollbar
            description='The buttons can be stacked vertically with the orientation prop set to "vertical".'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default ToggleButtons;
