import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicSwitches from "./BasicSwitches";
import BasicSwitchesSource from "./BasicSwitches?raw";
import SwitchLabels from "./Label";
import SwitchLabelsSource from "./Label?raw";
import SwitchesSize from "./Size";
import SwitchesSizeSource from "./Size?raw";
import ColorSwitches from "./Color";
import ColorSwitchesSource from "./Color?raw";
import ControlledSwitches from "./Controlled";
import ControlledSwitchesSource from "./Controlled?raw";
import SwitchesGroup from "./SwitchesFormGroup";
import SwitchesGroupSource from "./SwitchesFormGroup?raw";
import CustomizedSwitches from "./Customization";
import CustomizedSwitchesSource from "./Customization?raw";
import FormControlLabelPosition from "./LabelPlacement";
import FormControlLabelPositionSource from "./LabelPlacement?raw";

const Switches = () => {
  return (
    <>
      <AppComponentHeader
        title="Switch"
        description="Switches toggle the state of a single setting on or off."
        refUrl="https://mui.com/components/switches/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic Switches"
            component={BasicSwitches}
            source={BasicSwitchesSource}
            noScrollbar
            description="Switches are the preferred way to adjust settings on mobile."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Size"
            component={SwitchesSize}
            source={SwitchesSizeSource}
            noScrollbar
            description="Use the size prop to change the size of the switch."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Controlled"
            component={ControlledSwitches}
            source={ControlledSwitchesSource}
            noScrollbar
            description="You can control the switch with the checked and onChange props:"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Label"
            component={SwitchLabels}
            source={SwitchLabelsSource}
            noScrollbar
            description="You can provide a label to the Switch thanks to the FormControlLabel component."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Switches with FormGroup"
            component={SwitchesGroup}
            source={SwitchesGroupSource}
            noScrollbar
            description="FormGroup is a helpful wrapper used to group selection controls components that provides an easier API. "
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customization"
            component={CustomizedSwitches}
            source={CustomizedSwitchesSource}
            noScrollbar
            description="Here are some examples of customizing the component. You can learn more about this in the overrides documentation page."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Color"
            component={ColorSwitches}
            source={ColorSwitchesSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Label placement"
            component={FormControlLabelPosition}
            source={FormControlLabelPositionSource}
            noScrollbar
            description="You can change the placement of the label:"
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Switches;
