import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicTrapFocus from "./BasicTrapFocus";
import BasicTrapFocusSource from "./BasicTrapFocus?raw";

import DisableEnforceFocus from "./DisableEnforceFocus";
import DisableEnforceFocusSource from "./DisableEnforceFocus?raw";

import LazyTrapFocus from "./LazyTrapFocus";
import LazyTrapFocusSource from "./LazyTrapFocus?raw";

import ToggleTrapFocus from "./ToggleTrapFocus";
import ToggleTrapFocusSource from "./ToggleTrapFocus?raw";

const TrapFocus = () => {
  return (
    <>
      <AppComponentHeader
        title="TrapFocus"
        description="The timeline displays a list of events in chronological order."
        refUrl="https://mui.com/components/timeline/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="BasicTrapFocus"
            component={BasicTrapFocus}
            source={BasicTrapFocusSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="DisableEnforceFocus"
            component={DisableEnforceFocus}
            source={DisableEnforceFocusSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="LazyTrapFocus"
            component={LazyTrapFocus}
            source={LazyTrapFocusSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ToggleTrapFocus"
            component={ToggleTrapFocus}
            source={ToggleTrapFocusSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TrapFocus;
