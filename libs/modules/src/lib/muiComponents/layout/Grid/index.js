import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import BasicGrid from './BasicGrid';
import BasicGridSource from '!raw-loader!./BasicGrid';

import FullWidthGrid from './FullWidthGrid';
import FullWidthGridSource from '!raw-loader!./FullWidthGrid';

import SpacingGrid from './SpacingGrid';
import SpacingGridSource from '!raw-loader!./SpacingGrid';

import RowAndColumnSpacing from './RowAndColumnSpacing';
import RowAndColumnSpacingSource from '!raw-loader!./RowAndColumnSpacing';

import ResponsiveGrid from './ResponsiveGrid';
import ResponsiveGridSource from '!raw-loader!./ResponsiveGrid';

import AutoGrid from './AutoGrid';
import AutoGridSource from '!raw-loader!./AutoGrid';

import VariableWidthGrid from './VariableWidthGrid';
import VariableWidthGridSource from '!raw-loader!./VariableWidthGrid';

import ComplexGrid from './ComplexGrid';
import ComplexGridSource from '!raw-loader!./ComplexGrid';

import FormRow from './FormRow';
import FormRowSource from '!raw-loader!./FormRow';

import ColumnsGrid from './ColumnsGrid';
import ColumnsGridSource from '!raw-loader!./ColumnsGrid';

import AutoGridNoWrap from './AutoGridNoWrap';
import AutoGridNoWrapSource from '!raw-loader!./AutoGridNoWrap';

import CSSGrid from './CSSGrid';
import CSSGridSource from '!raw-loader!./CSSGrid';

const GridLayout = () => {
  return (
    <>
      <AppComponentHeader
        title="Grid"
        description="The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts."
        refUrl="https://mui.com/components/grid/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="BasicGrid"
            component={BasicGrid}
            source={BasicGridSource}
            description="All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FullWidthGrid"
            component={FullWidthGrid}
            source={FullWidthGridSource}
            description="All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Row And Column Spacing"
            component={RowAndColumnSpacing}
            source={RowAndColumnSpacingSource}
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Responsive Grid"
            component={ResponsiveGrid}
            source={ResponsiveGridSource}
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Auto Grid"
            component={AutoGrid}
            source={AutoGridSource}
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Variable Width Grid "
            component={VariableWidthGrid}
            source={VariableWidthGridSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Complex Grid "
            component={ComplexGrid}
            source={ComplexGridSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FormRow "
            component={FormRow}
            source={FormRowSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ColumnsGrid "
            component={ColumnsGrid}
            source={ColumnsGridSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CSSGrid "
            component={CSSGrid}
            source={CSSGridSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Auto Grid No Wrap "
            component={AutoGridNoWrap}
            source={AutoGridNoWrapSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Spacing Grid"
            component={SpacingGrid}
            source={SpacingGridSource}
            description="All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:"
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default GridLayout;
