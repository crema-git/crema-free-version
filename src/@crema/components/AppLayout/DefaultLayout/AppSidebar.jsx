import React from "react";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import clsx from "clsx";
import PropTypes from "prop-types";
import AppScrollbar from "../../AppScrollbar";
import VerticalNav from "../components/VerticalNav";
import MainSidebar from "../components/MainSidebar";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import UserInfo from "../components/UserInfo";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";

const AppSidebar = ({
  toggleNavCollapsed,
  isNavCollapsed,
  routesConfig,
  variant = "",
  position = "left",
}) => {
  const { footer, footerType } = useLayoutContext();

  const { sidebarTextColor } = useSidebarContext();

  const handleToggleDrawer = () => {
    toggleNavCollapsed();
  };
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor={position}
          open={isNavCollapsed}
          onClose={() => handleToggleDrawer()}
          classes={{
            root: clsx(variant),
            paper: clsx(variant),
          }}
          style={{ position: "absolute" }}
        >
          <MainSidebar>
            <UserInfo color={sidebarTextColor} />
            <AppScrollbar
              sx={(theme) => ({
                py: 2,
                height: "calc(100vh - 70px) !important",
                borderTop: `solid 1px ${theme.palette.divider}`,
                mt: 0.5,
              })}
            >
              <VerticalNav routesConfig={routesConfig} />
            </AppScrollbar>
          </MainSidebar>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <MainSidebar>
          <UserInfo color={sidebarTextColor} />
          <AppScrollbar
            className={clsx(
              footer && footerType === "fixed" && "has-footer-fixed",
            )}
            sx={(theme) => ({
              py: 2,
              height: "calc(100vh - 70px) !important",
              borderTop: `solid 1px ${theme.palette.divider}`,
              mt: 0.5,

              "&.has-footer-fixed": {
                height: {
                  xs: "calc(100vh - 117px) !important",
                  xl: "calc(100vh - 127px) !important",
                },
              },
            })}
          >
            <VerticalNav routesConfig={routesConfig} />
          </AppScrollbar>
        </MainSidebar>
      </Hidden>
    </>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  routesConfig: PropTypes.array,
  isNavCollapsed: PropTypes.bool,
  toggleNavCollapsed: PropTypes.func,
};
