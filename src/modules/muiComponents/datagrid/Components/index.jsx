import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import CustomColumnMenu from "./CustomColumnMenu";
import CustomColumnMenuSource from "./CustomColumnMenu?raw";

import ToolbarGrid from "./ToolbarGrid";
import ToolbarGridSource from "./ToolbarGrid?raw";

import CustomToolbarGrid from "./CustomToolbarGrid";
import CustomToolbarGridSource from "./CustomToolbarGrid?raw";

import CustomFooter from "./CustomFooter";
import CustomFooterSource from "./CustomFooter?raw";

import CustomPaginationGrid from "./CustomPaginationGrid";
import CustomPaginationGridSource from "./CustomPaginationGrid?raw";

import CustomLoadingOverlayGrid from "./CustomLoadingOverlayGrid";
import CustomLoadingOverlayGridSource from "./CustomLoadingOverlayGrid?raw";

import RowContextMenu from "./RowContextMenu";
import RowContextMenuSource from "./RowContextMenu?raw";

import CellWithPopover from "./CellWithPopover";
import CellWithPopoverSource from "./CellWithPopover?raw";

import CustomSortIcons from "./CustomSortIcons";
import CustomSortIconsSource from "./CustomSortIcons?raw";

const Components = () => {
  return (
    <>
      <AppComponentHeader
        title="Components"
        description="Easily export the rows in various file formats such as CSV, Excel, or PDF."
        refUrl="https://mui.com/components/data-grid/components/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="Custom Column Menu"
            component={CustomColumnMenu}
            source={CustomColumnMenuSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Toolbar Grid"
            component={ToolbarGrid}
            source={ToolbarGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Custom Toolbar Grid"
            component={CustomToolbarGrid}
            source={CustomToolbarGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Custom Footer"
            component={CustomFooter}
            source={CustomFooterSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Custom Pagination Grid"
            component={CustomPaginationGrid}
            source={CustomPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Custom Loading Over layGrid"
            component={CustomLoadingOverlayGrid}
            source={CustomLoadingOverlayGridSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12}>
          <AppComponentCard
            title="Row Context Menu"
            component={RowContextMenu}
            source={RowContextMenuSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Cell With Popover"
            component={CellWithPopover}
            source={CellWithPopoverSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Cell With Popover"
            component={CellWithPopover}
            source={CellWithPopoverSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Custom Sort Icons"
            component={CustomSortIcons}
            source={CustomSortIconsSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Components;
