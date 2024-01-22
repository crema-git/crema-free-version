import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicMenu from "./BasicMenu";
import BasicMenuSource from "./BasicMenu?raw";

import IconMenu from "./IconMenu";
import IconMenuSource from "./IconMenu?raw";

import DenseMenu from "./DenseMenu";
import DenseMenuSource from "./DenseMenu?raw";

import SimpleListMenu from "./SimpleListMenu";
import SimpleListMenuSource from "./SimpleListMenu?raw";

import PositionedMenu from "./PositionedMenu";
import PositionedMenuSource from "./PositionedMenu?raw";

import MenuListComposition from "./MenuListComposition";
import MenuListCompositionSource from "./MenuListComposition?raw";

import AccountMenu from "./AccountMenu";
import AccountMenuSource from "./AccountMenu?raw";

import CustomizedMenus from "./CustomizedMenus";
import CustomizedMenusSource from "./CustomizedMenus?raw";

import LongMenu from "./LongMenu";
import LongMenuSource from "./LongMenu?raw";

import TypographyMenu from "./TypographyMenu";
import TypographyMenuSource from "./TypographyMenu?raw";

import FadeMenu from "./FadeMenu";
import FadeMenuSource from "./FadeMenu?raw";

import ContextMenu from "./ContextMenu";
import ContextMenuSource from "./ContextMenu?raw";

const Menu = () => {
  return (
    <>
      <AppComponentHeader
        title="Menu"
        description="Menus display a list of choices on temporary surfaces."
        refUrl="https://mui.com/components/menus/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic menu"
            component={BasicMenu}
            source={BasicMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Positioned Menu"
            component={PositionedMenu}
            source={PositionedMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Context Menu"
            component={ContextMenu}
            source={ContextMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Icon Menu"
            component={IconMenu}
            source={IconMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Menu List Composition"
            component={MenuListComposition}
            source={MenuListCompositionSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SimpleList Menu"
            component={SimpleListMenu}
            source={SimpleListMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Account Menu"
            component={AccountMenu}
            source={AccountMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customized Menus"
            component={CustomizedMenus}
            source={CustomizedMenusSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Long Menu"
            component={LongMenu}
            source={LongMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Fade Menu"
            component={FadeMenu}
            source={FadeMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Dense Menu"
            component={DenseMenu}
            source={DenseMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Typography Menu"
            component={TypographyMenu}
            source={TypographyMenuSource}
            noScrollbar
            description="A basic menu opens over the anchor element by default (this option can be changed via props)."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Menu;
