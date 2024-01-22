import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import SimpleAccordion from "./SimpleAccordion";
import SimpleAccordionSource from "./SimpleAccordion?raw";

import ControlledAccordions from "./ControlledAccordions";
import ControlledAccordionsSource from "./ControlledAccordions?raw";

import CustomizedAccordions from "./CustomizedAccordions";
import CustomizedAccordionsSource from "./CustomizedAccordions?raw";

const Accordion = () => {
  return (
    <>
      <AppComponentHeader
        title="Accordion"
        description="Accordions contain creation flows and allow lightweight editing of an element"
        refUrl="https://mui.com/components/accordion/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="Controlled Accordions"
            component={ControlledAccordions}
            source={ControlledAccordionsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Customized Accordions"
            component={CustomizedAccordions}
            source={CustomizedAccordionsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Basic accordion"
            component={SimpleAccordion}
            source={SimpleAccordionSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Accordion;
