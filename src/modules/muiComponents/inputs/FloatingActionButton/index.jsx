import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import FloatingActionButtons from "./BasicFab";
import FloatingActionButtonsSource from "./BasicFab?raw";
import FloatingActionButtonSize from "./Size";
import FloatingActionButtonSizeSource from "./Size?raw";

const FloatingActionButton = () => {
  return (
    <>
      <AppComponentHeader
        title="Floating action button"
        description="A floating action button (FAB) performs the primary, or most common, action on a screen."
        refUrl="https://mui.com/components/floating-action-button/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic FAB"
            component={FloatingActionButtons}
            source={FloatingActionButtonsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Size"
            component={FloatingActionButtonSize}
            source={FloatingActionButtonSizeSource}
            noScrollbar
            description="By default, the size is large. Use the size prop for smaller floating action buttons."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default FloatingActionButton;
