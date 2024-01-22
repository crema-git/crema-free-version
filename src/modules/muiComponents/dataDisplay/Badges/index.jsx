import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import SimpleBadge from "./BasicBadge";
import SimpleBadgeSource from "./BasicBadge?raw";
import ColorBadge from "./Color";
import ColorBadgeSource from "./Color?raw";
import CustomizedBadges from "./Customization";
import CustomizedBadgesSource from "./Customization?raw";
import BadgeVisibility from "./BadgeVisibility";
import BadgeVisibilitySource from "./BadgeVisibility?raw";
import BadgeMax from "./MaximumValue";
import BadgeMaxSource from "./MaximumValue?raw";
import DotBadge from "./DotBadge";
import DotBadgeSource from "./DotBadge?raw";
import BadgeOverlap from "./BadgeOverlap";
import BadgeOverlapSource from "./BadgeOverlap?raw";
import AccessibleBadges from "./Accessibility";
import AccessibleBadgesSource from "./Accessibility?raw";

const Badges = () => {
  return (
    <>
      <AppComponentHeader
        title="Badge"
        description="Badge generates a small badge to the top-right of its child(ren)."
        refUrl="https://mui.com/components/badges/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic badge"
            component={SimpleBadge}
            source={SimpleBadgeSource}
            noScrollbar
            description="Examples of badges containing text, using primary and secondary colors. The badge is applied to its children."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Color"
            component={ColorBadge}
            source={ColorBadgeSource}
            noScrollbar
            description="Use color prop to apply theme palette to component."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customization"
            component={CustomizedBadges}
            source={CustomizedBadgesSource}
            noScrollbar
            description="Here is an example of customizing the component. You can learn more about this in the overrides documentation page."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Badge visibility"
            component={BadgeVisibility}
            source={BadgeVisibilitySource}
            noScrollbar
            description="The visibility of badges can be controlled using the invisible prop."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Maximum value"
            component={BadgeMax}
            source={BadgeMaxSource}
            noScrollbar
            description="You can use the max prop to cap the value of the badge content."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Dot badge"
            component={DotBadge}
            source={DotBadgeSource}
            noScrollbar
            description="The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Badge overlap"
            component={BadgeOverlap}
            source={BadgeOverlapSource}
            noScrollbar
            description="You can use the overlap prop to place the badge relative to the corner of the wrapped element."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Accessibility"
            component={AccessibleBadges}
            source={AccessibleBadgesSource}
            noScrollbar
            description="You can not rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with aria-label:"
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Badges;
