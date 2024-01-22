import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import TemporaryDrawer from "./TemporaryDrawer";
import TemporaryDrawerSource from "./TemporaryDrawer?raw";

import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import SwipeableTemporaryDrawerSource from "./SwipeableTemporaryDrawer?raw";

import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";
import SwipeableEdgeDrawerSource from "./SwipeableEdgeDrawer?raw";

import ResponsiveDrawer from "./ResponsiveDrawer";
import ResponsiveDrawerSource from "./ResponsiveDrawer?raw";

import PersistentDrawerLeft from "./PersistentDrawerLeft";
import PersistentDrawerLeftSource from "./PersistentDrawerLeft?raw";

import PersistentDrawerRight from "./PersistentDrawerRight";
import PersistentDrawerRightSource from "./PersistentDrawerRight?raw";

import MiniDrawer from "./MiniDrawer";
import MiniDrawerSource from "./MiniDrawer?raw";

import PermanentDrawerLeft from "./PermanentDrawerLeft";
import PermanentDrawerLeftSource from "./PermanentDrawerLeft?raw";

import PermanentDrawerRight from "./PermanentDrawerRight";
import PermanentDrawerRightSource from "./PermanentDrawerRight?raw";

import ClippedDrawer from "./ClippedDrawer";
import ClippedDrawerSource from "./ClippedDrawer?raw";

const BottomNavigation = () => {
  return (
    <>
      <AppComponentHeader
        title="Drawer"
        description="Navigation drawers provide access to destinations in your app. Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen."
        refUrl="https://mui.com/components/drawers/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Temporary drawer"
            component={TemporaryDrawer}
            source={TemporaryDrawerSource}
            noScrollbar
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Swipeable Temporary Drawer"
            component={SwipeableTemporaryDrawer}
            source={SwipeableTemporaryDrawerSource}
            noScrollbar
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Swipeable Edge Drawer"
            component={SwipeableEdgeDrawer}
            source={SwipeableEdgeDrawerSource}
            noScrollbar
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Responsive Drawer"
            component={ResponsiveDrawer}
            source={ResponsiveDrawerSource}
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Persistent Drawer Left"
            component={PersistentDrawerLeft}
            source={PersistentDrawerLeftSource}
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Persistent Drawer Right"
            component={PersistentDrawerRight}
            source={PersistentDrawerRightSource}
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Mini Drawer"
            component={MiniDrawer}
            source={MiniDrawerSource}
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Permanent Drawer Left"
            component={PermanentDrawerLeft}
            source={PermanentDrawerLeftSource}
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Permanent Drawer Right"
            component={PermanentDrawerRight}
            source={PermanentDrawerRightSource}
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Clipped Drawer"
            component={ClippedDrawer}
            source={ClippedDrawerSource}
            description="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default BottomNavigation;
