import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import VerticalNav from '../../components/VerticalNav';
import SidebarWrapper from './SidebarWrapper';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import UserInfo from '../../components/UserInfo';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';

const AppSidebar = ({ variant = '', position = 'left', ...props }) => {
  const { footer, footerType } = useLayoutContext();

  const { sidebarTextColor } = useSidebarContext();

  return (
    <>
      <Hidden xlUp>
        <Drawer
          anchor={position}
          open={props.isNavCollapsed}
          onClose={props.toggleNavCollapsed}
          classes={{
            root: clsx(variant),
            paper: clsx(variant),
          }}
          style={{ position: 'absolute' }}
        >
          <SidebarWrapper className="mini-toggle-sidebar">
            <MainSidebar>
              <UserInfo color={sidebarTextColor} />
              <AppScrollbar
                sx={{
                  py: 2,
                  height: 'calc(100vh - 70px) !important',
                }}
              >
                <VerticalNav routesConfig={props.routesConfig} />
              </AppScrollbar>
            </MainSidebar>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <SidebarWrapper className="mini-toggle-sidebar">
          <MainSidebar>
            <UserInfo color={sidebarTextColor} />
            <AppScrollbar
              className={clsx({
                'has-footer-fixed': footer && footerType === 'fixed',
              })}
              sx={{
                py: 2,
                height: 'calc(100vh - 70px) !important',
                '&.has-footer-fixed': {
                  height: 'calc(100vh - 117px) !important',
                },
              }}
            >
              <VerticalNav routesConfig={props.routesConfig} />
            </AppScrollbar>
          </MainSidebar>
        </SidebarWrapper>
      </Hidden>
    </>
  );
};
export default AppSidebar;

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  toggleNavCollapsed: PropTypes.func,
  isNavCollapsed: PropTypes.bool,
  routes: PropTypes.object,
  routesConfig: PropTypes.array,
};
