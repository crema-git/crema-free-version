import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import VerticalNav from '../../components/VerticalNav';
import StandardSidebarWrapper from './StandardSidebarWrapper';
import UserInfo from '../../components/UserInfo';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
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
          <StandardSidebarWrapper className="standard-sidebar">
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
          </StandardSidebarWrapper>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <StandardSidebarWrapper className="standard-sidebar">
          <MainSidebar>
            <UserInfo color={sidebarTextColor} />
            <AppScrollbar
              className={clsx({
                'has-footer-fixed': footer && footerType === 'fixed',
              })}
              sx={{
                py: 2,
                height: 'calc(100vh - 141px) !important',
                '&.has-footer-fixed': {
                  height: 'calc(100vh - 188px) !important',
                },
              }}
            >
              <VerticalNav routesConfig={props.routesConfig} />
            </AppScrollbar>
          </MainSidebar>
        </StandardSidebarWrapper>
      </Hidden>
    </>
  );
};
export default AppSidebar;

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  toggleNavCollapsed: PropTypes.func,
  routesConfig: PropTypes.array,
  isNavCollapsed: PropTypes.bool,
};
