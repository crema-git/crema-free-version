import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import Variants from "./Variants";
import VariantsSource from "./Variants?raw";

import Animations from "./Animations";
import AnimationsSource from "./Animations?raw";

import YouTube from "./YouTube";
import YouTubeSource from "./YouTube?raw";

import Facebook from "./Facebook";
import FacebookSource from "./Facebook?raw";

import SkeletonTypography from "./SkeletonTypography";
import SkeletonTypographySource from "./SkeletonTypography?raw";

import SkeletonChildren from "./SkeletonChildren";
import SkeletonChildrenSource from "./SkeletonChildren?raw";

import SkeletonColor from "./SkeletonColor";
import SkeletonColorSource from "./SkeletonColor?raw";

const Skeleton = () => {
  return (
    <>
      <AppComponentHeader
        title="Skeleton"
        description="Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration"
        refUrl="https://mui.com/components/skeleton//"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Variants"
            component={Variants}
            source={VariantsSource}
            noScrollbar
            description="The component supports 3 shape variants."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Skeleton Color"
            component={SkeletonColor}
            source={SkeletonColorSource}
            noScrollbar
            description="The component supports 3 shape variants."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Animations"
            component={Animations}
            source={AnimationsSource}
            noScrollbar
            description="The component supports 3 shape variants."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Skeleton Typography"
            component={SkeletonTypography}
            source={SkeletonTypographySource}
            noScrollbar
            description="The component supports 3 shape variants."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="YouTube"
            component={YouTube}
            source={YouTubeSource}
            noScrollbar
            description="The component supports 3 shape variants."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Skeleton Children"
            component={SkeletonChildren}
            source={SkeletonChildrenSource}
            noScrollbar
            description="The component supports 3 shape variants."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Facebook"
            component={Facebook}
            source={FacebookSource}
            noScrollbar
            description="The component supports 3 shape variants."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Skeleton;
