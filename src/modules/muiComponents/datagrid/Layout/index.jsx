import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import FlexLayoutGrid from "./FlexLayoutGrid";
import FlexLayoutGridSource from "./FlexLayoutGrid?raw";

import FixedSizeGrid from "./FixedSizeGrid";
import FixedSizeGridSource from "./FixedSizeGrid?raw";

import AutoHeightGrid from "./AutoHeightGrid";
import AutoHeightGridSource from "./AutoHeightGrid?raw";

const Layout = () => {
  return (
    <>
      <AppComponentHeader
        title="Layout"
        description="A textarea component for React which grows with content."
        refUrl="https://mui.com/components/data-grid/layout/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="FlexLayoutGrid"
            component={FlexLayoutGrid}
            source={FlexLayoutGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="FixedSizeGrid"
            component={FixedSizeGrid}
            source={FixedSizeGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="AutoHeightGrid"
            component={AutoHeightGrid}
            source={AutoHeightGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Layout;
