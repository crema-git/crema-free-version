import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicTimeline from "./BasicTimeline";
import BasicTimelineSource from "./BasicTimeline?raw";

import LeftPositionedTimeline from "./LeftPositionedTimeline";
import LeftPositionedTimelineSource from "./LeftPositionedTimeline?raw";

import ColorsTimeline from "./ColorsTimeline";
import ColorsTimelineSource from "./ColorsTimeline?raw";

import OutlinedTimeline from "./OutlinedTimeline";
import OutlinedTimelineSource from "./OutlinedTimeline?raw";

import OppositeContentTimeline from "./OppositeContentTimeline";
import OppositeContentTimelineSource from "./OppositeContentTimeline?raw";

import CustomizedTimeline from "./CustomizedTimeline";
import CustomizedTimelineSource from "./CustomizedTimeline?raw";

const Timeline = () => {
  return (
    <>
      <AppComponentHeader
        title="Timeline"
        description="The timeline displays a list of events in chronological order."
        refUrl="https://mui.com/components/timeline/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="BasicTimeline"
            component={BasicTimeline}
            source={BasicTimelineSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ColorsTimeline"
            component={ColorsTimeline}
            source={ColorsTimelineSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="LeftPositionedTimeline"
            component={LeftPositionedTimeline}
            source={LeftPositionedTimelineSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="OutlinedTimeline"
            component={OutlinedTimeline}
            source={OutlinedTimelineSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="OppositeContentTimeline"
            component={OppositeContentTimeline}
            source={OppositeContentTimelineSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="CustomizedTimeline"
            component={CustomizedTimeline}
            source={CustomizedTimelineSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Timeline;
