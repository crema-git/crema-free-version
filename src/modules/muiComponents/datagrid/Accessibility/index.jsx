import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import DensitySelectorGrid from "./DensitySelectorGrid";
import DensitySelectorSmallGrid from "./DensitySelectorGrid";
import DensitySelectorGridSource from "./DensitySelectorGrid";
import DensitySelectorSmallGridSource from "./DensitySelectorSmallGrid?raw";

const Accessibility = () => {
  return (
    <>
      <AppComponentHeader
        title="Accessibility"
        description="The Data Grid has complete accessibility support. For instance, every cell is accessible using the keyboard."
        refUrl="https://mui.com/components/data-grid/accessibility/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="DensitySelectorGrid"
            component={DensitySelectorGrid}
            source={DensitySelectorGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="DensitySelectorSmallGrid"
            component={DensitySelectorSmallGrid}
            source={DensitySelectorSmallGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Accessibility;
