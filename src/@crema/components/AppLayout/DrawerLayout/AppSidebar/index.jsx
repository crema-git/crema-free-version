import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import Drawer from '@mui/material/Drawer';
import VerticalNav from '../../components/VerticalNav';
import StandardSidebarWrapper from './StandardSidebarWrapper';
import UserInfo from '../../components/UserInfo';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';

const AppSidebar = ({ variant = '', position = 'left', ...props }) => {
  const { sidebarTextColor } = useSidebarContext();

  return (
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
  );
};
export default AppSidebar;

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  routesConfig: PropTypes.array,
  toggleNavCollapsed: PropTypes.func,
  isNavCollapsed: PropTypes.bool,
};
