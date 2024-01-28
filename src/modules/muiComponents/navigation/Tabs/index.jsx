import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicTabs from "./BasicTabs";
import BasicTabsSource from "./BasicTabs?raw";

import LabTabs from "./LabTabs";
import LabTabsSource from "./LabTabs?raw";

import TabsWrappedLabel from "./TabsWrappedLabel";
import TabsWrappedLabelSource from "./TabsWrappedLabel?raw";

import ColorTabs from "./ColorTabs";
import ColorTabsSource from "./ColorTabs?raw";

import DisabledTabs from "./DisabledTabs";
import DisabledTabsSource from "./DisabledTabs?raw";

import CenteredTabs from "./CenteredTabs";
import CenteredTabsSource from "./CenteredTabs?raw";

import ScrollableTabsButtonAuto from "./ScrollableTabsButtonAuto";
import ScrollableTabsButtonAutoSource from "./ScrollableTabsButtonAuto?raw";

import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";
import ScrollableTabsButtonForceSource from "./ScrollableTabsButtonForce?raw";

import ScrollableTabsButtonVisible from "./ScrollableTabsButtonVisible";
import ScrollableTabsButtonVisibleSource from "./ScrollableTabsButtonVisible?raw";

import CustomizedTabs from "./CustomizedTabs";
import CustomizedTabsSource from "./CustomizedTabs?raw";

import VerticalTabs from "./VerticalTabs";
import VerticalTabsSource from "./VerticalTabs?raw";

import NavTabs from "./NavTabs";
import NavTabsSource from "./NavTabs?raw";

import IconTabs from "./IconTabs";
import IconTabsSource from "./IconTabs";

import IconLabelTabs from "./IconLabelTabs";
import IconLabelTabsSource from "./IconLabelTabs";

import IconPosition from "./IconPosition";
import IconPositionSource from "./IconPosition";

import AccessibleTabs1 from "./AccessibleTabs1";
import AccessibleTabs1Source from "./AccessibleTabs1";

import AccessibleTabs2 from "./AccessibleTabs2";
import AccessibleTabs2Source from "./AccessibleTabs2";

const Tabs = () => {
  return (
    <>
      <AppComponentHeader
        title="Tabs"
        description="Tabs make it easy to explore and switch between different views."
        refUrl="https://mui.com/components/tabs/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic tabs"
            component={BasicTabs}
            source={BasicTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Lab Tabs"
            component={LabTabs}
            source={LabTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Tabs Wrapped Label"
            component={TabsWrappedLabel}
            source={TabsWrappedLabelSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Color Tabs"
            component={ColorTabs}
            source={ColorTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Disabled Tabs"
            component={DisabledTabs}
            source={DisabledTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Centered Tabs"
            component={CenteredTabs}
            source={CenteredTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Scrollable Tabs Button Auto"
            component={ScrollableTabsButtonAuto}
            source={ScrollableTabsButtonAutoSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Scrollable Tabs Button Force"
            component={ScrollableTabsButtonForce}
            source={ScrollableTabsButtonForceSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Scrollable Tabs Button Visible"
            component={ScrollableTabsButtonVisible}
            source={ScrollableTabsButtonVisibleSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Nav Tabs"
            component={NavTabs}
            source={NavTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Icon Position"
            component={IconPosition}
            source={IconPositionSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Icon Label Tabs"
            component={IconLabelTabs}
            source={IconLabelTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Icon Tabs"
            component={IconTabs}
            source={IconTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Accessible Tabs1"
            component={AccessibleTabs1}
            source={AccessibleTabs1Source}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Accessible Tabs2"
            component={AccessibleTabs2}
            source={AccessibleTabs2Source}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customized Tabs"
            component={CustomizedTabs}
            source={CustomizedTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Vertical Tabs"
            component={VerticalTabs}
            source={VerticalTabsSource}
            noScrollbar
            description="A basic example with tab panels."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Tabs;
