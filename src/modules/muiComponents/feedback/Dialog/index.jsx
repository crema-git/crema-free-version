import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import SimpleDialog from "./SimpleDialog";
import SimpleDialogSource from "./SimpleDialog?raw";

import AlertDialog from "./AlertDialog";
import AlertDialogSource from "./AlertDialog?raw";

import AlertDialogSlide from "./AlertDialogSlide";
import AlertDialogSlideSource from "./AlertDialogSlide?raw";

import FormDialog from "./FormDialog";
import FormDialogSource from "./FormDialog?raw";

import CustomizedDialogs from "./CustomizedDialogs";
import CustomizedDialogsSource from "./CustomizedDialogs?raw";

import FullScreenDialog from "./FullScreenDialog";
import FullScreenDialogSource from "./FullScreenDialog?raw";

import MaxWidthDialog from "./MaxWidthDialog";
import MaxWidthDialogSource from "./MaxWidthDialog?raw";

import ResponsiveDialog from "./ResponsiveDialog";
import ResponsiveDialogSource from "./ResponsiveDialog?raw";

import ConfirmationDialog from "./ConfirmationDialog";
import ConfirmationDialogSource from "./ConfirmationDialog?raw";

import DraggableDialog from "./DraggableDialog";
import DraggableDialogSource from "./DraggableDialog?raw";

import ScrollDialog from "./ScrollDialog";
import ScrollDialogSource from "./ScrollDialog?raw";

const Dialog = () => {
  return (
    <>
      <AppComponentHeader
        title="Dialog"
        description="Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."
        refUrl="https://mui.com/components/dialogs/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Alert Dialog"
            component={AlertDialog}
            source={AlertDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Alert Dialog Slide"
            component={AlertDialogSlide}
            source={AlertDialogSlideSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Form Dialog"
            component={FormDialog}
            source={FormDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customized Dialogs"
            component={CustomizedDialogs}
            source={CustomizedDialogsSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FullScreen Dialogs"
            component={FullScreenDialog}
            source={FullScreenDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Max Width Dialog"
            component={MaxWidthDialog}
            source={MaxWidthDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Responsive Dialog"
            component={ResponsiveDialog}
            source={ResponsiveDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="DraggableDialog"
            component={DraggableDialog}
            source={DraggableDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Scroll Dialog"
            component={ScrollDialog}
            source={ScrollDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Simple Dialog"
            component={SimpleDialog}
            source={SimpleDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ConfirmationDialog"
            component={ConfirmationDialog}
            source={ConfirmationDialogSource}
            noScrollbar
            description="Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Dialog;
