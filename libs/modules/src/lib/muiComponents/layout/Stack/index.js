import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import BasicStack from './BasicStack';
import BasicStackSource from '!raw-loader!./BasicStack';

import DirectionStack from './DirectionStack';
import DirectionStackSource from '!raw-loader!./DirectionStack';

import DividerStack from './DividerStack';
import DividerStackSource from '!raw-loader!./DividerStack';

import ResponsiveStack from './ResponsiveStack';
import ResponsiveStackSource from '!raw-loader!./ResponsiveStack';

const Stack = () => {
  return (
    <>
      <AppComponentHeader
        title="Stack"
        description="The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child."
        refUrl="https://mui.com/components/stack/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic Stack"
            component={BasicStack}
            source={BasicStackSource}
            description="All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Direction Stack "
            component={DirectionStack}
            source={DirectionStackSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Divider Stack "
            component={DividerStack}
            source={DividerStackSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Responsive Stack "
            component={ResponsiveStack}
            source={ResponsiveStackSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Stack;
