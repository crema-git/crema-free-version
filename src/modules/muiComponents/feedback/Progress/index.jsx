import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import CircularIndeterminate from "./CircularIndeterminate";
import CircularIndeterminateSource from "./CircularIndeterminate?raw";

import CircularColor from "./CircularColor";
import CircularColorSource from "./CircularColor?raw";

import CircularDeterminate from "./CircularDeterminate";
import CircularDeterminateSource from "./CircularDeterminate?raw";

import CircularIntegration from "./CircularIntegration";
import CircularIntegrationSource from "./CircularIntegration?raw";

import CircularStatic from "./CircularStatic";
import CircularStaticSource from "./CircularStatic?raw";

import LinearIndeterminate from "./LinearIndeterminate";
import LinearIndeterminateSource from "./LinearIndeterminate?raw";

import LinearColor from "./LinearColor";
import LinearColorSource from "./LinearColor?raw";

import LinearDeterminate from "./LinearDeterminate";
import LinearDeterminateSource from "./LinearDeterminate?raw";

import LinearBuffer from "./LinearBuffer";
import LinearBufferSource from "./LinearBuffer?raw";

import LinearWithValueLabel from "./LinearWithValueLabel";
import LinearWithValueLabelSource from "./LinearWithValueLabel?raw";

import CustomizedProgressBars from "./CustomizedProgressBars";
import CustomizedProgressBarsSource from "./CustomizedProgressBars?raw";

import DelayingAppearance from "./DelayingAppearance";
import DelayingAppearanceSource from "./DelayingAppearance?raw";

import CircularUnderLoad from "./CircularUnderLoad";
import CircularUnderLoadSource from "./CircularUnderLoad?raw";

const Progress = () => {
  return (
    <>
      <AppComponentHeader
        title="Progress"
        description="Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process"
        refUrl="https://mui.com/components/progress/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Circular indeterminate"
            component={CircularIndeterminate}
            source={CircularIndeterminateSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Circular Color"
            component={CircularColor}
            source={CircularColorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Circular Determinate"
            component={CircularDeterminate}
            source={CircularDeterminateSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Circular Static"
            component={CircularStatic}
            source={CircularStaticSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Linear Indeterminate"
            component={LinearIndeterminate}
            source={LinearIndeterminateSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Linear Determinate"
            component={LinearDeterminate}
            source={LinearDeterminateSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Linear Buffer"
            component={LinearBuffer}
            source={LinearBufferSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Linear With Value Label"
            component={LinearWithValueLabel}
            source={LinearWithValueLabelSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Linear Color"
            component={LinearColor}
            source={LinearColorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Circular Under Load"
            component={CircularUnderLoad}
            source={CircularUnderLoadSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CustomizedProgressBars"
            component={CustomizedProgressBars}
            source={CustomizedProgressBarsSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Circular Integration"
            component={CircularIntegration}
            source={CircularIntegrationSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="DelayingAppearance"
            component={DelayingAppearance}
            source={DelayingAppearanceSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Progress;
