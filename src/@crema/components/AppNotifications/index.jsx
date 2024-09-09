import React, { useState } from "react";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppNotificationContent from "./AppNotificationContent";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AppTooltip from "../AppTooltip";
import { alpha } from "@mui/material/styles";

const AppNotifications = ({
  isMenu,
  sxNotificationContentStyle,
  drawerPosition = "right",
  tooltipPosition = "bottom",
}) => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      {isMenu ? (
        <Box component="span" onClick={() => setShowNotification(true)}>
          Message
        </Box>
      ) : (
        <AppTooltip title="Notification" placement={tooltipPosition}>
          <IconButton
            className="icon-btn"
            sx={(theme) => ({
              borderRadius: "50%",
              width: 40,
              height: 40,
              color: theme.palette.text.secondary,
              backgroundColor: theme.palette.background.default,
              border: 1,
              borderColor: "transparent",

              "&:hover, &:focus": {
                color: theme.palette.text.primary,
                backgroundColor: (theme) =>
                  alpha(theme.palette.background.default, 0.9),
                borderColor: (theme) =>
                  alpha(theme.palette.text.secondary, 0.25),
              },
            })}
            onClick={() => setShowNotification(true)}
            size="large"
          >
            <NotificationsNoneIcon />
          </IconButton>
        </AppTooltip>
      )}
      <Drawer
        anchor={drawerPosition}
        open={showNotification}
        onClose={() => setShowNotification(false)}
      >
        <AppNotificationContent
          sxStyle={sxNotificationContentStyle}
          onClose={() => setShowNotification(false)}
        />
      </Drawer>
    </>
  );
};

export default AppNotifications;

AppNotifications.propTypes = {
  drawerPosition: PropTypes.string,
  tooltipPosition: PropTypes.string,
  isMenu: PropTypes.bool,
  sxNotificationContentStyle: PropTypes.object,
};
