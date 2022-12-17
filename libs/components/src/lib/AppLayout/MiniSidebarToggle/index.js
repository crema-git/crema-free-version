import React, {useEffect, useState} from 'react';
import AppSidebar from './AppSidebar';
import AppContentView from '../../AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import MiniSidebarToggleWrapper from './MiniSidebarToggleWrapper';
import AppFixedFooter from './AppFixedFooter';
import {useLayoutContext} from "@crema/context/LayoutContextProvider";
import {LayoutType} from '@crema/constants/AppEnums';
import MiniSidebarToggleContainer from './MiniSidebarToggleContainer';
import {useLocation} from 'react-router-dom';

const MiniSidebarToggle = () => {
  const {pathname} = useLocation();
  const [isCollapsed, setCollapsed] = useState(false);
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const {footer, layoutType, headerType, footerType} = useLayoutContext();

  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <MiniSidebarToggleContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <MiniSidebarToggleWrapper
        className={clsx('miniSidebarToggleWrapper', {
          'mini-sidebar-collapsed': isCollapsed,
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
          appMainFixedHeader: headerType === 'fixed',
        })}
      >
        <AppSidebar
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />
        <Box className='mainContent'>
          <AppHeader
            setCollapsed={setCollapsed}
            isCollapsed={isCollapsed}
            toggleNavCollapsed={toggleNavCollapsed}
          />
          <AppContentView />
          <AppFixedFooter />
        </Box>
        <AppThemeSetting />
      </MiniSidebarToggleWrapper>
    </MiniSidebarToggleContainer>
  );
};

export default MiniSidebarToggle;
