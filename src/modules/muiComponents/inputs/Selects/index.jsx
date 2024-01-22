import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicSelect from "./BasicSelect";
import BasicSelectSource from "./BasicSelect?raw";
import SelectVariants from "./SelectVariants";
import SelectVariantsSource from "./SelectVariants?raw";
import SelectLabels from "./LabelsHelperText";
import SelectLabelsSource from "./LabelsHelperText?raw";
import SelectAutoWidth from "./AutoWidth";
import SelectAutoWidthSource from "./AutoWidth?raw";
import SelectOtherProps from "./SelectOtherProps";
import SelectOtherPropsSource from "./SelectOtherProps?raw";
import NativeSelectDemo from "./NativeSelect";
import NativeSelectDemoSource from "./NativeSelect?raw";
import CustomizedSelects from "./Customization";
import CustomizedSelectsSource from "./Customization?raw";
import MultipleSelect from "./MultipleSelect";
import MultipleSelectSource from "./MultipleSelect?raw";
import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import MultipleSelectCheckmarksSource from "./MultipleSelectCheckmarks?raw";
import MultipleSelectChip from "./MultipleSelectChip";
import MultipleSelectChipSource from "./MultipleSelectChip?raw";
import MultipleSelectPlaceholder from "./MultipleSelectPlaceholder";
import MultipleSelectPlaceholderSource from "./MultipleSelectPlaceholder?raw";
import MultipleSelectNative from "./MultipleSelectNative";
import MultipleSelectNativeSource from "./MultipleSelectNative?raw";
import ControlledOpenSelect from "./ControlledOpenSelect";
import ControlledOpenSelectSource from "./ControlledOpenSelect?raw";
import DialogSelect from "./DialogSelect";
import DialogSelectSource from "./DialogSelect?raw";
import GroupedSelect from "./GroupedSelect";
import GroupedSelectSource from "./GroupedSelect?raw";

const Selects = () => {
  return (
    <>
      <AppComponentHeader
        title="Select"
        description="Select components are used for collecting user provided information from a list of options."
        refUrl="https://mui.com/components/selects/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic select"
            component={BasicSelect}
            source={BasicSelectSource}
            noScrollbar
            description="Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Labels and helper text"
            component={SelectLabels}
            source={SelectLabelsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Filled and standard variants"
            component={SelectVariants}
            source={SelectVariantsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Auto width"
            component={SelectAutoWidth}
            source={SelectAutoWidthSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Other props"
            component={SelectOtherProps}
            source={SelectOtherPropsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customization"
            component={CustomizedSelects}
            source={CustomizedSelectsSource}
            noScrollbar
            description="Here are some examples of customizing the component. You can learn more about this in the overrides documentation page."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Native select"
            component={NativeSelectDemo}
            source={NativeSelectDemoSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Multiple Select"
            component={MultipleSelect}
            source={MultipleSelectSource}
            noScrollbar
            description="The Select component can handle multiple selections. It enabled with the multiple prop."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Dialog Select"
            component={DialogSelect}
            source={DialogSelectSource}
            noScrollbar
            description="While it discouraged by the Material Design guidelines, you can use a select inside a dialog."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Multiple Select Checkmarks"
            component={MultipleSelectCheckmarks}
            source={MultipleSelectCheckmarksSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Multiple Select Chip"
            component={MultipleSelectChip}
            source={MultipleSelectChipSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Multiple Select Placeholder"
            component={MultipleSelectPlaceholder}
            source={MultipleSelectPlaceholderSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Multiple Select Native"
            component={MultipleSelectNative}
            source={MultipleSelectNativeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Controlled Open Select"
            component={ControlledOpenSelect}
            source={ControlledOpenSelectSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Grouped Select"
            component={GroupedSelect}
            source={GroupedSelectSource}
            noScrollbar
            description="Display categories with the ListSubheader component or the native <optgroup> element."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Selects;
