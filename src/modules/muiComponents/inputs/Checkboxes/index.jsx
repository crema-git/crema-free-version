import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";
import BasicCheckboxes from "./BasicCheckboxes";
import BasicCheckboxesSource from "./BasicCheckboxes?raw";
import CheckboxLabels from "./CheckboxLabels";
import CheckboxLabelsSource from "./CheckboxLabels?raw";
import SizeCheckboxes from "./SizeCheckboxes";
import SizeCheckboxesSource from "./SizeCheckboxes?raw";
import ColorCheckboxes from "./ColorCheckboxes";
import ColorCheckboxesSource from "./ColorCheckboxes?raw";
import IconCheckboxes from "./IconCheckboxes";
import IconCheckboxesSource from "./IconCheckboxes?raw";
import ControlledCheckbox from "./Controlled";
import ControlledCheckboxSource from "./Controlled?raw";
import IndeterminateCheckbox from "./Indeterminate";
import IndeterminateCheckboxSource from "./Indeterminate?raw";
import CheckboxesGroup from "./FormGroup";
import CheckboxesGroupSource from "./FormGroup?raw";
import FormControlLabelPosition from "./LabelPlacement";
import FormControlLabelPositionSource from "./LabelPlacement?raw";
import CustomizedCheckbox from "./Customization";
import CustomizedCheckboxSource from "./Customization?raw";

const Checkboxes = () => {
  return (
    <>
      <AppComponentHeader
        title="Checkbox"
        description="Checkboxes allow the user to select one or more items from a set."
        refUrl="https://mui.com/components/checkboxes/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic checkboxes"
            component={BasicCheckboxes}
            source={BasicCheckboxesSource}
            noScrollbar
            description="Checkboxes can be used to turn an option on or off."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Checkbox Labels"
            component={CheckboxLabels}
            source={CheckboxLabelsSource}
            noScrollbar
            description="You can provide a label to the Checkbox thanks to the FormControlLabel component."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Size Checkboxes"
            component={SizeCheckboxes}
            source={SizeCheckboxesSource}
            noScrollbar
            description="Use the size prop or customize the font size of the svg icons to change the size of the checkboxes."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Color Checkboxes"
            component={ColorCheckboxes}
            source={ColorCheckboxesSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Icon Checkboxes"
            component={IconCheckboxes}
            source={IconCheckboxesSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Controlled Checkbox"
            component={ControlledCheckbox}
            source={ControlledCheckboxSource}
            noScrollbar
            description="You can control the checkbox with the checked and onChange props:"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Indeterminate Checkbox"
            component={IndeterminateCheckbox}
            source={IndeterminateCheckboxSource}
            noScrollbar
            description="A checkbox input can only have two states in a form: checked or unchecked. It either submits its value or does not. Visually, there are three states a checkbox can be in: checked, unchecked, or indeterminate."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Checkboxes Group"
            component={CheckboxesGroup}
            source={CheckboxesGroupSource}
            noScrollbar
            description="FormGroup is a helpful wrapper used to group selection control components."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FormControl Label Position"
            component={FormControlLabelPosition}
            source={FormControlLabelPositionSource}
            noScrollbar
            description="You can change the placement of the label."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customized Checkbox"
            component={CustomizedCheckbox}
            source={CustomizedCheckboxSource}
            noScrollbar
            description="Here is an example of customizing the component. You can learn more about this in the overrides documentation page."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Checkboxes;
