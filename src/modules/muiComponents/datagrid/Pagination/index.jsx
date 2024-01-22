import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicPaginationGrid from "./BasicPaginationGrid";
import BasicPaginationGridSource from "./BasicPaginationGrid?raw";

import SizePaginationGrid from "./SizePaginationGrid";
import SizePaginationGridSource from "./SizePaginationGrid?raw";

import ControlledPaginationGrid from "./ControlledPaginationGrid";
import ControlledPaginationGridSource from "./ControlledPaginationGrid?raw";

import AutoPaginationGrid from "./AutoPaginationGrid";
import AutoPaginationGridSource from "./AutoPaginationGrid?raw";

import ServerPaginationGrid from "./ServerPaginationGrid";
import ServerPaginationGridSource from "./ServerPaginationGrid?raw";

import CursorPaginationGrid from "./CursorPaginationGrid";
import CursorPaginationGridSource from "./CursorPaginationGrid?raw";

import BasisPaginationGrid from "./BasisPaginationGrid";
import BasisPaginationGridSource from "./BasisPaginationGrid?raw";

import ApiRefPaginationGrid from "./ApiRefPaginationGrid";
import ApiRefPaginationGridSource from "./ApiRefPaginationGrid?raw";

const Pagination = () => {
  return (
    <>
      <AppComponentHeader
        title="Pagination"
        description="Through pagination, a segment of data can be viewed from the assigned data source."
        refUrl="https://mui.com/components/data-grid/pagination/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="BasicPaginationGrid"
            component={BasicPaginationGrid}
            source={BasicPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="SizePaginationGrid"
            component={SizePaginationGrid}
            source={SizePaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ControlledPaginationGrid"
            component={ControlledPaginationGrid}
            source={ControlledPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="AutoPaginationGrid"
            component={AutoPaginationGrid}
            source={AutoPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ServerPaginationGrid"
            component={ServerPaginationGrid}
            source={ServerPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="CursorPaginationGrid"
            component={CursorPaginationGrid}
            source={CursorPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="BasisPaginationGrid"
            component={BasisPaginationGrid}
            source={BasisPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="ApiRefPaginationGrid"
            component={ApiRefPaginationGrid}
            source={ApiRefPaginationGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Pagination;
