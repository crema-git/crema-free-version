import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicCard from "./BasicCard";
import BasicCardSource from "./BasicCard?raw";

import OutlinedCard from "./OutlinedCard";
import OutlinedCardSource from "./OutlinedCard?raw";

import RecipeReviewCard from "./RecipeReviewCard";
import RecipeReviewCardSource from "./RecipeReviewCard?raw";

import MediaCard from "./MediaCard";
import MediaCardSource from "./MediaCard?raw";

const Card = () => {
  return (
    <>
      <AppComponentHeader
        title="Card"
        description="Cards contain content and actions about a single subject."
        refUrl="https://mui.com/components/cards/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic alerts"
            component={BasicCard}
            source={BasicCardSource}
            noScrollbar
            description="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Outlined Card"
            component={OutlinedCard}
            source={OutlinedCardSource}
            noScrollbar
            description="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Recipe Review Card"
            component={RecipeReviewCard}
            source={RecipeReviewCardSource}
            noScrollbar
            description="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Media Card"
            component={MediaCard}
            source={MediaCardSource}
            noScrollbar
            description="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Card;
