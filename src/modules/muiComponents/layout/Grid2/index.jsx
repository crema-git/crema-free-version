import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppGridContainer from "@crema/components/AppGridContainer";

import BasicGrid from "./BasicGrid";
import BasicGridSource from "./BasicGrid?raw";

import FullWidthGrid from "./FullWidthGrid";
import FullWidthGridSource from "./FullWidthGrid?raw";

import SpacingGrid from "./SpacingGrid";
import SpacingGridSource from "./SpacingGrid?raw";

import CenteredElement from "./CenteredElem";
import CenteredElementSource from "./CenteredElem?raw";

import ResponsiveGrid from "./ResponsiveGrid";
import ResponsiveGridSource from "./ResponsiveGrid?raw";

import AutoGrid from "./AutoGrid";
import AutoGridSource from "./AutoGrid?raw";

import VariableWidthGrid from "./VariableWidthGrid";
import VariableWidthGridSource from "./VariableWidthGrid?raw";

import FullBorderedGrid from "./FullBorderedGrid";
import FullBorderedGridSource from "./FullBorderedGrid?raw";

import ColumnsGrid from "./ColumnsGrid";
import ColumnsGridSource from "./ColumnsGrid?raw";

import DisableScrollbarGrid from "./DisableScrollbar";
import DisableScrollbarGridSource from "./DisableScrollbar?raw";

import NestedGrid from "./NestedGrid";
import NestedGridSource from "./NestedGrid?raw";

import OffsetGrid from "./OffSetGrid";
import OffsetGridSource from "./OffSetGrid?raw";

import HalfBorderedGrid from "./HalfWidthGrid";
import HalfBorderedGridSource from "./HalfWidthGrid?raw";

const GridLayout = () => {
  return (
    <>
      <AppComponentHeader
        title="Grid v2"
        description="The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts."
        refUrl="https://mui.com/components/grid2/"
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
            title="Centered elements"
            component={CenteredElement}
            source={CenteredElementSource}
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
            title="Nested Grid "
            component={NestedGrid}
            source={NestedGridSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Offset Grid "
            component={OffsetGrid}
            source={OffsetGridSource}
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
            title="Disable the scrollbar "
            component={DisableScrollbarGrid}
            source={DisableScrollbarGridSource}
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
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Full border Grid "
            component={FullBorderedGrid}
            source={FullBorderedGridSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Half border Grid "
            component={HalfBorderedGrid}
            source={HalfBorderedGridSource}
            noScrollbar
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default GridLayout;
